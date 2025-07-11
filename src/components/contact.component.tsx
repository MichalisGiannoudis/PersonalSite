export const Contact = () => {
    return (
        <div id="contact-section" className="bg-black text-white py-16 px-8 relative">
            <div className="stars-background">
                <div className="blinking-stars"></div>
                <div className="blinking-stars-2"></div>
                <div className="blinking-stars-3"></div>
            </div>
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex items-center justify-center mb-6">
                    <p className="text-4xl font-bold mx-4 whitespace-nowrap">My Portal</p>
                </div>
                <div className="flex items-center justify-center mb-6">
                    <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent to-white/40"></div>
                    <p className="text-2xl font-bold mx-4 whitespace-nowrap">Contact</p>
                    <div className="h-0.5 flex-1 bg-gradient-to-l from-transparent to-white/40"></div>
                </div>
            </div>
            <div className="max-w-2xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <p className="text-lg text-white mb-4">Feel free to reach out for any inquiries or collaborations.</p>
                    <p className="text-lg text-white">You can contact me via email or connect with me on social media.</p>
                </div>
                <div className="flex flex-col items-center space-y-4">

                </div>
                <p className="text-center text-lg font-bold text-amber-500 mb-12">May the forth be with you</p>
            </div>
        </div>
    )
}