
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl font-bold mb-6">About MunchHub</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-8">
            MunchHub is a next-generation recipe platform designed to transform your cooking experience with interactive recipes, smart features, and beautiful design.
          </p>
          
          <div className="relative rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
              alt="Cooking" 
              className="w-full h-[300px] object-cover"
            />
          </div>
          
          <h2 className="font-serif text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            We believe cooking should be enjoyable, accessible, and stress-free. Our mission is to create the most intuitive and helpful culinary platform that adapts to your needs, whether you're a beginner cook or a seasoned chef.
          </p>
          
          <h2 className="font-serif text-2xl font-semibold mb-4">Key Features</h2>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <span><strong>Interactive recipes</strong> with step-by-step guidance</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <span><strong>Smart serving size adjustment</strong> that recalculates ingredients automatically</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <span><strong>Integrated cooking timers</strong> for perfect results every time</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <span><strong>"What Can I Make?"</strong> feature to find recipes based on ingredients you have</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                <span className="text-xs">✓</span>
              </div>
              <span><strong>Beautiful recipe cards</strong> that you can print or share</span>
            </li>
          </ul>
          
          <h2 className="font-serif text-2xl font-semibold mb-4">Coming Soon</h2>
          <p className="mb-6">
            We're constantly working to improve MunchHub with new features and enhancements. Coming soon:
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/10 text-accent flex items-center justify-center mr-3 mt-0.5">
                <span className="text-xs">!</span>
              </div>
              <span>Voice command support for hands-free cooking</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/10 text-accent flex items-center justify-center mr-3 mt-0.5">
                <span className="text-xs">!</span>
              </div>
              <span>AR mode to scan ingredients and discover recipes</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/10 text-accent flex items-center justify-center mr-3 mt-0.5">
                <span className="text-xs">!</span>
              </div>
              <span>AI-powered ingredient substitution suggestions</span>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-accent/10 text-accent flex items-center justify-center mr-3 mt-0.5">
                <span className="text-xs">!</span>
              </div>
              <span>Weekly meal planning based on your preferences</span>
            </li>
          </ul>
          
          <div className="bg-muted/30 rounded-xl p-6 text-center mb-8">
            <h3 className="font-serif text-xl font-semibold mb-3">Ready to start cooking?</h3>
            <p className="mb-4">Explore our collection of recipes and discover new favorites.</p>
            <Button asChild>
              <Link to="/recipes" className="group">
                Browse Recipes
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground text-center">
            MunchHub is a demonstration project and not a real product. All recipes and features are for illustration purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
