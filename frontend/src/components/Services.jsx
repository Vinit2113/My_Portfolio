import React from 'react';
import { Code, Smartphone, Database, Palette, Globe, Zap } from 'lucide-react';

function Services() {
    const services = [
        {
            icon: <Globe className="text-blue-600" size={40} />,
            title: "Web Development",
            description: "Custom web applications built with modern frameworks like React, Next.js, and Vue.js. Responsive, fast, and SEO-optimized.",
            features: ["Responsive Design", "Performance Optimization", "SEO Implementation", "Cross-browser Compatibility"]
        },
        {
            icon: <Database className="text-green-600" size={40} />,
            title: "Backend Development",
            description: "Robust server-side solutions with Node.js, Express, and databases. RESTful APIs and microservices architecture.",
            features: ["REST API Development", "Database Design", "Authentication Systems", "Cloud Integration"]
        },
        {
            icon: <Smartphone className="text-purple-600" size={40} />,
            title: "Mobile App Development",
            description: "Cross-platform mobile applications using React Native and Flutter. Native performance with code reusability.",
            features: ["Cross-platform Development", "Native Performance", "App Store Deployment", "Push Notifications"]
        },
        {
            icon: <Palette className="text-pink-600" size={40} />,
            title: "UI/UX Design",
            description: "User-centered design approach creating intuitive interfaces. Wireframing, prototyping, and visual design.",
            features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
        },
        {
            icon: <Code className="text-orange-600" size={40} />,
            title: "Custom API Development",
            description: "Tailored API solutions for your business needs. GraphQL, REST, and real-time APIs with comprehensive documentation.",
            features: ["API Architecture", "Documentation", "Rate Limiting", "Version Management"]
        },
        {
            icon: <Zap className="text-yellow-600" size={40} />,
            title: "Performance Optimization",
            description: "Speed up your existing applications with performance audits, code optimization, and infrastructure improvements.",
            features: ["Code Optimization", "Bundle Size Reduction", "Database Optimization", "CDN Implementation"]
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-50 fade-in">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Services I Offer
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive development services to bring your ideas to life and help your business grow
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                        >
                            <div className="mb-6">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center text-gray-700">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to Start Your Project?
                    </h3>
                    <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                        Let's discuss your ideas and create something amazing together.
                        I'm here to help you build scalable and efficient solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
                        >
                            Get Started
                        </button>
                        <button
                            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 font-semibold"
                        >
                            View Portfolio
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Services;
