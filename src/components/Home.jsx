import React, { useState, useEffect } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 text-center overflow-hidden">
      {/* Dynamic Gradient Background with Mouse Interaction */}
      <div
        className="absolute inset-0 -z-10 animate-gradientFlow opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #FACC15 0%, transparent 70%), linear-gradient(270deg, #000000, #FACC15, #1f2937, #000000)`,
          backgroundSize: '600% 600%, 800% 800%',
        }}
      ></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 -z-5">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      

      {/* Logo and Conducted By Section - Moved below navbar */}
      <div className="absolute top-20 left-0 right-0 z-40 px-4 py-6">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex items-center space-x-4 cursor-pointer select-none group">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 animate-pulse" style={{filter: 'blur(8px)'}}></div>
              <img
                src="/images/sehas-logo.png"
                alt="SEHAS Logo"
                className="relative h-16 w-16 object-contain animate-logoFloat group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-yellow-400 font-extrabold text-3xl tracking-wide drop-shadow-lg">
                SEHAS
              </span>
              <span className="text-gray-300 text-sm font-medium tracking-wider opacity-90 drop-shadow-md">
                EXCELLENCE IN EDUCATION
              </span>
            </div>
          </div>

          {/* Conducted By Section */}
          <div className="flex items-center space-x-3 group">
            <div className="text-right">
              <p className="text-gray-300 text-sm font-medium drop-shadow-md">Directed by</p>
              <p className="text-yellow-400 font-bold text-lg drop-shadow-lg">Ranjith Senarathne</p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 animate-pulse" style={{filter: 'blur(6px)'}}></div>
              <img
                src="/images/ranjithsir1.jpg"
                alt="Ranjith Senarathne"
                className="relative w-12 h-12 object-cover rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-yellow-400/20"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="relative w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full items-center justify-center shadow-lg border-2 border-yellow-400/20 hidden">
                <span className="text-black font-bold text-sm">RS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="md:hidden flex flex-col space-y-3 max-w-sm mx-auto">
          {/* Logo Section - Mobile */}
          <div className="flex items-center justify-center space-x-3 cursor-pointer select-none group">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 animate-pulse" style={{filter: 'blur(6px)'}}></div>
              <img
                src="/images/sehas-logo.png"
                alt="SEHAS Logo"
                className="relative h-10 w-10 object-contain animate-logoFloat group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-yellow-400 font-extrabold text-xl tracking-wide drop-shadow-lg">
                SEHAS
              </span>
              <span className="text-gray-300 text-xs font-medium tracking-wider opacity-90 drop-shadow-md">
                EXCELLENCE IN EDUCATION
              </span>
            </div>
          </div>

          {/* Conducted By Section - Mobile */}
          <div className="flex items-center justify-center space-x-3 group">
            <div className="text-center">
              <p className="text-gray-300 text-xs font-medium drop-shadow-md">Conducted by</p>
              <p className="text-yellow-400 font-bold text-sm drop-shadow-lg">Ranjith Senarathne</p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300 animate-pulse" style={{filter: 'blur(4px)'}}></div>
              <img
                src="/images/ranjithsir1.jpg"
                alt="Ranjith Senarathne"
                className="relative w-8 h-8 object-cover rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-yellow-400/20"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="relative w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full items-center justify-center shadow-lg border-2 border-yellow-400/20 hidden">
                <span className="text-black font-bold text-xs">RS</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Staggered Animations */}
      <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* Decorative Elements */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-slideInFromTop"></div>
        
        {/* Main Heading with Text Effects - Responsive text sizes */}
        <h1 className="relative text-4xl md:text-7xl font-extrabold mb-8 z-10">
          <span className="inline-block animate-bounceInWords text-yellow-400 drop-shadow-lg" style={{animationDelay: '0.1s'}}>Welcome</span>
          <span className="inline-block animate-bounceInWords mx-2 md:mx-3 text-yellow-400 drop-shadow-lg" style={{animationDelay: '0.2s'}}>to</span>
          <span className="inline-block animate-bounceInWords text-yellow-400 drop-shadow-lg" style={{animationDelay: '0.3s'}}>SEHAS</span>
          <br />
          <span className="inline-block animate-bounceInWords text-3xl md:text-5xl mt-2 text-yellow-400 drop-shadow-lg" style={{animationDelay: '0.4s'}}>Pitakotte</span>
          
          {/* Animated Underline */}
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-yellow-400 animate-expandLine shadow-lg"></div>
        </h1>

        {/* Enhanced Description - Responsive text */}
        <div className="relative mb-12">
          <p className="text-lg md:text-2xl max-w-3xl text-gray-200 animate-fadeInUp leading-relaxed drop-shadow-lg px-4" style={{animationDelay: '0.6s'}}>
            Your trusted tuition institute for 
            <span className="text-yellow-400 font-semibold drop-shadow-md"> excellence </span>
            in academics
          </p>
          <div className="absolute -left-2 md:-left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60 shadow-lg"></div>
          <div className="absolute -right-2 md:-right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping opacity-60 shadow-lg" style={{animationDelay: '0.5s'}}></div>
        </div>

        {/* Enhanced Call-to-Action Button - Responsive padding */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-300 animate-pulse" style={{filter: 'blur(10px)'}}></div>
          <button className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-8 md:px-12 py-3 md:py-4 rounded-full shadow-2xl hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300 animate-buttonEntrance group-hover:shadow-yellow-400/30" style={{animationDelay: '0.8s'}}>
            <span className="relative z-10 text-base md:text-lg tracking-wide drop-shadow-sm">Enroll Now</span>
            <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Decorative Bottom Element */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-slideInFromBottom"></div>
      </div>

      {/* Floating Action Elements */}
      <div className="absolute bottom-10 left-4 md:left-10 animate-bounce">
        <div className="w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
      </div>
      <div className="absolute bottom-20 right-4 md:right-10 animate-bounce" style={{animationDelay: '0.5s'}}>
        <div className="w-2 h-2 bg-yellow-400 rounded-full opacity-40"></div>
      </div>

      {/* Enhanced Custom Animations */}
      <style jsx>{`
        @keyframes gradientFlow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(5deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes textGlow {
          0%, 100% { text-shadow: 0 0 20px rgba(250, 204, 21, 0.5); }
          50% { text-shadow: 0 0 30px rgba(250, 204, 21, 0.8), 0 0 40px rgba(250, 204, 21, 0.3); }
        }
        
        @keyframes bounceInWords {
          0% { opacity: 0; transform: translateY(30px) scale(0.8); }
          60% { opacity: 1; transform: translateY(-10px) scale(1.05); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes expandLine {
          0% { width: 0%; }
          100% { width: 80%; }
        }
        
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes highlight {
          0%, 100% { color: #FACC15; }
          50% { color: #FDE047; text-shadow: 0 0 10px rgba(250, 204, 21, 0.5); }
        }
        
        @keyframes buttonEntrance {
          0% { opacity: 0; transform: translateY(20px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        @keyframes slideInFromTop {
          0% { opacity: 0; transform: translateX(-50%) translateY(-20px); }
          100% { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        
        @keyframes slideInFromBottom {
          0% { opacity: 0; transform: translateX(-50%) translateY(20px); }
          100% { opacity: 1; transform: translateX(-50%) translateY(0); }
        }

        .animate-gradientFlow {
          animation: gradientFlow 20s ease infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-logoFloat {
          animation: logoFloat 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, #FACC15 0%, #FDE047 50%, #FACC15 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-textGlow {
          animation: textGlow 3s ease-in-out infinite;
        }
        
        .animate-bounceInWords {
          animation: bounceInWords 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-expandLine {
          animation: expandLine 1.5s ease-out forwards;
          animation-delay: 1s;
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-highlight {
          animation: highlight 2s ease-in-out infinite;
        }
        
        .animate-buttonEntrance {
          animation: buttonEntrance 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-slideInFromTop {
          animation: slideInFromTop 1s ease-out forwards;
          animation-delay: 0.2s;
        }
        
        .animate-slideInFromBottom {
          animation: slideInFromBottom 1s ease-out forwards;
          animation-delay: 1.2s;
        }
      `}</style>
    </section>
  );
};

export default Home;