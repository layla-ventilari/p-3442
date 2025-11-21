
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
      title: "UX/UI Design",
      description: "Interfaces modernas, intuitivas e centradas no usuário, pensadas para converter e encantar.",
      icon: "🎨"
    },
    {
      title: "IA Aplicada a Negócios",
      description: "Agentes, automações e sistemas inteligentes que ampliam resultados e reduzem esforço operacional.",
      icon: "🤖"
    },
    {
      title: "Marketing Inteligente",
      description: "Estratégias criativas impulsionadas por dados, narrativas fortes e posicionamento claro.",
      icon: "📊"
    },
    {
      title: "CRM Inteligente (CRM)",
      description: "Plataforma criada para organizar fluxo, prever demandas e transformar dados em decisões eficientes.",
      icon: "💼"
    },
    {
      title: "Identidade Visual",
      description: "Marcas consistentes, elegantes e memoráveis, construídas para crescer junto com o negócio.",
      icon: "✨"
    },
    {
      title: "Landing Pages & Campanhas",
      description: "Páginas otimizadas com foco em conversão, storytelling e impacto visual.",
      icon: "🚀"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-secondary/30 opacity-0 transition-opacity duration-1000">
      <div className="container-custom">
        <h2 className="h2 text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent animate-fade-in">
          Serviços
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Soluções integradas que unem tecnologia, estratégia e criatividade para transformar a forma como marcas e negócios se conectam com pessoas.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
