import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Play,
  Pause,
  VolumeX,
  Volume2,
  Maximize,
  Eye,
  Waves,
  Trees,
  Mountain,
  Sunset,
  CloudRain,
  Headphones,
  Timer,
  Settings
} from 'lucide-react';

const VRRelaxation = () => {
  const [currentEnvironment, setCurrentEnvironment] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [sessionTime, setSessionTime] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(10);

  const environments = [
    {
      id: 'ocean-waves',
      name: 'Ocean Waves',
      icon: Waves,
      description: 'Peaceful beach with gentle waves and seagulls',
      image: '/api/placeholder/400/250',
      duration: '∞',
      category: 'Nature',
      popularity: 95
    },
    {
      id: 'forest-grove',
      name: 'Forest Grove',
      icon: Trees,
      description: 'Serene woodland with birds chirping and wind through trees',
      image: '/api/placeholder/400/250',
      duration: '∞',
      category: 'Nature',
      popularity: 88
    },
    {
      id: 'mountain-peak',
      name: 'Mountain Peak',
      icon: Mountain,
      description: 'Majestic mountain vista with cool breeze and distant eagles',
      image: '/api/placeholder/400/250',
      duration: '∞',
      category: 'Nature',
      popularity: 82
    },
    {
      id: 'sunset-meadow',
      name: 'Sunset Meadow',
      icon: Sunset,
      description: 'Golden hour in a flower meadow with warm light',
      image: '/api/placeholder/400/250',
      duration: '∞',
      category: 'Nature',
      popularity: 91
    },
    {
      id: 'rain-ambiance',
      name: 'Rain Ambiance',
      icon: CloudRain,
      description: 'Cozy indoor space with gentle rain on windows',
      image: '/api/placeholder/400/250',
      duration: '∞',
      category: 'Indoor',
      popularity: 87
    }
  ];

  const guidedSessions = [
    {
      id: 'breathing-basics',
      title: 'Deep Breathing Basics',
      duration: '5 min',
      instructor: 'Dr. Sarah Chen',
      level: 'Beginner',
      description: 'Learn fundamental breathing techniques for instant calm'
    },
    {
      id: 'body-scan',
      title: 'Progressive Body Scan',
      duration: '15 min',
      instructor: 'Michael Torres',
      level: 'Intermediate',
      description: 'Release tension through guided body awareness'
    },
    {
      id: 'mindful-meditation',
      title: 'Mindful Meditation',
      duration: '20 min',
      instructor: 'Dr. Emma Wilson',
      level: 'All Levels',
      description: 'Cultivate present-moment awareness and peace'
    }
  ];

  const durations = [5, 10, 15, 20, 30, 45];

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Eye className="w-10 h-10 text-primary" />
            Immersive Relaxation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escape stress with immersive virtual environments and guided relaxation sessions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Virtual Environment Player */}
            {currentEnvironment ? (
              <Card className="mb-8">
                <CardContent className="p-0">
                  <div className="aspect-video bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 relative rounded-t-lg overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Eye className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          {environments.find(env => env.id === currentEnvironment)?.name}
                        </h3>
                        <p className="text-white/80">
                          {environments.find(env => env.id === currentEnvironment)?.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* VR Controls Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Button
                              size="sm"
                              variant={isPlaying ? "secondary" : "default"}
                              onClick={() => setIsPlaying(!isPlaying)}
                              className="bg-white/20 hover:bg-white/30"
                            >
                              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                            </Button>
                            <span className="text-white font-medium">{formatTime(sessionTime)}</span>
                          </div>
                          
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                              <Settings className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                              <Maximize className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-3">
                          <VolumeX className="w-4 h-4 text-white" />
                          <div className="flex-1">
                            <Progress value={volume} className="h-1" />
                          </div>
                          <Volume2 className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="mb-8 border-dashed border-2 border-muted">
                <CardContent className="p-12 text-center">
                  <Eye className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Choose Your Environment</h3>
                  <p className="text-muted-foreground">
                    Select a virtual environment from the sidebar to begin your relaxation journey
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Virtual Environments Grid */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Virtual Environments</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {environments.map((env) => {
                  const Icon = env.icon;
                  return (
                    <Card 
                      key={env.id}
                      className={`cursor-pointer transition-all hover:shadow-lg ${
                        currentEnvironment === env.id ? 'ring-2 ring-primary shadow-lg' : ''
                      }`}
                      onClick={() => setCurrentEnvironment(env.id)}
                    >
                      <CardContent className="p-0">
                        <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 relative overflow-hidden rounded-t-lg">
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <Icon className="w-12 h-12 text-white" />
                          </div>
                          <Badge className="absolute top-3 right-3 bg-white/20 text-white border-white/30">
                            {env.category}
                          </Badge>
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold mb-2">{env.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{env.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Timer className="w-4 h-4" />
                              {env.duration}
                            </div>
                            <Badge variant="secondary">
                              {env.popularity}% love this
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Session Timer */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Timer className="w-5 h-5" />
                  Session Timer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Duration (minutes)</label>
                    <div className="grid grid-cols-3 gap-2">
                      {durations.map((duration) => (
                        <Button
                          key={duration}
                          size="sm"
                          variant={selectedDuration === duration ? "default" : "outline"}
                          onClick={() => setSelectedDuration(duration)}
                        >
                          {duration}
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <Button variant="hero" className="w-full" disabled={!currentEnvironment}>
                    Start Session
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Guided Sessions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="w-5 h-5" />
                  Guided Sessions
                </CardTitle>
                <CardDescription>
                  Audio-guided relaxation with expert instructors
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {guidedSessions.map((session) => (
                    <Card key={session.id} className="cursor-pointer hover:shadow-sm transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-sm">{session.title}</h4>
                          <Badge variant="outline" className="text-xs">
                            {session.duration}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">{session.description}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{session.instructor}</span>
                          <span>{session.level}</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Relaxation</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Play className="w-4 h-4 mr-2" />
                    2-Minute Breathing
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Waves className="w-4 h-4 mr-2" />
                    Ocean Sounds Only
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <Trees className="w-4 h-4 mr-2" />
                    Forest Ambiance
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default VRRelaxation;