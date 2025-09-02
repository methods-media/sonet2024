'use client';
import { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
      setScrollProgress(progress);
    };

      // Use requestAnimationFrame for smoother performance
      let ticking = false;
      const handleScroll = () => {
          if (!ticking) {
              requestAnimationFrame(() => {
                  updateScrollProgress();
                  ticking = false;
              });
              ticking = true;
          }
      };

      // Add scroll event listener with passive option for better performance
      window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial calculation
    updateScrollProgress();

    // Cleanup
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <div className="fixed bottom-0 left-0 z-[1000] w-full h-1">
      <div 
              className="h-full bg-red-500"
              style={{
                  width: `${scrollProgress}%`,
                  transition: 'none' // Remove transition for immediate response
              }}
      />
    </div>
  );
};

export default ScrollProgress;
