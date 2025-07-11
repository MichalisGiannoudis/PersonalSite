import { Episode } from "@/types/episodes.type"

interface ExperienceCardProps {
    episode: Episode;
    position: 'left' | 'right';
}

export const ExperienceCard = ({ episode, position }: ExperienceCardProps) => {
    return(
        <div className={`flex-1 ${position === 'left' ? 'text-right pr-8' : 'pl-8'}`}>
            <div className="bg-slate-900/70 rounded-lg p-6 border border-slate-700/50 relative">
                <div className="flex items-center gap-6">
                    <div className={position === 'left' ? 'w-1/3' : 'w-3/5'}>
                        {position === 'left' ? (
                            <>
                                <h4 className="text-xl font-bold mb-2 text-purple-800">{episode.company}</h4>
                                <p className="text-lg leading-relaxed mb-3">{episode.role}</p>
                                <span className="text-sm text-gray-400">{episode.period}</span>
                            </>
                        ) : (<p className="text-default leading-relaxed mb-3">{episode.description}</p>)}
                    </div>
                    <div className="w-px h-22 bg-gradient-to-b from-purple-800 to-indigo-700"></div>
                    <div className="flex-1">
                        {position === 'left' ? (
                            <p className="text-default leading-relaxed mb-3">{episode.description}</p>) 
                            : (
                            <>
                                <h4 className="text-xl font-bold mb-2 text-purple-800">{episode.company}</h4>
                                <p className="text-lg leading-relaxed mb-3">{episode.role}</p>
                                <span className="text-sm text-gray-400">{episode.period}</span>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )               
}
