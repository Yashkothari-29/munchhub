
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChefHat, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface RecipeFeaturedProps {
  id: string;
  title: string;
  description: string;
  image: string;
  time: string;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  chef: string;
}

const RecipeFeatured: React.FC<RecipeFeaturedProps> = ({
  id,
  title,
  description,
  image,
  time,
  difficulty,
  servings,
  chef
}) => {
  const difficultyColor = {
    easy: 'text-green-600 dark:text-green-400',
    medium: 'text-yellow-600 dark:text-yellow-400',
    hard: 'text-red-600 dark:text-red-400'
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-accent/10 to-primary/10 p-1">
      <div className="relative rounded-xl overflow-hidden bg-card p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <div className="flex items-center space-x-2 mb-3">
              <span className={cn("font-medium", difficultyColor[difficulty])}>
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </span>
              <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">
                Featured
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-3">{title}</h2>
            
            <p className="text-muted-foreground mb-6">{description}</p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-primary" />
                {time}
              </span>
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-2 text-primary" />
                {servings} servings
              </span>
              <span className="flex items-center">
                <ChefHat className="w-4 h-4 mr-2 text-primary" />
                By {chef}
              </span>
            </div>
            
            <Button asChild>
              <Link to={`/recipe/${id}`} className="group">
                View Recipe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="order-1 md:order-2 animate-scale-in">
            <div className="rounded-xl overflow-hidden aspect-square shadow-lg">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeFeatured;
