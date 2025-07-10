export const ProjectCard = ({ title, image, endImage, description, phase, link } : { title:string, image:string, endImage:string, description:string, phase:string, link:string }) => {

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
            <h3 className="text-xl font-semibold mb-8">{title}</h3>
            <div className={`grid ${phase === 'P4' ? 'grid-cols-1 justify-end' : 'grid-cols-2'}`}>
                <img src={image} className={`w-8 h-8 mb-2 rotate-90 ${
                        phase === 'P1'
                            ? 'ml-25'
                            : phase === 'P2'
                            ? 'ml-56'
                            : phase === 'P3'
                            ? 'ml-85'
                            : 'hidden'
                    }`}/>
                <img src={endImage} className="w-8 h-8 justify-self-end mr-1.5" />
            </div>
            <div className="relative mb-6">
                <div className="flex items-center gap-x-1">
                    <div className={`w-full h-2.5 flex flex-col justify-center overflow-hidden ${phase === 'P1' || phase === 'P2' || phase === 'P3' || phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} text-xs text-white text-center whitespace-nowrap transition duration-500`}
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>                   
                    <div className={`w-full h-2.5 flex flex-col justify-center overflow-hidden ${phase === 'P2' || phase === 'P3' || phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} text-xs text-white text-center whitespace-nowrap transition duration-500`}
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                    <div className={`w-full h-2.5 flex flex-col justify-center overflow-hidden ${phase === 'P3' || phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} text-xs text-white text-center whitespace-nowrap transition duration-500`}
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                    <div className={`w-full h-2.5 flex flex-col justify-center overflow-hidden ${phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} text-xs text-white text-center whitespace-nowrap transition duration-500`}
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                    ></div>
                    <div>
                        <div className="w-10 text-end">
                            <span className="text-sm text-amber-500">{progress(phase)+'%'}</span>
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
                            <div className={`w-3 h-3 ${phase === 'P1' || phase === 'P2' || phase === 'P3' || phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} rounded-full`}></div>
                            <span className="text-xs text-gray-400 mt-1 whitespace-nowrap"> Phase 1 </span>
                        </div>
                        <div className="flex flex-col items-center mr-4">
                            <div className={`w-3 h-3 ${phase === 'P2' || phase === 'P3' || phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} rounded-full`}></div>
                            <span className="text-xs text-gray-400 mt-1 whitespace-nowrap"> Phase 2 </span>
                        </div>
                        <div className="flex flex-col items-center mr-18">
                            <div className={`w-3 h-3 ${phase === 'P3' || phase === 'P4' ? "bg-blue-700" : "bg-gray-300"} rounded-full`}></div>
                            <span className="text-xs text-gray-400 mt-1 whitespace-nowrap"> Phase 3 </span>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-gray-300 mb-4">{description}</p>
            <a href={link} className="text-blue-400 hover:underline">View Project</a>
        </div>
    );
}