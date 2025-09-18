import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import FeatureCard from '@/components/FeatureCard';
import { 
  MessageCircle, 
  Calendar, 
  Users, 
  BookOpen, 
  Trophy, 
  BarChart3,
  Shield,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Zap,
  Globe,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-mental-health.jpg';
import aiChatbotIcon from '@/assets/ai-chatbot-icon.jpg';
import peerSupportIcon from '@/assets/peer-support-icon.jpg';
import wellnessDashboardIcon from '@/assets/wellness-dashboard-icon.jpg';

const LandingPage = () => {
  const features = [
    {
      title: "AI Mental Health Chat",
      description: "24/7 confidential support with AI trained on mental health best practices. Get immediate coping strategies and crisis intervention when you need it most.",
      icon: MessageCircle,
      image: aiChatbotIcon,
      buttonText: "Start Chatting",
      variant: 'highlighted' as const,
      onButtonClick: () => window.location.href = '/chat'
    },
    {
      title: "Anonymous Peer Support",
      description: "Connect with fellow students in a safe, moderated environment. Share experiences, offer support, and build community connections.",
      icon: Users,
      image: peerSupportIcon,
      buttonText: "Join Community",
      onButtonClick: () => window.location.href = '/forum'
    },
    {
      title: "Confidential Counseling",
      description: "Book anonymous appointments with licensed campus counselors. Secure, private, and integrated with your campus mental health services.",
      icon: Calendar,
      buttonText: "Book Session",
      onButtonClick: () => window.location.href = '/counseling'
    },
    {
      title: "Wellness Gamification",
      description: "Track your mental health journey with daily check-ins, earn badges, and participate in wellness challenges with your peers.",
      icon: Trophy,
      image: wellnessDashboardIcon,
      buttonText: "View Dashboard",
      onButtonClick: () => window.location.href = '/wellness'
    },
    {
      title: "Resource Hub",
      description: "Access curated mental health resources, guided meditations, coping strategies, and educational content tailored for students.",
      icon: BookOpen,
      buttonText: "Explore Resources",
      onButtonClick: () => window.location.href = '/resources'
    },
    {
      title: "VR Relaxation Spaces",
      description: "Immersive virtual environments for meditation, stress relief, and mindfulness practices. Experience calm anywhere, anytime.",
      icon: Globe,
      buttonText: "Enter VR Space",
      onButtonClick: () => window.location.href = '/vr-relaxation'
    }
  ];

  const stats = [
    { label: "Students Supported", value: "10K+", icon: UserCheck },
    { label: "Crisis Interventions", value: "500+", icon: Shield },
    { label: "Counseling Sessions", value: "2K+", icon: Calendar },
    { label: "Resource Views", value: "50K+", icon: BookOpen }
  ];

  const benefits = [
    "Stigma-free mental health support",
    "24/7 availability and accessibility", 
    "FERPA & GDPR compliant privacy",
    "Integration with campus services",
    "Evidence-based interventions",
    "Peer-to-peer community support"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Students supporting each other"
            className="w-full h-full object-cover blur-sm"
          />
        </div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Heart className="w-4 h-4 mr-2" />
              Comprehensive Mental Health Platform
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Campus Mental Health
              <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                Support Ecosystem
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stigma-free, accessible, and comprehensive mental health support for college students. 
              AI-powered assistance, peer community, and professional counseling in one platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="xl" className="shadow-hero">
                <Link to="/chat">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start AI Chat
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Calendar className="w-5 h-5 mr-2" />
                Book Counseling
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl shadow-lg">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Core Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Comprehensive Mental Health Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From AI-powered crisis support to peer communities and professional counseling, 
              everything you need for your mental wellness journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                image={feature.image}
                buttonText={feature.buttonText}
                onButtonClick={feature.onButtonClick}
                variant={feature.variant}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose MindBridge?
              </h2>
              <p className="text-xl text-muted-foreground">
                Built specifically for college students with privacy, accessibility, and evidence-based support at its core.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-success rounded-full">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Mental Wellness Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of students who have found support, community, and professional help through MindBridge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="xl" className="shadow-hero">
                <Link to="/chat">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Start Free Chat
                </Link>
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-hero rounded-xl shadow-md">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-foreground">MindBridge</span>
                <span className="block text-sm text-muted-foreground">Campus Mental Wellness</span>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;