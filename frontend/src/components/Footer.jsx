import React from 'react';
import { Heart, Mail, MapPin, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToSection = (href) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Services', href: '#services' },
        { label: 'Contact', href: '#contact' }
    ];

    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand and Description */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-blue-400">Vinit Shah</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Full Stack Developer passionate about creating efficient, scalable web applications
                            with modern technologies. Let's build something amazing together.
                        </p>
                        <div className="flex items-center text-gray-300">
                            <MapPin size={16} className="mr-2" />
                            Mumbai, India
                        </div>
                        <div className="flex items-center text-gray-300">
                            <Mail size={16} className="mr-2" />
                            <a
                                href="mailto:vinitshah2213@gmail.com"
                                className="hover:text-blue-400 transition-colors duration-200"
                            >
                                vinitshah2213@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <div className="grid grid-cols-2 gap-2">
                            {quickLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => scrollToSection(link.href)}
                                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Services</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Web Development</li>
                            <li>Backend Development</li>
                            <li>API Integration</li>
                            <li>UI/UX Design</li>
                            <li>Performance Optimization</li>
                            <li>Custom PC Building</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center text-gray-300 mb-4 md:mb-0">
                            <span>© {new Date().getFullYear()} Vinit Shah. Made with</span>
                            <Heart className="text-red-500 mx-2" size={16} />
                            <span>in India</span>
                        </div>

                        <button
                            onClick={scrollToTop}
                            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp size={16} className="mr-2" />
                            Back to Top
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
