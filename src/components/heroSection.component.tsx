export const HeroSection = () => {
    return (
        <div className="flex flex-col items-center mb-12">
            <p className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent transform transition-all duration-1000 ease-out animate-[slideFromLeft_1s_ease-out]">
                Welcome to My
            </p>
            <p className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-indigo-300 bg-clip-text text-transparent transform transition-all duration-1000 ease-out animate-[slideFromRight_1s_ease-out]">
                Personal Space
            </p>
            <p className="text-xl md:text-2xl text-blue-100/90 mb-8 leading-relaxed transform transition-all duration-1000 ease-out animate-[fadeUp_1s_ease-out_0.6s_both]">
                Crafting digital experiences with passion and precision.<br />Let's build something amazing together.
            </p>
        </div>       
    );
}