import React from 'react';

const TechStack = () => {
  const technologies = [
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://reactjs.org/' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', url: 'https://nextjs.org/' },
    { name: 'TailwindCSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', url: 'https://tailwindcss.com/' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org/' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', url: 'https://www.mongodb.com/' },
    { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg', url: 'https://wordpress.org/' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', url: 'https://getbootstrap.com/' },
  ];

  return (
    <section id="technologies" className="py-16 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-yellow-300">Technologies I Use</h2>
        <p className="text-lg text-white mb-12">
          I specialize in a wide array of technologies to craft modern and scalable web applications.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {technologies.map((tech, index) => (
            <a
              key={index}
              href={tech.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2 w-20 p-4 transition-transform hover:scale-110"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform"
              />
              <p className="text-sm text-gray-800 font-medium">{tech.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
