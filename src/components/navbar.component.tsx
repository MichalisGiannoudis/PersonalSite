'use client';

import { useState } from 'react';

export const NavBar = () => {
  const [activeSection, setActiveSection] = useState<number>(0);

  const scrollTo = (value: string) => {
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSectionClick = (sectionIndex: number, sectionId: string) => {
    setActiveSection(sectionIndex);
    scrollTo(sectionId);
  };

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 pointer-events-auto bg-gray-900/40 md:bg-gray-900/40 w-[300px] md:w-[400px] h-16 rounded-2xl md:rounded-4xl shadow-lg backdrop-blur-md drop-shadow-xl z-50">
        <div className="grid grid-cols-3 h-full">
          <div className={`absolute top-1 left-1 h-7/8 w-[calc(33.333%-0.15rem)] bg-purple-700/50 rounded-3xl transition-all duration-700 ease-in-out ${
              activeSection === 0 ? 'translate-x-0' : 
              activeSection === 1 ? 'translate-x-full' : 
              'translate-x-[200%]'
            }`}
          />
          
          <div className="cursor-pointer group h-full flex items-center justify-center relative z-10">
              <p onClick={() => handleSectionClick(0, 'bio-section')} 
                className={`text-lg font-bold relative overflow-hidden flex justify-center items-center cursor-pointer h-full transition-colors duration-700 ${
                  activeSection === 0 ? 'text-white' : 'text-white'
                }`}>
                <span className="inline-block from-center-vert transition-transform duration-1000 ease-in-out">
                About me
                </span>
            </p>
        </div>
        <div className="cursor-pointer group h-full flex items-center justify-center relative z-10">
            <p onClick={() => handleSectionClick(1, 'services-section')} 
                className={`text-lg font-bold relative overflow-hidden flex justify-center items-center cursor-pointer h-full transition-colors duration-700 ${
                  activeSection === 1 ? 'text-white' : 'text-white'
                }`}>
                <span className="inline-block from-center-vert transition-transform duration-1000 ease-in-out">
                Services
                </span>
            </p>
        </div>
        <div className="cursor-pointer group h-full flex items-center justify-center relative z-10">
            <p onClick={() => handleSectionClick(2, 'contact-section')} 
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
