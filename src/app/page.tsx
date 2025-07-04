import { HeroSection } from "@/components/heroSection.component";
import { NavBar } from "@/components/navbar.component";

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />

      {/* Call to Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-16 relative z-10 bg-gradient-to-b from-black/50 to-gray-900">
        <button className="px-8 py-4 bg-blue-800/30 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-100 font-semibold hover:bg-blue-700/40 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
          View My Work
        </button>
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30">
          Get In Touch
        </button>
      </div>
{/* 
      {/* Feature Cards
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover:bg-blue-800/25 hover:border-blue-400/30 transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mb-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-blue-100 mb-2">Development</h3>
          <p className="text-blue-200/80">Building modern web applications with cutting-edge technologies.</p>
        </div>

        <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover:bg-blue-800/25 hover:border-blue-400/30 transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-blue-100 mb-2">Design</h3>
          <p className="text-blue-200/80">Creating beautiful and intuitive user interfaces that delight users.</p>
        </div>

        <div className="bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/20 hover:bg-blue-800/25 hover:border-blue-400/30 transition-all duration-300 transform hover:-translate-y-2">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg mb-4 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-blue-100 mb-2">Innovation</h3>
          <p className="text-blue-200/80">Pushing boundaries and exploring new possibilities in technology.</p>
        </div>
      </div> */}
    </div>
  );
}
