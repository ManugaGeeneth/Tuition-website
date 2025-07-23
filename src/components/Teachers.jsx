import React, { useState } from "react";

const teachers = [
  {
    name: "Mr. Ranjith Senarathne",
    subject: "OL Sinhala & History",
    bio: "Expert in Sinhala language and Sri Lankan history with deep cultural knowledge and engaging teaching methods.",
    specialization: "Cultural Studies",
    experience: "15 years",
    image: "/images/ranjithsir1.jpg" // Replace with actual path to Mr. Ranjith's photo
  },
  {
    name: "Mr. Avishka Fernando",
    subject: "OL Mathematics",
    bio: "Dedicated mathematics educator focused on building strong foundations and problem-solving skills for O/L success.",
    specialization: "Pure Mathematics",
    experience: "6 years",
    image: "/images/avishkasir.jpg" // Replace with actual path to Mr. Avishka's photo
  },
  {
    name: "Mr. Anuradha Perera",
    subject: "OL Science",
    bio: "Science enthusiast who makes complex scientific concepts accessible and interesting for O/L students.",
    specialization: "Biology & Chemistry",
    experience: "9 years",
    image: "/images/anuradha sir.jpg" // Replace with actual path to Ms. Anuradha's photo
  }
];

const Teachers = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-10 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-white/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 px-6 py-16 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            Meet Our <span className="text-yellow-400 relative">
              Teachers
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
            </span>
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed mt-6">
            Dedicated educators committed to your academic excellence and personal growth
          </p>
          
          {/* Stats Bar */}
          <div className="flex justify-center items-center space-x-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">{teachers.length}+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Expert Teachers</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">100+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Students Taught</div>
            </div>
            <div className="w-px h-12 bg-gray-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">10+</div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <div
              key={teacher.name}
              className="group relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 transition-all duration-500 hover:border-yellow-400/50 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/10 h-full">
                
                {/* Animated Border Glow */}
                <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${
                  hoveredCard === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 via-transparent to-yellow-400/20 animate-pulse"></div>
                </div>

                {/* Profile Photo */}
                <div className="relative mb-6 flex justify-center">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300 border-4 border-yellow-400/30 group-hover:border-yellow-400/60">
                    <img
                      src={teacher.image}
                      alt={teacher.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to initials if image fails to load
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* Fallback initials */}
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-2xl" style={{display: 'none'}}>
                      {teacher.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  
                  {/* Floating Ring */}
                  <div className="absolute inset-0 w-24 h-24 border-2 border-yellow-400/30 rounded-full animate-spin-slow group-hover:border-yellow-400/60 transition-colors duration-300"></div>
                </div>

                {/* Teacher Info */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {teacher.name}
                  </h2>
                  
                  <div className="inline-block bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1 mb-3">
                    <p className="text-yellow-400 font-semibold text-sm uppercase tracking-wide">
                      {teacher.subject}
                    </p>
                  </div>

                  <div className="flex justify-center items-center space-x-4 text-sm text-gray-400 mb-4">
                    <span>{teacher.specialization}</span>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <span>{teacher.experience}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-300 leading-relaxed text-center group-hover:text-white transition-colors duration-300">
                  {teacher.bio}
                </p>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"></div>
              </div>

              {/* Floating Elements */}
              <div className={`absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full transition-all duration-500 ${
                hoveredCard === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}></div>
              <div className={`absolute -bottom-2 -left-2 w-3 h-3 bg-white rounded-full transition-all duration-700 ${
                hoveredCard === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-yellow-400/30 transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Start Learning?</h3>
            <p className="text-gray-300 mb-6 max-w-md mx-auto">
              Join our community of successful students and unlock your potential with our expert teachers.
            </p>
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 px-8 rounded-xl hover:from-yellow-500 hover:to-yellow-600 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300">
              Get Started Today
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(90deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
          75% {
            transform: translateY(-10px) rotate(270deg);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Teachers;