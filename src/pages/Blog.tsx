
import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Search, Calendar, Clock, ExternalLinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { posts } from "@/data/postsData";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackgroundPattern from "@/components/BackgroundPattern";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
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

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  const handleBackToHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BackgroundPattern />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-background to-secondary/20">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <Button 
                onClick={handleBackToHome}
                variant="outline" 
                className="mb-8 border-purple-600 text-purple-600 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-800 hover:text-white transition-all duration-300 rounded-full"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar ao Início
              </Button>
              
              <h1 className="h1 mb-6 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
                Blog & Insights Lavent
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explorando o futuro das campanhas inteligentes, design inclusivo e impacto humano através da inteligência artificial.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 border-b border-border">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="relative mb-6">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <input
                  type="text"
                  placeholder="Buscar artigos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-full border border-purple-200 dark:border-purple-800 focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-background"
                />
              </div>

              {/* Tags Filter */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setSelectedTag(null)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    !selectedTag 
                      ? "bg-gradient-to-r from-purple-600 to-blue-800 text-white" 
                      : "bg-secondary hover:bg-secondary/80 text-muted-foreground"
                  )}
                >
                  Todos
                </button>
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={cn(
                      "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      selectedTag === tag 
                        ? "bg-gradient-to-r from-purple-600 to-blue-800 text-white" 
                        : "bg-secondary hover:bg-secondary/80 text-muted-foreground"
                    )}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section ref={sectionRef} className="py-16">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-xl text-muted-foreground">
                    Nenhum artigo encontrado para sua busca.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <article
                      key={post.id}
                      className={cn(
                        "bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-purple-100 dark:border-purple-900/30 opacity-0",
                        isVisible && "animate-fade-in",
                        `animate-delay-${(index % 6 + 1) * 100}`
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
                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            <span>15 Nov 2024</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>5 min</span>
                          </div>
                        </div>

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
                        
                        <h3 className="text-xl font-semibold mb-3 leading-tight bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                          {post.description}
                        </p>
                        
                        <a
                          href={post.slug}
                          className="inline-flex items-center text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors group"
                        >
                          <ExternalLinkIcon className="h-4 w-4 mr-1.5 group-hover:translate-x-1 transition-transform" />
                          Ler artigo completo
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
