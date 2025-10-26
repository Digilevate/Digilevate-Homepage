import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TestimonialsSection: React.FC = () => {
    const { t } = useTranslation();
    return (
        <section className="py-24 px-4 sm:py-32 relative">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#2d9bf0] rounded-full opacity-5 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#4db8ff] rounded-full opacity-5 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('testimonials_section.title_part1')} <span className="gradient-text">{t('testimonials_section.title_part2')}</span>{t('testimonials_section.title_part3')}
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        {t('testimonials_section.description')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>

                <Stats />
            </div>
        </section>
    );
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
    const { t } = useTranslation();
    const testimonialNameMap: { [key: string]: string } = {
        "Sandrine Montagna": "sandrine_montagna",
        "Ilija Predogac": "ilija_predogac",
        "Juliana Jevtic": "juliana_jevtic"
    };
    const testimonialKey = testimonialNameMap[testimonial.name];

    return (
        <div className="glass-effect rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#2d9bf0]/20 flex flex-col">
            <Quote className="w-8 h-8 text-[#2d9bf0] mb-4" />
            <div className="space-y-6 flex flex-col h-full flex-grow">
                <p className="text-gray-300 leading-relaxed text-lg flex-grow">
                    {t(`testimonials.${testimonialKey}.content`)}
                </p>

                <div className="flex items-center space-x-4 pt-4 border-t border-gray-700">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </span>
                    </div>
                    <div>
                        <h4 className="text-white font-bold">{t(`testimonials.${testimonialKey}.name`)}</h4>
                        <p className="text-gray-400 text-sm">
                            {t(`testimonials.${testimonialKey}.role`)}
                            {t(`testimonials.${testimonialKey}.company`) && ` at ${t(`testimonials.${testimonialKey}.company`)}`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Stats: React.FC = () => {
    const { t } = useTranslation();
    return (
        <div className="text-center mt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <StatItem value="20+" label={t('testimonials_section.projects_completed')} />
                <StatItem value="100%" label={t('testimonials_section.client_satisfaction')} />
                <StatItem value="10+" label={t('testimonials_section.happy_clients')} />
                <StatItem value="5.0" label={t('testimonials_section.average_rating')} />
            </div>
        </div>
    );
};

const StatItem: React.FC<{ value: string, label: string }> = ({ value, label }) => (
    <div className="text-center p-4 glass-effect rounded-2xl hover:-translate-y-2 transition-transform duration-300">
        <div className="text-4xl font-bold gradient-text mb-2">{value}</div>
        <div className="text-gray-400 text-sm">{label}</div>
    </div>
);

export default TestimonialsSection;
