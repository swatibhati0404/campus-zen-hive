import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  variant?: 'default' | 'highlighted';
  comingSoon?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  image,
  buttonText = "Learn More",
  onButtonClick,
  variant = 'default',
  comingSoon = false
}) => {
  return (
    <Card className={`group relative overflow-hidden transition-smooth hover:shadow-lg hover:scale-105 ${
      variant === 'highlighted' ? 'border-primary shadow-md bg-gradient-card' : ''
    }`}>
      {comingSoon && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
            Coming Soon
          </span>
        </div>
      )}
      
      {image && (
        <div className="aspect-video overflow-hidden bg-muted">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-smooth group-hover:scale-110"
          />
        </div>
      )}
      
      <CardHeader className="pb-3">
        <div className="flex items-center space-x-3">
          <div className={`flex items-center justify-center w-12 h-12 rounded-xl shadow-sm ${
            variant === 'highlighted' ? 'bg-gradient-primary' : 'bg-muted'
          }`}>
            <Icon className={`w-6 h-6 ${
              variant === 'highlighted' ? 'text-white' : 'text-primary'
            }`} />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0">
        <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </CardDescription>
        
        {buttonText && (
          <Button 
            variant={variant === 'highlighted' ? 'hero' : 'outline'} 
            size="sm" 
            onClick={onButtonClick}
            disabled={comingSoon}
            className="w-full group-hover:shadow-md transition-smooth"
          >
            {buttonText}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default FeatureCard;