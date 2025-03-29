
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Skill } from "@/lib/types";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    // Frontend
    { name: "React", icon: "⚛️", category: "frontend" },
    { name: "Vue.js", icon: "🟢", category: "frontend" },
    { name: "Angular", icon: "🅰️", category: "frontend" },
    { name: "TypeScript", icon: "📘", category: "frontend" },
    { name: "JavaScript", icon: "🟨", category: "frontend" },
    { name: "HTML5", icon: "🌐", category: "frontend" },
    { name: "CSS3/SASS", icon: "🎨", category: "frontend" },
    { name: "Tailwind CSS", icon: "🔷", category: "frontend" },

    // Backend
    { name: "Node.js", icon: "🟢", category: "backend" },
    { name: "Express", icon: "⚡", category: "backend" },
    { name: "Django", icon: "🐍", category: "backend" },
    { name: "Ruby on Rails", icon: "💎", category: "backend" },
    { name: "GraphQL", icon: "⬢", category: "backend" },
    { name: "REST APIs", icon: "🔄", category: "backend" },

    // Databases
    { name: "MongoDB", icon: "🍃", category: "backend" },
    { name: "PostgreSQL", icon: "🐘", category: "backend" },
    { name: "MySQL", icon: "🐬", category: "backend" },
    { name: "Firebase", icon: "🔥", category: "backend" },

    // Tools & Other
    { name: "Git", icon: "📚", category: "tools" },
    { name: "Docker", icon: "🐳", category: "tools" },
    { name: "AWS", icon: "☁️", category: "tools" },
    { name: "CI/CD", icon: "🔄", category: "tools" },
    { name: "Jest", icon: "🃏", category: "tools" },
    { name: "Webpack", icon: "📦", category: "tools" },
    { name: "Figma", icon: "🎨", category: "tools" },
    { name: "Responsive Design", icon: "📱", category: "tools" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const frontendSkills = skills.filter((skill) => skill.category === "frontend");
  const backendSkills = skills.filter((skill) => skill.category === "backend");
  const toolsSkills = skills.filter((skill) => skill.category === "tools");

  return (
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-secondary/30">
      <div className="container-custom">
        <div className={cn(
          "mb-16 opacity-0", 
          isVisible && "animate-fade-in"
        )}>
          <h2 className="h2 mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My technical toolkit encompasses a range of languages, frameworks, and tools that
            enable me to build comprehensive web solutions from front to back.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className={cn(
            "glass-card p-6 rounded-xl opacity-0", 
            isVisible && "animate-fade-in card-hover"
          )}>
            <div className="p-1 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 inline-block">
              <div className="bg-background rounded-full p-3">
                <div className="text-2xl">⚛️</div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Frontend Development</h3>
            <ul className="space-y-3">
              {frontendSkills.map((skill) => (
                <li key={skill.name} className="flex items-center p-2 rounded-lg hover:bg-background/50 transition-colors">
                  <span className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full mr-3">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={cn(
            "glass-card p-6 rounded-xl opacity-0", 
            isVisible && "animate-fade-in animate-delay-200 card-hover"
          )}>
            <div className="p-1 mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 inline-block">
              <div className="bg-background rounded-full p-3">
                <div className="text-2xl">⚡</div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Backend Development</h3>
            <ul className="space-y-3">
              {backendSkills.map((skill) => (
                <li key={skill.name} className="flex items-center p-2 rounded-lg hover:bg-background/50 transition-colors">
                  <span className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full mr-3">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={cn(
            "glass-card p-6 rounded-xl opacity-0 sm:col-span-2 lg:col-span-1", 
            isVisible && "animate-fade-in animate-delay-400 card-hover"
          )}>
            <div className="p-1 mb-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 inline-block">
              <div className="bg-background rounded-full p-3">
                <div className="text-2xl">🔧</div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">Tools & Workflow</h3>
            <ul className="space-y-3">
              {toolsSkills.map((skill) => (
                <li key={skill.name} className="flex items-center p-2 rounded-lg hover:bg-background/50 transition-colors">
                  <span className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full mr-3">{skill.icon}</span>
                  <span>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
