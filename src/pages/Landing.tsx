import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CategoryCard from "@/components/CategoryCard";
import heroImage from "@/assets/hero-plants.jpg";
import succulentsImage from "@/assets/succulents.jpg";
import indoorPlantsImage from "@/assets/indoor-plants.jpg";
import flowersImage from "@/assets/flowers.jpg";
import treesImage from "@/assets/trees.jpg";

const Landing = () => {
  const categories = [
    {
      title: "Indoor Plants",
      image: indoorPlantsImage,
      description: "Perfect for brightening up your living space with elegant foliage"
    },
    {
      title: "Succulents",
      image: succulentsImage,
      description: "Low-maintenance beauties that thrive with minimal care"
    },
    {
      title: "Flowering Plants",
      image: flowersImage,
      description: "Add vibrant colors and delightful fragrances to your home"
    },
    {
      title: "Trees & Large Plants",
      image: treesImage,
      description: "Make a statement with these impressive larger specimens"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-forest/80 to-forest/40" />
        </div>
        
        <div className="relative z-10 container text-center text-white space-y-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="h-12 w-12" />
            <span className="text-4xl font-bold">PlantShop</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Bring Nature
            <br />
            <span className="text-terracotta">Into Your Home</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Discover our carefully curated collection of premium plants, 
            perfect for every space and skill level
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="hero" className="text-lg px-8 py-4">
              Browse Plants
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-forest">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Shop by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect plants for your space, lifestyle, and experience level
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <CategoryCard
                key={index}
                title={category.title}
                image={category.image}
                description={category.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Plant Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of plant lovers who trust us to bring nature into their homes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
                Sign Up Now
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                Already have an account?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;