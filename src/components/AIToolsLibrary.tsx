import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { BookOpenIcon } from "lucide-react";
import { useIntersectionObserver } from "@/lib/animations";
const AIToolsLibrary = () => {
  const {
    ref,
    isVisible
  } = useIntersectionObserver({
    threshold: 0.1
  });
  const ecosystemBranches = [{
    name: "Lavent Studio",
    description: "Agência criativa onde design, IA e estratégia formam experiências inteligentes e identidades sólidas. Soluções feitas para marcas que desejam crescer com propósito.",
    features: [{
      name: "Campanhas Inteligentes",
      use: "Criação assistida por IA",
      icon: "🎯"
    }, {
      name: "Design Acessível",
      use: "Inclusão em cada projeto",
      icon: "♿"
    }],
    color: "from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20"
  }, {
    name: "Lavent Learning",
    description: "Espaço dedicado à educação acessível em IA, UX/UI, criatividade e tecnologia aplicada. Conteúdos práticos para quem quer aprender, evoluir e criar com autonomia.",
    features: [{
      name: "Aprendizado Adaptativo",
      use: "IA personaliza o ensino",
      icon: "🧠"
    }, {
      name: "Gamificação",
      use: "Engajamento através de jogos",
      icon: "🎮"
    }],
    color: "from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20"
  }, {
    name: "Lavent Labs",
    description: "Meu laboratório experimental de agentes, automações, pesquisa e prototipação rápida — onde ideias se transformam em produtos inteligentes e experimentos avançados.",
    features: [{
      name: "Inovação Ética",
      use: "Tecnologia com propósito",
      icon: "⚗️"
    }, {
      name: "Prototipagem Rápida",
      use: "Do conceito à realidade",
      icon: "🚀"
    }],
    color: "from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-indigo-800/20"
  }];
  return <section id="skills" ref={ref} className={`py-20 bg-gradient-to-br from-background to-secondary/30 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container-custom">
        <h2 className="h2 text-center mb-4 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
          Ecossistema Lavent
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Um sistema integrado de criação, educação e experimentação — onde cada projeto se conecta com propósito, tecnologia e impacto humano.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ecosystemBranches.map((branch, index) => <div key={index} className={`bg-gradient-to-b ${branch.color} rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in glass-card`} style={{
          animationDelay: `${index * 150}ms`
        }}>
              <h3 className="text-xl font-semibold mb-2 flex items-center bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
                <span className="mr-2 text-2xl">{index === 0 ? "🎨" : index === 1 ? "📚" : "🔬"}</span>
                {branch.name}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">{branch.description}</p>
              
              <div className="space-y-4">
                {branch.features.map((feature, featureIndex) => <div key={featureIndex} className="bg-background/80 dark:bg-background/40 p-4 rounded-lg border border-border animate-fade-in-right card-hover" style={{
              animationDelay: `${index * 150 + featureIndex * 100}ms`
            }}>
                    <div className="flex items-start">
                      <span className="text-xl mr-3">{feature.icon}</span>
                      <div>
                        <h4 className="font-medium">{feature.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{feature.use}</p>
                      </div>
                    </div>
                  </div>)}
              </div>
            </div>)}
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{
        animationDelay: '600ms'
      }}>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-800 hover:from-purple-700 hover:to-blue-900 text-white ml-4 rounded-full px-6">
            <BookOpenIcon className="w-5 h-5 mr-2" />
            Explorar o Ecossistema Lavent
          </Button>
        </div>
      </div>
    </section>;
};
export default AIToolsLibrary;