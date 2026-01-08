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
          {/* Mockup de téléphone */}
          <div
            className={`relative w-[280px] h-[560px] mx-auto ${
              shadow ? 'shadow-elevated' : ''
            }`}
          >
            {/* Cadre du téléphone */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-2">
              {/* Écran */}
              <div className="w-full h-full bg-white dark:bg-[#231212] rounded-[2.5rem] overflow-hidden relative">
                {/* Notch (encoche) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#231212] dark:bg-white rounded-b-2xl z-10" />
                
                {/* Capture d'écran */}
                <div className="w-full h-full relative p-2">
                  <div className="w-full h-full relative scale-90">
                    <Image
                      src={image}
                      alt={`${appName} screenshot ${index + 1}`}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 280px, 280px"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
