'use client'

import React, { useEffect, useRef, useState } from 'react';
import { ContainerWarpBackground } from './containerWarpBackground.component';
import '@/styles/warpContainer.css';

export const WarpContainer = ({ isOpen }: { isOpen: boolean }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.classList.add('warp-container-active');
    } else {
      document.body.classList.remove('warp-container-active');
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 800);
      return () => clearTimeout(timer);
    }

    return () => {
      document.body.classList.remove('warp-container-active');
    };
  }, [isOpen]);

  useEffect(() => {
    if (containerRef.current) {
      if (isOpen) {
        containerRef.current.classList.add('warp-container-enter');
        void containerRef.current.offsetWidth;
        containerRef.current.classList.remove('warp-container-enter');
        containerRef.current.classList.add('warp-container-enter-active');
      } else if (containerRef.current.classList.contains('warp-container-enter-active')) {
        containerRef.current.classList.remove('warp-container-enter-active');
      }
    }
  }, [isOpen]);

  if (!isVisible){
    return null;
  }

  return (
    <div className={`warp-container-overlay ${!isOpen ? 'warp-container-overlay-exit' : ''}`}>
      <div ref={containerRef} className={`warp-container-content ${!isOpen ? 'warp-container-content-exit' : ''}`}>
        <div className="w-full h-full relative">
          <ContainerWarpBackground />
          <div className="absolute inset-0 flex justify-center top-[20%] z-10">
            <p className="text-3xl font-bold text-center text-white">Warping into space</p>
          </div>
        </div>
      </div>
    </div>
  );
};
