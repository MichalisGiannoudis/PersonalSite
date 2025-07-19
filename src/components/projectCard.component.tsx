import { Project } from "@/types/projects.type";
import { frontendSkills, coreSkills, backendSkills } from "@/types/skills";

export const ProjectCard = ({ project } : {  project:Project }) => {

    return (
        <div className="bg-gray-900/20 rounded-xl p-6 border border-gray-700/50 hover:shadow-lg transition-shadow duration-300">
            <div className="flex justify-between items-center mb-16">
                <h3 className="text-xl font-semibold cursor-default">{project.title}</h3>
                <div className="flex gap-2">
                    {project.screens.split(",").map(s => s.trim().toLowerCase()).map((screen) => {
                        const icons: Record<string, string> = {
                            desktop: "/screens/desktop-icon.png",
                            tablet: "/screens/tablet-icon.png",
                            mobile: "/screens/mobile-icon.png"
                        };
                        return (
                            <img key={screen} src={icons[screen]} className={`w-6 h-6${screen === "tablet" ? " -mr-1.5" : ""}`}/>
                        );
                    })}
                </div>
            </div>
            <div className={`grid ${project.phase === 'P4' ? 'grid-cols-1 justify-end mb-1.5' : 'grid-cols-2'}`}>
                <img src={project.shipImage} className={`w-8 h-8 mb-2 rotate-90 ${
                        project.phase === 'P1'
                            ? 'ml-12 md:18 lg:ml-25'
                            : project.phase === 'P2'
                            ? 'ml-26 md:41 lg:ml-56'
                            : project.phase === 'P3'
                            ? 'ml-42.5 md:62 lg:ml-85'
                            : 'hidden'
                    }`}/>
                <img src={project.planetImage} className="w-8 h-8 justify-self-end mr-1.5" />
            </div>
            <div className="relative mb-12">
                <div className="flex items-center gap-x-1">
                    {['P1', 'P2', 'P3', 'P4'].map((phase, idx) => (
                        <div key={phase} className={`w-full h-2.5 flex flex-col justify-center overflow-hidden ${
                                ['P1', 'P2', 'P3', 'P4'].indexOf(project.phase) >= idx ? "bg-blue-700" : "bg-gray-300"
                            } text-xs text-white text-center whitespace-nowrap transition duration-500`}
                        ></div>
                    ))}
                    <div>
                        <div className="w-10 text-end">
                            <span className="text-sm text-amber-500 cursor-default">{parseInt(project.phase.replace('P', '')) * 25 +'%'}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-[5%_85%_10%] mb-4">
                    <div className="flex flex-col items-center mr-3">
                        <div className={`w-3 h-3 bg-blue-700 rounded-full`}></div>
                        <span className="text-xs text-gray-400 mt-1 cursor-default"> Start </span>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="flex flex-col items-center ml-2 lg:ml-9">
                            <div className={`w-3 h-3 ${project.phase === 'P1' || project.phase === 'P2' || project.phase === 'P3' || project.phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} rounded-full`}></div>
                            <span className="text-xs text-gray-400 mt-1 whitespace-nowrap cursor-default"> Phase 1 </span>
                        </div>
                        <div className="flex flex-col items-center mr-7.5 lg:mr-4">
                            <div className={`w-3 h-3 ${project.phase === 'P2' || project.phase === 'P3' || project.phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} rounded-full`}></div>
                            <span className="text-xs text-gray-400 mt-1 whitespace-nowrap cursor-default"> Phase 2 </span>
                        </div>
                        <div className="flex flex-col items-center mr-17 lg:mr-18">
                            <div className={`w-3 h-3 ${project.phase === 'P3' || project.phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} rounded-full`}></div>
                            <span className="text-xs text-gray-400 mt-1 whitespace-nowrap cursor-default"> Phase 3 </span>
                        </div>
                    </div>
                </div>
            </div>
            {project.phase === 'P4' && (
                <div className="flex justify-end relative -top-18">
                    <img src={project.shipImage} className="w-8 h-8 rotate-90 absolute mr-1" style={{ zIndex: 10 }}/>
                </div>
            )}
            <div className="flex items-center justify-center mb-4">
                <p className="text-lg font-medium mb-2 cursor-default">Mission</p>
                <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-white/40 ml-4"></div>
            </div>
            <p className="text-gray-300 mb-4 cursor-default">{project.description}</p>
            <div className="flex items-center justify-center mb-4">
                <p className="text-lg font-medium mb-2 cursor-default">Cargo</p>
                <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-white/40 ml-4"></div>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
                {project.skills.split(',').map(skill => skill.trim()).map((skill, idx) => {
                    const foundSkill = [...frontendSkills, ...coreSkills, ...backendSkills].find((s: { name: string }) => s.name === skill);
                    return (
                        <div key={skill + idx} className="flex items-center justify-center w-8 h-8 p-1.5 rounded-full bg-gray-800 border border-gray-600 shadow-sm">
                            <img src={foundSkill ? foundSkill.icon : skill} className="text-sm text-white" />
                        </div>
                    );
                })}
            </div>
            <a href={project.link} className="text-blue-400 hover:underline">View Project</a>
        </div>
    );
}