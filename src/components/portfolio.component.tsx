import { ProjectCard } from "./projectCard.component";
import { projects } from "@/types/projects"

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
                <div className="grid grid-cols-2 gap-8">
                    { projects.map((project, index) => 
                        <ProjectCard 
                            key={ index } 
                            title={ project.title } 
                            image={ project.image } 
                            endImage={ project.endImage } 
                            description= { project.description } 
                            phase = { project.phase }
                            link={ project.link }/>
                    )}
                </div>
            </div>
        </div>
    );
}