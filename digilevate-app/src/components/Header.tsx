import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#services", label: "Services" },
        { href: "#work", label: "Our Work" },
        { href: "#about", label: "About Us" },
        { href: "#contact", label: "Contact" },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a href="#home" className="flex items-center">
                        <div>
                            <img
                src="ChatGPT Image 21. Sept. 2gfg025, 192_09_51.png"
                width={150} 
                alt="Eine Beschreibung des Bildes für Barrierefreiheit"
              />
                        </div>
                       
                    </a>

                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map(link => (
                            <a key={link.href} href={link.href} className="text-white hover:text-[#2d9bf0] transition-colors duration-300">{link.label}</a>
                        ))}
                        <a href="#contact" className="bg-[#2d9bf0] hover:bg-[#4db8ff] text-white px-6 py-2 rounded-lg hover-glow transition-all duration-300">
                            Get Free Quote
                        </a>
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
                    <div className="md:hidden absolute top-16 left-0 right-0 glass-effect">
                        <nav className="px-4 py-4 space-y-4">
                            {navLinks.map(link => (
                                <a key={link.href} href={link.href} onClick={handleLinkClick} className="block text-white hover:text-[#2d9bf0] transition-colors">{link.label}</a>
                            ))}
                            <a href="#contact" onClick={handleLinkClick} className="w-full block text-center bg-[#2d9bf0] hover:bg-[#4db8ff] text-white mt-4 py-2 rounded-lg">
                                Get Free Quote
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
