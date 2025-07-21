'use client'
import { episodes } from "@/content/episodes";
import { useEffect, useState } from "react";
import "../styles/starWars.css";

export const StarWars = ({isPlaying, onClose}: {isPlaying:boolean, onClose?: () => void}) => {

    const[play , setToPlay] = useState<boolean>(false);
    const[showInstructions, setShowInstructions] = useState<boolean>(false);

    useEffect(() => {
        setToPlay(isPlaying);
        if (isPlaying && onClose) {
            setShowInstructions(true);
            const timer = setTimeout(() => {
                setShowInstructions(false);
            }, 4000);
            return () => clearTimeout(timer);
        }
    }, [isPlaying, onClose]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && onClose) {
                onClose();
            }
        };

        if (isPlaying) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isPlaying, onClose]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none"
             style={{ perspective: '600px', perspectiveOrigin: '50% 100%' }}>
            {/* Close Button */}
            {onClose && (
                <button
                    onClick={onClose}
                    className="star-wars-close-btn absolute top-6 right-6 z-30 pointer-events-auto text-white rounded-full w-12 h-12 flex items-center justify-center"
                    aria-label="Close Star Wars experience"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
            
            {/* Instructions */}
            {onClose && showInstructions && (
                <div className="absolute top-6 left-6 z-30 pointer-events-none text-white/80 text-sm bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20 animate-fade-in-crawl">
                    Press <kbd className="bg-white/20 px-2 py-1 rounded text-xs">ESC</kbd> or click ✕ to return to timeline
                </div>
            )}
            
            <div className={`star-wars-crawl-container ${play ? 'playing' : ''}`}>
                <div className="stars-bg"></div>
                <div className="stars-1"></div>
                <div className="stars-2"></div>
                <div className="stars-3"></div>
                <div className="star-wars-crawl-text">
                    {episodes.map((episode, index) => (
                        <div key={index} className="episode-section">
                            <div className="episode-title">
                                {episode.title}
                            </div>
                            <div className="episode-subtitle">
                                {episode.company} • {episode.period}
                            </div>
                            <div className="episode-story">
                                {episode.story.map((paragraph, pIndex) => (
                                    <p key={pIndex} className={pIndex === 0 ? "opening-line" : "story-paragraph"}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            {index < episodes.length - 1 && (
                                <div className="episode-separator">
                                    <div className="separator-line"></div>
                                    <div className="separator-star">✦</div>
                                    <div className="separator-line"></div>
                                </div>
                            )}
                        </div>
                    ))}
                    <div className="final-message">
                        The saga continues...
                    </div>
                </div>
            </div>
        </div>
    )
}