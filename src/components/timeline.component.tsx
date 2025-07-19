'use client'

import React, { useState } from "react";
import { StarWars } from "./starWars.component";
import { ExperienceCard } from "./experienceCard.component";
import { episodes } from "@/content/episodes";

export const TimeLine = () => {
    
    const [visualize, setVisualize] = useState<boolean>(false);
    const [animationStep, setAnimationStep] = useState<'idle' | 'fading' | 'shrinking' | 'expanding' | 'separating'>('idle');

    const handleVisualizeClick = () => {
        if (visualize) {
            setVisualize(false);
            setAnimationStep('idle');
        } else {
            setAnimationStep('fading');
            setTimeout(() => {
                setAnimationStep('shrinking');
                setTimeout(() => {
                    setAnimationStep('expanding');
                    setTimeout(() => {
                        setAnimationStep('separating');
                        setTimeout(() => {
                            setVisualize(true);
                        }, 0);
                    }, 300);
                }, 400);
            }, 500);
        }
    };

    return (
        <>
            <div className="text-center mb-10">
                <div className="flex items-center justify-center mb-6">
                    <p className="text-4xl font-bold mx-4 whitespace-nowrap cursor-default">My Journey</p>
                </div>
                <div className="flex items-center justify-center mb-6">
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-white/40"></div>
                    <p onClick={handleVisualizeClick} className="text-2xl font-bold mx-4 whitespace-nowrap cursor-pointer">Experience</p>
                    <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-white/40"></div>
                </div>
            </div>
            <div className={`p-8 relative ${visualize ? 'min-h-[800px]' : 'min-h-[1200px]'} min-h-[1400px] md:min-h-[650px] lg:min-h-[800px] overflow-hidden`}>            
                {visualize && (
                    <div className={`absolute h-155 inset-0 flex items-center justify-center animate-fade-in-crawl`}>
                        <StarWars isPlaying={visualize}/>
                    </div>
                )}

                {animationStep === 'expanding' && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 h-1 bg-white animate-expand-horizontal"></div>
                )}

                {animationStep === 'separating' && (
                    <>
                        <div className="absolute top-1/2 left-[5%] w-[90%] h-1 bg-white animate-move-line-up"></div>
                        <div className="absolute top-1/2 left-[5%] w-[90%] h-1 bg-white animate-move-line-down"></div>
                    </>
                )}

                {!visualize && (
                    <div className="flex lg:justify-center relative">
                        {['idle', 'fading', 'shrinking'].includes(animationStep) && (
                            <div className={`h-320 md:h-210 lg:h-155 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full ${animationStep === 'shrinking' ? 'animate-shrink-line' : ''}`}></div>
                        )}
                        {['idle', 'fading'].includes(animationStep) && (
                            <div className={`absolute inset-0 space-y-12 ${animationStep === 'fading' ? 'animate-fade-out-box' : ''}`}>
                                {episodes.map((episode, index) => (
                                    <div key={episode.company} className="flex relative items-center">
                                        {index % 2 === 0 ? (
                                            <>
                                                <ExperienceCard episode={episode} position="left" />
                                                <div className="absolute ml-0.5 lg:ml-0 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                                                <div className="flex-1 lg:pl-4"></div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex-1 lg:pr-4"></div>
                                                <div className="absolute ml-0.5 lg:ml-0 lg:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                                                <ExperienceCard episode={episode} position="right" />
                                            </>
                                        )}
                                    </div>
                                    
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}