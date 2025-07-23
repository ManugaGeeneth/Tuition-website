import React, { useState } from "react";

const Subjects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const subjects = {
    ol: [
      { name: "Mathematics", mediums: ["English", "Sinhala"], icon: "📊", description: "Master mathematical concepts from basic algebra to advanced calculus" },
      { name: "Science", mediums: ["English", "Sinhala"], icon: "🔬", description: "Explore physics, chemistry, and biology with hands-on experiments" },
      { name: "Sinhala", mediums: ["Sinhala"], icon: "📝", description: "Comprehensive Sinhala language and literature studies" },
      { name: "History", mediums: ["English", "Sinhala"], icon: "📚", description: "Journey through Sri Lankan and world history" },
      { name: "English", mediums: ["English"], icon: "🗣️", description: "Develop fluency in English language and literature" },
      { name: "Drama", mediums: ["English", "Sinhala"], icon: "🎭", description: "Creative expression through theatrical arts and performance" },
      { name: "Tamil", mediums: ["Tamil"], icon: "📖", description: "Tamil language and cultural studies" },
      { name: "ICT", mediums: ["English", "Sinhala"], icon: "💻", description: "Information and Communication Technology fundamentals" },
      { name: "Commerce", mediums: ["English", "Sinhala"], icon: "💼", description: "Business studies and commercial practices" },
      { name: "Technology", mediums: ["English", "Sinhala"], icon: "⚙️", description: "Technical skills and engineering principles" }
    ],
    al: [
      { name: "ICT", mediums: ["English", "Sinhala"], icon: "💻", description: "Advanced computing, programming, and system design" },
      { name: "Engineering Technology", mediums: ["English", "Sinhala"], icon: "🔧", description: "Mechanical, electrical, and civil engineering concepts" },
      { name: "Science for Technology", mediums: ["English", "Sinhala"], icon: "🧪", description: "Applied science for technological applications" },
      { name: "Accounting", mediums: ["English", "Sinhala"], icon: "📈", description: "Financial accounting and business analysis" }
    ]
  };

  const SubjectCard = ({ subject, category }) => (
    <div className="bg-gray-900 border border-yellow-400/20 rounded-xl p-6 hover:border-yellow-400/60 transition-all duration-300">
      <div className="mb-4">
        <div className="text-4xl mb-3">{subject.icon}</div>
      </div>
      
      <h3 className="text-xl font-bold text-yellow-400 mb-4">
        {category === 'ol' ? 'O/L' : 'A/L'} {subject.name}
      </h3>
      
      <p className="text-gray-300 text-sm mb-4">{subject.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {subject.mediums.map((medium, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-yellow-400/10 text-yellow-400 text-sm rounded-full border border-yellow-400/20"
          >
            {medium} Medium
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 text-yellow-400">
            Subjects We Teach
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive O/L and A/L education in multiple mediums with expert guidance
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-900/50 rounded-full p-2 border border-yellow-400/20">
            {['all', 'ol', 'al'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-yellow-400 text-black shadow-lg'
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/10'
                }`}
              >
                {category === 'all' ? 'All Subjects' : category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* O/L Subjects Section */}
        {(activeCategory === 'all' || activeCategory === 'ol') && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-1 h-12 bg-gradient-to-b from-yellow-400 to-yellow-600 mr-4"></div>
              <h2 className="text-4xl font-bold text-yellow-400">Ordinary Level (O/L)</h2>
              <div className="flex-1 ml-6 h-px bg-gradient-to-r from-yellow-400/50 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subjects.ol.map((subject, index) => (
                <SubjectCard
                  key={`ol-${subject.name}`}
                  subject={subject}
                  category="ol"
                />
              ))}
            </div>
          </div>
        )}

        {/* A/L Subjects Section */}
        {(activeCategory === 'all' || activeCategory === 'al') && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-1 h-12 bg-gradient-to-b from-green-400 to-green-600 mr-4"></div>
              <h2 className="text-4xl font-bold text-green-400">Advanced Level (A/L)</h2>
              <div className="flex-1 ml-6 h-px bg-gradient-to-r from-green-400/50 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subjects.al.map((subject, index) => (
                <SubjectCard
                  key={`al-${subject.name}`}
                  subject={subject}
                  category="al"
                />
              ))}
            </div>
          </div>
        )}

        {/* Statistics Section */}
        <div className="text-center mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-400/10 to-transparent p-8 rounded-xl border border-yellow-400/20">
              <div className="text-3xl font-bold text-yellow-400 mb-2">14</div>
              <p className="text-gray-300">Total Subjects</p>
            </div>
            <div className="bg-gradient-to-br from-green-400/10 to-transparent p-8 rounded-xl border border-green-400/20">
              <div className="text-3xl font-bold text-green-400 mb-2">3</div>
              <p className="text-gray-300">Teaching Mediums</p>
            </div>
            <div className="bg-gradient-to-br from-blue-400/10 to-transparent p-8 rounded-xl border border-blue-400/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">2</div>
              <p className="text-gray-300">Education Levels</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold px-12 py-4 rounded-full hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300">
            <span className="text-lg">Enroll Now</span>
          </button>
          <p className="text-gray-400 mt-4">Choose your subjects and start your journey to success!</p>
        </div>
      </div>
    </section>
  );
};

export default Subjects;