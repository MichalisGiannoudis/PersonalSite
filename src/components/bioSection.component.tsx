import { TimeLine } from "./timeline.component";
import { Skills } from "./skills.component";

export const BioSection = () => {
    return (
        <div id="bio-section" className="min-h-screen bg-gray-900 text-white py-16 px-8">
            <div className="max-w-6xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-6">So, who is Mike?</h2>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    {/* Left Side - Bio Text */}
                    <div className="space-y-8">
                        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
                            <p className="text-lg leading-relaxed mb-8">
                                Hello! I'm Mike, an experienced Software Engineer with over 3 years of experience, holding a degree in Computer 
                                Science from the University of Crete, specialized in C#  and web APIs. Known for delivering projects on time and taking 
                                ownership of key features from design to release.
                            </p>
                            <p className="text-lg leading-relaxed mb-8">
                                When I'm not coding, you can find me exploring the latest tech trends, contributing to open-source projects, or enjoying 
                                a good book. Let's connect and create something amazing together!
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Image Section */}
                    <div className="flex flex-col items-center space-y-8">
                        <div className="relative">
                            <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full flex items-center justify-center border border-blue-500/30 backdrop-blur-sm">
                                <div className="w-64 h-64 bg-gray-700/50 rounded-full flex items-center justify-center">
                                    <div className="text-6xl font-bold text-gray-400">M</div>
                                </div>
                            </div>
                            <div className="absolute inset-0 pointer-events-none">
                                <div className="absolute inset-0 planet-orbit-1">
                                    <div className="planet-1 w-8 h-8 bg-blue-500/60 rounded-full border-2 border-blue-400/70 shadow-lg shadow-blue-500/30"></div>
                                </div>
                                <div className="absolute inset-0 planet-orbit-2">
                                    <div className="planet-2 w-6 h-6 bg-purple-500/60 rounded-full border-2 border-purple-400/70 shadow-lg shadow-purple-500/30"></div>
                                </div>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6 w-full max-w-sm">
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                                <div className="text-sm text-gray-300">Years Experience</div>
                            </div>
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 text-center">
                                <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
                                <div className="text-sm text-gray-300">Projects Completed</div>
                            </div>
                        </div>
                    </div>
                </div>

                <Skills />
                <TimeLine />

            </div>
        </div>        
    );
}