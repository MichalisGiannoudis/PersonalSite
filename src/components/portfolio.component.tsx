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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:shadow-lg transition-shadow duration-300">
                        <h3 className="text-xl font-semibold mb-4">Project Title</h3>
                        <p className="text-gray-300 mb-4">Brief description of the project, highlighting key features and technologies used.</p>
                        <a href="#" className="text-blue-400 hover:underline">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    );
}