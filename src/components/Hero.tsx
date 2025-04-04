import { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { MessageCircle } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 0.2]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-transparent opacity-0 translate-y-6 transition-all duration-1000"
    >
      {/* Orbe de Animação */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <motion.div
          style={{ scale, opacity }}
          className="w-[400px] h-[400px] bg-[#C4B5FD] rounded-full filter blur-3xl transition-all duration-1000"
        />
      </div>

      {/* Container Principal */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-6">
        <h1 className="text-6xl font-bold text-transparent bg-gradient-to-r from-[#A78BFA] via-[#C084FC] to-[#D8B4FE] bg-clip-text animate-fade-in animate-delay-100 mb-6">
          Transformando Interações com IA
        </h1>

        <p className="text-lg text-gray-700 mt-6 max-w-2xl mx-auto leading-relaxed animate-fade-in animate-delay-200">
          Soluções avançadas de inteligência artificial que aprimoram experiências digitais e impulsionam a inovação.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-300">
          <Button
            size="lg"
            className="bg-[#A78BFA] hover:bg-[#C084FC] text-white shadow-xl transition-all hover:-translate-y-1"
          >
            Explorar Soluções
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="flex items-center space-x-2 border-[#A78BFA] text-[#A78BFA] hover:bg-[#A78BFA]/10 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Fale Conosco</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;