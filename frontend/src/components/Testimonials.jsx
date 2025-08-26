import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Raj Mehta",
            role: "CEO at PCBuildPro",
            avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
            rating: 5,
            content: "Vinit built our custom PC e-commerce website from scratch with flawless performance and modern design. Our sales doubled within 3 months."
        },
        {
            id: 2,
            name: "Ananya Verma",
            role: "Tech Enthusiast & Blogger",
            avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
            rating: 5,
            content: "The PC configurator tool Vinit developed is outstanding. It’s user-friendly, fast, and has become the favorite feature for my readers."
        },
        {
            id: 3,
            name: "Karan Singh",
            role: "Gamer & Streamer",
            avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=400",
            rating: 5,
            content: "Vinit helped me set up a gaming PC build showcase website that not only looks stunning but also loads incredibly fast."
        }
    ];

    return (
        <section className="py-20 bg-white fade-in" id="testimonials">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Client Testimonials
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Hear what my clients have to say about working with me on PC builds, e-commerce, and custom web development.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-gray-50 rounded-2xl p-8 relative shadow hover:shadow-lg transition-shadow duration-300">
                            <Quote className="text-blue-600 mb-4" size={32} />

                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                                ))}
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gray-50 rounded-2xl p-12 shadow">
                    <div className="max-w-md mx-auto">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Quote className="text-blue-600" size={24} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            Your testimonial could be here
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Have I worked on your project? I’d love to feature your feedback here.
                        </p>
                        <button
                            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                        >
                            Share Your Experience
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
