import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import RecipeCard from '@/components/RecipeCard';
import RecipeFeatured from '@/components/RecipeFeatured';
import CategorySection from '@/components/CategorySection';
import BackgroundTexture from '@/components/BackgroundTexture';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search coming soon",
      description: "The search feature will be available in the next update.",
    });
  };
  
  const featuredRecipe = {
    id: 'shrimp-stir-fry',
    title: 'Garlic Butter Shrimp Stir Fry',
    description: 'Quick, flavorful, and incredibly easy to make. This garlic butter shrimp stir fry comes together in just 15 minutes, perfect for busy weeknights.',
    image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80',
    time: '15 minutes',
    difficulty: 'easy' as const,
    servings: 4,
    chef: 'Chef Alex'
  };
  
  const popularRecipes = [
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
    }
  ];
  
  const categories = [
    {
      id: 'breakfast',
      name: 'Breakfast',
      image: 'https://th.bing.com/th/id/OIP.3f4uw03GjHN2wa2tSeNc4wHaIu?rs=1&pid=ImgDetMain',
      count: 24
    },
    {
      id: 'main-course',
      name: 'Main Course',
      image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      count: 42
    },
    {
      id: 'desserts',
      name: 'Desserts',
      image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      count: 36
    },
    {
      id: 'vegetarian',
      name: 'Vegetarian',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      count: 28
    },
    {
      id: 'smoothies',
      name: 'Smoothies',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      count: 15
    },
    {
      id: 'quick-easy',
      name: 'Quick & Easy',
      image: 'https://images.unsplash.com/photo-1495546968767-f0573cca821e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      count: 30
    }
  ];

  return (
    <div className="relative">
      <BackgroundTexture />
      
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-accent/10 to-primary/10 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="space-y-6 animate-slide-up">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  Discover <span className="text-primary">Delicious</span> Recipes Worth Sharing
                </h1>
                <p className="text-lg text-muted-foreground">
                  Explore interactive recipes with smart features that make cooking a joy.
                </p>
                <form onSubmit={handleSearchSubmit} className="relative">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="Search for recipes, ingredients..."
                      className="pl-10 h-12 text-base"
                    />
                  </div>
                  <Button className="absolute right-1 top-1 h-10">
                    Search
                  </Button>
                </form>
              </div>
              
              <div className="relative animate-scale-in hidden md:block">
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"
                    alt="Cooking"
                    className="w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -left-5 bg-white dark:bg-card rounded-xl p-4 shadow-lg animate-slide-up" style={{ animationDelay: "0.3s" }}>
                  <div className="flex items-center space-x-2">
                    <div className="bg-primary/10 rounded-full p-2">
                      <Search className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Personalized Recipes</p>
                      <p className="text-xs text-muted-foreground">Based on your ingredients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Recipe */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <h2 className="section-heading">Featured Recipe</h2>
          <RecipeFeatured {...featuredRecipe} />
        </div>
      </section>
      
      {/* Categories */}
      <CategorySection categories={categories} />
      
      {/* Popular Recipes */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="section-heading mb-0">Popular Recipes</h2>
            <Button asChild variant="outline" className="group">
              <Link to="/recipes">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <div className="recipe-grid">
            {popularRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} {...recipe} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-serif text-3xl font-semibold">What Can You Make Today?</h2>
            <p className="text-muted-foreground">
              Tell us what ingredients you have on hand, and we'll suggest delicious recipes you can make right now.
            </p>
            <Button asChild size="lg" className="mt-2 animate-pulse-gentle">
              <Link to="/ingredients">
                Find Recipes by Ingredients
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
