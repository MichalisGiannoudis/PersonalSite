export const Skills = () => {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-6">
                {[
                    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
                    { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg' },
                    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
                    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
                    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
                    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
                    { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg' },
                    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' }
                ].map((skill) => (
                    <div key={skill.name} className="group relative">
                        <div className="bg-gray-700/50 p-6 rounded-xl border border-gray-600/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                            <div className="flex flex-col items-center space-y-3">
                                <img 
                                    src={skill.icon} 
                                    alt={skill.name} 
                                    className="w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                                />
                                <span className="text-sm font-medium text-gray-300 group-hover:text-blue-300 transition-colors">
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