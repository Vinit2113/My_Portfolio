import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react'
import React from 'react'
import profileImage from '../assets/profile.jpg'

const Home = () => {

    const scrollToAbout = () => {
        document.querySelector('#about')?.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <>
            <div id='home' className='min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 pt-16 relative'>

                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20'>

                    <div className='flex flex-col lg:flex-row items-center justify-between gap-12'>

                        {/* Left Content */}
                        <div className='flex-1 text-center lg:text-left'>

                            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
                                Hi, I'm <span
                                    className='text-[#2563eb]'>Vinit Shah</span>
                            </h1>

                            <p className='text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed' >Full Stack Developer | Building Real-world Web Apps</p>

                            <p className='text-lg text-gray-600 mb-10 max-w-2xl'>Pasionate about creating efficient, scalable web applications with modern technologies. I turn complex problems into simple, beautiful designs.</p>

                            {/* Buttons */}
                            <div className='flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start'>

                                <button
                                    onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: 'smooth' })} className='px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl hover:cursor-pointer'>View My Work</button>

                                <button onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })} className='px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold hover:cursor-pointer' >Get In Touch</button>
                            </div>

                            {/* Social Icons */}
                            <div className="flex space-x-6 justify-center lg:justify-start">
                                <a
                                    href="https://github.com/Vinit2113"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/vinit-shah-39552b1a1/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    <Linkedin size={24} />
                                </a>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=vinitshah2213@gmail.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
                                >
                                    <Mail size={24} />
                                </a>

                            </div>

                        </div>

                        {/* Right Image */}
                        <div className="flex-1 max-w-md lg:max-w-lg">
                            <div className="relative">
                                <div className="w-80 h-80 sm:w-96 sm:h-96 mx-auto rounded-full overflow-hidden shadow-2xl border-8 border-white">
                                    <img
                                        src={profileImage}
                                        alt="Vinit Shah - Full Stack Developer"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-white text-2xl">💻</span>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Scroll Down Arrow */}

                    <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
                        <button onClick={scrollToAbout} className='text-gray-400 hover:text-blue-600 transition-colors duration-200 hover:cursor-pointer' >
                            <ChevronDown size={32} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home