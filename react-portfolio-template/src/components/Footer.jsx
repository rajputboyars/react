import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-tertiary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <h2 className="text-lg font-bold">A R Portfolio</h2>
          <div className="flex my-4 gap-4 md:my-0">
          <a
              href={"#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2 w-8 h-8 bg-white justify-center rounded-full transition-transform hover:scale-110"
            >
              <img
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"}
                alt={"tech.name"}
                className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
              />
            </a>
          <a
              href={"#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2 w-8 h-8 bg-white justify-center rounded-full transition-transform hover:scale-110"
            >
              <img
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"}
                alt={"tech.name"}
                className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
              />
            </a>
          <a
              href={"#"}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center space-y-2 w-8 h-8 bg-white justify-center rounded-full transition-transform hover:scale-110"
            >
              <img
                src={"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"}
                alt={"tech.name"}
                className="w-4 h-4 object-contain group-hover:scale-110 transition-transform"
              />
            </a>
          </div>
          <p className="text-sm">&copy; 2024 A R Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
