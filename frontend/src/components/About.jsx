import React from "react";
import { Download, Target, Heart } from "lucide-react";

const About = () => {
    const handleDownloadResume = () => {
        const link = document.createElement("a");
        link.href = "/resume/Vinit_Shah_Resume.pdf"; // path to your PDF file
        link.download = "Vinit_Shah_Resume.pdf";
        link.click();
    };

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Get to know more about my journey, passion, and what drives me as a developer
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side - Bio */}
                    <div className="space-y-6">
                        {/* My Story */}
                        <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                                <Heart className="text-blue-600 mr-3" size={24} />
                                My Story
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                I'm a passionate full-stack developer with over 3 years of
                                experience building web applications that solve real-world
                                problems. My journey started with curiosity about how websites
                                work, and it has evolved into a deep love for creating
                                efficient, user-friendly applications.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                When I'm not coding, you can find me exploring new technologies,
                                contributing to open-source projects, or sharing knowledge with
                                the developer community. I believe in continuous learning and
                                staying updated with the latest industry trends.
                            </p>
                        </div>

                        {/* Mission Statement */}
                        <div className="bg-blue-50 rounded-2xl p-8 shadow-sm">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                                <Target className="text-blue-600 mr-3" size={24} />
                                Mission Statement
                            </h3>
                            <p className="text-gray-700 leading-relaxed">
                                My mission is to bridge the gap between complex technical
                                requirements and intuitive user experiences. I strive to build
                                scalable, maintainable applications that not only meet business
                                objectives but also delight users with their simplicity and
                                performance.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Stats & Resume */}
                    <div className="space-y-8">
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { number: "50+", label: "Projects Completed" },
                                { number: "3+", label: "Years Experience" },
                                { number: "25+", label: "Happy Clients" },
                                { number: "24/7", label: "Support" },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center"
                                >
                                    <div className="text-3xl font-bold text-blue-600 mb-2">
                                        {stat.number}
                                    </div>
                                    <div className="text-gray-600">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* Resume CTA */}
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">
                                Ready to work together?
                            </h3>
                            <p className="mb-6 opacity-90">
                                Download my resume to see my full experience and qualifications
                            </p>
                            <button
                                onClick={handleDownloadResume}
                                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold shadow-md"
                            >
                                <Download size={20} className="mr-2" />
                                Download Resume
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
export default About