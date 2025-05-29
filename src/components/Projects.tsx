
import { useRef, useState, useEffect } from "react";
import { ExternalLinkIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { posts } from "@/data/postsData";

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

  return (
    <section id="blog" ref={sectionRef} className="py-20 md:py-32">
      <div className="container-custom">
        <div className={cn("mb-16 opacity-0", isVisible && "animate-fade-in")}>
          <h2 className="h2 mb-4 bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
            Campanhas que nascem para inspirar e transformar
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Do insight à entrega, cuidamos de cada detalhe para que sua campanha ganhe alma, forma e escala. A IA é nossa aliada para escutar, prever e criar com autenticidade.
          </p>
        </div>

        <ul className="flex flex-col gap-12">
          {posts.map((post, index) => (
            <li
              key={post.id}
              className={cn(
                "flex flex-col md:flex-row items-start gap-6 transition-opacity duration-700 opacity-0",
                isVisible && "animate-fade-in",
                `animate-delay-${(index + 1) * 100}`
              )}
            >
              <div className="w-full md:w-1/3 aspect-video rounded overflow-hidden bg-secondary/30">
                <img
                  src={post.image}
                  alt="Visual de campanha desenvolvida com design acessível"
                  loading="lazy"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">{post.tags.join(" • ")}</p>
                <h3 className="text-2xl font-semibold mb-2 leading-snug bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{post.description}</p>
                <a
                  href={post.slug}
                  className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors"
                >
                  <ExternalLinkIcon className="h-4 w-4 mr-1.5" />
                  Ler artigo
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projects;
