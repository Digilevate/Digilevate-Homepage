import React from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import { Check, Star, ArrowRight } from 'lucide-react';

const ServicesSection: React.FC = () => {
    return (
        <section id="services" className="py-24 px-4 sm:py-32 relative">
            <div className="absolute top-20 right-20 w-64 h-64 bg-[#2d9bf0] rounded-full opacity-5 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Find the Perfect <span className="gradient-text">Plan</span> for You
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        From stunning starter sites to full e-commerce solutions, we have the perfect package to elevate your digital presence and grow your business.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {SERVICES.map((service: Service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
                
                <SupportSection />
            </div>
        </section>
    );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className={`glass-effect rounded-2xl p-8 hover-glow transition-all duration-500 relative ${service.popular ? 'ring-2 ring-[#2d9bf0] scale-105' : ''}`}>
        {service.popular && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2d9bf0] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                <Star className="w-4 h-4 mr-1 fill-current" />
                Most Popular
            </div>
        )}

        <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
            <p className="text-gray-400 mb-4">{service.tagline}</p>
            <div className="text-4xl font-bold gradient-text mb-2">
                ${service.price_from.toLocaleString()}
            </div>
            <p className="text-sm text-gray-400">{service.ideal_for}</p>
        </div>

        <ul className="space-y-3 mb-8">
            {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-[#2d9bf0] rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-gray-300">{feature}</span>
                </li>
            ))}
        </ul>

        <a href="#contact" className={`w-full text-center group py-3 px-4 rounded-lg transition-all duration-300 inline-block ${
            service.popular
                ? 'bg-[#2d9bf0] hover:bg-[#4db8ff] text-white'
                : 'bg-transparent border border-[#2d9bf0] text-[#2d9bf0] hover:bg-[#2d9bf0] hover:text-white'
        }`}>
            Get Started
            <ArrowRight className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
        </a>
    </div>
);


const SupportSection: React.FC = () => (
     <div className="glass-effect rounded-2xl p-8 lg:p-12 text-center hover-glow transition-all duration-500">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Ongoing Support & Growth
        </h3>
        <p className="text-lg sm:text-xl text-gray-300 mb-8">
          Keep your website secure, updated, and performing at its best with our monthly maintenance service.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <SupportItem title="Website Maintenance" description="Regular updates and security patches" />
          <SupportItem title="Performance Monitoring" description="Monthly reports and optimizations" />
          <SupportItem title="Priority Support" description="Quick response for any issues" />
        </div>

        <a href="#contact" className="bg-[#2d9bf0] hover:bg-[#4db8ff] text-white px-8 py-4 rounded-lg hover-glow transition-all duration-300 group inline-flex items-center text-lg font-semibold">
          Learn More About Support
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
);

const SupportItem: React.FC<{title: string, description: string}> = ({title, description}) => (
    <div className="text-center">
        <div className="w-16 h-16 bg-gradient-to-br from-[#2d9bf0] to-[#4db8ff] rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-white" />
        </div>
        <h4 className="text-white font-semibold mb-2">{title}</h4>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);


export default ServicesSection;
