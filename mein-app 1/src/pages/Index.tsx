import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <footer className="bg-foreground text-background py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 bg-gradient-primary rounded flex items-center justify-center">
              <span className="text-xs font-bold text-primary-foreground">D</span>
            </div>
            <span className="text-lg font-bold">DesignTeam</span>
          </div>
          <p className="text-background/70 mb-4">
            Crafting beautiful digital experiences that convert.
          </p>
          <p className="text-background/50 text-sm">
            © 2024 DesignTeam. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
