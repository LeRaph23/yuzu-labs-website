'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface AppMockupProps {
  images: string[]; // Array de chemins vers les screenshots
  appName?: string;
  rotation?: number; // Rotation en degrés (défaut: -8)
  shadow?: boolean; // Afficher l'ombre (défaut: true)
  className?: string;
}

export default function AppMockup({
  images,
  appName = 'App',
  rotation = -8,
  shadow = true,
  className = '',
}: AppMockupProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById(`mockup-${appName}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [appName]);

  return (
    <div id={`mockup-${appName}`} className={`relative ${className}`}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={false}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 30,
            rotate: isVisible ? rotation + index * 2 : rotation,
          }}
          transition={{
            duration: shouldReduceMotion ? 0.3 : 0.6,
            delay: shouldReduceMotion ? 0 : index * 0.1,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="relative"
          style={{
            zIndex: images.length - index,
            marginLeft: index > 0 ? '-60%' : '0',
            marginTop: index > 0 ? '20px' : '0',
          }}
        >
          {/* Screenshot simplifié avec bord iPhone */}
          <div
            className={`relative w-[280px] h-[560px] mx-auto ${
              shadow ? 'shadow-elevated' : ''
            }`}
          >
            <Image
              src={image}
              alt={`${appName} screenshot ${index + 1}`}
              fill
              className="object-cover rounded-[2.5rem] border-4 border-black dark:border-white"
              sizes="(max-width: 768px) 280px, 280px"
              priority={index === 0}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
