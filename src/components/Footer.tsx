import { cn } from "@/lib/utils";
import { ArrowUpIcon } from "lucide-react";
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const year = new Date().getFullYear();
  return <footer className="py-12 bg-secondary/50">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity">Lavent Studio</a>
            <p className="mt-2 text-muted-foreground">
              Crafting digital experiences with precision and purpose.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button onClick={scrollToTop} className="mb-4 p-3 rounded-full bg-secondary hover:bg-secondary/80 transition-all hover:translate-y-[-2px]" aria-label="Scroll to top">
              <ArrowUpIcon className="h-5 w-5" />
            </button>
            <p className="text-muted-foreground text-sm">
              © {year} Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;