
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, Users, ChefHat, Printer, Share, ArrowLeft, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import IngredientList, { Ingredient } from '@/components/IngredientList';
import RecipeSteps, { Step } from '@/components/RecipeSteps';
import Timer from '@/components/Timer';
import PrintableRecipe from '@/components/PrintableRecipe';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

type RecipeDetailParams = {
  id: string;
};

const RecipeDetail = () => {
  const { id } = useParams<string>();
  const { toast } = useToast();
  const [isFavorite, setIsFavorite] = useState(false);
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const printableRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite 
        ? "Recipe has been removed from your favorites." 
        : "Recipe has been added to your favorites.",
    });
  };
  
  const handleShare = () => {
    toast({
      title: "Share feature coming soon",
      description: "This feature will be available in the next update.",
    });
  };
  
  const handlePrint = () => {
    setShowPrintPreview(true);
  };

  const generatePDF = async () => {
    if (!printableRef.current) return;
    
    try {
      toast({
        title: "Generating PDF",
        description: "Please wait while we create your beautiful infographic...",
      });
      
      const canvas = await html2canvas(printableRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });
      
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);
      pdf.save(`${recipe.title.replace(/\s+/g, '-').toLowerCase()}.pdf`);
      
      toast({
        title: "PDF Generated!",
        description: "Your recipe infographic has been created successfully.",
      });
      
      setShowPrintPreview(false);
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Error",
        description: "Failed to generate PDF. Please try again.",
        variant: "destructive",
      });
    }
  };

  const downloadImage = async () => {
    if (!printableRef.current) return;
    
    try {
      toast({
        title: "Generating Image",
        description: "Please wait while we create your beautiful infographic...",
      });
      
      const canvas = await html2canvas(printableRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
      });
      
      const link = document.createElement('a');
      link.download = `${recipe.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      link.href = canvas.toDataURL('image/jpeg', 0.8);
      link.click();
      
      toast({
        title: "Image Downloaded!",
        description: "Your recipe infographic has been created successfully.",
      });
      
      setShowPrintPreview(false);
    } catch (error) {
      console.error("Error generating image:", error);
      toast({
        title: "Error",
        description: "Failed to generate image. Please try again.",
        variant: "destructive",
      });
    }
  };
  
  let recipe;
  
  if (id === 'shrimp-stir-fry') {
    recipe = {
      title: 'Garlic Butter Shrimp Stir Fry',
      description: 'Quick, flavorful, and incredibly easy to make. This garlic butter shrimp stir fry comes together in just 15 minutes, perfect for busy weeknights.',
      image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80',
      time: '15 minutes',
      cookTime: '8 minutes',
      prepTime: '7 minutes',
      difficulty: 'easy' as const,
      servings: 4,
      chef: 'Chef Alex',
      ingredients: [
        { id: '1', name: 'shrimp, peeled and deveined', amount: 1, unit: 'lb' },
        { id: '2', name: 'butter', amount: 3, unit: 'tbsp' },
        { id: '3', name: 'garlic, minced', amount: 4, unit: 'cloves' },
        { id: '4', name: 'bell peppers, sliced', amount: 2, unit: '' },
        { id: '5', name: 'soy sauce', amount: 2, unit: 'tbsp' },
        { id: '6', name: 'lemon juice', amount: 1, unit: 'tbsp' },
        { id: '7', name: 'red pepper flakes', amount: 0.25, unit: 'tsp' },
        { id: '8', name: 'green onions, sliced', amount: 3, unit: '' },
        { id: '9', name: 'salt', amount: 0.5, unit: 'tsp' },
        { id: '10', name: 'black pepper', amount: 0.25, unit: 'tsp' },
      ],
      steps: [
        { 
          id: '1', 
          description: 'In a large skillet over medium-high heat, melt 1 tablespoon of butter. Add the shrimp, season with salt and pepper, and cook until pink, about 2 minutes per side. Remove from pan and set aside.',
          timer: 240
        },
        { 
          id: '2', 
          description: 'In the same skillet, add the remaining butter. Add the minced garlic and cook until fragrant, about 30 seconds.',
          timer: 30
        },
        { 
          id: '3', 
          description: 'Add the sliced bell peppers and cook until slightly softened, about 3-4 minutes.',
          timer: 240
        },
        { 
          id: '4', 
          description: 'Return the shrimp to the skillet. Add soy sauce, lemon juice, and red pepper flakes. Stir to combine.',
        },
        { 
          id: '5', 
          description: 'Cook for another minute until everything is well combined and heated through. Garnish with sliced green onions before serving.',
          timer: 60
        },
      ],
      nutrition: {
        calories: 245,
        protein: 28,
        fat: 12,
        carbs: 8,
        fiber: 2
      }
    };
  } else {
    recipe = {
      title: 'Recipe Not Found',
      description: 'Sorry, we couldn\'t find the recipe you\'re looking for.',
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80',
      time: 'N/A',
      cookTime: 'N/A',
      prepTime: 'N/A',
      difficulty: 'medium' as const,
      servings: 0,
      chef: 'Unknown',
      ingredients: [],
      steps: [],
      nutrition: {
        calories: 0,
        protein: 0,
        fat: 0,
        carbs: 0,
        fiber: 0
      }
    };
  }

  return (
    <div className="pb-16">
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 container mx-auto">
          <Link to="/" className="absolute top-4 left-4 bg-background/80 backdrop-blur-md p-2 rounded-full">
            <ArrowLeft className="h-5 w-5" />
          </Link>
          
          <div className="animate-slide-up">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                {recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
              </span>
              
              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                Seafood
              </span>
              
              <span className="bg-secondary/30 text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                Quick & Easy
              </span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{recipe.title}</h1>
            
            <p className="text-muted-foreground max-w-3xl mb-6">{recipe.description}</p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-primary" />
                <div>
                  <div className="font-medium">Total Time</div>
                  <div className="text-muted-foreground">{recipe.time}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-primary" />
                <div>
                  <div className="font-medium">Servings</div>
                  <div className="text-muted-foreground">{recipe.servings}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <ChefHat className="w-5 h-5 mr-2 text-primary" />
                <div>
                  <div className="font-medium">Chef</div>
                  <div className="text-muted-foreground">{recipe.chef}</div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 mt-6">
              <Button variant="outline" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" />
                Print Recipe
              </Button>
              
              <Button variant="outline" onClick={handleShare}>
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
              
              <Button 
                variant={isFavorite ? "default" : "outline"}
                className={isFavorite ? "bg-red-500 hover:bg-red-600 text-white border-red-500" : ""}
                onClick={toggleFavorite}
              >
                <Heart className={`h-4 w-4 mr-2 ${isFavorite ? "fill-current" : ""}`} />
                {isFavorite ? "Saved" : "Save"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <IngredientList 
              ingredients={recipe.ingredients as Ingredient[]} 
              defaultServings={recipe.servings}
            />
            
            <Timer defaultTime={180} />
            
            <div className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="font-serif text-xl font-semibold mb-4">Nutrition Facts</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between py-1 border-b">
                  <span>Calories</span>
                  <span className="font-medium">{recipe.nutrition.calories}</span>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <span>Protein</span>
                  <span className="font-medium">{recipe.nutrition.protein}g</span>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <span>Fat</span>
                  <span className="font-medium">{recipe.nutrition.fat}g</span>
                </div>
                <div className="flex justify-between py-1 border-b">
                  <span>Carbohydrates</span>
                  <span className="font-medium">{recipe.nutrition.carbs}g</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Fiber</span>
                  <span className="font-medium">{recipe.nutrition.fiber}g</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <RecipeSteps steps={recipe.steps as Step[]} />
          </div>
        </div>
      </div>
      
      {/* Mobile Timer Controls */}
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            className="fixed bottom-6 right-6 shadow-lg rounded-full h-14 w-14 lg:hidden"
            size="icon"
          >
            <Clock className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-auto rounded-t-xl">
          <SheetHeader>
            <SheetTitle>Cooking Timer</SheetTitle>
            <SheetDescription>
              Set timers for your recipe steps
            </SheetDescription>
          </SheetHeader>
          <div className="py-4">
            <Timer defaultTime={180} />
          </div>
        </SheetContent>
      </Sheet>

      {/* Print Preview Dialog */}
      <Dialog open={showPrintPreview} onOpenChange={setShowPrintPreview}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <div className="p-4">
            <div className="mb-6 flex justify-end space-x-4">
              <Button onClick={downloadImage} className="bg-green-500 hover:bg-green-600">
                Download as Image
              </Button>
              <Button onClick={generatePDF}>
                Download as PDF
              </Button>
            </div>
            
            <div className="border rounded-lg shadow-lg overflow-hidden">
              <PrintableRecipe
                ref={printableRef}
                title={recipe.title}
                description={recipe.description}
                image={recipe.image}
                time={recipe.time}
                cookTime={recipe.cookTime}
                prepTime={recipe.prepTime}
                difficulty={recipe.difficulty}
                servings={recipe.servings}
                chef={recipe.chef}
                ingredients={recipe.ingredients as Ingredient[]}
                steps={recipe.steps as Step[]}
                nutrition={recipe.nutrition}
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RecipeDetail;
