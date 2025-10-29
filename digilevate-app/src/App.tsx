import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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

const MainPage = () => (
    <>
        <Helmet>
            <title>Webagentur Zürich: Professionelles Webdesign & SEO für KMU | digilevate</title>
            <meta name="description" content="Ihre Webagentur in Zürich für massgeschneiderte Webseiten, SEO-Optimierung und digitales Wachstum. Jetzt kostenlose Beratung für Ihr KMU anfragen!" />
        </Helmet>
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
    </>
);

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
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/agb" element={<AGB />} />
                    <Route path="/datenschutz" element={<Datenschutz />} />
                    <Route path="/impressum" element={<Impressum />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;

