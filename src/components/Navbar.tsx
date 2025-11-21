import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { MenuIcon, XIcon, MessageCircleIcon } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showInfo, setShowInfo] = useState(false); // Novo estado

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Ferramentas", href: "#skills" },
    { name: "Consultoria", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-apple",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md shadow-sm py-4" 
          : "bg-transparent py-6"
      )}
    >
      {/* Overlay de informação */}
      {showInfo && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-lg p-6 flex flex-col items-center">
            <span className="text-lg font-semibold mb-2">Em desenvolvimento</span>
            <span className="text-sm text-zinc-500 mb-4">Este recurso estará disponível em breve.</span>
            <button
              className="bg-gradient-to-r from-purple-600 to-blue-800 text-white px-4 py-2 rounded-full"
              onClick={() => setShowInfo(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
      <div className="container-custom flex items-center justify-between">
        {/* Logo Placeholder */}
        <div className="flex items-center space-x-3">
          <div className="logo-placeholder w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity bg-gradient-to-r from-purple-600 to-blue-800 bg-clip-text text-transparent"
          >
            Lavent Studio
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            item.href.startsWith('#') ? (
              <a 
                key={item.name} 
                href={item.href} 
                className="hover-underline text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={item.name} 
                to={item.href} 
                className="hover-underline text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            )
          ))}
          <Button
            className="bg-gradient-to-r from-purple-600 to-blue-800 hover:from-purple-700 hover:to-blue-900 text-white ml-4 rounded-full px-6"
            size="sm"
            onClick={() => setShowInfo(true)}
          >
            <MessageCircleIcon className="mr-2 h-4 w-4" /> 
            Fale com meu Assistente
          </Button>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Toggle and Theme Toggle */}
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button 
            onClick={toggleMobileMenu} 
            className="focus:outline-none focus:ring-2 focus:ring-primary/50 p-1 rounded-md" 
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden transition-all duration-300 ease-apple",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )} 
        style={{ top: '72px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8">
          {navItems.map((item) => (
            item.href.startsWith('#') ? (
              <a 
                key={item.name} 
                href={item.href} 
                onClick={toggleMobileMenu} 
                className="text-xl font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={item.name} 
                to={item.href} 
                onClick={toggleMobileMenu} 
                className="text-xl font-medium hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            )
          ))}
          <Button
            className="bg-gradient-to-r from-purple-600 to-blue-800 hover:from-purple-700 hover:to-blue-900 text-white mt-4 rounded-full px-6"
            onClick={() => setShowInfo(true)}
          >
            <MessageCircleIcon className="mr-2 h-4 w-4" /> 
            Fale com meu Assistente
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
