
import { useEffect, useState } from "react";

// SVG pattern style for creating the grid pattern
const gridPatternStyle = {
  backgroundImage: `
    linear-gradient(to right, hsla(var(--primary) / 0.1) 1px, transparent 1px),
    linear-gradient(to bottom, hsla(var(--primary) / 0.1) 1px, transparent 1px)
  `,
  backgroundSize: '40px 40px',
};

const BackgroundPattern = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-30 dark:opacity-20">
      <div className="absolute w-full h-full mask-image-gradient" style={gridPatternStyle} />
    </div>
  );
};

export default BackgroundPattern;
