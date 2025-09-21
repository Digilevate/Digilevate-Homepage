import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-24 px-4 sm:py-32 relative">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#2d9bf0] rounded-full opacity-5 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#4db8ff] rounded-full opacity-5 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        What Our <span className="gradient-text">Clients</span> Say
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        Don't just take our word for it. Here's what our clients have to say about working with Digilevate.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>

                <Stats />
            </div>
        </section>
    );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="glass-effect rounded-2xl p-8 hover-glow transition-all duration-500 relative">
        <div className="absolute -top-4 left-8">
            <div className="w-8 h-8 bg-[#2d9bf0] rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-white" />
            </div>
        </div>

        <div className="space-y-6 flex flex-col h-full">
            <div className="flex items-center space-x-1 pt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
            </div>
            
            <p className="text-gray-300 leading-relaxed text-lg flex-grow">
                "{testimonial.content}"
            </p>

            <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 object-cover rounded-full"
                />
                <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role} at {testimonial.company}</p>
                </div>
            </div>
        </div>
    </div>
);

const Stats: React.FC = () => (
    <div className="text-center mt-16">
        <div className="glass-effect rounded-2xl p-8 inline-block">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                <StatItem value="98%" label="Client Satisfaction" />
                <div className="w-24 h-px bg-gray-700 md:w-px md:h-12"></div>
                <StatItem value="50+" label="Happy Clients" />
                <div className="w-24 h-px bg-gray-700 md:w-px md:h-12"></div>
                <StatItem value="4.9" label="Average Rating" />
            </div>
        </div>
    </div>
);

const StatItem: React.FC<{ value: string, label: string }> = ({ value, label }) => (
    <div className="text-center px-4">
        <div className="text-3xl font-bold gradient-text">{value}</div>
        <div className="text-gray-400 text-sm">{label}</div>
    </div>
);

export default TestimonialsSection;
