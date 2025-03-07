
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
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple/10 rounded-full filter blur-3xl animate-spin-slow" />
          <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-magenta/20 rounded-full filter blur-3xl animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-bright/10 rounded-full filter blur-3xl animate-spin-slow" style={{ animationDuration: '25s' }} />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-1/2">
            <p className="inline-block px-4 py-2 mb-4 text-sm font-medium text-purple bg-purple/10 rounded-full animate-fade-in">
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
                className="px-6 py-3 rounded-lg bg-purple text-background font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px]"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-lg bg-secondary text-foreground font-medium transition-all hover:translate-y-[-2px] hover:shadow-md active:translate-y-[0px] border border-purple/30"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-8 md:mt-0 animate-fade-in animate-delay-400">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/8ccf8994-9684-4a3b-873e-5aba5e55fdc1.png" 
                alt="Developer with purple workspace lighting" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-30"></div>
            </div>
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
