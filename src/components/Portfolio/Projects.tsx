import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile"; // Adjust path

const Projects = () => {
  const isMobile = useIsMobile();

  const projects = [
    {
      id: 1,
      title: "Tomato(Zomato clone)",
      description: "Tomato – a Zomato-inspired food delivery platform built with MERN.",
      tech: ["React", "Node.js", "MongoDB atlas", "Express"],
      image: "./Tomato.png",
      github: "https://github.com/HemG12/Tomato",
      live: "https://tomato-phi-one.vercel.app/",
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered Analytics Dashboard",
      description: "Real-time data visualization platform with machine learning insights and predictive analytics.",
      tech: ["Vue.js", "Python", "TensorFlow", "D3.js"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      github: "https://github.com",
      live: "https://example.com",
      featured: true
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating technical expertise and creative problem-solving
          </p>
        </div>

        {/* Projects grid */}
        <div className={`grid ${isMobile ? "grid-cols-1" : "md:grid-cols-2"} gap-8`}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass rounded-3xl overflow-hidden transition-all duration-500 ${
                project.featured && !isMobile ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ transform: isMobile ? "none" : undefined }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
                
                {/* Overlay buttons (only show hover on desktop) */}
                {!isMobile && (
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass p-2 rounded-lg hover:glow-primary transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass p-2 rounded-lg hover:glow-primary transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                )}

                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-primary px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Project content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="glass px-3 py-1 rounded-full text-sm text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass border-glass-border hover:bg-glass/50 flex-1"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass border-glass-border hover:bg-glass/50 flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View more button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            className="bg-gradient-secondary hover:scale-105 transition-all duration-300 glow-primary px-8 py-6 rounded-2xl"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
