
import React, { useState } from 'react';
import { Plus, Minus, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
}

interface IngredientListProps {
  ingredients: Ingredient[];
  defaultServings: number;
  className?: string;
}

const IngredientList: React.FC<IngredientListProps> = ({
  ingredients,
  defaultServings,
  className
}) => {
  const [servings, setServings] = useState(defaultServings);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  
  const increaseServings = () => {
    setServings(prev => prev + 1);
  };
  
  const decreaseServings = () => {
    if (servings > 1) {
      setServings(prev => prev - 1);
    }
  };
  
  const toggleIngredient = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const calculateAmount = (amount: number): string => {
    const adjusted = (amount * servings) / defaultServings;
    return adjusted % 1 === 0 ? adjusted.toString() : adjusted.toFixed(1);
  };
  
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center justify-between">
        <h3 className="font-serif text-xl font-semibold">Ingredients</h3>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={decreaseServings}
            disabled={servings <= 1}
            className="h-8 w-8"
          >
            <Minus className="h-3 w-3" />
          </Button>
          
          <span className="font-medium w-16 text-center">
            {servings} {servings === 1 ? 'serving' : 'servings'}
          </span>
          
          <Button 
            variant="outline" 
            size="icon" 
            onClick={increaseServings}
            className="h-8 w-8"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
      
      <ul className="divide-y">
        {ingredients.map((ingredient) => (
          <li 
            key={ingredient.id}
            className="ingredient-item group cursor-pointer"
            onClick={() => toggleIngredient(ingredient.id)}
          >
            <div 
              className={cn(
                "flex items-center justify-center h-5 w-5 rounded border transition-colors",
                checkedItems[ingredient.id] 
                  ? "bg-primary border-primary text-primary-foreground" 
                  : "border-input bg-background"
              )}
            >
              {checkedItems[ingredient.id] && <Check className="h-3 w-3" />}
            </div>
            
            <span 
              className={cn(
                "flex-1 transition-opacity",
                checkedItems[ingredient.id] && "line-through opacity-60"
              )}
            >
              <span className="font-medium">{calculateAmount(ingredient.amount)} {ingredient.unit}</span>{' '}
              {ingredient.name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;
