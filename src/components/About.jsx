import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [enrollCount, setEnrollCount] = useState(0);
  const [successRate, setSuccessRate] = useState(0);
  const statsRef = useRef(null);

  // Gallery images array
  const galleryImages = [
    { src: "/images/spic1.jpg", alt: "O/L Students" },
    { src: "/images/spic2.jpg", alt: "A/L Students" },
    { src: "/images/spic3.jpg", alt: "O/L Class" },
    { src: "/images/spic4.jpg", alt: "A/L Class" },
    { src: "/images/spic5.jpg", alt: "Mathematics Class" },
    { src: "/images/spic6.jpg", alt: "Science Class" },
    { src: "/images/spic7.jpg", alt: "Results Day" },
    { src: "/images/spic8.jpg", alt: "Expert Teaching" },
    { src: "/images/spic4.jpg", alt: "Study Materials" },
    { src: "/images/spic5.jpg", alt: "Group Discussion" }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    // Intersection Observer for stats animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate enrollment count
            let enrollStart = 0;
            const enrollTarget = 1000;
            const enrollDuration = 2000;
            const enrollInterval = setInterval(() => {
              enrollStart += enrollTarget / (enrollDuration / 50);
              if (enrollStart >= enrollTarget) {
                setEnrollCount(enrollTarget);
                clearInterval(enrollInterval);
              } else {
                setEnrollCount(Math.floor(enrollStart));
              }
            }, 50);

            // Animate success rate
            let successStart = 0;
            const successTarget = 98;
            const successDuration = 2000;
            const successInterval = setInterval(() => {
              successStart += successTarget / (successDuration / 50);
              if (successStart >= successTarget) {
                setSuccessRate(successTarget);
                clearInterval(successInterval);
              } else {
                setSuccessRate(Math.floor(successStart));
              }
            }, 50);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
    };
  }, []);

  // Custom keyframe animations using CSS-in-JS
  const animationStyles = `
    @keyframes gradientFlow {
      0%, 100% { background-position: 0% 50%; }
      25% { background-position: 100% 0%; }
      50% { background-position: 100% 100%; }
      75% { background-position: 0% 100%; }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.3; }
      50% { transform: translateY(-20px) rotate(180deg); opacity: 0.6; }
    }
    
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    
    @keyframes expandWidth {
      0% { width: 0; }
      100% { width: 8rem; }
    }
    
    @keyframes fadeInUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    @keyframes scrollHorizontal {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    @keyframes pulse-glow {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <section className="relative min-h-screen bg-black text-white overflow-hidden">
        {/* Dynamic Background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, #FACC15 0%, transparent 70%), linear-gradient(45deg, #000000, #1a1a1a, #FACC15, #000000)`,
            backgroundSize: '400% 400%',
            animation: 'gradientFlow 15s ease infinite',
            zIndex: -10
          }}
        ></div>

        {/* Additional animated background layer */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: 'linear-gradient(45deg, #FACC15, transparent, #FACC15, transparent, #FACC15)',
            backgroundSize: '400% 400%',
            animation: 'gradientFlow 20s ease infinite reverse',
            zIndex: -9
          }}
        ></div>

        {/* Floating Particles */}
        <div className="absolute inset-0" style={{ zIndex: -5 }}>
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${4 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          {/* Header Section */}
          <div 
            className="transform transition-all duration-1000"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              opacity: isVisible ? 1 : 0
            }}
          >
            <div className="text-center mb-16">
              <div className="inline-block">
                <h1 
                  className="text-5xl md:text-7xl font-extrabold mb-4 bg-clip-text text-transparent"
                  style={{
                    background: 'linear-gradient(90deg, #FACC15 0%, #FDE047 50%, #FACC15 100%)',
                    backgroundSize: '200% 100%',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    animation: 'shimmer 3s ease-in-out infinite'
                  }}
                >
                  About SEHAS
                </h1>
                <div 
                  className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-auto"
                  style={{
                    width: 0,
                    animation: 'expandWidth 1s ease-out 0.5s forwards'
                  }}
                ></div>
              </div>
              <p 
                className="text-xl text-gray-300 mt-6"
                style={{
                  opacity: 0,
                  animation: 'fadeInUp 0.8s ease-out 0.3s forwards'
                }}
              >
                Excellence in Education • Pitakotte
              </p>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            {/* Left Column - Description */}
            <div 
              className="space-y-8 transform transition-all duration-1000"
              style={{
                transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: '300ms'
              }}
            >
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-yellow-400 to-transparent"></div>
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  SEHAS is a premier tuition institute in Pitakotte, specializing in O/L and A/L education. 
                  We are dedicated to guiding students through their most crucial academic years with expert 
                  teaching, comprehensive study materials, and personalized attention to achieve outstanding results.
                </p>
              </div>

              <div className="relative">
                <h2 className="text-3xl font-bold text-yellow-400 mb-6">Why Choose SEHAS</h2>
                <div className="space-y-4">
                  {[
                    "Specialized O/L and A/L curriculum coverage",
                    "Expert teachers with proven track records",
                    "Small class sizes for individual attention",
                    "Comprehensive study materials and past papers",
                    "Regular assessments and mock examinations",
                    "Flexible class schedules for working students"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 group">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative p-6 bg-gradient-to-r from-yellow-400/10 to-transparent rounded-lg border border-yellow-400/20">
                <h3 className="text-xl font-semibold text-yellow-400 mb-3">Our Approach</h3>
                <p className="text-gray-300 leading-relaxed">
                  We focus on building strong foundations in core subjects, developing exam techniques, 
                  and boosting confidence. Our systematic approach ensures students are well-prepared 
                  for their O/L and A/L examinations with comprehensive understanding and practical skills.
                </p>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div 
              className="transform transition-all duration-1000"
              style={{
                transform: isVisible ? 'translateX(0)' : 'translateX(10px)',
                opacity: isVisible ? 1 : 0,
                transitionDelay: '500ms'
              }}
            >
              <div className="sticky top-20">
                <div ref={statsRef} className="grid grid-cols-1 gap-8">
                  {/* Enrollment Stats */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-lg blur-sm group-hover:from-yellow-400/30 transition-all duration-300"></div>
                    <div className="relative bg-black/50 border border-yellow-400/30 rounded-lg p-8 text-center">
                      <div 
                        className="text-5xl font-extrabold text-yellow-400 mb-2"
                        style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
                      >
                        {enrollCount}+
                      </div>
                      <p className="text-gray-300 text-lg font-medium">Students Enrolled</p>
                      <p className="text-gray-400 text-sm mt-2">Trusted by families across Pitakotte</p>
                    </div>
                  </div>

                  {/* Success Rate */}
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-transparent rounded-lg blur-sm group-hover:from-green-400/30 transition-all duration-300"></div>
                    <div className="relative bg-black/50 border border-green-400/30 rounded-lg p-8 text-center">
                      <div 
                        className="text-5xl font-extrabold text-green-400 mb-2"
                        style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
                      >
                        {successRate}%
                      </div>
                      <p className="text-gray-300 text-lg font-medium">Success Rate</p>
                      <p className="text-gray-400 text-sm mt-2">Outstanding academic achievements</p>
                    </div>
                  </div>

                  {/* Additional Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/50 border border-blue-400/30 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-1">10+</div>
                      <p className="text-gray-300 text-sm">Years Experience</p>
                    </div>
                    <div className="bg-black/50 border border-purple-400/30 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-purple-400 mb-1">10+</div>
                      <p className="text-gray-300 text-sm">Expert Teachers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div 
            className="transform transition-all duration-1000"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '700ms'
            }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-yellow-400 mb-4">Our Learning Environment</h2>
              <div className="w-24 h-1 bg-yellow-400 mx-auto mb-4"></div>
              <p className="text-gray-300 text-lg">Experience quality O/L and A/L education at SEHAS</p>
            </div>

            {/* Horizontal Auto-Scrolling Gallery - Fixed to show actual images */}
            <div className="relative overflow-hidden">
              <div 
                className="flex space-x-6"
                style={{
                  animation: 'scrollHorizontal 30s linear infinite'
                }}
              >
                {/* First set of images */}
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="flex-shrink-0 w-80 h-48 relative overflow-hidden rounded-lg group"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder (hidden by default) */}
                    <div
                      className="absolute inset-0 bg-gray-800 hidden items-center justify-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, #1a1a1a 0%, #333 100%)`,
                      }}
                    >
                      <div className="text-center">
                        <div className="text-yellow-400 text-2xl font-bold mb-2">SEHAS</div>
                        <div className="text-gray-400 text-sm">{image.alt}</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/20 transition-all duration-300"></div>
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {galleryImages.map((image, index) => (
                  <div 
                    key={`duplicate-${index}`} 
                    className="flex-shrink-0 w-80 h-48 relative overflow-hidden rounded-lg group"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback placeholder (hidden by default) */}
                    <div
                      className="absolute inset-0 bg-gray-800 hidden items-center justify-center transition-transform duration-500 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, #1a1a1a 0%, #333 100%)`,
                      }}
                    >
                      <div className="text-center">
                        <div className="text-yellow-400 text-2xl font-bold mb-2">SEHAS</div>
                        <div className="text-gray-400 text-sm">{image.alt}</div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/20 transition-all duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div 
            className="text-center mt-20 transform transition-all duration-1000"
            style={{
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              opacity: isVisible ? 1 : 0,
              transitionDelay: '1000ms'
            }}
          >
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full opacity-20 group-hover:opacity-30 transition-all duration-300 blur-lg"></div>
              <button className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-12 py-4 rounded-full shadow-2xl hover:from-yellow-300 hover:to-yellow-400 transform hover:scale-105 transition-all duration-300">
                <span className="text-lg">Join Our Success Story</span>
              </button>
            </div>
            <p className="text-gray-400 mt-4">Ready to unlock your potential? Contact us today!</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;