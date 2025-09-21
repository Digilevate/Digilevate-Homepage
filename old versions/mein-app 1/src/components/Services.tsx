import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap, Smartphone, Globe, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Development",
    description: "Tailored websites built with modern technologies like React, TypeScript, and Node.js for optimal performance."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to engage users and drive conversions with modern design principles."
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first approach ensuring your website looks perfect and functions flawlessly on all devices."
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast loading times and smooth interactions through careful optimization and best practices."
  },
  {
    icon: Globe,
    title: "E-commerce Solutions",
    description: "Complete online stores with secure payment processing, inventory management, and user-friendly shopping experiences."
  },
  {
    icon: TrendingUp,
    title: "SEO & Analytics",
    description: "Search engine optimization and analytics setup to help your business grow and reach the right audience."
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From concept to launch, we provide comprehensive web design and development services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2 border-0 bg-gradient-card backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-start">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};