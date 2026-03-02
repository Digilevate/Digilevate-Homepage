import React from 'react';
import { Project } from '../types';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../constants';

const PortfolioSection: React.FC = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = React.useState('recent');

    const categories = [
        { id: 'recent', label: t('portfolio_section.filter_recent') },
        { id: 'web', label: t('portfolio_section.filter_web') },
        { id: 'seo', label: t('portfolio_section.filter_seo') },
        { id: 'ecommerce', label: t('portfolio_section.filter_ecommerce') },
        { id: 'all', label: t('portfolio_section.filter_all') },
    ];

    const handleCategoryChange = (id: string) => {
        setFilter(id);
    };

    const filteredProjects = filter === 'recent'
        ? PROJECTS.slice(0, 3)
        : filter === 'all'
            ? PROJECTS
            : PROJECTS.filter(project => project.category === filter);

    return (
        <section id="work" className="py-24 sm:py-32 relative">
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#4db8ff] rounded-full opacity-5 blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                        {t('portfolio_section.title_part1')} <span className="gradient-text">{t('portfolio_section.title_part2')}</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
                        {t('portfolio_section.description')}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryChange(cat.id)}
                                className={`px-6 py-2 rounded-full transition-all duration-300 border ${filter === cat.id
                                    ? 'bg-[#2d9bf0] border-[#2d9bf0] text-white'
                                    : 'bg-transparent border-gray-600 text-gray-400 hover:border-[#2d9bf0] hover:text-[#2d9bf0]'
                                    }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const { t } = useTranslation();
    return (
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
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#2d9bf0] transition-colors">
                        {t(project.title)}
                    </h3>
                    <span className="bg-[#2d9bf0]/20 text-[#2d9bf0] border border-[#2d9bf0]/30 px-2 py-1 text-[10px] sm:text-xs font-semibold flex-shrink-0 rounded-md">
                        {t(`projects.${project.id === 1 ? 'collina_chocolates' : project.id === 2 ? 'massagenatelier' : project.id === 3 ? 'degagarage' : project.id === 4 ? 'physiosteo_montagna' : 'personal_portfolio'}.category`)}
                    </span>
                </div>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed min-h-[6rem]">
                    {t(project.description)}
                </p>

                <div className="flex flex-col items-start gap-4 pt-4 border-t border-gray-700 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500">{project.client_name}</span>
                    <div className="flex items-center flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech: string, idx: number) => (
                            <span key={idx} className="text-xs border border-gray-600 text-gray-400 px-2 py-1 rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioSection;