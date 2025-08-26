import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product catalog, shopping cart, and payment integration.",
            image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
            tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            category: "Web App",
            date: "2024"
        },
        {
            id: 2,
            title: "Task Management Dashboard",
            description: "Project management tool with real-time collaboration, task tracking, and team communication features. Built with React and Firebase.",
            image: "https://images.pexels.com/photos/3584994/pexels-photo-3584994.jpeg?auto=compress&cs=tinysrgb&w=800",
            tech: ["React", "Firebase", "Material-UI", "Socket.io"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            category: "Dashboard",
            date: "2024"
        },
        {
            id: 3,
            title: "Weather Forecast App",
            description: "Modern weather application with location-based forecasts, interactive maps, and detailed weather analytics. Responsive design for all devices.",
            image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
            tech: ["React", "API Integration", "Chart.js", "Geolocation"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            category: "Mobile App",
            date: "2023"
        },
        {
            id: 4,
            title: "Social Media Analytics",
            description: "Analytics dashboard for social media metrics with data visualization, reporting features, and automated insights generation.",
            image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
            tech: ["Next.js", "PostgreSQL", "D3.js", "REST API"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            category: "Analytics",
            date: "2023"
        },
        {
            id: 5,
            title: "Real Estate Platform",
            description: "Comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management system.",
            image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
            tech: ["React", "Express", "MySQL", "AWS S3", "Maps API"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            category: "Web Platform",
            date: "2023"
        },
        {
            id: 6,
            title: "Learning Management System",
            description: "Online learning platform with course creation, student progress tracking, quizzes, and video streaming capabilities.",
            image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
            tech: ["Vue.js", "Laravel", "MySQL", "Video.js", "PayPal API"],
            githubUrl: "https://github.com",
            liveUrl: "https://example.com",
            category: "Education",
            date: "2022"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A showcase of my recent work, demonstrating my skills in full-stack development and problem-solving
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    {project.category}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-semibold text-gray-900">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <Calendar size={16} className="mr-1" />
                                        {project.date}
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-4">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                                    >
                                        <Github size={16} className="mr-2" />
                                        Code
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                                    >
                                        <ExternalLink size={16} className="mr-2" />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
