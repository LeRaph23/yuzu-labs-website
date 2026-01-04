'use client';

import { useEffect, useRef, useState, RefObject } from 'react';
import { prefersReducedMotion } from '../utils/scrollUtils';

interface UseScrollAnimationOptions {
  threshold?: number; // 0 à 1, quand l'animation se déclenche
  rootMargin?: string; // Margin pour Intersection Observer
  triggerOnce?: boolean; // Animation une seule fois
  disabled?: boolean;
}

interface ScrollAnimationState {
  isVisible: boolean;
  hasBeenVisible: boolean;
  progress: number; // 0 à 1, progression de l'animation
}

/**
 * Hook pour reveal animations au scroll (fade + translateY)
 * Utilise Intersection Observer avec optimisations
 */
export function useScrollAnimation(
  options: UseScrollAnimationOptions = {}
): [RefObject<HTMLDivElement>, ScrollAnimationState] {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -10% 0px',
    triggerOnce = true,
    disabled = false,
  } = options;

  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<ScrollAnimationState>({
    isVisible: false,
    hasBeenVisible: false,
    progress: 0,
  });

  useEffect(() => {
    if (disabled || prefersReducedMotion() || !ref.current) {
      setState({ isVisible: true, hasBeenVisible: true, progress: 1 });
      return;
    }

    const element = ref.current;
    let rafId: number | null = null;
    let scrollHandler: (() => void) | null = null;

    const updateProgress = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // Animation commence quand l'élément arrive à 80% du viewport
      const startPoint = viewportHeight * 0.8;
      const endPoint = viewportHeight * 0.2;

      let progress = 0;
      if (elementTop < startPoint) {
        progress = Math.max(
          0,
          Math.min(1, 1 - (elementTop - endPoint) / (startPoint - endPoint))
        );
      }

      const isVisible = progress > threshold;

      setState((prevState) => {
        const hasBeenVisible = prevState.hasBeenVisible || isVisible;
        return {
          isVisible: triggerOnce ? hasBeenVisible : isVisible,
          hasBeenVisible,
          progress,
        };
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateProgress();
          }
        });
      },
      {
        threshold: [0, threshold, 0.5, 1],
        rootMargin,
      }
    );

    if (!triggerOnce) {
      scrollHandler = () => {
        if (rafId !== null) return;
        rafId = requestAnimationFrame(() => {
          updateProgress();
          rafId = null;
        });
      };
      window.addEventListener('scroll', scrollHandler, { passive: true });
    }

    observer.observe(element);
    updateProgress(); // Initial check

    return () => {
      observer.disconnect();
      if (scrollHandler) {
        window.removeEventListener('scroll', scrollHandler);
      }
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [threshold, rootMargin, triggerOnce, disabled]);

  return [ref, state];
}

/**
 * Hook pour scale on scroll (0.96 → 1.0)
 */
export function useScaleOnScroll(
  options: UseScrollAnimationOptions = {}
): [RefObject<HTMLDivElement>, number] {
  const [ref, state] = useScrollAnimation(options);
  const scale = 0.96 + state.progress * 0.04; // 0.96 → 1.0

  useEffect(() => {
    if (ref.current && !prefersReducedMotion()) {
      ref.current.style.transform = `scale(${scale})`;
      ref.current.style.opacity = state.isVisible ? String(0.7 + state.progress * 0.3) : '0.7';
      ref.current.style.willChange = state.isVisible ? 'transform, opacity' : 'auto';
    }
  }, [scale, state.isVisible, state.progress, ref]);

  return [ref, scale];
}
