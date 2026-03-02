import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Monitor,
    Code,
    Search,
    Settings,
    Bot,
    Zap,
    Calendar,
    ArrowRight,
    Network
} from 'lucide-react';

const ExpertiseSection: React.FC = () => {
    const { t } = useTranslation();

    const coreServices = [
        {
            icon: <Monitor className="w-6 h-6 text-[#2d9bf0]" />,
            titleKey: "core_services_section.service1_title",
            descriptionKey: "core_services_section.service1_description",
            span: "lg:col-span-4",
            badge: "UI/UX"
        },
        {
            icon: <Code className="w-6 h-6 text-[#2d9bf0]" />,
            titleKey: "core_services_section.service2_title",
            descriptionKey: "core_services_section.service2_description",
            span: "lg:col-span-4",
            badge: "Performance"
        },
        {
            icon: <Search className="w-6 h-6 text-[#2d9bf0]" />,
            titleKey: "core_services_section.service3_title",
            descriptionKey: "core_services_section.service3_description",
            span: "lg:col-span-4",
            badge: "SEO"
        }
    ];

    const aiUseCases = [
        {
            icon: <Bot className="w-5 h-5 text-[#2d9bf0]" />,
            title: t('ai_automation.use_case_1_title'),
            desc: t('ai_automation.use_case_1_desc')
        },
        {
            icon: <Zap className="w-5 h-5 text-[#2d9bf0]" />,
            title: t('ai_automation.use_case_2_title'),
            desc: t('ai_automation.use_case_2_desc')
        },
        {
            icon: <Calendar className="w-5 h-5 text-[#2d9bf0]" />,
            title: t('ai_automation.use_case_3_title'),
            desc: t('ai_automation.use_case_3_desc')
        }
    ];

    return (
        <section id="services" className="py-24 sm:py-32 relative overflow-hidden">
            {/* SEO Metadata - Visually Hidden */}
            <div className="sr-only">
                <h2>{t('unified_expertise.title_part1')} {t('unified_expertise.title_part2')}</h2>
                <p>{t('unified_expertise.meta_description')}</p>
            </div>

            {/* Standard Background Element mirroring AboutSection */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2d9bf0] rounded-full opacity-5 blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('unified_expertise.title_part1')} <span className="gradient-text">{t('unified_expertise.title_part2')}</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        {t('services_section.description')}
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">

                    {/* Standard Core Service Cards (NOW AT TOP) */}
                    {coreServices.map((service, index) => (
                        <div key={index} className={`${service.span} group relative`}>
                            <div className="relative glass-effect rounded-2xl p-8 flex flex-col h-full hover-glow border border-white/5 transition duration-500 overflow-hidden">
                                <div className="absolute top-4 right-4 bg-[#2d9bf0]/10 px-2 py-0.5 rounded text-[10px] font-bold text-[#2d9bf0] uppercase tracking-wider border border-[#2d9bf0]/20">
                                    {service.badge}
                                </div>
                                <div className="w-12 h-12 bg-[#2d9bf0]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{t(service.titleKey)}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{t(service.descriptionKey)}</p>
                                <a href="#contact" className="flex items-center text-[#2d9bf0] font-bold text-sm hover:text-[#4db8ff] transition-colors" aria-label={`${t(service.titleKey)} - ${t('ai_automation.learn_more')}`}>
                                    {t('ai_automation.learn_more')} <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    ))}

                    <div className="lg:col-span-8 group relative flex flex-col">
                        <div className="relative glass-effect rounded-2xl p-8 sm:p-10 flex flex-col h-full hover-glow border border-white/5 overflow-hidden">
                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-8">
                                    <div className="flex items-center gap-5">
                                        <div className="w-16 h-16 bg-[#2d9bf0]/10 rounded-2xl flex items-center justify-center border border-[#2d9bf0]/20 transition duration-500">
                                            <Network className="w-8 h-8 text-[#2d9bf0]" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-none">{t('ai_automation.title_part2')}</h3>
                                            <p className="text-[#2d9bf0] font-bold text-[10px] uppercase tracking-[0.2em] mt-2">{t('ai_automation.badge')}</p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:flex items-center gap-2 bg-[#2d9bf0]/10 border border-[#2d9bf0]/20 px-3 py-1 rounded-full">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2d9bf0] opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2d9bf0]"></span>
                                        </span>
                                        <span className="text-[10px] font-bold text-[#2d9bf0] uppercase tracking-wider">System Live</span>
                                    </div>
                                </div>

                                <p className="text-gray-300 text-lg mb-10 max-w-2xl leading-relaxed">
                                    {t('ai_automation.description')}
                                </p>

                                {/* Flattened AI Use Cases - Stacked on Mobile */}
                                <div className="grid sm:grid-cols-3 gap-6 mb-10">
                                    {aiUseCases.map((useCase, idx) => (
                                        <div key={idx} className="flex sm:flex-col gap-4 sm:gap-0 items-start">
                                            <div className="w-10 h-10 bg-[#2d9bf0]/10 rounded-xl flex items-center justify-center sm:mb-4 flex-shrink-0">
                                                {useCase.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-bold mb-1 text-sm">{useCase.title}</h4>
                                                <p className="text-gray-400 text-xs leading-relaxed">{useCase.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 border-t border-white/5 mt-auto flex flex-wrap items-center gap-6">
                                    <a href="#contact" className="inline-flex items-center text-white bg-[#2d9bf0] hover:bg-[#4db8ff] px-8 py-3 rounded-xl font-bold transition-all duration-300 group/btn">
                                        {t('ai_automation.cta_button')}
                                        <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Support Feature (Maintenance) - Spans 4 Columns */}
                    <div className="lg:col-span-4 group relative">
                        <div className="relative glass-effect rounded-2xl p-8 flex flex-col h-full hover-glow border border-white/5 items-center text-center overflow-hidden">
                            <div className="w-16 h-16 bg-[#2d9bf0]/10 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                                <Settings className="w-8 h-8 text-[#2d9bf0]" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 tracking-tight">{t('core_services_section.service4_title')}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-10 flex-grow">
                                {t('core_services_section.service4_description')}
                            </p>
                            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2d9bf0]/20 to-transparent mb-8"></div>
                            <div className="space-y-4 w-full text-left mb-8">
                                {[
                                    'contact_section.free_consultation',
                                    'contact_section.fast_response_time',
                                    'contact_section.transparent_pricing'
                                ].map((key) => (
                                    <div key={key} className="flex items-center justify-between text-xs font-semibold text-gray-400 hover:text-white transition-colors">
                                        <span className="tracking-wide uppercase">{t(key)}</span>
                                        <a href="#contact" className="inline-flex items-center text-[#2d9bf0] font-bold text-sm hover:text-[#4db8ff] transition-colors group/link mt-auto">
                                            {t('ai_automation.learn_more_arrow')}
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExpertiseSection;
