import React from 'react';

const Service = () => {
    const services = [
        {
            id: 1,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="text-sm w-10 h-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v12m6-6H6"
                    />
                </svg>
            ),
            title: 'Web Development',
            description: 'Build responsive websites.',
        },
        {
            id: 2,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="text-sm w-10 h-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            ),
            title: 'UI/UX Design',
            description: 'Design modern, user-friendly interfaces.',
        },
        {
            id: 3,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="text-sm w-10 h-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2h12c1.1 0 2-.9 2-2V8l-4-6z"
                    />
                </svg>
            ),
            title: 'SEO Optimization',
            description: 'Optimize websites for search engines.',
        },
        {
            id: 4,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="text-sm w-10 h-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m8-8H4"
                    />
                </svg>
            ),
            title: 'Customer Support',
            description: '24/7 support for your needs.',
        },
        {
            id: 5,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="text-sm w-10 h-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            ),
            title: 'Database Management',
            description: 'Secure and efficient data storage.',
        },
        {
            id: 6,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    className="text-sm w-10 h-10"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 6l-1.5 1.5L12 4l-3.5 3.5L7 6l5-5 5 5z"
                    />
                </svg>
            ),
            title: 'Maintenance',
            description: 'Ongoing maintenance and updates.',
        },
    ];

    return (
        <section id="services" className="py-16 bg-tertiary scroll-m-14">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-6">
                    Our Services
                </h2>
                <h2 className="text-xl text-center mb-6">
                    Everything you need for a professional and seamless website experience
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="relative group overflow-hidden rounded-lg shadow-lg bg-white p-6 transition-transform transform hover:scale-105"
                        >
                            <div className="flex justify-center mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
                            <p className="text-sm text-center text-gray-500">{service.description}</p>
                            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                {/* <p className="text-white text-lg">Learn More</p> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Service;
