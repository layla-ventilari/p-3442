
import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100");
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });

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
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-20 bg-gradient-to-br from-background to-secondary/20 opacity-0 transition-opacity duration-1000"
    >
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="h2 mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent animate-fade-in">
            Sobre a Lavent Studio
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in animate-delay-200">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Mais que uma agência, somos um ecossistema de inovação. Utilizamos inteligência artificial para cocriar campanhas com propósito, sensibilidade e acessibilidade.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                A Lavent é a ponte entre marcas e pessoas, aliando dados, linguagem e emoção para criar experiências que transformam realidades.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <span className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-6 py-3 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800">
                  IA Humanizada
                </span>
                <span className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-6 py-3 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800">
                  Design Inclusivo
                </span>
                <span className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-6 py-3 rounded-full text-sm font-medium border border-purple-200 dark:border-purple-800">
                  Impacto Social
                </span>
              </div>
            </div>
            
            <div className="animate-fade-in animate-delay-400">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 aspect-video flex items-center justify-center border border-purple-200 dark:border-purple-800">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-800 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">L</span>
                  </div>
                  <p className="text-muted-foreground">Ecossistema Lavent em ação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
