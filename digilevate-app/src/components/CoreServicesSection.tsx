import React from 'react';
import { FaPalette, FaCode, FaChartLine, FaTools } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const CoreServicesSection: React.FC = () => {
    const { t } = useTranslation();

    const services = [
        {
            icon: <FaPalette className="text-4xl text-[#2d9bf0]" />,
            titleKey: "core_services_section.service1_title",
            descriptionKey: "core_services_section.service1_description"
        },
        {
            icon: <FaCode className="text-4xl text-[#2d9bf0]" />,
            titleKey: "core_services_section.service2_title",
            descriptionKey: "core_services_section.service2_description"
        },
        {
            icon: <FaChartLine className="text-4xl text-[#2d9bf0]" />,
            titleKey: "core_services_section.service3_title",
            descriptionKey: "core_services_section.service3_description"
        },
        {
            icon: <FaTools className="text-4xl text-[#2d9bf0]" />,
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
                        <div key={index} className="glass-effect rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2d9bf0]/20 flex flex-col items-center text-center">
                            <div className="mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{t(service.titleKey)}</h3>
                            <p className="text-gray-300">{t(service.descriptionKey)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreServicesSection;