'use client';

import { useScrollProgress } from '@/lib/hooks/useScrollProgress';

/**
 * Composant de barre de progression du scroll (style Apple)
 * Discrète et élégante, en haut de la page
 */
export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-transparent pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-green-primary via-green-light to-green-primary transition-all duration-150 ease-out"
        style={{
          width: `${progress * 100}%`,
          transform: 'scaleX(1)',
          transformOrigin: 'left',
        }}
      />
    </div>
  );
}
