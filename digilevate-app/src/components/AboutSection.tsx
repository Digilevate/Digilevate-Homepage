import React from 'react';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-24 px-4 sm:py-32 relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#2d9bf0] to-transparent rounded-full opacity-5 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        Meet the <span className="gradient-text">Founders</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        Two passionate tech entrepreneurs on a mission to help businesses thrive in the digital world.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">Why We Started Digilevate</h3>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                We believe every business deserves a stunning digital presence. After years of working with companies that struggled with outdated websites and poor online visibility, we founded Digilevate to bridge that gap.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Our passion lies in combining cutting-edge technology with beautiful design to create websites that not only look incredible but drive real business results. We're not just building websites – we're building digital experiences that elevate brands.
                            </p>
                        </div>
                        <ul className="space-y-4">
                           <ListItem text="10+ years combined experience in web development" />
                           <ListItem text="Experts in modern web technologies and design trends" />
                           <ListItem text="Committed to delivering exceptional results" />
                        </ul>
                    </div>
                    <FoundersCard />
                </div>

                <div className="text-center">
                    <a href="#contact" className="bg-[#2d9bf0] hover:bg-[#4db8ff] text-white px-8 py-4 rounded-lg text-lg font-semibold hover-glow transition-all duration-300 group inline-flex items-center">
                        Start Your Project With Us
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

const ListItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-center space-x-4">
        <div className="w-3 h-3 bg-[#2d9bf0] rounded-full flex-shrink-0"></div>
        <span className="text-gray-300">{text}</span>
    </li>
);

const FoundersCard: React.FC = () => (
    <div className="glass-effect rounded-2xl p-8 hover-glow transition-all duration-500">
        <div className="space-y-8">
            <FounderProfile
                initial="L"
                name="Loris Imbrogno"
                role="Co-Founder & Lead Developer"
                jobTitle="Software Engineering Apprentice in 3rd Year at Google"
                description="Full-stack developer with expertise in React, Node.js, and modern web technologies. Passionate about creating scalable, performant web applications."
                linkedinUrl="https://www.linkedin.com/in/loris-imbrogno-7861942a4"
                emailAddress="loris.imbrogno@digilevate.com"
            />
            <div className="h-px bg-gray-700"></div>
            <FounderProfile
                initial="A"
                name="Alessio Fano"
                role="Co-Founder & Creative Director"
                jobTitle="Software Engineering Apprentice in 3rd Year at Swisscom"
                description="UI/UX designer and creative strategist with an eye for detail and user experience. Specializes in creating beautiful, conversion-focused designs."
                linkedinUrl="https://www.linkedin.com/in/alessio-giuseppe-fano/"
                emailAddress="alessio.fano@digilevate.com"
            />
        </div>
    </div>
);

interface FounderProfileProps {
    initial: string;
    name: string;
    role: string;
    jobTitle: string;
    description: string;
    linkedinUrl: string;
    emailAddress: string;
}

const FounderProfile: React.FC<FounderProfileProps> = ({ initial, name, role, jobTitle, description, linkedinUrl, emailAddress }) => (
    <div className="flex flex-col items-center text-center gap-4 sm:flex-row sm:items-start sm:text-left sm:space-x-6 sm:gap-0">
        <div className="w-20 h-20 bg-gradient-to-br from-[#2d9bf0] to-[#4db8ff] rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-white">{initial}</span>
        </div>
        <div className="flex-1">
            <h4 className="text-xl font-bold text-white mb-1">{name}</h4>
            <p className="text-[#2d9bf0] font-medium mb-3">{role}</p>
            <p className="text-gray-300 text-base mb-2">{jobTitle}</p>
            <p className="text-gray-400 text-sm mb-4">{description}</p>
            <div className="flex items-center justify-center sm:justify-start space-x-4">
                <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm border border-[#2d9bf0] text-[#2d9bf0] hover:bg-[#2d9bf0] hover:text-white px-3 py-1.5 rounded-md transition-colors"
                >
                    <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                </a>
                <a
                    href={`mailto:${emailAddress}`}
                    className="flex items-center text-sm border border-[#2d9bf0] text-[#2d9bf0] hover:bg-[#2d9bf0] hover:text-white px-3 py-1.5 rounded-md transition-colors"
                >
                    <Mail className="w-4 h-4 mr-2" /> Email
                </a>
            </div>
        </div>
    </div>
);


export default AboutSection;