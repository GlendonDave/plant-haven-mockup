import { Leaf, Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-forest text-forest-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8" />
              <span className="text-2xl font-bold">PlantShop</span>
            </div>
            <p className="text-forest-foreground/80">
              Bringing nature into your home with carefully curated plants and expert care guides.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-forest-foreground/80">
              <li><Link to="/" className="hover:text-forest-foreground transition-colors">Home</Link></li>
              <li><Link to="/login" className="hover:text-forest-foreground transition-colors">Login</Link></li>
              <li><Link to="/register" className="hover:text-forest-foreground transition-colors">Sign Up</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-2 text-forest-foreground/80">
              <li><a href="#" className="hover:text-forest-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-forest-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-forest-foreground transition-colors">Customer Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-forest-foreground/80 hover:text-forest-foreground cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-forest-foreground/80 hover:text-forest-foreground cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-forest-foreground/80 hover:text-forest-foreground cursor-pointer transition-colors" />
            </div>
            <div className="space-y-2 text-forest-foreground/80">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@plantshop.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-forest-foreground/20 mt-8 pt-8 text-center text-forest-foreground/60">
          <p>&copy; 2024 PlantShop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;