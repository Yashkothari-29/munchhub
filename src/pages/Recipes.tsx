
import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import RecipeCard from '@/components/RecipeCard';

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data for recipes
  const recipes = [
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
      id: 'lemon-pasta',
      title: 'Creamy Lemon Pasta',
      image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
      time: '20 minutes',
      difficulty: 'easy' as const,
      servings: 2,
      category: 'Pasta'
    },
    {
      id: 'berry-smoothie',
      title: 'Berry Protein Smoothie',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
      time: '5 minutes',
      difficulty: 'easy' as const,
      servings: 1,
      category: 'Smoothies'
    },
    {
      id: 'chicken-curry',
      title: 'Thai Coconut Chicken Curry',
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
      time: '35 minutes',
      difficulty: 'medium' as const,
      servings: 4,
      category: 'Main Course'
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
    },
    {
      id: 'chocolate-cake',
      title: 'Double Chocolate Cake',
      image: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
      time: '50 minutes',
      difficulty: 'medium' as const,
      servings: 8,
      category: 'Desserts'
    },
    {
      id: 'veggie-salad',
      title: 'Mediterranean Veggie Salad',
      image: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
      time: '15 minutes',
      difficulty: 'easy' as const,
      servings: 2,
      category: 'Salads'
    },
    {
      id: 'grilled-salmon',
      title: 'Lemon Herb Grilled Salmon',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
      time: '25 minutes',
      difficulty: 'medium' as const,
      servings: 4,
      category: 'Seafood'
    }
  ];

  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="font-serif text-4xl font-bold mb-4">All Recipes</h1>
        <p className="text-muted-foreground">
          Browse our collection of delicious recipes for every occasion and skill level.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search recipes..."
            className="pl-10"
          />
        </div>
        
        <div className="flex gap-2">
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="breakfast">Breakfast</SelectItem>
              <SelectItem value="lunch">Lunch</SelectItem>
              <SelectItem value="dinner">Dinner</SelectItem>
              <SelectItem value="desserts">Desserts</SelectItem>
            </SelectContent>
          </Select>
          
          <Select defaultValue="all">
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Difficulties</SelectItem>
              <SelectItem value="easy">Easy</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="hard">Hard</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="outline" size="icon" className="hidden sm:flex">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          Showing 9 of 42 recipes
        </p>
        <Button>Load More Recipes</Button>
      </div>
    </div>
  );
};

export default Recipes;
