
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
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
