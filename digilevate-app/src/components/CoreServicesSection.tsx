import React from 'react';
import { FaPalette, FaCode, FaChartLine, FaTools } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const CoreServicesSection: React.FC = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: <FaPalette className="w-8 h-8 text-[#2d9bf0]" />,
            titleKey: "core_services_section.service1_title",
            descriptionKey: "core_services_section.service1_description"
        },
        {
            icon: <FaCode className="w-8 h-8 text-[#2d9bf0]" />,
            titleKey: "core_services_section.service2_title",
            descriptionKey: "core_services_section.service2_description"
        },
        {
            icon: <FaChartLine className="w-8 h-8 text-[#2d9bf0]" />,
            titleKey: "core_services_section.service3_title",
            descriptionKey: "core_services_section.service3_description"
        },
        {
            icon: <FaTools className="w-8 h-8 text-[#2d9bf0]" />,
            titleKey: "core_services_section.service4_title",
            descriptionKey: "core_services_section.service4_description"
        }
    ];

    return (
        <section id="core-services" className="pt-0 pb-16 sm:pt-24 sm:pb-24 relative">            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                    {t('core_services_section.title_part1')} <span className="gradient-text">{t('core_services_section.title_part2')}</span>
                </h2>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                    {t('core_services_section.description')}
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, index) => (
                    <div key={index} className="group relative">
                        {/* Inner Glow Effect */}
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2d9bf0]/40 to-[#4db8ff]/40 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500"></div>

                        <div className="relative glass-effect rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col items-start text-left h-full border border-white/5">
                            <div className="w-16 h-16 bg-[#2d9bf0]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-500">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{t(service.titleKey)}</h3>
                            <p className="text-gray-300 leading-relaxed text-sm">{t(service.descriptionKey)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
};

export default CoreServicesSection;