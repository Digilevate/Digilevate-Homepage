import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';

const placeholderProject1: Project = {
    id: 1,
    title: "Physiosteo Montagna",
    description: "A modern and professional website for a physiotherapy and osteopathy practice. The site clearly presents their services, team, and philosophy, with a focus on personalized and holistic treatment. It's designed to be welcoming and informative for new and existing patients.",
    image_url: "/physiosteo-montagna.jpg",
    live_url: "https://www.physiosteomontagna.ch/",
    client_name: "Physiosteo Montagna",
    category: "Redesign & Web Development", 
    technologies: ["Wix", "Figma"],
};

const placeholderProject2: Project = {
    id: 2,
    title: "Personal Portfolio Website",
    description: "A sleek and personal portfolio for a software engineer. It showcases his skills, experience, and a variety of projects in a clean and organized manner. The site acts as a digital resume and a testament to his passion for technology.",
    image_url: "/alessio-fano.png",
    live_url: "https://alessiofano.ch/",
    client_name: "Alessio Fano",
    category: "Web Design",
    technologies: ["Figma", "Next.js", "Vercel"],
};


const PortfolioSection: React.FC = () => {
    return (
        <section id="work" className="py-24 px-4 sm:py-32 relative">
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#4db8ff] rounded-full opacity-5 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Our Recent <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        Explore our portfolio of successful projects. Each website is crafted with precision, designed for performance, and built to convert visitors into customers.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <ProjectCard project={placeholderProject1} />
                    <ProjectCard project={placeholderProject2} />
                </div>
            </div>
        </section>
    );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <div className="glass-effect rounded-2xl overflow-hidden hover-glow transition-all duration-500 group animate-fade-in-up">
        <div className="relative overflow-hidden h-48">
            <img 
                src={project.image_url} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a2a38] via-transparent to-transparent opacity-60"></div>
            
            {project.live_url && (
                <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm border border-white/30 text-white hover:bg-[#2d9bf0] transition-all duration-300 p-2 rounded-md">
                    <ExternalLink className="w-4 h-4" />
                </a>
            )}
        </div>
        
        <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-white group-hover:text-[#2d9bf0] transition-colors">
                    {project.title}
                </h3>
                <span className="bg-[#2d9bf0]/20 text-[#2d9bf0] border border-[#2d9bf0]/30 px-2 py-1 rounded-md text-xs font-semibold flex-shrink-0">
                    {project.category}
                </span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed h-20">
                {project.description}
            </p>
            
            <div className="flex flex-col items-start gap-4 pt-4 border-t border-gray-700 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500">{project.client_name}</span>
                <div className="flex items-center flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="text-xs border border-gray-600 text-gray-400 px-2 py-1 rounded-full">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default PortfolioSection;