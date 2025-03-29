
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChefHat } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  time: string;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  category: string;
  className?: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  title,
  image,
  time,
  difficulty,
  servings,
  category,
  className
}) => {
  const difficultyColor = {
    easy: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100',
    hard: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
  };

  return (
    <Link 
      to={`/recipe/${id}`} 
      className={cn("recipe-card block rounded-xl overflow-hidden bg-card", className)}
    >
      <div className="hover-recipe-card aspect-[4/3]">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="recipe-info">
          <span className={cn("recipe-tag", difficultyColor[difficulty])}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </span>
          <h3 className="text-xl font-serif mt-2 font-medium">{title}</h3>
          <div className="flex items-center mt-2 text-sm text-white/90 space-x-4">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {time}
            </span>
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {servings}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
