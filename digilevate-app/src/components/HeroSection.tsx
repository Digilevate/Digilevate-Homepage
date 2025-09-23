import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
    return (
        <section id="home" className="py-24 px-4 sm:py-32 lg:py-40 min-h-screen flex items-center relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#2d9bf0] rounded-full opacity-10 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4db8ff] rounded-full opacity-5 blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#2d9bf0] to-transparent rounded-full opacity-5 blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <span className="text-gray-300">
                                <a href="https://share.google/KStDexyWjx9ltmwPe" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors duration-200"> Trusted by 10+ businesses </a>
                            </span>
                        </div>
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                                We Build Websites That <span className="gradient-text">Elevate</span> Your Business
                            </h1>
                            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl">
                                Stunning design, powerful performance, and measurable results. We are Digilevate, your partners in digital growth and online success.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#contact" className="w-full sm:w-auto bg-[#2d9bf0] hover:bg-[#4db8ff] text-white px-8 py-4 rounded-lg text-lg font-semibold hover-glow transition-all duration-300 group inline-flex items-center justify-center">
                                Get Your Free Quote
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a href="#work" className="w-full sm:w-auto border border-[#2d9bf0] text-[#2d9bf0] hover:bg-[#2d9bf0] hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 group inline-flex items-center justify-center">
                                <Play className="w-5 h-5 mr-2" />
                                View Our Work
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">50+</div>
                                <div className="text-gray-400 text-sm">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">98%</div>
                                <div className="text-gray-400 text-sm">Success Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold gradient-text">24/7</div>
                                <div className="text-gray-400 text-sm">Support</div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10">
                            <div className="glass-effect rounded-2xl p-8 hover-glow transition-all duration-500">
                                <div className="space-y-6">
                                    <FeatureItem title="Custom Design" description="Tailored to your brand" />
                                    <FeatureItem title="Mobile Responsive" description="Perfect on all devices" />
                                    <FeatureItem title="SEO Optimized" description="Built for search engines" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FeatureItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
    <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-gradient-to-br from-[#2d9bf0] to-[#4db8ff] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-lg">✓</span>
        </div>
        <div>
            <h3 className="text-white font-semibold">{title}</h3>
            <p className="text-gray-400 text-sm">{description}</p>
        </div>
    </div>
);

export default HeroSection;
