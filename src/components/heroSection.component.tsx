export const HeroSection = () => {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden" data-hero-section>
            <div className="stars-background">
                <div className="blinking-stars"></div>
                <div className="blinking-stars-2"></div>
                <div className="blinking-stars-3"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/80 to-black"></div>
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