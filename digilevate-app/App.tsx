
import React, { useEffect } from 'react';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import HeroSection from './src/components/HeroSection';
import ServicesSection from './src/components/ServicesSection';
import PortfolioSection from './src/components/PortfolioSection';
import AboutSection from './src/components/AboutSection';
import TestimonialsSection from './src/components/TestimonialsSection';
import ContactSection from './src/components/ContactSection';

const App: React.FC = () => {
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = e.target as HTMLAnchorElement;
            const href = target.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        };

        document.addEventListener('click', handleAnchorClick);
        return () => document.removeEventListener('click', handleAnchorClick);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a2a38] via-[#1d4a5f] to-[#0a2a38] text-white overflow-hidden">
            <Header />
            <main className="pt-16">
                <HeroSection />
                <ServicesSection />
                <PortfolioSection />
                <AboutSection />
                <TestimonialsSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;
