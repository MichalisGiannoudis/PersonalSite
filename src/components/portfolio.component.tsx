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
                    <h2 className="text-4xl font-bold mb-6">My (Fleet) Portfolio</h2>
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