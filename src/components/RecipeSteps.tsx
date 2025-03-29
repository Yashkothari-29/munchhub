
import React, { useState } from 'react';
import { ChevronRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface Step {
  id: string;
  description: string;
  image?: string;
  timer?: number; // in seconds
}

interface RecipeStepsProps {
  steps: Step[];
  className?: string;
}

const RecipeSteps: React.FC<RecipeStepsProps> = ({
  steps,
  className
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});
  
  const markAsCompleted = (id: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const goToNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(prev => prev + 1);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  
  const goToPreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <div className={cn("space-y-6", className)}>
      <h3 className="font-serif text-xl font-semibold">Instructions</h3>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className={cn(
              "cooking-step transition-all duration-300 relative",
              index === activeStep 
                ? "opacity-100 scale-100" 
                : "opacity-50 scale-95"
            )}
          >
            <div className="flex items-start gap-4">
              <div 
                className={cn(
                  "flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium shrink-0 mt-0.5 transition-colors",
                  completedSteps[step.id]
                    ? "bg-primary text-primary-foreground"
                    : index === activeStep
                      ? "bg-accent text-accent-foreground" 
                      : "bg-muted text-muted-foreground"
                )}
              >
                {completedSteps[step.id] ? <Check className="h-4 w-4" /> : index + 1}
              </div>
              
              <div className="space-y-3 flex-1">
                <p className="text-base">{step.description}</p>
                
                {step.image && (
                  <div className="rounded-lg overflow-hidden mt-3">
                    <img 
                      src={step.image} 
                      alt={`Step ${index + 1}`} 
                      className="w-full object-cover"
                    />
                  </div>
                )}
                
                <div className="flex justify-between items-center pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => markAsCompleted(step.id)}
                    className={cn(
                      completedSteps[step.id] ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {completedSteps[step.id] ? "Mark as incomplete" : "Mark as completed"}
                  </Button>
                  
                  {step.timer && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => alert(`Timer functionality will be added here for ${step.timer} seconds`)}
                    >
                      Set Timer ({Math.floor(step.timer / 60)}:{(step.timer % 60).toString().padStart(2, '0')})
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-between pt-4">
        <Button
          variant="outline"
          onClick={goToPreviousStep}
          disabled={activeStep === 0}
        >
          Previous Step
        </Button>
        
        <Button
          onClick={goToNextStep}
          disabled={activeStep === steps.length - 1}
          className="group"
        >
          Next Step
          <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default RecipeSteps;
