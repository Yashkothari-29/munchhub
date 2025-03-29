
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import RecipeCard from '@/components/RecipeCard';

const Recipes = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 6;
  
  // Mock data for recipes with detailed information
  const recipes = [
    {
      id: 'shrimp-stir-fry',
      title: 'Garlic Butter Shrimp Stir Fry',
      image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80',
      time: '15 minutes',
      difficulty: 'easy' as const,
      servings: 4,
      category: 'Seafood',
      description: 'A quick and flavorful seafood dish with juicy shrimp cooked in a garlic butter sauce with colorful vegetables.',
      chef: 'Chef Alex',
      ingredients: [
        { id: '1', name: 'large shrimp', amount: 1, unit: 'lb' },
        { id: '2', name: 'butter', amount: 3, unit: 'tbsp' },
        { id: '3', name: 'garlic cloves, minced', amount: 4, unit: '' },
        { id: '4', name: 'bell peppers, sliced', amount: 2, unit: '' },
        { id: '5', name: 'broccoli florets', amount: 2, unit: 'cups' },
        { id: '6', name: 'soy sauce', amount: 2, unit: 'tbsp' },
        { id: '7', name: 'lemon juice', amount: 1, unit: 'tbsp' },
        { id: '8', name: 'red pepper flakes', amount: 0.5, unit: 'tsp' }
      ],
      prepTime: '5 minutes',
      cookTime: '10 minutes',
      nutrition: {
        calories: 245,
        protein: 28,
        fat: 12,
        carbs: 8,
        fiber: 2
      }
    },
    {
      id: 'lemon-pasta',
      title: 'Creamy Lemon Pasta',
      image: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
      time: '20 minutes',
      difficulty: 'easy' as const,
      servings: 2,
      category: 'Pasta',
      description: 'A bright and creamy pasta dish that's perfect for spring and summer. The lemon adds a refreshing twist to the rich sauce.',
      chef: 'Chef Maria',
      ingredients: [
        { id: '1', name: 'spaghetti', amount: 8, unit: 'oz' },
        { id: '2', name: 'heavy cream', amount: 0.75, unit: 'cup' },
        { id: '3', name: 'butter', amount: 3, unit: 'tbsp' },
        { id: '4', name: 'lemon zest', amount: 1, unit: 'tbsp' },
        { id: '5', name: 'lemon juice', amount: 2, unit: 'tbsp' },
        { id: '6', name: 'parmesan cheese, grated', amount: 0.5, unit: 'cup' },
        { id: '7', name: 'fresh basil, chopped', amount: 2, unit: 'tbsp' },
        { id: '8', name: 'salt and pepper', amount: 0, unit: 'to taste' }
      ],
      prepTime: '5 minutes',
      cookTime: '15 minutes',
      nutrition: {
        calories: 520,
        protein: 18,
        fat: 35,
        carbs: 52,
        fiber: 3
      }
    },
    {
      id: 'berry-smoothie',
      title: 'Berry Protein Smoothie',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
      time: '5 minutes',
      difficulty: 'easy' as const,
      servings: 1,
      category: 'Smoothies',
      description: 'A nutritious and delicious smoothie packed with antioxidants, protein, and fiber to fuel your day.',
      chef: 'Chef Taylor',
      ingredients: [
        { id: '1', name: 'mixed berries, frozen', amount: 1, unit: 'cup' },
        { id: '2', name: 'banana', amount: 0.5, unit: '' },
        { id: '3', name: 'protein powder', amount: 1, unit: 'scoop' },
        { id: '4', name: 'greek yogurt', amount: 0.5, unit: 'cup' },
        { id: '5', name: 'almond milk', amount: 0.75, unit: 'cup' },
        { id: '6', name: 'chia seeds', amount: 1, unit: 'tsp' },
        { id: '7', name: 'honey', amount: 1, unit: 'tsp' }
      ],
      prepTime: '5 minutes',
      cookTime: '0 minutes',
      nutrition: {
        calories: 280,
        protein: 22,
        fat: 5,
        carbs: 40,
        fiber: 8
      }
    },
    {
      id: 'chicken-curry',
      title: 'Thai Coconut Chicken Curry',
      image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
      time: '35 minutes',
      difficulty: 'medium' as const,
      servings: 4,
      category: 'Main Course',
      description: 'A fragrant and creamy curry with tender chicken pieces, vibrant vegetables, and a rich coconut sauce.',
      chef: 'Chef Raj',
      ingredients: [
        { id: '1', name: 'chicken thighs, boneless', amount: 1.5, unit: 'lbs' },
        { id: '2', name: 'coconut milk', amount: 14, unit: 'oz can' },
        { id: '3', name: 'red curry paste', amount: 3, unit: 'tbsp' },
        { id: '4', name: 'bell peppers, sliced', amount: 2, unit: '' },
        { id: '5', name: 'onion, sliced', amount: 1, unit: '' },
        { id: '6', name: 'garlic cloves, minced', amount: 3, unit: '' },
        { id: '7', name: 'ginger, grated', amount: 1, unit: 'tbsp' },
        { id: '8', name: 'fish sauce', amount: 1, unit: 'tbsp' },
        { id: '9', name: 'brown sugar', amount: 1, unit: 'tbsp' },
        { id: '10', name: 'lime juice', amount: 2, unit: 'tbsp' },
        { id: '11', name: 'fresh basil leaves', amount: 0.5, unit: 'cup' }
      ],
      prepTime: '15 minutes',
      cookTime: '20 minutes',
      nutrition: {
        calories: 380,
        protein: 32,
        fat: 22,
        carbs: 15,
        fiber: 3
      }
    },
    {
      id: 'veggie-pasta',
      title: 'Simple Vegetable Pasta',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      time: '25 minutes',
      difficulty: 'easy' as const,
      servings: 3,
      category: 'Pasta',
      description: 'A light and colorful pasta dish loaded with fresh vegetables and herbs in a simple olive oil sauce.',
      chef: 'Chef Isabella',
      ingredients: [
        { id: '1', name: 'penne pasta', amount: 8, unit: 'oz' },
        { id: '2', name: 'cherry tomatoes, halved', amount: 2, unit: 'cups' },
        { id: '3', name: 'zucchini, diced', amount: 1, unit: '' },
        { id: '4', name: 'yellow squash, diced', amount: 1, unit: '' },
        { id: '5', name: 'red onion, thinly sliced', amount: 0.5, unit: '' },
        { id: '6', name: 'garlic cloves, minced', amount: 2, unit: '' },
        { id: '7', name: 'olive oil', amount: 3, unit: 'tbsp' },
        { id: '8', name: 'fresh basil, chopped', amount: 0.25, unit: 'cup' },
        { id: '9', name: 'parmesan cheese, grated', amount: 0.3, unit: 'cup' },
        { id: '10', name: 'red pepper flakes', amount: 0.25, unit: 'tsp' }
      ],
      prepTime: '10 minutes',
      cookTime: '15 minutes',
      nutrition: {
        calories: 320,
        protein: 12,
        fat: 14,
        carbs: 42,
        fiber: 5
      }
    },
    {
      id: 'omelette',
      title: 'Quick Breakfast Omelette',
      image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      time: '10 minutes',
      difficulty: 'easy' as const,
      servings: 1,
      category: 'Breakfast',
      description: 'A fluffy and protein-packed omelette filled with cheese and vegetables for a quick and satisfying breakfast.',
      chef: 'Chef Jamie',
      ingredients: [
        { id: '1', name: 'eggs', amount: 3, unit: '' },
        { id: '2', name: 'milk', amount: 1, unit: 'tbsp' },
        { id: '3', name: 'cheddar cheese, shredded', amount: 0.25, unit: 'cup' },
        { id: '4', name: 'bell pepper, diced', amount: 0.25, unit: '' },
        { id: '5', name: 'onion, diced', amount: 0.25, unit: '' },
        { id: '6', name: 'spinach', amount: 0.5, unit: 'cup' },
        { id: '7', name: 'butter', amount: 1, unit: 'tbsp' },
        { id: '8', name: 'salt and pepper', amount: 0, unit: 'to taste' }
      ],
      prepTime: '5 minutes',
      cookTime: '5 minutes',
      nutrition: {
        calories: 290,
        protein: 21,
        fat: 22,
        carbs: 6,
        fiber: 1
      }
    },
    {
      id: 'chocolate-cake',
      title: 'Double Chocolate Cake',
      image: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
      time: '50 minutes',
      difficulty: 'medium' as const,
      servings: 8,
      category: 'Desserts',
      description: 'A decadent and moist chocolate cake with rich chocolate ganache frosting that's perfect for special occasions.',
      chef: 'Chef Sofia',
      ingredients: [
        { id: '1', name: 'all-purpose flour', amount: 2, unit: 'cups' },
        { id: '2', name: 'granulated sugar', amount: 1.75, unit: 'cups' },
        { id: '3', name: 'unsweetened cocoa powder', amount: 0.75, unit: 'cup' },
        { id: '4', name: 'baking powder', amount: 1.5, unit: 'tsp' },
        { id: '5', name: 'baking soda', amount: 1.5, unit: 'tsp' },
        { id: '6', name: 'salt', amount: 1, unit: 'tsp' },
        { id: '7', name: 'eggs', amount: 2, unit: '' },
        { id: '8', name: 'milk', amount: 1, unit: 'cup' },
        { id: '9', name: 'vegetable oil', amount: 0.5, unit: 'cup' },
        { id: '10', name: 'vanilla extract', amount: 2, unit: 'tsp' },
        { id: '11', name: 'boiling water', amount: 1, unit: 'cup' },
        { id: '12', name: 'semi-sweet chocolate chips', amount: 2, unit: 'cups' },
        { id: '13', name: 'heavy cream', amount: 1, unit: 'cup' }
      ],
      prepTime: '20 minutes',
      cookTime: '30 minutes',
      nutrition: {
        calories: 520,
        protein: 6,
        fat: 24,
        carbs: 72,
        fiber: 4
      }
    },
    {
      id: 'veggie-salad',
      title: 'Mediterranean Veggie Salad',
      image: 'https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
      time: '15 minutes',
      difficulty: 'easy' as const,
      servings: 2,
      category: 'Salads',
      description: 'A refreshing and vibrant salad with Mediterranean flavors, crunchy vegetables, and tangy feta cheese.',
      chef: 'Chef Elena',
      ingredients: [
        { id: '1', name: 'cucumber, chopped', amount: 1, unit: '' },
        { id: '2', name: 'cherry tomatoes, halved', amount: 1, unit: 'cup' },
        { id: '3', name: 'red bell pepper, chopped', amount: 1, unit: '' },
        { id: '4', name: 'red onion, thinly sliced', amount: 0.25, unit: '' },
        { id: '5', name: 'kalamata olives, pitted', amount: 0.3, unit: 'cup' },
        { id: '6', name: 'feta cheese, crumbled', amount: 0.5, unit: 'cup' },
        { id: '7', name: 'fresh parsley, chopped', amount: 0.25, unit: 'cup' },
        { id: '8', name: 'olive oil', amount: 3, unit: 'tbsp' },
        { id: '9', name: 'lemon juice', amount: 2, unit: 'tbsp' },
        { id: '10', name: 'dried oregano', amount: 1, unit: 'tsp' }
      ],
      prepTime: '15 minutes',
      cookTime: '0 minutes',
      nutrition: {
        calories: 280,
        protein: 8,
        fat: 24,
        carbs: 12,
        fiber: 4
      }
    },
    {
      id: 'grilled-salmon',
      title: 'Lemon Herb Grilled Salmon',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
      time: '25 minutes',
      difficulty: 'medium' as const,
      servings: 4,
      category: 'Seafood',
      description: 'Tender and flaky salmon fillets grilled to perfection with a bright lemon herb marinade.',
      chef: 'Chef Thomas',
      ingredients: [
        { id: '1', name: 'salmon fillets', amount: 4, unit: '6 oz each' },
        { id: '2', name: 'olive oil', amount: 3, unit: 'tbsp' },
        { id: '3', name: 'lemon juice', amount: 2, unit: 'tbsp' },
        { id: '4', name: 'lemon zest', amount: 1, unit: 'tbsp' },
        { id: '5', name: 'garlic cloves, minced', amount: 2, unit: '' },
        { id: '6', name: 'fresh dill, chopped', amount: 2, unit: 'tbsp' },
        { id: '7', name: 'fresh parsley, chopped', amount: 2, unit: 'tbsp' },
        { id: '8', name: 'dijon mustard', amount: 1, unit: 'tsp' },
        { id: '9', name: 'honey', amount: 1, unit: 'tsp' },
        { id: '10', name: 'salt and pepper', amount: 0, unit: 'to taste' }
      ],
      prepTime: '10 minutes',
      cookTime: '15 minutes',
      nutrition: {
        calories: 320,
        protein: 34,
        fat: 18,
        carbs: 3,
        fiber: 0
      }
    }
  ];

  // Filter recipes based on search query
  const filteredRecipes = recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe);
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
        {currentRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
      
      {filteredRecipes.length > recipesPerPage && (
        <Pagination className="mt-12">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious 
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
            
            {[...Array(totalPages)].map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={currentPage === i + 1}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            
            <PaginationItem>
              <PaginationNext 
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
      
      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-4">
          Showing {Math.min(currentRecipes.length, recipesPerPage)} of {filteredRecipes.length} recipes
        </p>
      </div>
    </div>
  );
};

export default Recipes;
