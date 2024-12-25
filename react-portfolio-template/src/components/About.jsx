import React from 'react';
import backgroundImage from "/images/about/backgroundImage.jpeg"
const About = () => {
    return (
        <section
            id="about"
            className="container mx-auto px-8 gap-8 py-16 bg-cover bg-center flex max-lg:flex-col-reverse scroll-m-14"
        >
         
            <div className="flex-1">
                <h2 className="text-4xl font-bold mb-6 max-lg:text-center">About Me</h2>
                <p className="text-lg leading-relaxed max-md:text-justify mb-6">
                    Hello! I'm a passionate web designer with a knack for creating visually appealing and user-friendly websites.
                    With a strong foundation in modern web technologies and a love for clean, functional design, I help businesses
                    and individuals bring their online presence to life.
                </p>
                <p className="text-lg leading-relaxed">
                    When I'm not designing, you can find me exploring new design trends, honing my coding skills, or enjoying a good book.
                </p>
            </div>
            <div className='lg:h-[70vh] max-lg:max-h-[50vh]  flex-1 flex justify-center '>
                <img src={backgroundImage} alt="" className='rounded-2xl overflow-hidden w-full md:w-[50%] lg:h-full shadow-[10px_-10px_20px_-10px_rgba(0,0,0,.75)]' />
            </div>
        </section>
    );
};

export default About;
