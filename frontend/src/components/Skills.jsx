import React from 'react';
import { Code, Database, Globe, Smartphone, GitBranch, Settings } from 'lucide-react';

const Skills = () => {
    const skillCategories = [
        {
            icon: <Globe className="text-blue-600" size={32} />,
            title: "Frontend Development",
            skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"]
        },
        {
            icon: <Database className="text-green-600" size={32} />,
            title: "Backend Development",
            skills: ["Node.js", "Express.js", "Python", "REST APIs", "GraphQL", "MongoDB"]
        },
        {
            icon: <Database className="text-purple-600" size={32} />,
            title: "Database & Cloud",
            skills: ["MySQL", "PostgreSQL", "Firebase", "AWS", "Docker", "Redis"]
        },
        {
            icon: <GitBranch className="text-orange-600" size={32} />,
            title: "Tools & DevOps",
            skills: ["Git", "GitHub", "VS Code", "Postman", "Webpack", "Jest"]
        },
        {
            icon: <Smartphone className="text-pink-600" size={32} />,
            title: "Mobile & UI/UX",
            skills: ["React Native", "Flutter", "Figma", "Adobe XD", "Responsive Design", "PWA"]
        },
        {
            icon: <Settings className="text-gray-600" size={32} />,
            title: "Other Technologies",
            skills: ["Linux", "Nginx", "CI/CD", "Microservices", "Socket.io", "JWT"]
        }
    ];

    const featuredSkills = [
        { name: "React", level: 95, color: "bg-blue-500" },
        { name: "Node.js", level: 90, color: "bg-green-500" },
        { name: "TypeScript", level: 88, color: "bg-blue-600" },
        { name: "MySQL", level: 85, color: "bg-orange-500" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
        { name: "Git", level: 90, color: "bg-red-500" }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50 fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Skills & Technologies
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="flex items-center mb-4">
                                {category.icon}
                                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                                    {category.title}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-700 transition-colors duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Featured Skills with Progress Bars */}
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
                        Core Competencies
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                        {featuredSkills.map((skill, index) => (
                            <div key={index} className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700 font-medium">{skill.name}</span>
                                    <span className="text-gray-500 text-sm">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                        className={`h-3 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
