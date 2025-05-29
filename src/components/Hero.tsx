
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
      className="relative min-h-screen flex items-center justify-center bg-transparent opacity-0 translate-y-6 transition-all duration-1000 pt-20"
    >
      {/* Orbe de Animação */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <motion.div
          style={{ scale, opacity }}
          className="w-[400px] h-[400px] bg-[#C4B5FD] rounded-full filter blur-3xl transition-all duration-1000"
        />
      </div>

      {/* Container Principal */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent animate-fade-in animate-delay-100 mb-6">
          Transformamos ideias em campanhas inteligentes e acessíveis
        </h1>

        <p className="text-lg text-gray-700 mt-6 max-w-2xl mx-auto leading-relaxed animate-fade-in animate-delay-200">
          Unimos inteligência artificial, design sensível e propósito humano para criar experiências memoráveis.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 animate-fade-in animate-delay-300">
          <Button
            size="lg"
            className="bg-[#A78BFA] hover:bg-[#C084FC] text-white shadow-xl transition-all hover:-translate-y-1"
          >
            Explorar Campanhas
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

        {/* Elemento Visual */}
        <div className="mt-16 mx-auto max-w-3xl">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 flex items-center justify-center">
            <img 
              src="/lovable-uploads/8ccf8994-9684-4a3b-873e-5aba5e55fdc1.png" 
              alt="Equipe Lavent cocriando experiências com IA"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/10 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
