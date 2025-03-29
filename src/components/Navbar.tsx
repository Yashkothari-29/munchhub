
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const { toast } = useToast();
  
  const handleSearchClick = () => {
    toast({
      title: "Search coming soon",
      description: "The search feature will be available in the next update.",
    });
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-primary text-2xl">🍽️</span>
              <span className="font-serif text-xl font-semibold tracking-tight">MunchHub</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/recipes" className="text-sm font-medium hover:text-primary transition-colors">
                Recipes
              </Link>
              <Link to="/ingredients" className="text-sm font-medium hover:text-primary transition-colors">
                What Can I Make?
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleSearchClick}
              className="hidden sm:flex"
            >
              <Search className="h-5 w-5" />
            </Button>

            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/recipes">Recipes</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/ingredients">What Can I Make?</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/about">About</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
