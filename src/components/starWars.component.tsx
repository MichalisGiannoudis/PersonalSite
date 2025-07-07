'use client'
import { episodes } from "@/types/timelineEpisodes";
import { useEffect, useState } from "react";
import "../styles/starWars.css";

export const StarWars = ({isPlaying}: {isPlaying:boolean}) => {

    const[play , setToPlay] = useState<boolean>(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        
        if (isPlaying) {
            timer = setTimeout(() => {
                setToPlay(true);
            }, 0);
        } else {
            setToPlay(false);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };

    }, [isPlaying]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none"
             style={{ perspective: '600px', perspectiveOrigin: '50% 100%' }}>
            <div className={`star-wars-crawl-container ${play ? 'playing' : ''}`}>
                <div className="stars-bg"></div>
                <div className="stars-1"></div>
                <div className="stars-2"></div>
                <div className="stars-3"></div>
                <div className="star-wars-crawl-text">
                    {episodes.map((episode, index) => (
                        <div key={index} className="episode-section">
                            {/* Episode Title */}
                            <div className="episode-title">
                                {episode.title}
                            </div>
                            
                            {/* Company and Period */}
                            <div className="episode-subtitle">
                                {episode.company} • {episode.period}
                            </div>
                            
                            {/* Story Content */}
                            <div className="episode-story">
                                {episode.story.map((paragraph, pIndex) => (
                                    <p key={pIndex} className={pIndex === 0 ? "opening-line" : "story-paragraph"}>
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                            
                            {/* Episode Separator */}
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