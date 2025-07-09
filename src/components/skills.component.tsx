import { technicalSkills, nonTechnicalSkills} from "@/types/skills"

export const Skills = () => {
    return (
        <div className="bg-gray-900/30 rounded-xl p-8 border border-gray-700/50 mb-16">
            <div className="relative flex items-center justify-center min-h-[600px]">
                <div className="absolute z-10 w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full shadow-2xl shadow-yellow-400/50 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute w-80 h-80 border-2 border-blue-500/30 rounded-full animate-spin-slow">
                    {technicalSkills.map((skill, index) => {
                        const angle = (index * 360) / technicalSkills.length;
                        const radius = 150;
                        const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                        const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                        
                        return (
                            <div
                                key={skill.name}
                                className="absolute w-12 h-12 group"
                                style={{
                                    left: `calc(50% + ${x}px - 24px)`,
                                    top: `calc(50% + ${y}px - 24px)`,
                                    animation: 'spin-slow 30s linear infinite reverse',
                                }}
                            >
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-blue-300 shadow-lg shadow-blue-500/50 flex items-center justify-center hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                                    <img 
                                        src={skill.icon} 
                                        alt={skill.name} 
                                        className="w-8 h-8 relative z-10"
                                    />
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
                <div className="absolute w-120 h-120 border-2 border-purple-500/30 rounded-full animate-spin-reverse-slow">
                    {nonTechnicalSkills.map((skill, index) => {
                        const angle = (index * 360) / nonTechnicalSkills.length;
                        const radius = 240;
                        const x = Math.cos((angle - 90) * Math.PI / 180) * radius;
                        const y = Math.sin((angle - 90) * Math.PI / 180) * radius;
                        
                        return (
                            <div
                                key={skill.name}
                                className="absolute w-10 h-10 group"
                                style={{
                                    left: `calc(50% + ${x}px - 20px)`,
                                    top: `calc(50% + ${y}px - 20px)`,
                                    animation: 'spin-reverse-slow 25s linear infinite reverse',
                                }}
                            >
                                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-purple-300 shadow-lg shadow-purple-500/50 flex items-center justify-center hover:scale-110 transition-transform duration-300 relative overflow-hidden">
                                    <img 
                                        src={skill.icon} 
                                        alt={skill.name} 
                                        className="w-6 h-6 relative z-10"
                                    />
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

                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white mb-1">My (Universe) Skills</div>
                    </div>
                </div>
            </div>
        </div>
    )
}