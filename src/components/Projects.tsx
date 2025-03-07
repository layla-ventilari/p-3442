
import { useRef, useState, useEffect } from "react";
import { ExternalLinkIcon, GithubIcon, Code2Icon } from "lucide-react";
import { Project } from "@/lib/types";
import { cn } from "@/lib/utils";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Sample projects data - replace with your own
  const projects: Project[] = [
    {
      id: "1",
      title: "E-Commerce Platform",
      description: "A fully-featured online store with product listings, cart functionality, and secure checkout.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1389&q=80",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      featured: true
    },
    {
      id: "2",
      title: "Task Management App",
      description: "A productivity app with drag-and-drop functionality, task categorization, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923653-fa7ccc9b8a42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["Vue.js", "Express", "PostgreSQL", "Docker"],
      featured: true
    },
    {
      id: "3",
      title: "Weather Dashboard",
      description: "An interactive weather application with real-time updates, location-based forecasts, and historical data visualization.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["React", "Redux", "OpenWeather API", "D3.js"],
    },
    {
      id: "4",
      title: "Portfolio Website",
      description: "A responsive, interactive portfolio showcasing my projects and skills with smooth animations and modern design.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
      demoUrl: "#",
      githubUrl: "#",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
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

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32">
      <div className="container-custom">
        <div className={cn(
          "mb-16 opacity-0", 
          isVisible && "animate-fade-in"
        )}>
          <h2 className="h2 mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A collection of my recent work. Each project is crafted with attention to detail
            and built with modern technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={cn(
                "flex flex-col rounded-xl overflow-hidden bg-card transition-all duration-300 hover:shadow-xl opacity-0 border border-border/50",
                isVisible && "animate-fade-in",
                `animate-delay-${(index + 1) * 100}`
              )}
            >
              <div className="relative aspect-video overflow-hidden bg-secondary/30">
                <div className="absolute inset-0 bg-secondary/30 animate-image-shimmer bg-[length:200%_100%] bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1),transparent)]" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="object-cover h-full w-full transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex-1 p-6 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map(tech => (
                      <span 
                        key={tech} 
                        className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full border border-border/60 bg-secondary/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <a 
                    href={project.demoUrl}
                    className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLinkIcon className="h-4 w-4 mr-1.5" /> 
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center text-sm font-medium hover:text-primary transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <GithubIcon className="h-4 w-4 mr-1.5" /> 
                    GitHub
                  </a>
                  <div className="flex-1 text-right">
                    <span className="p-1.5 inline-flex bg-secondary/80 rounded-full">
                      <Code2Icon className="h-4 w-4 text-muted-foreground" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
