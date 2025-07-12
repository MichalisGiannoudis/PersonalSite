'use client'

import { useEffect, useRef } from 'react';

export const useScrollHashUpdate = () => {
  const isNavigating = useRef(false);

  useEffect(() => {
    const updateHash = () => {
      if (isNavigating.current) return;

      const sections = [
        { id: 'bio-section', hash: '#bio' },
        { id: 'portfolio-section', hash: '#portfolio' },
        { id: 'contact-section', hash: '#contact' }
      ];

      const scrollPosition = window.scrollY + (window.innerHeight * 0.3);
      let currentSection = '';

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            currentSection = section.hash;
            break;
          }
        }
      }

      if (currentSection && window.location.hash !== currentSection) {
        history.replaceState(null, '', currentSection);
        window.dispatchEvent(new Event('hashupdate'));
      }
        else if (window.scrollY < 300 && window.location.hash && !currentSection) {
        history.replaceState(null, '', window.location.pathname);
        window.dispatchEvent(new Event('hashupdate'));
      }
    };

    const handleNavigationStart = () => {
      isNavigating.current = true;
      setTimeout(() => {
        isNavigating.current = false;
      }, 1000);
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateHash();
          ticking = false;
        });
        ticking = true;
      }
    };

    setTimeout(updateHash, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('navigationstart', handleNavigationStart);

    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionMap: { [key: string]: string } = {
          '#bio': 'bio-section',
          '#portfolio': 'portfolio-section',
          '#contact': 'contact-section'
        };

        const sectionId = sectionMap[hash];
        if (sectionId) {
          isNavigating.current = true;
          setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
            setTimeout(() => {
              isNavigating.current = false;
            }, 1000);
          }, 100);
        }
      }
    };

    handleHashNavigation();
    window.addEventListener('popstate', handleHashNavigation);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handleHashNavigation);
      window.removeEventListener('navigationstart', handleNavigationStart);
    };
  }, []);
};
