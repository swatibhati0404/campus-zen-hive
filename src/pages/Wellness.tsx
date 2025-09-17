import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Heart,
  Trophy,
  Calendar,
  Target,
  TrendingUp,
  Award,
  Clock,
  Activity,
  Smile,
  Brain,
  Sun,
  Moon
} from 'lucide-react';

const Wellness = () => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  
  const moodOptions = [
    { value: 1, label: 'Very Low', color: 'text-red-500', emoji: '😢' },
    { value: 2, label: 'Low', color: 'text-orange-500', emoji: '😟' },
    { value: 3, label: 'Neutral', color: 'text-yellow-500', emoji: '😐' },
    { value: 4, label: 'Good', color: 'text-blue-500', emoji: '😊' },
    { value: 5, label: 'Excellent', color: 'text-green-500', emoji: '😄' }
  ];

  const weeklyStats = [
    { day: 'Mon', mood: 4, activities: 3 },
    { day: 'Tue', mood: 3, activities: 2 },
    { day: 'Wed', mood: 5, activities: 4 },
    { day: 'Thu', mood: 4, activities: 3 },
    { day: 'Fri', mood: 2, activities: 1 },
    { day: 'Sat', mood: 4, activities: 5 },
    { day: 'Sun', mood: 5, activities: 4 }
  ];

  const achievements = [
    { icon: Trophy, title: '7-Day Streak', description: 'Completed daily check-ins', earned: true },
    { icon: Heart, title: 'Mood Warrior', description: 'Logged 50 mood entries', earned: true },
    { icon: Target, title: 'Goal Setter', description: 'Set 5 wellness goals', earned: false },
    { icon: Activity, title: 'Active Mind', description: 'Completed 10 activities', earned: true }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Trophy className="w-10 h-10 text-primary" />
            Wellness Dashboard
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track your mental health journey with personalized insights and gamified wellness activities
          </p>
        </div>

        {/* Daily Check-in */}
        <Card className="mb-8 border-primary/20 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smile className="w-5 h-5" />
              Daily Mood Check-in
            </CardTitle>
            <CardDescription>
              How are you feeling today? Your input helps us provide better support.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-5 gap-3 mb-4">
              {moodOptions.map((mood) => (
                <Button
                  key={mood.value}
                  variant={selectedMood === mood.value ? "default" : "outline"}
                  className="flex flex-col items-center p-4 h-auto"
                  onClick={() => setSelectedMood(mood.value)}
                >
                  <span className="text-2xl mb-2">{mood.emoji}</span>
                  <span className="text-xs">{mood.label}</span>
                </Button>
              ))}
            </div>
            {selectedMood && (
              <Button variant="hero" className="w-full">
                Log Today's Mood
              </Button>
            )}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Weekly Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                Weekly Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Mood Average</span>
                    <span className="text-sm text-muted-foreground">4.0/5.0</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Daily Activities</span>
                    <span className="text-sm text-muted-foreground">22/28</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">Check-in Streak</span>
                    <span className="text-sm text-muted-foreground">7 days</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-3">This Week's Overview</h4>
                <div className="grid grid-cols-7 gap-2">
                  {weeklyStats.map((day) => (
                    <div key={day.day} className="text-center">
                      <div className="text-xs text-muted-foreground mb-1">{day.day}</div>
                      <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-xs font-medium ${
                        day.mood >= 4 ? 'bg-green-100 text-green-700' : 
                        day.mood >= 3 ? 'bg-yellow-100 text-yellow-700' : 
                        'bg-red-100 text-red-700'
                      }`}>
                        {day.mood}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5" />
                Achievements
              </CardTitle>
              <CardDescription>
                Earn badges and unlock rewards for your wellness journey
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${
                      achievement.earned ? 'bg-primary/10 border border-primary/20' : 'bg-muted'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        achievement.earned ? 'text-primary' : 'text-muted-foreground'
                      }`} />
                      <div className="flex-1">
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                      {achievement.earned && (
                        <Badge variant="secondary" className="bg-primary/20 text-primary">
                          Earned
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="hover:shadow-md transition-smooth cursor-pointer">
            <CardContent className="p-6 text-center">
              <Brain className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium mb-2">Meditation</h3>
              <p className="text-sm text-muted-foreground">5-minute mindfulness</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-smooth cursor-pointer">
            <CardContent className="p-6 text-center">
              <Activity className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium mb-2">Exercise</h3>
              <p className="text-sm text-muted-foreground">Quick workout routine</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-smooth cursor-pointer">
            <CardContent className="p-6 text-center">
              <Sun className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium mb-2">Gratitude</h3>
              <p className="text-sm text-muted-foreground">Write 3 things you're grateful for</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-md transition-smooth cursor-pointer">
            <CardContent className="p-6 text-center">
              <Moon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium mb-2">Sleep</h3>
              <p className="text-sm text-muted-foreground">Bedtime routine tracker</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Wellness;