import { technicalSkills, nonTechnicalSkills} from "@/types/skills"

export const Skills = () => {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 mb-16">

            <div className="flex flex-wrap justify-center gap-6 mb-12">
                {technicalSkills.map((skill) => (
                    <div key={skill.name} className="group relative">
                        <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                            <div className="flex flex-col items-center space-y-3">
                                <img 
                                    src={skill.icon} 
                                    alt={skill.name} 
                                    className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                                />
                                <span className="text-sm font-medium text-gray-300 group-hover:text-blue-300 transition-colors cursor-default">
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                {nonTechnicalSkills.map((skill) => (
                    <div key={skill.name} className="group relative">
                        <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                            <div className="flex flex-col items-center space-y-3">
                                <img 
                                    src={skill.icon} 
                                    alt={skill.name} 
                                    className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                                />
                                <span className="text-sm font-medium text-gray-300 group-hover:text-blue-300 transition-colors cursor-default">
                                    {skill.name}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}