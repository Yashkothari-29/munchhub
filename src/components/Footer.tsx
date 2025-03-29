
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-primary text-xl">🍽️</span>
              <span className="font-serif text-lg font-semibold tracking-tight">MunchHub</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Delicious recipes with interactive features to make your cooking experience amazing.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Site Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-muted-foreground hover:text-foreground transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/ingredients" className="text-muted-foreground hover:text-foreground transition-colors">
                  What Can I Make?
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Categories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/category/breakfast" className="text-muted-foreground hover:text-foreground transition-colors">
                  Breakfast
                </Link>
              </li>
              <li>
                <Link to="/category/main-course" className="text-muted-foreground hover:text-foreground transition-colors">
                  Main Course
                </Link>
              </li>
              <li>
                <Link to="/category/desserts" className="text-muted-foreground hover:text-foreground transition-colors">
                  Desserts
                </Link>
              </li>
              <li>
                <Link to="/category/vegetarian" className="text-muted-foreground hover:text-foreground transition-colors">
                  Vegetarian
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Email Newsletter
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-6 mt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MunchHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
