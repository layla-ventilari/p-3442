
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundPattern from "@/components/BackgroundPattern";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BackgroundPattern />
      <main className="flex-grow">
        <Hero />
        <div id="services" className="py-20 bg-secondary/30">
          <div className="container-custom">
            <h2 className="h2 text-center mb-12">Como Trabalho</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
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
              ].map((service, index) => (
                <div key={index} className="glass-card p-6 card-hover">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
