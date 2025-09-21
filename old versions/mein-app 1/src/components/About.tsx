import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet The
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're two passionate web designers who believe great design should be both beautiful and functional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground">A</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Loris Imbrogno</h3>
                <p className="text-accent-foreground font-medium mb-4">Frontend Specialist</p>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate about creating pixel-perfect user interfaces and smooth interactions. 
                  Specializes in React, TypeScript, and modern CSS frameworks.
                </p>
                <div className="flex gap-3 mt-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">React</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">UI/UX</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Figma</span>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="group hover:shadow-elegant transition-all duration-500 hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-primary-foreground">B</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Alessio Fano</h3>
                <p className="text-accent-foreground font-medium mb-4">Fullstack Developer</p>
                <p className="text-muted-foreground leading-relaxed">
                  Expert in building scalable web applications with focus on performance and user experience. 
                  Backend architecture and database design specialist.
                </p>
                <div className="flex gap-3 mt-6">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Node.js</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Database</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">DevOps</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};