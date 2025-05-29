
import { useEffect, useRef } from "react";

const Services = () => {
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

  const services = [
    {
      title: "IA Aplicada",
      description: "Utilizamos inteligência artificial para cocriar campanhas com propósito, sensibilidade e acessibilidade",
      icon: "🤖"
    },
    {
      title: "Design Centrado no Usuário",
      description: "Criamos experiências que tocam, com acessibilidade que liberta e narrativas autênticas",
      icon: "🎨"
    },
    {
      title: "Impacto Humano",
      description: "Aliamos dados, linguagem e emoção para criar campanhas que ganham alma, forma e escala",
      icon: "💫"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-secondary/30 opacity-0 transition-opacity duration-1000">
      <div className="container-custom">
        <h2 className="h2 text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent animate-fade-in">
          Como unimos IA, criatividade e impacto humano
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Cada projeto integra tecnologia de ponta com design centrado no usuário. Acreditamos em narrativas que tocam, acessibilidade que liberta e inteligência que amplia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-6 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
