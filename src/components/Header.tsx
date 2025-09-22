import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">PlantShop</span>
        </Link>
        
        <nav className="flex items-center space-x-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="sm">
              Dashboard
            </Button>
          </Link>
          <Link to="/login">
            <Button variant="ghost" size="sm">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="hero" size="sm">
              Sign Up
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;