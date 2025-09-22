import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  image: string;
  description: string;
}

const CategoryCard = ({ title, image, description }: CategoryCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-card transition-all duration-300 hover:shadow-button hover:-translate-y-1 cursor-pointer">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;