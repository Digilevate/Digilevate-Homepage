import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
    const { t } = useTranslation();
    const navLinks = [
        { href: "#home", label: t('header.home') },
        { href: "#services", label: t('header.services') },
        { href: "#work", label: t('header.our_work') },
        { href: "#about", label: t('header.about_us') },
        { href: "#contact", label: t('header.contact') },
    ];

    const socialLinks = [
        { href: "#", icon: <Twitter className="w-5 h-5" /> },
        { href: "#", icon: <Linkedin className="w-5 h-5" /> },
        { href: "#", icon: <Github className="w-5 h-5" /> },
    ];

    return (
        <footer className="bg-[#0a2a38] border-t border-[#2d4a5f]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <a href="#home" className="flex items-center mb-4">
                            <img
                                src="ChatGPT Image 21. Sept. 2gfg025, 192_09_51.png"
                                width={150}
                                alt="Digilevate Logo"
                            />
                        </a>
                        <p className="text-gray-400 mb-4">
                            {t('footer.description')}
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:col-span-2 gap-8">
                        <div>
                            <h3 className="text-white font-semibold mb-4">{t('footer.navigate')}</h3>
                            <ul className="space-y-2">
                                {navLinks.map(link => (
                                    <li key={link.href}>
                                        <a href={link.href} className="text-gray-400 hover:text-white transition-colors">{link.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">{t('footer.contact')}</h3>
                            <div className="space-y-2 text-gray-400">
                                <p>info@digilevate.com</p>
                                <p>{t('footer.location')}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-[#2d4a5f] pt-8 text-center text-gray-500">
                    <p>© {new Date().getFullYear()} Digilevate. {t('footer.all_rights_reserved')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
