import React from 'react';
import backgroundImage from "/images/home/background.jpg"
const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen " >
      {/* Overlay */}
      <div className="absolute w-full h-full ">
        <img src={backgroundImage} alt="" className='h-full w-full' />
      </div>

      {/* Content */}
      <div className="relative inset-0 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-60 z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Empowering Your Digital Presence
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-8">
          Transform your ideas into reality with cutting-edge web development solutions.
        </p>
        <a
          href="#contact-us" // Adjust this link to your contact or booking section
          className="inline-block px-8 py-3 text-lg font-semibold hover:text-black bg-black bg-opacity-20 hover:bg-yellow-400 rounded-lg border-2 text-yellow-300 border-yellow-500 transition"
        >
          Book a Call
        </a>
      </div>
    </section>
  );
};

export default Home;
