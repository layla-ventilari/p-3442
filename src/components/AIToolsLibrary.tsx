
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { BookOpenIcon } from "lucide-react";
import { useIntersectionObserver } from "@/lib/animations";

const AIToolsLibrary = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });

  const categories = [
    {
      name: "Frameworks NLP",
      tools: [
        { name: "LangChain", use: "Orquestração de modelos LLM", icon: "⚡" },
        { name: "Hugging Face", use: "Modelos pré-treinados", icon: "🤗" }
      ],
      color: "from-purple-100 to-purple-50 dark:from-purple-900/30 dark:to-purple-800/20"
    },
    {
      name: "Assistentes Virtuais",
      tools: [
        { name: "Rasa", use: "Chatbots customizados", icon: "💬" },
        { name: "Dialogflow", use: "NLP baseado em intenções", icon: "🔍" }
      ],
      color: "from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20"
    },
    {
      name: "Modelos LLM",
      tools: [
        { name: "GPT-4", use: "Geração de texto avançada", icon: "🧠" },
        { name: "Llama 2", use: "Open-source alternative", icon: "🦙" }
      ],
      color: "from-indigo-100 to-indigo-50 dark:from-indigo-900/30 dark:to-indigo-800/20"
    }
  ];

  return (
    <section 
      id="skills" 
      ref={ref} 
      className={`py-20 bg-gradient-to-br from-background to-secondary/30 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div className="container-custom">
        <h2 className="h2 text-center mb-4 bg-gradient-to-r from-primary to-purple-400 dark:from-primary dark:to-purple-200 bg-clip-text text-transparent">
          Minha Biblioteca de IA
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Ferramentas que domino e recomendo para desenvolvimento de soluções inteligentes
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-b ${category.color} rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in glass-card`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="mr-2 text-2xl">{index === 0 ? "🧠" : index === 1 ? "🤖" : "🔧"}</span>
                {category.name}
              </h3>
              
              <div className="space-y-4">
                {category.tools.map((tool, toolIndex) => (
                  <div 
                    key={toolIndex} 
                    className="bg-background/80 dark:bg-background/40 p-4 rounded-lg border border-border animate-fade-in-right card-hover"
                    style={{ animationDelay: `${(index * 150) + (toolIndex * 100)}ms` }}
                  >
                    <div className="flex items-start">
                      <span className="text-xl mr-3">{tool.icon}</span>
                      <div>
                        <h4 className="font-medium">{tool.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{tool.use}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Button 
            className="bg-gradient-to-r from-primary to-purple.vivid hover:from-primary/90 hover:to-purple.vivid/90 text-primary-foreground font-medium py-6 px-8 rounded-full inline-flex items-center shadow-md hover:shadow-lg transition-all"
            size="lg"
          >
            <BookOpenIcon className="w-5 h-5 mr-2" />
            Ver Biblioteca Completa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIToolsLibrary;
