import { ProjectCard } from "./projectCard.component";
import { projects } from "@/content/projects"

export const Portfolio = () => {
    return (
        <div id="portfolio-section" className=" bg-black text-white py-16 px-8 relative">
            <div className="stars-background">
                <div className="blinking-stars"></div>
                <div className="blinking-stars-2"></div>
                <div className="blinking-stars-3"></div>
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center mb-6">
                        <p className="text-4xl font-bold mx-4 whitespace-nowrap">My Fleet</p>
                    </div>
                    <div className="flex items-center justify-center mb-6">
                        <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-white/40"></div>
                        <p className="text-2xl font-bold mx-4 whitespace-nowrap">Portfolio</p>
                        <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-white/40"></div>
                    </div>
                </div>
                <div className="hidden lg:grid grid-cols-5 gap-6 mb-12">
                    <div className="group relative bg-gray-900/20 border border-gray-700/50 rounded-lg p-6 text-center hover:bg-gradient-to-br hover:from-blue-800/60 hover:to-blue-600/60 hover:border-blue-400/50 transition-all duration-300 cursor-pointer">
                        <div className="text-lg font-bold text-white mb-2">Start</div>
                        <div className="text-sm text-blue-200">Foundation</div>
                        <div className="text-xs text-blue-100/80 mt-1">Plan & Research</div>
                    </div>
                    <div className="group relative bg-gray-900/20 border border-gray-700/50 rounded-lg p-6 text-center hover:bg-gradient-to-br hover:from-green-800/60 hover:to-green-600/60 hover:border-green-400/50 transition-all duration-300 cursor-pointer">
                        <div className="text-lg font-bold text-white mb-2">Phase 2</div>
                        <div className="text-sm text-green-200">Development</div>
                        <div className="text-xs text-green-100/80 mt-1">Design</div>
                    </div>
                    <div className="group relative bg-gray-900/20 border border-gray-700/50 rounded-lg p-6 text-center hover:bg-gradient-to-br hover:from-purple-800/60 hover:to-purple-600/60 hover:border-purple-400/50 transition-all duration-300 cursor-pointer">
                        <div className="text-lg font-bold text-white mb-2">Phase 3</div>
                        <div className="text-sm text-purple-200">Deployment</div>
                        <div className="text-xs text-purple-100/80 mt-1">Build</div>
                    </div>
                    <div className="group relative bg-gray-900/20 border border-gray-700/50 rounded-lg p-6 text-center hover:bg-gradient-to-br hover:from-orange-800/60 hover:to-orange-600/60 hover:border-orange-400/50 transition-all duration-300 cursor-pointer">
                        <div className="text-lg font-bold text-white mb-2">Phase 4</div>
                        <div className="text-sm text-orange-200">Evolution</div>
                        <div className="text-xs text-orange-100/80 mt-1">Optimize & Expand</div>
                    </div>
                    <div className="group relative bg-gray-900/20 border border-gray-700/50 rounded-lg p-6 text-center hover:bg-gradient-to-br hover:from-red-800/60 hover:to-red-600/60 hover:border-red-400/50 transition-all duration-300 cursor-pointer">
                        <div className="text-lg font-bold text-white mb-2">End</div>
                        <div className="text-sm text-red-200">Legacy</div>
                        <div className="text-xs text-red-100/80 mt-1">Deploy</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    { projects.map((project, index) => 
                        <ProjectCard key={ index } project = { project }/>
                    )}
                </div>
            </div>
        </div>
    );
}