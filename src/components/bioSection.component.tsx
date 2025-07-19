import { TimeLine } from "./timeline.component";
import { Skills } from "./skills.component";
import { bio } from "../content/bio";

export const BioSection = () => {
    return (
        <div id="bio-section" className="min-h-screen bg-black text-white py-16 px-8 relative">
            <div className="stars-background">
                <div className="blinking-stars"></div>
                <div className="blinking-stars-2"></div>
                <div className="blinking-stars-3"></div>
            </div>
            
            <div className="w-full lg:w-[85%] mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="cursor-default text-4xl font-bold mb-6">So, who is Mike?</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    <div className="space-y-8">
                        <div className="bg-slate-900/20 rounded-xl p-8 border border-gray-700/50">
                            <p className="cursor-default text-lg leading-relaxed mb-8">{bio.bioUpper}</p>
                            <p className="cursor-default text-lg leading-relaxed mb-8">{bio.bioLower}</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center space-y-8">
                        <div className="relative w-96 h-96 overflow-hidden">
                            <div className="absolute top-8 left-8 w-80 h-80  rounded-full flex items-center justify-center">
                                <img src="/bio-image.png" alt="Mike" className="w-75 h-75 w-fit rounded-full " />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                            <div className="bg-slate-900/20 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                                <div className="cursor-default text-3xl font-bold text-blue-400 mb-2">3+</div>
                                <div className="cursor-default text-sm text-gray-300">Years Experience</div>
                            </div>
                            <div className="cursor-default bg-slate-900/20 rounded-xl p-6 border border-gray-700/50 text-center">
                                <div className="cursor-default text-3xl font-bold text-purple-400 mb-2">4+</div>
                                <div className="cursor-default text-sm text-gray-300">Projects Running /<br/>Completed</div>
                            </div>
                        </div>
                    </div>
                </div>
                <TimeLine />
                <Skills />
            </div>
        </div>        
    );
}