import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Video, 
  Headphones, 
  Download, 
  Search,
  Filter,
  Clock,
  Star,
  Play,
  FileText,
  Heart,
  Brain,
  Smile,
  Moon
} from 'lucide-react';

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', icon: BookOpen },
    { id: 'articles', label: 'Articles', icon: FileText },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'audio', label: 'Audio', icon: Headphones },
    { id: 'guides', label: 'Guides', icon: Download }
  ];

  const resources = [
    {
      id: 1,
      title: "Understanding Anxiety: A Student's Guide",
      description: "Comprehensive guide to recognizing, understanding, and managing anxiety in college settings.",
      type: 'articles',
      category: 'Anxiety',
      duration: '8 min read',
      rating: 4.8,
      tags: ['anxiety', 'coping', 'students'],
      featured: true
    },
    {
      id: 2,
      title: "Mindfulness Meditation for Beginners",
      description: "10-minute guided meditation perfect for students new to mindfulness practice.",
      type: 'audio',
      category: 'Mindfulness',
      duration: '10 min',
      rating: 4.9,
      tags: ['meditation', 'mindfulness', 'relaxation']
    },
    {
      id: 3,
      title: "Managing Academic Stress",
      description: "Evidence-based strategies for handling academic pressure and maintaining mental wellness.",
      type: 'videos',
      category: 'Stress Management',
      duration: '15 min',
      rating: 4.7,
      tags: ['stress', 'academics', 'time-management']
    },
    {
      id: 4,
      title: "Sleep Hygiene for Students",
      description: "Essential guide to improving sleep quality and establishing healthy sleep habits.",
      type: 'guides',
      category: 'Sleep Health',
      duration: '12 min read',
      rating: 4.6,
      tags: ['sleep', 'health', 'routine']
    },
    {
      id: 5,
      title: "Building Social Connections",
      description: "Practical tips for overcoming social anxiety and building meaningful relationships on campus.",
      type: 'articles',
      category: 'Social Wellness',
      duration: '6 min read',
      rating: 4.5,
      tags: ['social', 'relationships', 'community']
    },
    {
      id: 6,
      title: "Crisis Coping Strategies",
      description: "Immediate techniques for managing mental health crises and when to seek help.",
      type: 'guides',
      category: 'Crisis Support',
      duration: '5 min read',
      rating: 4.9,
      tags: ['crisis', 'emergency', 'support'],
      featured: true
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'anxiety': return Heart;
      case 'mindfulness': return Brain;
      case 'stress management': return Smile;
      case 'sleep health': return Moon;
      default: return BookOpen;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'videos': return Video;
      case 'audio': return Headphones;
      case 'guides': return Download;
      default: return FileText;
    }
  };

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Resource Hub</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Curated mental health resources, guides, and tools designed specifically for college students. 
            Everything you need for your wellness journey.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center space-x-2">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </Button>
          </div>
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Star className="w-6 h-6 text-warning mr-2" />
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.filter(resource => resource.featured).map((resource) => {
              const TypeIcon = getTypeIcon(resource.type);
              const CategoryIcon = getCategoryIcon(resource.category);
              
              return (
                <Card key={resource.id} className="group hover:shadow-lg transition-smooth border-primary/20 bg-gradient-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl shadow-sm">
                          <CategoryIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            <TypeIcon className="w-3 h-3 mr-1" />
                            {resource.type}
                          </Badge>
                          <CardTitle className="text-lg">{resource.title}</CardTitle>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="mb-4 leading-relaxed">
                      {resource.description}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{resource.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-warning fill-current" />
                          <span>{resource.rating}</span>
                        </div>
                      </div>
                      <Button variant="hero" size="sm">
                        <Play className="w-4 h-4 mr-2" />
                        Access
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* All Resources */}
        <div>
          <h2 className="text-2xl font-bold mb-6">All Resources</h2>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <TabsTrigger key={category.id} value={category.id} className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredResources
                    .filter(resource => category.id === 'all' || resource.type === category.id)
                    .map((resource) => {
                      const TypeIcon = getTypeIcon(resource.type);
                      const CategoryIcon = getCategoryIcon(resource.category);
                      
                      return (
                        <Card key={resource.id} className="group hover:shadow-md transition-smooth">
                          <CardHeader className="pb-3">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center justify-center w-10 h-10 bg-muted rounded-lg">
                                <CategoryIcon className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <Badge variant="outline" className="mb-1">
                                  <TypeIcon className="w-3 h-3 mr-1" />
                                  {resource.category}
                                </Badge>
                                <CardTitle className="text-base leading-tight">{resource.title}</CardTitle>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="mb-4 text-sm leading-relaxed line-clamp-3">
                              {resource.description}
                            </CardDescription>
                            <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center space-x-3 text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{resource.duration}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                  <Star className="w-3 h-3 text-warning fill-current" />
                                  <span>{resource.rating}</span>
                                </div>
                              </div>
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Quick Access Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="cursor-pointer hover:shadow-md transition-smooth border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="font-medium text-primary">Crisis Resources</p>
                <p className="text-xs text-muted-foreground">Emergency support</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-smooth border-secondary/20 bg-secondary/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <Brain className="w-8 h-8 text-secondary mx-auto mb-2" />
                <p className="font-medium text-secondary">Study Tips</p>
                <p className="text-xs text-muted-foreground">Academic wellness</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-smooth border-accent/20 bg-accent/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <Smile className="w-8 h-8 text-accent mx-auto mb-2" />
                <p className="font-medium text-accent">Mood Boosters</p>
                <p className="text-xs text-muted-foreground">Quick activities</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-smooth border-warning/20 bg-warning/5">
            <CardContent className="pt-6">
              <div className="text-center">
                <Moon className="w-8 h-8 text-warning mx-auto mb-2" />
                <p className="font-medium text-warning">Sleep Better</p>
                <p className="text-xs text-muted-foreground">Rest & recovery</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resources;