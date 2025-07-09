'use client'

import React, { useState } from "react";
import { StarWars } from "./starWars.component";

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
        <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-700/50 relative min-h-[800px] overflow-hidden">
            <div className="justify-center text-center">
                <h3 className="text-3xl font-bold mb-4 text-center cursor-default">My Journey</h3>
                <p className="cursor-pointer mb-4" onClick={handleVisualizeClick}>( Visualized )</p>
            </div>
            
            {visualize && (
                <div className={`absolute inset-0 flex items-center justify-center animate-fade-in-crawl`}>
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

            {/* Timeline container - shows when not visualizing */}
            {!visualize && (
                <div className="relative h-full">
                    {/* The vertical line that shows during idle, fading, and shrinking phases */}
                    {['idle', 'fading', 'shrinking'].includes(animationStep) && (
                        <div 
                            className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full h-full ${animationStep === 'shrinking' ? 'animate-shrink-line' : ''}`}>
                        </div>
                    )}

                    {/* The timeline boxes, which fade out - only show during idle and fading */}
                    {['idle', 'fading'].includes(animationStep) && (
                        <div className={`space-y-12 ${animationStep === 'fading' ? 'animate-fade-out-box' : ''}`}>
                        {/* Experience Box 1 */}
                        <div className="relative flex items-center">
                            <div className="flex-1 text-right pr-8">
                                <div className="bg-slate-900/70 rounded-lg p-6 border border-slate-700/50 relative">
                                    <div className="flex items-center gap-6">
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold mb-2 text-purple-800">Pircel</h4>
                                            <p className="text-lg leading-relaxed mb-3">Full Stack Software Engineer</p>
                                            <span className="text-sm text-gray-400">May 2025 - Present</span>
                                        </div>
                                        <div className="w-px h-22 bg-gradient-to-b from-purple-800 to-indigo-700"></div>
                                        <div className="flex-1">
                                            <div className="space-y-2">
                                                <div className="h-1 bg-purple-500 rounded-full w-4/5"></div>
                                                <div className="h-1 bg-purple-500 rounded-full w-2/3"></div>
                                                <div className="h-1 bg-purple-500 rounded-full w-3/4"></div>
                                                <div className="h-1 bg-purple-500 rounded-full w-1/2"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                            <div className="flex-1 pl-8"></div>
                        </div>

                        {/* Experience Box 2 */}
                        <div className="relative flex items-center">
                            <div className="flex-1 pr-8"></div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                            <div className="flex-1 pl-8">
                                <div className="bg-slate-900/70 rounded-lg p-6 border border-slate-700/50 relative">
                                    <div className="flex items-center gap-6">
                                        <div className="flex-1">
                                            <div className="space-y-2">
                                                <div className="h-1 bg-purple-500 rounded-full w-4/5"></div>
                                                <div className="h-1 bg-purple-500 rounded-full w-2/3"></div>
                                                <div className="h-1 bg-purple-500 rounded-full w-3/4"></div>
                                                <div className="h-1 bg-purple-500 rounded-full w-1/2"></div>
                                            </div>
                                        </div>
                                        <div className="w-px h-22 bg-gradient-to-b from-purple-800 to-indigo-700"></div>
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold mb-2 text-purple-800">ORamaVR</h4>
                                            <p className="text-lg leading-relaxed mb-3">Software Engineer</p>
                                            <span className="text-sm text-gray-400">May 2023 - Jun 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Experience Box 3 */}
                        <div className="relative flex items-center">
                            <div className="flex-1 text-right pr-8">
                                <div className="bg-slate-900/70 rounded-lg p-6 border border-slate-700/50 relative">
                                    <div className="flex items-center gap-6">
                                        <div className="flex-1">
                                            <h4 className="text-xl font-bold mb-2 text-purple-800">Universe Corse</h4>
                                            <p className="text-lg leading-relaxed mb-3">Junior Software Engineer</p>
                                            <span className="text-sm text-gray-400">Feb 2022 - Apr 2023</span>
                                        </div>
                                        <div className="w-px h-22 bg-gradient-to-b from-purple-800 to-indigo-700"></div>
                                        <div className="flex-1">
                                            <div className="space-y-2">
                                                <div className="h-1 bg-blue-500 rounded-full w-2/3"></div>
                                                <div className="h-1 bg-blue-500 rounded-full w-4/5"></div>
                                                <div className="h-1 bg-blue-500 rounded-full w-1/2"></div>
                                                <div className="h-1 bg-blue-500 rounded-full w-3/4"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-gray-900"></div>
                            <div className="flex-1 pl-8"></div>
                        </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}