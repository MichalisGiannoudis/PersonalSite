'use client'

import { useEffect, useState } from 'react';
import { WarpContainer } from './warpContainer.component';
import Image from 'next/image';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showWarpContainer, setShowWarpContainer] = useState(false);

  useEffect(() => {
    const bioSection = document.getElementById('bio-section');
    let bioSectionPosition = 0;
    
    if (bioSection) {
      bioSectionPosition = bioSection.offsetTop;
    }

    const toggleVisibility = () => {
      if (window.scrollY >= bioSectionPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    toggleVisibility();
    window.addEventListener('hashupdate', toggleVisibility);
    window.addEventListener('scroll', toggleVisibility, { passive: true });

    return () => {
      window.removeEventListener('hashupdate', toggleVisibility);
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTopSlowly = () => {
    const startPosition = window.pageYOffset;
    const startTime = performance.now();
    
    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const scrollPosition = Math.max(0, startPosition * (1 - elapsedTime / 1000));
      window.scrollTo(0, scrollPosition);
      
      if (elapsedTime < 1000) {
        requestAnimationFrame(animateScroll);
      }
    };
    
    requestAnimationFrame(animateScroll);
  };

  const handleBackToTop = () => {
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
      scrollToTopSlowly();
    } else {
      setShowWarpContainer(true);
      
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
          setShowWarpContainer(false);
        }, 1000);
      }, 1500);
    }
  };

  return (
    <>
      <button onClick={handleBackToTop}
        className={`fixed bottom-6 right-6 bg-purple-700/40 hover:bg-purple-700 rounded-full p-3 shadow-lg transition-all duration-300 z-10 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`} aria-label="Back to top">
        <Image src='/ships/millenium-falcon.png' alt='backShip' width={25} height={25} className="rotate-180"/>
      </button>
      
      <WarpContainer isOpen={showWarpContainer}/>
    </>
  );
};
