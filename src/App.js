import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Teachers from "./components/Teachers";
import Subjects from "./components/Subjects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-black text-gray-300">
      <Navbar />
      
      {/* Enhanced Home Section */}
      <section id="home">
        <Home />
      </section>

      {/* About Section */}
      <section id="about" >
        <About/>
      </section>

      {/* Teachers Section */}
      <section id="teachers">
        <Teachers/>
      </section>

      {/* Subjects Section */}
      <section id="subjects" >
        <Subjects/>
      </section>

      {/* Contact Section */}
      <section id="contact" >
        <Contact/>
      </section>

      {/* Enhanced Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </div>
  );
};

export default App;