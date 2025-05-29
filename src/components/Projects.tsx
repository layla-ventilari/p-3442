
import { useRef, useState, useEffect } from "react";
import { ExternalLinkIcon, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { posts } from "@/data/postsData";
import { Button } from "./ui/button";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => sectionRef.current && observer.unobserve(sectionRef.current);
  }, []);

  const handleBlogNavigation = () => {
    window.location.href = '/blog';
  };

  return (
    <section id="blog" ref={sectionRef} className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/10">
      <div className="container-custom">
        <div className={cn("mb-16 text-center opacity-0", isVisible && "animate-fade-in")}>
          <h2 className="h2 mb-6 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
            Blog & Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Campanhas que nascem para inspirar e transformar. Do insight à entrega, cuidamos de cada detalhe para que sua campanha ganhe alma, forma e escala.
          </p>
          
          <Button 
            onClick={handleBlogNavigation}
            className="bg-gradient-to-r from-purple-600 to-blue-800 hover:from-purple-700 hover:to-blue-900 text-white shadow-lg transition-all duration-300 hover:-translate-y-1 rounded-full px-8 py-3 font-medium"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Ver Todos os Artigos
          </Button>
        </div>

        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
            Últimos Artigos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post, index) => (
              <article
                key={post.id}
                className={cn(
                  "bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-100 dark:border-purple-900/30 opacity-0",
                  isVisible && "animate-fade-in",
                  `animate-delay-${(index + 1) * 200}`
                )}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt="Visual de campanha desenvolvida com design acessível"
                    loading="lazy"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-700 dark:text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3 leading-tight bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  
                  <a
                    href={post.slug}
                    className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors group"
                  >
                    <ExternalLinkIcon className="h-4 w-4 mr-1.5 group-hover:translate-x-1 transition-transform" />
                    Ler artigo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
