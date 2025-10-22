import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: "#home", label: t('header.home') },
        { href: "#services", label: t('header.services') },
        { href: "#work", label: t('header.our_work') },
        { href: "#about", label: t('header.about_us') },
        { href: "#contact", label: t('header.contact') },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    }

    const changeLanguage = () => {
        const newLang = i18n.language === 'en' ? 'de' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            hasScrolled ? 'bg-[#0a2a38]/80 backdrop-blur-lg border-b border-[#2d4a5f]/50' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="flex items-center">
                        <div>
                            <img
                                src="ChatGPT Image 21. Sept. 2gfg025, 192_09_51.png"
                                width={150} 
                                alt="Digilevate Logo"
                            />
                        </div>
                    </a>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className="text-white hover:text-[#2d9bf0] transition-colors duration-300">{link.label}</a>
                        ))}
                        <a href="#contact" className="bg-[#2d9bf0] hover:bg-[#4db8ff] text-white px-6 py-2 rounded-lg hover-glow transition-all duration-300">
                            {t('header.get_free_quote')}
                        </a>
                        <button
                            className="flex items-center px-6 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-[#2d9bf0] hover:text-white transition-colors ml-4"
                            onClick={changeLanguage}
                        >
                            <Globe className="w-4 h-4 mr-2" />
                            {i18n.language === 'en' ? 'DE' : 'EN'}
                        </button>
                    </nav>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-[#0a2a38]/95 backdrop-blur-lg border-b border-[#2d4a5f]">
                        <nav className="px-4 pt-2 pb-4 space-y-2">
                            {navLinks.map(link => (
                                <a key={link.href} href={link.href} onClick={handleLinkClick} className="block text-white hover:text-[#2d9bf0] transition-colors px-2 py-2 rounded-md">{link.label}</a>
                            ))}
                            <a href="#contact" onClick={handleLinkClick} className="w-full block text-center bg-[#2d9bf0] hover:bg-[#4db8ff] text-white mt-2 py-2 rounded-lg">
                                {t('header.get_free_quote')}
                            </a>
                            <button
                                className="w-full flex items-center justify-center px-6 py-2 rounded-lg bg-gray-700 text-gray-300 hover:bg-[#2d9bf0] hover:text-white transition-colors mt-4"
                                onClick={changeLanguage}
                            >
                                <Globe className="w-4 h-4 mr-2" />
                                {i18n.language === 'en' ? 'DE' : 'EN'}
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
