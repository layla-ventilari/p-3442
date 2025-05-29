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
  return <section id="about" ref={sectionRef} className="py-20 bg-gradient-to-br from-background to-secondary/20 opacity-0 transition-opacity duration-1000">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="h2 mb-6 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent animate-fade-in">
            Sobre a Lavent Studio
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in animate-delay-200">
              <p className="text-lg text-muted-foreground leading-relaxed text-left">
                Mais que uma agência, somos um ecossistema de inovação. Utilizamos inteligência artificial para cocriar campanhas com propósito, sensibilidade e acessibilidade.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed text-left">
                A Lavent é a ponte entre marcas e pessoas, aliando dados, linguagem e emoção para criar experiências que transformam realidades.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-start">
                <span className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-4 py-2 rounded-full text-sm font-medium">
                  IA Humanizada
                </span>
                <span className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-4 py-2 rounded-full text-sm font-medium">
                  Design Inclusivo
                </span>
                <span className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 px-4 py-2 rounded-full text-sm font-medium">
                  Impacto Social
                </span>
              </div>
            </div>
            
            <div className="animate-fade-in animate-delay-400">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;