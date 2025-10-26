import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import AGB from './pages/AGB';
import Datenschutz from './pages/Datenschutz';
import Impressum from './pages/Impressum';

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
        <Router>
            <Routes>
                <Route path="/" element={
                    <main className="pt-16">
                        <Header />
                        <HeroSection />
                        <ServicesSection />
                        <PortfolioSection />
                        <AboutSection />
                        <TestimonialsSection />
                        <ContactSection />
                        <Footer />
                    </main>
                } />
                <Route path="/agb" element={<AGB />} />
                <Route path="/datenschutz" element={<Datenschutz />} />
                <Route path="/impressum" element={<Impressum />} />
            </Routes>
        </Router>
    );
};

export default App;
