
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      setTheme("light");
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    
    // Remove both classes and add the correct one
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
    
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button 
      onClick={toggleTheme}
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
        "hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/50"
      )}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5 text-yellow-300" />
      ) : (
        <MoonIcon className="h-5 w-5 text-indigo-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
