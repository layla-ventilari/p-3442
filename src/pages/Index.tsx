
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import AIToolsLibrary from "@/components/AIToolsLibrary";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundPattern from "@/components/BackgroundPattern";
import Services from "@/components/Services";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <BackgroundPattern />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Projects />
        <AIToolsLibrary />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
