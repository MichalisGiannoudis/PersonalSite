import { Project } from "@/types/projects.type";
import { nonTechnicalSkills, technicalSkills } from "@/types/skills";

export const ProjectCard = ({ project } : {  project:Project }) => {

    const progress = (phase: string) => {
        switch(phase) {
            case 'P1':
                return 25;
            case 'P2':
                return 50;
            case 'P3':
                return 75;
            case 'P4':
                return 100;
            default:
                return 0;
        }
    }

    return (
        <div className="bg-gray-900/20 rounded-xl p-6 border border-gray-700/50 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-semibold mb-8">{project.title}</h3>
            <div className={`grid ${project.phase === 'P4' ? 'grid-cols-1 justify-end mb-1.5' : 'grid-cols-2'}`}>
                <img src={project.image} className={`w-8 h-8 mb-2 rotate-90 ${
                        project.phase === 'P1'
                            ? 'ml-25'
                            : project.phase === 'P2'
                            ? 'ml-56'
                            : project.phase === 'P3'
                            ? 'ml-85'
                            : 'hidden'
                    }`}/>
                <img src={project.endImage} className="w-8 h-8 justify-self-end mr-1.5" />
            </div>
            <div className="relative mb-6">
                <div className="flex items-center gap-x-1">
                    <div className={`w-full h-2.5 flex flex-col justify-center overflow-hidden ${project.phase === 'P1' || project.phase === 'P2' || project.phase === 'P3' || project.phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} text-xs text-white text-center whitespace-nowrap transition duration-500`}
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>                   
                    <div className={`w-full h-2.5 flex flex-col justify-center overflow-hidden ${project.phase === 'P2' || project.phase === 'P3' || project.phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} text-xs text-white text-center whitespace-nowrap transition duration-500`}
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                    <div className={`w-full h-2.5 flex flex-col justify-center overflow-hidden ${project.phase === 'P3' || project.phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} text-xs text-white text-center whitespace-nowrap transition duration-500`}
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                    <div className={`w-full h-2.5 flex flex-col justify-center overflow-hidden ${project.phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} text-xs text-white text-center whitespace-nowrap transition duration-500`}
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                    <div>
                        <div className="w-10 text-end">
                            <span className="text-sm text-amber-500">{progress(project.phase)+'%'}</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-[5%_85%_10%] mb-4">
                    <div className="flex flex-col items-center">
                        <div className={`w-3 h-3 bg-blue-700 rounded-full`}></div>
                        <span className="text-xs text-gray-400 mt-1"> Start </span>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="flex flex-col items-center ml-9">
                            <div className={`w-3 h-3 ${project.phase === 'P1' || project.phase === 'P2' || project.phase === 'P3' || project.phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} rounded-full`}></div>
                            <span className="text-xs text-gray-400 mt-1 whitespace-nowrap"> Phase 1 </span>
                        </div>
                        <div className="flex flex-col items-center mr-4">
                            <div className={`w-3 h-3 ${project.phase === 'P2' || project.phase === 'P3' || project.phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} rounded-full`}></div>
                            <span className="text-xs text-gray-400 mt-1 whitespace-nowrap"> Phase 2 </span>
                        </div>
                        <div className="flex flex-col items-center mr-18">
                            <div className={`w-3 h-3 ${project.phase === 'P3' || project.phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} rounded-full`}></div>
                            <span className="text-xs text-gray-400 mt-1 whitespace-nowrap"> Phase 3 </span>
                        </div>
                    </div>
                </div>
            </div>
            {project.phase === 'P4' && (
                <div className="flex justify-end relative -top-12">
                    <img src={project.image} className="w-8 h-8 rotate-90 absolute mr-1" style={{ zIndex: 10 }}/>
                </div>
            )}
            <div className="flex items-center justify-center mb-4">
                <p className="text-lg font-medium mb-2">Mission</p>
                <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-white/40 ml-4"></div>
            </div>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex items-center justify-center mb-4">
                <p className="text-lg font-medium mb-2">Cargo</p>
                <div className="flex-1 h-0.5 bg-gradient-to-l from-transparent to-white/40 ml-4"></div>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
                {project.skills.split(',').map(skill => skill.trim()).map((skill, idx) => {
                    const foundSkill = [...technicalSkills, ...nonTechnicalSkills].find((s: { name: string }) => s.name === skill);
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