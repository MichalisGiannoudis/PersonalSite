'use client';

import { frontendSkills, coreSkills, backendSkills} from "@/types/skills"
import { useState, useEffect } from "react";

export const Skills2 = () => {
    
    const [frontSystmeInfo, setFrontSystemInfo] = useState<boolean>(false);
    const [coreSystmeInfo, setCoreSystemInfo] = useState<boolean>(false);
    const [backSystmeInfo, setBackSystemInfo] = useState<boolean>(false);
    const [randomBool, setRandomBool] = useState<boolean>(false);

    const startRandomBoolInterval = (intervalMs: number = 2000, probability: number = 0.3) => {
        const interval = setInterval(() => {
            let prop = Math.random() < probability;
            setRandomBool(prop);
        }, intervalMs);
        
        return interval;
    };

    useEffect(() => {
        const interval = startRandomBoolInterval(3000, 0.3);
        
        return () => {
            clearInterval(interval);
        };
    }, []);
    
    return (
        <>
            <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-6">
                    <p className="text-4xl font-bold mx-4 whitespace-nowrap">My Universe</p>
                </div>
                <div className="flex items-center justify-center mb-6">
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-white/40"></div>
                    <p className="text-2xl font-bold mx-4 whitespace-nowrap">Skills</p>
                    <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-white/40"></div>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-60 lg:min-h-[500px]">

                <div className="relative flex items-center justify-center lg:mb-30" onMouseEnter={() => setFrontSystemInfo(true)} onMouseLeave={() => setFrontSystemInfo(false)}>
                    
                    { !frontSystmeInfo && <div className="flex items-center justify-center z-10 w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-2xl shadow-yellow-400/50">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse">
                        </div>
                    </div> }

                    { frontSystmeInfo && <div className="flex items-center justify-center w-50 h-20 bg-gradient-to-br from-gray-700/30 to-indigo-800/30 rounded-lg shadow-xl shadow-purple-400/50 border-1 border-indigo-500/30">
                        <p className={`text-sm text-center glitch-effect ${randomBool ? 'text-red-500' : 'text-white'}`} data-text="System: Core Skills">
                            {randomBool ? "System: UNKNOWN" : "System: FrontEnd Skills"} <br/> 
                            {randomBool ? "Status: ERROR 404" : "Status: Stable"}
                        </p>
                    </div> }
                    
                    <div className="absolute w-80 h-80 border-2 border-blue-500/30 rounded-full animate-spin-slow">
                        {frontendSkills.map((skill, index) => {
                            const angle = (index * 360) / frontendSkills.length;
                            const radius = 150;
                            const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                            const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                            
                            return (
                                <div key={skill.name} className="absolute w-12 h-12 group animate-spin"
                                    style={{left: `calc(50% + ${x}px - 24px)`, top: `calc(50% + ${y}px - 24px)`, animation: 'spin-slow 60s linear infinite reverse'}}>
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-blue-300 shadow-lg shadow-blue-500/50 flex items-center justify-center hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                                        <img src={skill.icon} className="w-8 h-8 relative z-10"/>
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full"></div>
                                    </div>
                                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                                        <span className="text-xs font-medium text-blue-300 bg-gray-900/90 px-2 py-1 rounded whitespace-nowrap shadow-lg">
                                            {skill.name}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                
                <div className="relative flex items-center justify-center" onMouseEnter={() => setCoreSystemInfo(true)} onMouseLeave={() => setCoreSystemInfo(false)}>
                    
                    { !coreSystmeInfo && <div className="flex items-center justify-center z-10 w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-2xl shadow-yellow-400/50">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse">
                        </div>
                    </div> }

                    { coreSystmeInfo && <div className="flex items-center justify-center w-55 h-20 bg-gradient-to-br from-purple-800/30 to-amber-800/30 rounded-lg shadow-xl shadow-indigo-500/50 border-1 border-amber-500/30">
                        <p className={`text-sm  text-center glitch-effect ${randomBool ? 'text-red-500' : 'text-white'}`} data-text="System: Core Skills">
                            {randomBool ? "System: UNKNOWN" : "System: Core Skills"} <br/> 
                            {randomBool ? "Status: ERROR 404" : "Status: Stable"}
                        </p>
                    </div> }

                    <div className="absolute w-100 h-100 border-2 border-purple-500/30 rounded-full animate-spin-reverse-slow">
                        {coreSkills.map((skill, index) => {
                            const angle = (index * 360) / coreSkills.length;
                            const radius = 200;
                            const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                            const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                            
                            return (
                                <div key={skill.name} className="absolute w-10 h-10 group"
                                    style={{left: `calc(50% + ${x}px - 20px)`, top: `calc(50% + ${y}px - 20px)`, animation: 'spin-reverse-slow 55s linear infinite reverse'}}>
                                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-purple-300 shadow-lg shadow-purple-500/50 flex items-center justify-center hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                                        <img src={skill.icon} className="w-6 h-6 relative z-10"/>
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full"></div>
                                    </div>
                                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                                        <span className="text-xs font-medium text-purple-300 bg-gray-900/90 px-2 py-1 rounded whitespace-nowrap shadow-lg">
                                            {skill.name}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="relative flex items-center justify-center lg:-mb-65" onMouseEnter={() => setBackSystemInfo(true)} onMouseLeave={() => setBackSystemInfo(false)}>
                    
                    { !backSystmeInfo && <div className="flex items-center justify-center z-10 w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-2xl shadow-yellow-400/50">
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse">
                        </div>
                    </div> }

                    { backSystmeInfo && <div className="flex items-center justify-center w-55 h-20 bg-gradient-to-br from-amber-700/30 to-indigo-800/30 rounded-lg shadow-xl shadow-purple-400/50 border-1 border-indigo-500/30">
                        <p className={`text-sm text-center glitch-effect ${randomBool ? 'text-red-500' : 'text-white'}`} data-text="System: Core Skills">
                            {randomBool ? "System: UNKNOWN" : "System: BackEnd Skills"} <br/> 
                            {randomBool ? "Status: ERROR 404" : "Status: Stable"}
                        </p>
                    </div> }

                    <div className="absolute w-80 h-80 border-2 border-blue-500/30 rounded-full animate-spin-slow">
                        {backendSkills.map((skill, index) => {
                            const angle = (index * 360) / backendSkills.length;
                            const radius = 150;
                            const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                            const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                            
                            return (
                                <div key={skill.name} className="absolute w-12 h-12 group"
                                    style={{left: `calc(50% + ${x}px - 24px)`, top: `calc(50% + ${y}px - 24px)`, animation: 'spin-slow 60s linear infinite reverse'}}>
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-blue-300 shadow-lg shadow-blue-500/50 flex items-center justify-center hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                                        <img src={skill.icon} className="w-8 h-8 relative z-10"/>
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full"></div>
                                    </div>
                                    <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
                                        <span className="text-xs font-medium text-blue-300 bg-gray-900/90 px-2 py-1 rounded whitespace-nowrap shadow-lg">
                                            {skill.name}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}