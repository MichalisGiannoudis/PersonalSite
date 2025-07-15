export const HeroSection = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" data-hero-section>
            <div className="stars-background">
                <div className="blinking-stars"></div>
                <div className="blinking-stars-2"></div>
                <div className="blinking-stars-3"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/80 to-black"></div>
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/20 to-purple-700/25 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-800/15 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-to-r from-cyan-500/15 to-purple-700/20 rounded-full blur-3xl animate-pulse delay-500"></div>
                <div className="absolute top-1/2 right-1/2 w-72 h-72 bg-gradient-to-r from-purple-900/10 to-indigo-800/15 rounded-full blur-3xl animate-pulse delay-700"></div>
            </div>
            <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
            </div>
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
                <div className="absolute top-2/3 right-1/5 w-1 h-1 bg-blue-400/40 rounded-full animate-float-delayed"></div>
                <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-purple-400/30 rounded-full animate-float-slow"></div>
                <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-400/40 rounded-full animate-float-delayed-2"></div>
                <div className="absolute top-1/4 right-2/3 w-1 h-1 bg-purple-600/50 rounded-full animate-float"></div>
                <div className="absolute bottom-1/4 right-1/5 w-1.5 h-1.5 bg-purple-800/40 rounded-full animate-float-slow"></div>  
            </div>      
            <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
                <p className="cursor-default text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent transform transition-all duration-1000 ease-out animate-[slideFromLeft_1s_ease-out]">
                    Welcome to, 
                </p>
                <p className="cursor-default text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-indigo-300 bg-clip-text text-transparent transform transition-all duration-1000 ease-out animate-[slideFromRight_1s_ease-out]">
                    Mike's Space
                </p>
                <p className="cursor-default text-xl md:text-2xl text-blue-100/90 mb-8 leading-relaxed transform transition-all duration-1000 ease-out animate-[fadeUp_1s_ease-out_0.6s_both]">
                    Crafting digital experiences with passion.
                </p>
            </div>
        </div>       
    );
}