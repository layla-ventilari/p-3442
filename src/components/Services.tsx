
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
      title: "Operação",
      description: "Automatizo processos com NLP para reduzir custos operacionais",
      icon: "🤖"
    },
    {
      title: "Financeiro",
      description: "Desenvolvo soluções que aumentam a eficiência e reduzem despesas",
      icon: "💰"
    },
    {
      title: "Gestão",
      description: "Ferramentas inteligentes para análise de dados e tomada de decisões",
      icon: "📊"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-secondary/30 opacity-0 transition-opacity duration-1000">
      <div className="container-custom">
        <h2 className="h2 text-center mb-12 animate-fade-in">Como Trabalho</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-6 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
