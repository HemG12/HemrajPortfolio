import { Code, Palette, Zap, Users } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend Development", level: 95, icon: Code },
    { name: "UI/UX Design", level: 88, icon: Palette },
    { name: "Performance Optimization", level: 92, icon: Zap },
    { name: "Team Leadership", level: 85, icon: Users },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in-left">
            <h2 className="text-5xl font-bold mb-8">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer  
                crafting digital solutions that make a difference. My journey began with 
                curiosity about how things work on the web, and has evolved into a love 
                for creating extraordinary user experiences.
              </p>
              
              <p>
                I specialize in modern web technologies, focusing on performance, 
                accessibility, and user-centered design. When I'm not coding, you'll 
                find me exploring new technologies, contributing to open source, or 
                mentoring upcoming developers.
              </p>
              
              <p>
                My approach combines technical expertise with creative problem-solving, 
                ensuring every project not only works flawlessly but also delights users 
                at every interaction.
              </p>
            </div>
          </div>

          {/* Right content - Skills */}
          <div className="animate-fade-in-right">
            <div className="glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-8 text-center">Core Expertise</h3>
              
              <div className="space-y-8">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="group">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="glass p-2 rounded-lg group-hover:glow-primary transition-all duration-300">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="ml-auto text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary skill-bar rounded-full"
                          style={{ '--skill-width': `${skill.level}%` } as React.CSSProperties}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;