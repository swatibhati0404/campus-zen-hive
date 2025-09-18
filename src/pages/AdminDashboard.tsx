import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  BarChart3, 
  Users, 
  MessageCircle, 
  Calendar, 
  AlertTriangle, 
  TrendingUp,
  Shield,
  Heart,
  Activity,
  UserCheck,
  BookOpen,
  Globe,
  Eye,
  Download,
  Settings,
  Bell,
  Filter
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend
} from 'recharts';

const AdminDashboard = () => {
  // Mock data for analytics
  const chatbotUsageData = [
    { month: 'Jan', sessions: 1200, interventions: 45 },
    { month: 'Feb', sessions: 1500, interventions: 52 },
    { month: 'Mar', sessions: 1800, interventions: 38 },
    { month: 'Apr', sessions: 2200, interventions: 61 },
    { month: 'May', sessions: 2000, interventions: 44 },
    { month: 'Jun', sessions: 2400, interventions: 57 }
  ];

  const stressLevelData = [
    { time: '9AM', level: 3.2 },
    { time: '12PM', level: 4.1 },
    { time: '3PM', level: 4.8 },
    { time: '6PM', level: 5.2 },
    { time: '9PM', level: 4.3 },
    { time: '12AM', level: 3.7 }
  ];

  const issueDistribution = [
    { name: 'Anxiety', value: 35, color: '#ef4444' },
    { name: 'Depression', value: 28, color: '#f97316' },
    { name: 'Stress', value: 22, color: '#eab308' },
    { name: 'Sleep Issues', value: 10, color: '#22c55e' },
    { name: 'Other', value: 5, color: '#6366f1' }
  ];

  const alerts = [
    { id: 1, type: 'high', message: '3 students flagged for immediate intervention', time: '2 min ago' },
    { id: 2, type: 'medium', message: 'Peak stress levels detected in Engineering department', time: '15 min ago' },
    { id: 3, type: 'low', message: 'Weekly report ready for download', time: '1 hour ago' }
  ];

  const stats = [
    { title: 'Active Students', value: '2,847', change: '+12%', icon: Users, color: 'bg-blue-500' },
    { title: 'Chat Sessions', value: '14,523', change: '+8%', icon: MessageCircle, color: 'bg-green-500' },
    { title: 'Counseling Bookings', value: '453', change: '+15%', icon: Calendar, color: 'bg-purple-500' },
    { title: 'Crisis Interventions', value: '67', change: '-5%', icon: AlertTriangle, color: 'bg-red-500' }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
            <p className="text-muted-foreground mt-2">Mental Health Analytics & Insights</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button variant="outline" size="sm">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
            <div className="relative">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="space-y-2">
          {alerts.map((alert) => (
            <Alert key={alert.id} className={`border-l-4 ${
              alert.type === 'high' ? 'border-l-red-500' : 
              alert.type === 'medium' ? 'border-l-yellow-500' : 'border-l-blue-500'
            }`}>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription className="flex items-center justify-between">
                <span>{alert.message}</span>
                <span className="text-xs text-muted-foreground">{alert.time}</span>
              </AlertDescription>
            </Alert>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <p className={`text-xs ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change} from last month
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="usage" className="space-y-6">
          <TabsList>
            <TabsTrigger value="usage">Usage Analytics</TabsTrigger>
            <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
            <TabsTrigger value="demographics">Demographics</TabsTrigger>
            <TabsTrigger value="interventions">Interventions</TabsTrigger>
          </TabsList>

          <TabsContent value="usage" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Chatbot Usage Trends</CardTitle>
                  <CardDescription>Monthly sessions and crisis interventions</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chatbotUsageData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="sessions" fill="#3b82f6" />
                      <Bar dataKey="interventions" fill="#ef4444" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Daily Stress Patterns</CardTitle>
                  <CardDescription>Average stress levels throughout the day</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={stressLevelData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis domain={[0, 6]} />
                      <Tooltip />
                      <Line type="monotone" dataKey="level" stroke="#f59e0b" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Issue Distribution</CardTitle>
                <CardDescription>Most common mental health concerns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col lg:flex-row items-center">
                  <ResponsiveContainer width="100%" height={250}>
                    <PieChart>
                      <Pie
                        data={issueDistribution}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {issueDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-2 lg:ml-6">
                    {issueDistribution.map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-sm">{item.name}: {item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sentiment" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Sentiment Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Positive</span>
                      <span>34%</span>
                    </div>
                    <Progress value={34} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Neutral</span>
                      <span>41%</span>
                    </div>
                    <Progress value={41} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Negative</span>
                      <span>25%</span>
                    </div>
                    <Progress value={25} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Risk Assessment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">High Risk</span>
                    <Badge variant="destructive">23 students</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Medium Risk</span>
                    <Badge variant="default">67 students</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Low Risk</span>
                    <Badge variant="secondary">156 students</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Early Warning Indicators</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                    <span className="text-sm">Increased isolation patterns</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Sleep disruption reports</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">Academic stress spikes</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="demographics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Department Distribution</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Engineering</span>
                    <span className="text-sm font-medium">28%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Business</span>
                    <span className="text-sm font-medium">22%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Liberal Arts</span>
                    <span className="text-sm font-medium">18%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sciences</span>
                    <span className="text-sm font-medium">16%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Other</span>
                    <span className="text-sm font-medium">16%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Academic Year</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Freshman</span>
                    <span className="text-sm font-medium">32%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Sophomore</span>
                    <span className="text-sm font-medium">26%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Junior</span>
                    <span className="text-sm font-medium">23%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Senior</span>
                    <span className="text-sm font-medium">19%</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Usage Patterns</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Peak Hours</span>
                    <span className="text-sm font-medium">8PM-11PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Most Active Day</span>
                    <span className="text-sm font-medium">Sunday</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Avg Session Length</span>
                    <span className="text-sm font-medium">12 minutes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Return Rate</span>
                    <span className="text-sm font-medium">68%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="interventions" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Intervention Success Rate</CardTitle>
                  <CardDescription>Effectiveness of different intervention types</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>AI Chat Support</span>
                      <span>87% effective</span>
                    </div>
                    <Progress value={87} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Peer Support Referrals</span>
                      <span>72% effective</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Counselor Connections</span>
                      <span>94% effective</span>
                    </div>
                    <Progress value={94} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Crisis Hotline</span>
                      <span>96% effective</span>
                    </div>
                    <Progress value={96} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Response Times</CardTitle>
                  <CardDescription>Average response times by support type</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">AI Chatbot</span>
                    <Badge variant="secondary">Instant</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Peer Support</span>
                    <Badge variant="secondary">4 minutes</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Campus Counselor</span>
                    <Badge variant="secondary">2.3 hours</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Crisis Intervention</span>
                    <Badge variant="destructive">45 seconds</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Weekly Intervention Summary</CardTitle>
                <CardDescription>Breakdown of interventions in the past week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">23</div>
                    <div className="text-sm text-muted-foreground">Crisis Interventions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">156</div>
                    <div className="text-sm text-muted-foreground">Counselor Referrals</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">89</div>
                    <div className="text-sm text-muted-foreground">Peer Support Connections</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Privacy & Compliance */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span>Privacy & Compliance</span>
            </CardTitle>
            <CardDescription>
              All data is anonymized and aggregated in compliance with FERPA and GDPR regulations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">FERPA Compliant</Badge>
              <Badge variant="outline">GDPR Compliant</Badge>
              <Badge variant="outline">HIPAA Aligned</Badge>
              <Badge variant="outline">Data Anonymized</Badge>
              <Badge variant="outline">Encrypted at Rest</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;