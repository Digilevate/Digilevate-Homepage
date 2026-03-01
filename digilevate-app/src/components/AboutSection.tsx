import React from 'react';
import { ArrowRight, Linkedin, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
            {/* Standard Background Element from main site style */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2d9bf0] rounded-full opacity-5 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Mission & Info */}
                    <div className="lg:col-span-12 text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
                            {t('about_section.title_part1')} <span className="gradient-text">{t('about_section.title_part2')}</span>{t('about_section.title_part3')}
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            {t('about_section.description')}
                        </p>
                    </div>

                    <div className="lg:col-span-5 space-y-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="space-y-6">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white border-l-4 border-[#2d9bf0] pl-6">
                                {t('about_section.why_title')}
                            </h3>
                            <div className="space-y-6 text-gray-300">
                                <p className="text-lg leading-relaxed">
                                    {t('about_section.why_description1')}
                                </p>
                                <p className="text-lg leading-relaxed">
                                    {t('about_section.why_description2')}
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <ListItem text={t('about_section.list_item1')} />
                            <ListItem text={t('about_section.list_item2')} />
                            <ListItem text={t('about_section.list_item3')} />
                        </div>
                        <div className="pt-6">
                            <a href="#contact" className="bg-[#2d9bf0] hover:bg-[#4db8ff] text-white px-8 py-4 rounded-xl text-lg font-bold hover-glow transition-all duration-300 group inline-flex items-center">
                                {t('about_section.start_project')}
                                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Founder Cards */}
                    <div className="lg:col-span-7 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="glass-effect rounded-2xl p-6 sm:p-10 space-y-12 border border-white/5 relative bg-black/10">
                            <TeamProfile
                                image="/loris-imbrogno.jpg"
                                name="Loris Imbrogno"
                                role={t('founder_profile.loris_role')}
                                jobTitle={t('founder_profile.loris_job_title')}
                                description={t('founder_profile.loris_description')}
                                linkedinUrl="https://www.linkedin.com/in/loris-imbrogno-7861942a4"
                                emailAddress="loris.imbrogno@digilevate.com"
                            />
                            <div className="h-px bg-gradient-to-r from-transparent via-[#2d9bf0]/20 to-transparent"></div>
                            <TeamProfile
                                image="/alessio-fano.jpg"
                                name="Alessio Fano"
                                role={t('founder_profile.alessio_role')}
                                jobTitle={t('founder_profile.alessio_job_title')}
                                description={t('founder_profile.alessio_description')}
                                linkedinUrl="https://www.linkedin.com/in/alessio-giuseppe-fano/"
                                emailAddress="alessio.fano@digilevate.com"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ListItem: React.FC<{ text: string }> = ({ text }) => (
    <div className="flex items-center space-x-4">
        <div className="w-2 h-2 bg-[#2d9bf0] rounded-full flex-shrink-0 shadow-[0_0_10px_#2d9bf0]"></div>
        <span className="text-gray-300 font-medium">{text}</span>
    </div>
);

interface TeamProfileProps {
    image: string;
    name: string;
    role: string;
    jobTitle: string;
    description: string;
    linkedinUrl: string;
    emailAddress: string;
}

const TeamProfile: React.FC<TeamProfileProps> = ({ image, name, role, jobTitle, description, linkedinUrl, emailAddress }) => {
    const { t } = useTranslation();
    const [imageError, setImageError] = React.useState(false);

    const company = jobTitle.split(' - ')[0];
    const isGoogle = company.toLowerCase().includes('google');
    const isSwisscom = company.toLowerCase().includes('swisscom');

    return (
        <div className="flex flex-col items-center text-center gap-6 sm:flex-row sm:items-start sm:text-left sm:gap-10 group">
            <div className="w-32 h-32 sm:w-44 sm:h-44 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-[#2d9bf0]/20 group-hover:border-[#2d9bf0] transition-all duration-500 shadow-2xl relative">
                {!imageError ? (
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                        onError={() => setImageError(true)}
                    />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#2d9bf0] to-[#4db8ff] flex items-center justify-center">
                        <span className="text-4xl font-bold text-white">{name.charAt(0)}</span>
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex-1 space-y-4">
                <div>
                    <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-[#2d9bf0] transition-colors">{name}</h4>
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 mb-3">
                        <p className="text-[#2d9bf0] font-bold text-xs sm:text-sm uppercase tracking-widest">{role}</p>
                        <div className={`px-4 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest flex items-center ${isGoogle ? 'bg-[#4285F4]/10 border-[#4285F4]/30 text-[#4285F4]' : isSwisscom ? 'bg-[#2d9bf0]/10 border-[#2d9bf0]/30 text-[#2d9bf0]' : 'bg-[#2d9bf0]/10 border-[#2d9bf0]/30 text-[#2d9bf0]'}`}>
                            <span className="w-2 h-2 rounded-full bg-current mr-2 animate-pulse"></span>
                            {company}
                        </div>
                    </div>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed italic relative">
                    <span className="text-[#2d9bf0] text-3xl absolute -left-5 -top-2 opacity-10">"</span>
                    {description}
                </p>
                <div className="flex items-center justify-center sm:justify-start space-x-6 pt-2">
                    <a
                        href={linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#2d9bf0] transition-colors"
                    >
                        <Linkedin className="w-4 h-4 mr-2" /> {t('founder_profile.linkedin')}
                    </a>
                    <a
                        href={`mailto:${emailAddress}`}
                        className="flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#2d9bf0] transition-colors"
                    >
                        <Mail className="w-4 h-4 mr-2" /> {t('founder_profile.email')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
