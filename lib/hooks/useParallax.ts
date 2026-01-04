'use client';

import { useEffect, useRef, useState, RefObject } from 'react';
import { prefersReducedMotion, throttle, clamp } from '../utils/scrollUtils';

interface UseParallaxOptions {
  speed?: number; // -1 à 1, où 0.5 = déplace à 50% de la vitesse du scroll
  enabled?: boolean;
  maxOffset?: number; // Décalage maximum en px
}

/**
 * Hook pour effets parallax subtils et optimisés
 * Utilise transform pour GPU acceleration
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options: UseParallaxOptions = {}
): RefObject<T> {
  const { speed = 0.5, enabled = true, maxOffset = 20 } = options;
  const ref = useRef<T>(null);
  const [transform, setTransform] = useState(0);

  useEffect(() => {
    if (!enabled || prefersReducedMotion()) {
      setTransform(0);
      return;
    }

    let rafId: number | null = null;

    const updateParallax = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const elementTop = rect.top + window.scrollY;
      const elementHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calcule la position relative de l'élément dans le viewport
      const elementCenter = elementTop + elementHeight / 2;
      const viewportCenter = scrollY + viewportHeight / 2;
      const distanceFromCenter = viewportCenter - elementCenter;

      // Applique le parallax avec limites
      const offset = distanceFromCenter * speed * 0.1;
      const clampedOffset = clamp(offset, -maxOffset, maxOffset);

      setTransform(clampedOffset);
    };

    const handleScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        updateParallax();
        rafId = null;
      });
    };

    updateParallax();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [speed, enabled, maxOffset]);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.transform = `translateY(${transform}px)`;
      ref.current.style.willChange = enabled && !prefersReducedMotion() ? 'transform' : 'auto';
    }
  }, [transform, enabled]);

  return ref;
}
