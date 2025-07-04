export const TimeLine = () => {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
            <h3 className="text-3xl font-bold mb-12 text-center">My Journey</h3>
            <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                
                <div className="space-y-12">
                    <div className="relative flex items-center">
                        <div className="flex-1 text-right pr-8">
                            <div className="bg-gray-700/50 rounded-4xl p-6 border border-gray-600/50">
                                <h4 className="text-xl font-bold mb-2">Full Stack Software Engineer</h4>
                                <p className="text-lg leading-relaxed">Pircel</p>
                                <span className="text-sm text-gray-400">May 2025 - Present</span>
                            </div>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-900"></div>
                        <div className="flex-1 pl-8"></div>
                    </div>

                    <div className="relative flex items-center">
                        <div className="flex-1 pr-8"></div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-4xl border-4 border-gray-900"></div>
                        <div className="flex-1 pl-8">
                            <div className="bg-gray-700/50 rounded-4xl p-6 border border-gray-600/50">
                                <h4 className="text-xl font-bold mb-2">Software Engineer</h4>
                                <p className="text-lg leading-relaxed">ORamaVR</p>
                                <span className="text-sm text-gray-400">May 2023 - Jun 2025</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center">
                        <div className="flex-1 text-right pr-8">
                            <div className="bg-gray-700/50 rounded-4xl p-6 border border-gray-600/50">
                                <h4 className="text-xl font-bold mb-2">Universe Corse</h4>
                                <p className="text-lg leading-relaxed">Junior Software Engineer</p>
                                <span className="text-sm text-gray-400">Feb 2022 - Apr 2023</span>
                            </div>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                        <div className="flex-1 pl-8"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}