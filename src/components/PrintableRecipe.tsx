
import React, { forwardRef } from 'react';
import { Clock, Users, ChefHat } from 'lucide-react';
import { cn } from '@/lib/utils';

type Ingredient = {
  id: string;
  name: string;
  amount: number;
  unit: string;
};

type Step = {
  id: string;
  description: string;
  timer?: number;
};

type NutritionInfo = {
  calories: number;
  protein: number;
  fat: number;
  carbs: number;
  fiber: number;
};

interface PrintableRecipeProps {
  title: string;
  description: string;
  image: string;
  time: string;
  cookTime: string;
  prepTime: string;
  difficulty: 'easy' | 'medium' | 'hard';
  servings: number;
  chef: string;
  ingredients: Ingredient[];
  steps: Step[];
  nutrition: NutritionInfo;
}

const PrintableRecipe = forwardRef<HTMLDivElement, PrintableRecipeProps>(
  ({ 
    title, description, image, time, cookTime, prepTime, 
    difficulty, servings, chef, ingredients, steps, nutrition 
  }, ref) => {
    return (
      <div 
        ref={ref} 
        className="bg-white text-black p-8 max-w-4xl mx-auto"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <div className="print-header mb-8 border-b-2 border-primary pb-6">
          <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{title}</h1>
          <p className="text-gray-600 mb-6">{description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-lg overflow-hidden">
              <img src={image} alt={title} className="w-full h-auto" />
            </div>
            
            <div className="flex flex-col justify-center space-y-6">
              <div className="flex items-center space-x-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-600">Total Time</p>
                  <p className="font-semibold">{time}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-600">Servings</p>
                  <p className="font-semibold">{servings}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="bg-primary/10 p-3 rounded-full">
                  <ChefHat className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-600">Chef</p>
                  <p className="font-semibold">{chef}</p>
                </div>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold mb-2">Nutrition Facts (per serving)</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-gray-600">Calories</p>
                    <p className="font-semibold">{nutrition.calories}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Protein</p>
                    <p className="font-semibold">{nutrition.protein}g</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Fat</p>
                    <p className="font-semibold">{nutrition.fat}g</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Carbs</p>
                    <p className="font-semibold">{nutrition.carbs}g</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: 'Playfair Display, serif' }}>Ingredients</h2>
            <ul className="space-y-2">
              {ingredients.map((ingredient) => (
                <li key={ingredient.id} className="flex items-start">
                  <div className="mr-2 mt-1 bg-primary/20 rounded-full w-2 h-2"></div>
                  <span>
                    <strong>{ingredient.amount} {ingredient.unit}</strong> {ingredient.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4 text-primary" style={{ fontFamily: 'Playfair Display, serif' }}>Instructions</h2>
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li key={step.id} className="flex">
                  <div className="mr-4 flex-shrink-0">
                    <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <p>{step.description}</p>
                    {step.timer && (
                      <p className="text-sm text-gray-600 mt-1">
                        (⏱️ {Math.floor(step.timer / 60)}:{(step.timer % 60).toString().padStart(2, '0')})
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t text-center text-gray-500 text-sm">
          <p>Recipe from the Ultimate Recipe Blog | www.ultimaterecipeblog.com</p>
        </div>
      </div>
    );
  }
);

PrintableRecipe.displayName = 'PrintableRecipe';

export default PrintableRecipe;
