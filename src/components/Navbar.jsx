import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Teachers", id: "teachers" },
    { name: "Subjects", id: "subjects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="bg-black text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center space-x-3 text-yellow-400 font-extrabold tracking-wider"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/images/sehas-logo.png"
            alt="SEHAS Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-2xl">SEHAS</span>
          <span className="text-gray-400 text-lg font-semibold">- Pitakotte</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {sections.map(({ name, id }) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-3 py-2 rounded-md font-medium text-gray-400 hover:text-yellow-400 transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            aria-label="Toggle menu"
            className="focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <svg
              className="h-8 w-8 text-yellow-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-gray-300 space-y-2 px-4 pb-4 animate-fadeInDown">
          {sections.map(({ name, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 rounded-md font-semibold hover:text-yellow-400 hover:bg-gray-800 transition-colors duration-300"
            >
              {name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
