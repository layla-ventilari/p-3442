
import { ArrowDownIcon } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
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
    <section ref={sectionRef} className="relative min-h-screen flex items-center opacity-0 transition-opacity duration-1000">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -inset-[10%] opacity-50">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl animate-spin-slow" />
          <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-blue-300/20 rounded-full filter blur-3xl animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-300/10 rounded-full filter blur-3xl animate-spin-slow" style={{ animationDuration: '25s' }} />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl">
          <p className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full animate-fade-in">
            Full-Stack Developer
          </p>
          <h1 className="h1 mb-6 animate-fade-in animate-delay-100">Crafting Digital Experiences with Precision & Purpose</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl text-balance animate-fade-in animate-delay-200">
            I build innovative web applications with modern technologies and user-centered design.
            From concept to deployment, I bring ideas to life with clean code and thoughtful UX.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-secondary text-foreground font-medium transition-all hover:translate-y-[-2px] hover:shadow-md active:translate-y-[0px]"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" aria-label="Scroll to projects">
          <ArrowDownIcon className="h-6 w-6 text-foreground/60" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
