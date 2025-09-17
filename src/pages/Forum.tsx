import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { 
  MessageCircle,
  Heart,
  Reply,
  Search,
  Plus,
  TrendingUp,
  Clock,
  Users,
  Shield,
  Star,
  Flag,
  ThumbsUp
} from 'lucide-react';

const Forum = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Topics', count: 234 },
    { id: 'academic-stress', name: 'Academic Stress', count: 45 },
    { id: 'relationships', name: 'Relationships', count: 38 },
    { id: 'anxiety-depression', name: 'Anxiety & Depression', count: 52 },
    { id: 'self-care', name: 'Self-Care Tips', count: 29 },
    { id: 'campus-life', name: 'Campus Life', count: 41 },
    { id: 'success-stories', name: 'Success Stories', count: 29 }
  ];

  const posts = [
    {
      id: 1,
      title: "How do you deal with exam anxiety?",
      content: "Finals are coming up and I'm feeling overwhelmed. Any tips that have worked for you?",
      author: "Anonymous Owl",
      timestamp: "2 hours ago",
      category: "Academic Stress",
      replies: 12,
      likes: 18,
      isPopular: true,
      tags: ["exams", "anxiety", "study-tips"]
    },
    {
      id: 2,
      title: "Celebrating small wins - got out of bed today!",
      content: "After struggling for weeks, I managed to get up early and attend my morning class. It might seem small but it's huge for me right now.",
      author: "Sunrise Student",
      timestamp: "4 hours ago",
      category: "Success Stories",
      replies: 24,
      likes: 47,
      isPopular: true,
      tags: ["motivation", "depression", "progress"]
    },
    {
      id: 3,
      title: "Healthy study break activities?",
      content: "Looking for quick activities I can do between study sessions to recharge. What works for you?",
      author: "Study Buddy",
      timestamp: "6 hours ago",
      category: "Self-Care Tips",
      replies: 8,
      likes: 12,
      isPopular: false,
      tags: ["study-breaks", "wellness", "productivity"]
    },
    {
      id: 4,
      title: "Feeling isolated in dorms - how to connect?",
      content: "I'm a freshman and having trouble making friends. The social anxiety is real. Any advice?",
      author: "Quiet Freshman",
      timestamp: "1 day ago",
      category: "Campus Life",
      replies: 15,
      likes: 22,
      isPopular: false,
      tags: ["friendship", "social-anxiety", "freshman"]
    }
  ];

  const trendingTopics = [
    { name: "Midterm Stress", count: 23 },
    { name: "Sleep Schedule", count: 18 },
    { name: "Imposter Syndrome", count: 15 },
    { name: "Homesickness", count: 12 }
  ];

  const peerAmbassadors = [
    { name: "Alex M.", posts: 45, helpfulAnswers: 89, badge: "Top Helper" },
    { name: "Sarah K.", posts: 32, helpfulAnswers: 76, badge: "Peer Leader" },
    { name: "Jordan L.", posts: 28, helpfulAnswers: 54, badge: "Active Member" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
                <MessageCircle className="w-10 h-10 text-primary" />
                Peer Support Forum
              </h1>
              <p className="text-lg text-muted-foreground">
                Connect with fellow students in a safe, anonymous community
              </p>
            </div>
            <Button variant="hero" className="flex items-center gap-2">
              <Plus className="w-4 h-4" />
              New Post
            </Button>
          </div>
        </div>

        {/* Safety Notice */}
        <Card className="mb-6 border-blue-200 bg-blue-50/50">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-600 mt-1" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-1">Safe Space Guidelines</h3>
                <p className="text-blue-700 text-sm">
                  This is an anonymous, moderated forum. Be respectful, supportive, and remember that 
                  peer ambassadors are here to help. For crisis support, please contact campus counseling services immediately.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Search and Filters */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search discussions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Popular
                </Button>
                <Button variant="outline">
                  <Clock className="w-4 h-4 mr-2" />
                  Recent
                </Button>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="text-xs"
                  >
                    {category.name} ({category.count})
                  </Button>
                ))}
              </div>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map((post) => (
                <Card key={post.id} className="hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback className="text-xs bg-primary/10 text-primary">
                            {post.author.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <span className="font-medium text-sm">{post.author}</span>
                          <span className="text-xs text-muted-foreground ml-2">{post.timestamp}</span>
                        </div>
                      </div>
                      {post.isPopular && (
                        <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Popular
                        </Badge>
                      )}
                    </div>

                    <h3 className="font-semibold text-lg mb-2">{post.title}</h3>
                    <p className="text-muted-foreground mb-3 line-clamp-2">{post.content}</p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {post.likes}
                        </Button>
                        <Button variant="ghost" size="sm" className="text-muted-foreground">
                          <Reply className="w-4 h-4 mr-1" />
                          {post.replies} replies
                        </Button>
                      </div>
                      <Badge variant="secondary">{post.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button variant="outline">Load More Posts</Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  Trending Topics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div key={topic.name} className="flex items-center justify-between">
                      <span className="text-sm font-medium">#{topic.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {topic.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Peer Ambassadors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5" />
                  Peer Ambassadors
                </CardTitle>
                <CardDescription>
                  Trained students here to support you
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {peerAmbassadors.map((ambassador) => (
                    <div key={ambassador.name} className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarFallback className="text-xs bg-primary/10 text-primary">
                          {ambassador.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium">{ambassador.name}</span>
                          <Badge variant="outline" className="text-xs">
                            {ambassador.badge}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {ambassador.helpfulAnswers} helpful answers
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Community Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Be kind and supportive
                  </p>
                  <p className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Respect anonymity
                  </p>
                  <p className="flex items-start gap-2">
                    <Flag className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    Report inappropriate content
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Need Help Now?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    AI Chat Support
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Users className="w-4 h-4 mr-2" />
                    Find Peer Ambassador
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Shield className="w-4 h-4 mr-2" />
                    Crisis Resources
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

export default Forum;