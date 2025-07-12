'use client';

import { useState, useEffect, useCallback } from 'react';

export const NavBar = () => {
  const [activeSection, setActiveSection] = useState<number>(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const throttle = useCallback((func: Function, limit: number) => {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSection = document.querySelector('[data-hero-section]') as HTMLElement;
      const heroHeight = heroSection ? heroSection.offsetHeight : 800;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      }
      else if (currentScrollY > lastScrollY && currentScrollY > heroHeight * 0.7) {
        setIsVisible(false);
      }
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    const throttledHandleScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [lastScrollY, throttle]);

  useEffect(() => {
    const updateActiveSection = () => {
      const hash = window.location.hash;
      switch (hash) {
        case '#bio':
          setActiveSection(0);
          break;
        case '#portfolio':
          setActiveSection(1);
          break;
        case '#contact':
          setActiveSection(2);
          break;
        default:
          if (window.scrollY < 200) {
            setActiveSection(-1);
          }
          break;
      }
    };

    updateActiveSection();

    window.addEventListener('hashchange', updateActiveSection);
    window.addEventListener('popstate', updateActiveSection);
    window.addEventListener('hashupdate', updateActiveSection);

    return () => {
      window.removeEventListener('hashchange', updateActiveSection);
      window.removeEventListener('popstate', updateActiveSection);
      window.removeEventListener('hashupdate', updateActiveSection);
    };
  }, []);

  const scrollTo = (value: string) => {
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionClick = (sectionIndex: number, sectionId: string, hash: string) => {
    setActiveSection(sectionIndex);
    window.dispatchEvent(new Event('navigationstart'));
    scrollTo(sectionId);
    history.pushState(null, '', hash);
  };

  return (
    <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 pointer-events-auto bg-gray-900/40 md:bg-gray-900/40 w-[300px] md:w-[400px] h-16 rounded-2xl md:rounded-4xl shadow-lg backdrop-blur-md drop-shadow-xl z-50 transition-all duration-700 ease-out ${
      isVisible 
        ? 'translate-y-0 opacity-100' 
        : '-translate-y-20 opacity-0'
    }`}>
        <div className="grid grid-cols-3 h-full">
          <div className={`absolute top-1 left-1 h-7/8 w-[calc(33.333%-0.15rem)] bg-purple-700/50 rounded-3xl transition-all duration-700 ease-in-out ${
              activeSection === -1 ? 'opacity-0' :
              activeSection === 0 ? 'translate-x-0 opacity-100' : 
              activeSection === 1 ? 'translate-x-full opacity-100' : 
              'translate-x-[200%] opacity-100'
            }`}
          />
          
          <div className="cursor-pointer group h-full flex items-center justify-center relative z-10">
              <p onClick={() => handleSectionClick(0, 'bio-section', '#bio')} 
                className={`text-lg font-bold relative overflow-hidden flex justify-center items-center cursor-pointer h-full transition-colors duration-700 ${
                  activeSection === 0 ? 'text-white' : 'text-white'
                }`}>
                <span className="inline-block from-center-vert transition-transform duration-1000 ease-in-out">
                  About me
                </span>
            </p>
        </div>
        <div className="cursor-pointer group h-full flex items-center justify-center relative z-10">
            <p onClick={() => handleSectionClick(1, 'portfolio-section', '#portfolio')} 
                className={`text-lg font-bold relative overflow-hidden flex justify-center items-center cursor-pointer h-full transition-colors duration-700 ${
                  activeSection === 1 ? 'text-white' : 'text-white'
                }`}>
                <span className="inline-block from-center-vert transition-transform duration-1000 ease-in-out">
                  Portfolio
                </span>
            </p>
        </div>
        <div className="cursor-pointer group h-full flex items-center justify-center relative z-10">
            <p onClick={() => handleSectionClick(2, 'contact-section', '#contact')} 
                className={`text-lg font-bold relative overflow-hidden flex justify-center items-center cursor-pointer h-full transition-colors duration-700 ${
                  activeSection === 2 ? 'text-white' : 'text-white'
                }`}>
                <span className="inline-block from-center-vert transition-transform duration-1000 ease-in-out">
                  Contact
                </span>
            </p>
        </div>
        </div>
    </div>
  );
}
