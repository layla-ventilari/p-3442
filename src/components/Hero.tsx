
import { ArrowDownIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "./ui/button";

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
          <div className="absolute top-2/3 left-1/4 w-64 h-64 bg-magenta/20 rounded-full filter blur-3xl animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-bright/10 rounded-full filter blur-3xl animate-spin-slow" style={{ animationDuration: '25s' }} />
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="inline-block px-4 py-2 mb-4 text-sm font-medium text-primary-foreground bg-primary rounded-full animate-fade-in shadow-sm">
              Consultoria em NLP · Chatbots · Assistentes Customizados
            </p>
            <h1 className="h1 mb-6 animate-fade-in animate-delay-100 text-balance">
              Chatbots Inteligentes que Conectam Linguagem e Negócios
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl text-balance animate-fade-in animate-delay-200">
              Desenvolvo soluções personalizadas de processamento de linguagem natural para 
              automatizar processos e aprimorar a comunicação com seus clientes.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in animate-delay-300">
              <Button 
                size="lg"
                className="bg-blue-bright hover:bg-blue-bright/90 text-white"
              >
                Explorar Biblioteca
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10"
              >
                Conversar Agora
              </Button>
            </div>
          </div>
          
          <div className="order-1 md:order-2 animate-fade-in animate-delay-400">
            <div className="relative rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-[1.02] card-hover">
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 z-10"></div>
              <div className="image-fade-edges">
                <img 
                  src="/lovable-uploads/8ccf8994-9684-4a3b-873e-5aba5e55fdc1.png" 
                  alt="Developer with purple workspace lighting" 
                  className="w-full h-auto object-cover transform scale-[1.01]"
                  style={{ aspectRatio: "4/3" }}
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" aria-label="Scroll to projects" className="p-2 rounded-full bg-secondary/50 hover:bg-secondary/80 transition-colors">
          <ArrowDownIcon className="h-6 w-6 text-foreground/80" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
