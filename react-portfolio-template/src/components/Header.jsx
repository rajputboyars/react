import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = ['home', 'about', 'portfolio', 'services', 'contact-us'];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = 'home';
      sections.forEach((section) => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const { top } = sectionElement.getBoundingClientRect();
          if (top <= window.innerHeight / 2 && top > -window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  const handleClick = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
  };

  return (
    <header className="bg-primary text-tertiary sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">A R</h1>
        <nav className="relative flex space-x-4">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(section);
              }}
              className={`relative hover:text-yellow-400 transition ${
                activeSection === section ? 'text-yellow-400' : ''
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
              {/* {activeSection === section && (
                <span
                  className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 rounded transition-transform duration-300"
                  style={{ transform: 'scaleX(1)' }}
                ></span>
              )} */}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
