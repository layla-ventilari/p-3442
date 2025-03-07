
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeftIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container-custom text-center">
        <h1 className="h1 mb-6 animate-fade-in">404</h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto animate-fade-in animate-delay-100">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all hover:translate-y-[-2px] hover:shadow-lg active:translate-y-[0px] animate-fade-in animate-delay-200"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
