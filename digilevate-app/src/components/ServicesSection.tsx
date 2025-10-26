import React from 'react';
import { SERVICES } from '../constants';
import { Service } from '../types';
import { Check, Star, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ServicesSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section id="services" className="py-24 px-4 sm:py-32 relative">
            <div className="absolute top-20 right-20 w-64 h-64 bg-[#2d9bf0] rounded-full opacity-5 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('services_section.title_part1')} <span className="gradient-text">{t('services_section.title_part2')}</span>{t('services_section.title_part3')}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        {t('services_section.description')}
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

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const { t } = useTranslation();
    return (
        <div className={`glass-effect rounded-2xl p-8 transition-all duration-300 relative flex flex-col ${service.popular ? 'ring-2 ring-[#2d9bf0] scale-105 hover:ring-4' : 'hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2d9bf0]/20'}`}>
            {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#2d9bf0] text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {t('services_section.most_popular')}
                </div>
            )}

            <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">{t(`services.${service.id === 1 ? 'starter_site' : service.id === 2 ? 'business_pro' : 'e_commerce'}.name`)}</h3>
                <p className="text-gray-400 mb-4 h-10">{t(`services.${service.id === 1 ? 'starter_site' : service.id === 2 ? 'business_pro' : 'e_commerce'}.tagline`)}</p>
                <div className="text-4xl font-bold gradient-text mb-2">
                    {service.id === 1 ? (
                        t('services_section.from') + ` CHF ${service.price_from.toLocaleString('de-CH')}.-`
                    ) : (
                        `CHF ${service.price_from.toLocaleString('de-CH')}.-`
                    )}
                </div>
                <p className="text-sm text-gray-400">{t(`services.${service.id === 1 ? 'starter_site' : service.id === 2 ? 'business_pro' : 'e_commerce'}.ideal_for`)}</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((_, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-[#2d9bf0] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300">{t(`services.${service.id === 1 ? 'starter_site' : service.id === 2 ? 'business_pro' : 'e_commerce'}.features.${idx}`)}</span>
                    </li>
                ))}
            </ul>

            <a href="#contact" className={`w-full text-center group py-3 px-4 rounded-lg transition-all duration-300 inline-block mt-auto ${
                service.popular
                    ? 'bg-[#2d9bf0] hover:bg-[#4db8ff] text-white'
                    : 'bg-transparent border border-[#2d9bf0] text-[#2d9bf0] hover:bg-[#2d9bf0] hover:text-white'
            }`}>
                {t('services_section.get_started')}
                <ArrowRight className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
    );
};


const SupportSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="glass-effect rounded-2xl p-8 lg:p-12 text-center hover-glow transition-all duration-500">
            <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {t('services_section.support_title')}
                </h3>
                <p className="text-lg sm:text-xl text-gray-300 mb-8">
                    {t('services_section.support_description')}
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <SupportItem title={t('services_section.support_item1_title')} description={t('services_section.support_item1_description')} />
                    <SupportItem title={t('services_section.support_item2_title')} description={t('services_section.support_item2_description')} />
                    <SupportItem title={t('services_section.support_item3_title')} description={t('services_section.support_item3_description')} />
                </div>

                <a href="#contact" className="bg-[#2d9bf0] hover:bg-[#4db8ff] text-white px-8 py-4 rounded-lg hover-glow transition-all duration-300 group inline-flex items-center text-lg font-semibold">
                    {t('services_section.learn_more_support')}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </div>
    );
};

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
