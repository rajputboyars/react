import React from 'react';
import image1 from '/images/portfolio-section/construction.jpeg';
import image2 from '/images/portfolio-section/Restaurant.webp';
import image3 from '/images/portfolio-section/delivery.jpeg';
import image4 from '/images/portfolio-section/hospital.webp';

const Portfolio = () => {
    const projects = [
        { id: 1, title: 'Project 1', image: image1 },
        { id: 2, title: 'Project 2', image: image2 },
        { id: 3, title: 'Project 3', image: image3 },
        { id: 4, title: 'Project 4', image: image4 },
    ];

    return (
        <section id="portfolio" className="py-16 bg-tertiary scroll-m-14">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">My Portfolio</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {projects.map((project) => {
                        return (
                            <div key={project.id}
                                className="relative group overflow-hidden rounded-lg shadow-lg bg-cover bg-center">
                                <div className='h-full'>
                                    <img src={project.image} alt="" className='w-full h-full'/>
                                </div>
                                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-tertiary bg-yellow-400 p-3 rounded-full hover:bg-yellow-500 transition">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.828 10H21m0 0v7m0-7l-8.485 8.485m-4.243-4.243a3 3 0 11-4.243-4.243 3 3 0 014.243 4.243z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
