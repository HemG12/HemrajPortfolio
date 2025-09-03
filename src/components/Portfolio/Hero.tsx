import { Button } from "@/components/ui/button";
import { ChevronDown, FileText, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useIsMobile } from "@/hooks/use-mobile"; 

const Hero = () => {
  const isMobile = useIsMobile(); // Using your hook

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    projectsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float"
          style={{ display: isMobile ? "none" : "block" }} // Hide on mobile
        />
        <div
          className="absolute top-40 right-32 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "2s", display: isMobile ? "none" : "block" }}
        />
        <div
          className="absolute bottom-32 left-32 w-40 h-40 bg-accent/10 rounded-full blur-xl animate-float"
          style={{ animationDelay: "4s", display: isMobile ? "none" : "block" }}
        />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Main content */}
        <div className="animate-fade-in-up">
          <h1 className={`font-black mb-6 ${isMobile ? "text-4xl" : "text-6xl md:text-8xl"}`}>
            <span className="gradient-text glow-text">Hemraj</span>
            <br />
            <span className="text-foreground">Jangid</span>
          </h1>

          <p
            className={`text-muted-foreground mb-8 font-light max-w-2xl mx-auto leading-relaxed ${
              isMobile ? "text-base" : "text-xl md:text-2xl"
            }`}
          >
            Full-stack MERN developer building scalable, modern, and user-focused web applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-primary hover:scale-105 transition-all duration-300 glow-primary text-lg px-8 py-6 rounded-2xl"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass border-glass-border hover:bg-glass/50 text-lg px-8 py-6 rounded-2xl hover-glow"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16">
            <a
              href="https://github.com/HemG12"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-2xl hover-glow transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="www.linkedin.com/in/hemraj-jangid-000818194"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-2xl hover-glow transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:Hemrajjangid27747@gmail.com"
              className="glass p-4 rounded-2xl hover-glow transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="/HemResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-4 rounded-2xl hover-glow transition-all duration-300"
            >
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
