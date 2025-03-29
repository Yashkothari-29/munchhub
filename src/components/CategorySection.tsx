
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="section-heading">Categories</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/category/${category.id}`}
              className="group"
            >
              <div className="flex flex-col items-center">
                <div className="w-full aspect-square rounded-full overflow-hidden mb-3 bg-accent/10 p-1 animate-fade-in">
                  <div className="w-full h-full rounded-full overflow-hidden group-hover:animate-pulse-gentle">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="font-medium text-center">{category.name}</h3>
                <p className="text-xs text-muted-foreground">{category.count} recipes</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
