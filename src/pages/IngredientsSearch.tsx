
import React, { useState } from 'react';
import { X, Search, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import RecipeCard from '@/components/RecipeCard';
import { useToast } from '@/hooks/use-toast';

const IngredientsSearch = () => {
  const { toast } = useToast();
  const [ingredients, setIngredients] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  const addIngredient = () => {
    if (inputValue.trim() && !ingredients.includes(inputValue.trim())) {
      setIngredients([...ingredients, inputValue.trim()]);
      setInputValue('');
    }
  };
  
  const removeIngredient = (ingredient: string) => {
    setIngredients(ingredients.filter(i => i !== ingredient));
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addIngredient();
    }
  };
  
  const handleSearch = () => {
    if (ingredients.length === 0) {
      toast({
        title: "No ingredients added",
        description: "Please add at least one ingredient to search for recipes.",
        variant: "destructive"
      });
      return;
    }
    
    setShowResults(true);
    
    // In a real app, this would trigger an API call
    toast({
      title: "Searching for recipes",
      description: `Found 3 recipes with your ingredients: ${ingredients.join(', ')}`,
    });
  };
  
  // Mock data for recipe results
  const recipeResults = [
    {
      id: 'shrimp-stir-fry',
      title: 'Garlic Butter Shrimp Stir Fry',
      image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80',
      time: '15 minutes',
      difficulty: 'easy' as const,
      servings: 4,
      category: 'Seafood'
    },
    {
      id: 'veggie-pasta',
      title: 'Simple Vegetable Pasta',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      time: '25 minutes',
      difficulty: 'easy' as const,
      servings: 3,
      category: 'Pasta'
    },
    {
      id: 'omelette',
      title: 'Quick Breakfast Omelette',
      image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      time: '10 minutes',
      difficulty: 'easy' as const,
      servings: 1,
      category: 'Breakfast'
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="font-serif text-4xl font-bold mb-4">What Can I Make?</h1>
        <p className="text-muted-foreground">
          Enter the ingredients you have on hand, and we'll find recipes that you can make right now.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto bg-card rounded-xl border p-6 mb-12 animate-fade-in">
        <div className="flex items-center mb-5">
          <div className="relative flex-1">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter ingredients you have..."
              className="pr-10"
            />
            {inputValue && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 h-full"
                onClick={addIngredient}
              >
                <Plus className="h-4 w-4" />
              </Button>
            )}
          </div>
          <Button className="ml-2" onClick={handleSearch}>
            <Search className="h-4 w-4 mr-2" />
            Find Recipes
          </Button>
        </div>
        
        <div className="mb-4">
          <div className="text-sm text-muted-foreground mb-2">
            {ingredients.length === 0 
              ? 'Add ingredients to find matching recipes' 
              : 'Your ingredients:'}
          </div>
          <div className="flex flex-wrap gap-2">
            {ingredients.map((ingredient, index) => (
              <div
                key={index}
                className="flex items-center bg-primary/10 text-primary rounded-full px-3 py-1"
              >
                <span className="text-sm">{ingredient}</span>
                <button
                  className="ml-2 text-primary/60 hover:text-primary"
                  onClick={() => removeIngredient(ingredient)}
                >
                  <X className="h-3 w-3" />
                </button>
              </div>
            ))}
            
            {ingredients.length === 0 && (
              <div className="text-muted-foreground italic text-sm">
                No ingredients added yet
              </div>
            )}
          </div>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p>Popular ingredient suggestions: chicken, pasta, eggs, rice, tomatoes</p>
        </div>
      </div>
      
      {showResults && (
        <div className="animate-slide-up">
          <h2 className="section-heading mb-6">Recipes You Can Make</h2>
          
          <div className="recipe-grid">
            {recipeResults.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              Don't see what you're looking for? Try adding more ingredients or check out our full recipe collection.
            </p>
            <Button variant="outline">
              Browse All Recipes
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default IngredientsSearch;
