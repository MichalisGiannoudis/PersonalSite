export function createWarpStars() {
  const warpStreaks = document.querySelector('.warp-streaks');
  const warpStreaks2 = document.querySelector('.warp-streaks-2');
  
  if (!warpStreaks || !warpStreaks2) return;
  
  warpStreaks.innerHTML = '';
  warpStreaks2.innerHTML = '';
  
  for (let i = 0; i < 150; i++) {
    createStar(warpStreaks, i < 120 ? 'white' : 'rgb(255, 240, 200)');
  }
  
  for (let i = 0; i < 100; i++) {
    createStar(warpStreaks2, i < 70 ? 'rgb(180, 220, 255)' : 'rgb(140, 200, 255)');
  }
}

function createStar(container: Element, color: string) {
  const star = document.createElement('div');
  star.className = 'warp-star';
  const angle = Math.random() * Math.PI * 2;
  const distance = 50 + Math.random() * 50;
  const endX = 50 + Math.cos(angle) * distance;
  const endY = 50 + Math.sin(angle) * distance;
  star.style.setProperty('--end-x', `${endX}%`);
  star.style.setProperty('--end-y', `${endY}%`);
  const sizeVariation = Math.random() < 0.2;
  const size = sizeVariation ? 2 + Math.random() * 3 : 1 + Math.random() * 2;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  const brightnessFactor = 0.9 + Math.random() * 0.2;

  if (color === 'white') {
    const hue = Math.random() < 0.7 ? 0 : 45;
    star.style.background = `hsl(${hue}, ${Math.random() < 0.8 ? 0 : 30}%, ${95 * brightnessFactor}%)`;
  } else {
    star.style.background = color;
  }
  
  const duration = 1 + Math.random() * 3;
  star.style.animationDuration = `${duration}s`;
  const delay = Math.random() * 2;
  star.style.animationDelay = `${delay}s`;

  if (Math.random() < 0.3) {
    star.classList.add('with-trail');
  }
  
  if (Math.random() < 0.15) {
    if (Math.random() < 0.33) {
      star.classList.add('blue-tint');
    } else if (Math.random() < 0.5) {
      star.classList.add('yellow-tint');
    } else {
      star.classList.add('purple-tint');
    }
  }
  
  container.appendChild(star);
}

export function initWarpStarsEffect() {
  createWarpStars();
  const intervalId = setInterval(createWarpStars, 4000);
  const flickerInterval = setInterval(() => {
    const stars = document.querySelectorAll('.warp-star');
    const starsToFlicker = Math.floor(stars.length * 0.1);
      
    for (let i = 0; i < starsToFlicker; i++) {
      const randomIndex = Math.floor(Math.random() * stars.length);
      const star = stars[randomIndex] as HTMLElement;
      
      if (star) {
        const originalOpacity = star.style.opacity || '0.8';
        const originalSize = star.style.width;
        
        star.style.opacity = '1';
        star.style.width = `${parseFloat(originalSize) * 1.3}px`;
        star.style.height = `${parseFloat(originalSize) * 1.3}px`;
        star.style.boxShadow = '0 0 4px 2px rgba(255, 255, 255, 0.7)';
        
        setTimeout(() => {
          if (star) {
            star.style.opacity = originalOpacity;
            star.style.width = originalSize;
            star.style.height = originalSize;
            star.style.boxShadow = '';
          }
        }, 100 + Math.random() * 200);
      }
    }
  }, 300);
  
  return () => {
    clearInterval(intervalId);
    clearInterval(flickerInterval);
  };
}