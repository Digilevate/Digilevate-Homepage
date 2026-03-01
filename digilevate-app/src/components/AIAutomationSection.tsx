import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bot, Zap, Calendar, ArrowRight, Sparkles } from 'lucide-react';

const AIAutomationSection: React.FC = () => {
    const { t } = useTranslation();

    const useCases = [
        {
            title: t('ai_automation.use_case_1_title'),
            desc: t('ai_automation.use_case_1_desc'),
            icon: <Bot className="w-8 h-8 text-[#2d9bf0]" />,
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            title: t('ai_automation.use_case_2_title'),
            desc: t('ai_automation.use_case_2_desc'),
            icon: <Zap className="w-8 h-8 text-[#2d9bf0]" />,
            color: "from-purple-500/20 to-blue-500/20"
        },
        {
            title: t('ai_automation.use_case_3_title'),
            desc: t('ai_automation.use_case_3_desc'),
            icon: <Calendar className="w-8 h-8 text-[#2d9bf0]" />,
            color: "from-cyan-500/20 to-purple-500/20"
        }
    ];

    return (
        <section id="ai-automation" className="py-24 sm:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#2d9bf0]/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#4db8ff]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2d9bf0]/10 border border-[#2d9bf0]/20 text-[#2d9bf0] text-sm font-semibold mb-6">
                        <Sparkles className="w-4 h-4 mr-2" />
                        {t('ai_automation.badge')}
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('ai_automation.title_part1')}<span className="gradient-text">{t('ai_automation.title_part2')}</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        {t('ai_automation.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {useCases.map((uc, idx) => (
                        <div key={idx} className="group relative">
                            <div className={`absolute -inset-0.5 bg-gradient-to-r ${uc.color} rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-500`}></div>
                            <div className="relative glass-effect p-8 rounded-2xl border border-white/5 flex flex-col h-full transform transition duration-500 hover:-translate-y-2">
                                <div className="w-16 h-16 bg-[#2d9bf0]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition duration-500">
                                    {uc.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{uc.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                    {uc.desc}
                                </p>
                                <a href="#contact" className="flex items-center text-[#2d9bf0] font-semibold text-sm group-hover:translate-x-2 transition duration-300">
                                    {t('ai_automation.learn_more')} <ArrowRight className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="glass-effect rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-[#2d9bf0]/20">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                        <Zap className="w-32 h-32 text-[#2d9bf0]" />
                    </div>
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl text-center md:text-left">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">{t('ai_automation.cta_title')}</h3>
                            <p className="text-gray-300 text-lg">
                                {t('ai_automation.cta_description')}
                            </p>
                        </div>
                        <a href="#contact" className="bg-[#2d9bf0] hover:bg-[#4db8ff] text-white px-8 py-4 rounded-xl text-lg font-bold hover-glow transition-all duration-300 flex items-center">
                            {t('ai_automation.cta_button')}
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AIAutomationSection;
