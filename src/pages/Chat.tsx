import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User, 
  Heart, 
  AlertCircle,
  Lightbulb,
  Shield
} from 'lucide-react';
import aiChatbotIcon from '@/assets/ai-chatbot-icon.jpg';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  type?: 'normal' | 'warning' | 'supportive';
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm MindBridge AI, your mental health support companion. I'm here to provide a safe, confidential space for you to share your thoughts and feelings. How are you doing today?",
      sender: 'bot',
      timestamp: new Date(),
      type: 'supportive'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const supportiveResponses = [
    "I hear you, and what you're feeling is completely valid. It takes courage to reach out.",
    "Thank you for sharing that with me. You're not alone in this experience.",
    "It sounds like you're going through a challenging time. That's really tough.",
    "I appreciate you opening up. Your feelings matter and deserve to be heard.",
    "What you're experiencing is more common than you might think. Many students face similar challenges."
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: supportiveResponses[Math.floor(Math.random() * supportiveResponses.length)] + 
              " Can you tell me more about what's been on your mind lately?",
        sender: 'bot',
        timestamp: new Date(),
        type: 'supportive'
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <img 
              src={aiChatbotIcon} 
              alt="AI Chatbot"
              className="w-20 h-20 rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">MindBridge AI Chat</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Your confidential mental health support companion. Available 24/7 to listen, provide coping strategies, and connect you with resources.
          </p>
        </div>

        {/* Safety Notice */}
        <Card className="mb-6 border-warning bg-warning/5">
          <CardContent className="pt-6">
            <div className="flex items-start space-x-3">
              <Shield className="w-5 h-5 text-warning mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-warning mb-1">Privacy & Safety</p>
                <p className="text-muted-foreground">
                  This conversation is confidential. If you're experiencing a mental health emergency, 
                  please contact your campus counseling center or call 988 (Suicide & Crisis Lifeline).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chat Interface */}
        <Card className="h-[600px] flex flex-col">
          <CardHeader className="bg-muted/50 border-b">
            <CardTitle className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5 text-primary" />
              <span>Chat Session</span>
              <div className="ml-auto flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-sm text-muted-foreground">Online</span>
              </div>
            </CardTitle>
          </CardHeader>

          {/* Messages */}
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-3 max-w-[80%] ${
                    message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                  }`}>
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      message.sender === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4" />
                      ) : (
                        <Bot className="w-4 h-4" />
                      )}
                    </div>
                    <div className={`rounded-2xl px-4 py-3 shadow-sm ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : message.type === 'supportive'
                        ? 'bg-gradient-card border border-border'
                        : 'bg-muted'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-2 opacity-70 ${
                        message.sender === 'user' ? 'text-primary-foreground' : 'text-muted-foreground'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3 max-w-[80%]">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-secondary-foreground">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-muted rounded-2xl px-4 py-3">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex space-x-3">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Share what's on your mind..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button 
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                variant="hero"
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Press Enter to send • This is a simulated conversation for demo purposes
            </p>
          </div>
        </Card>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="cursor-pointer hover:shadow-md transition-smooth border-success/20 bg-success/5">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <Heart className="w-6 h-6 text-success" />
                <div>
                  <p className="font-medium text-success">Crisis Support</p>
                  <p className="text-xs text-muted-foreground">24/7 emergency help</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-smooth border-warning/20 bg-warning/5">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <Lightbulb className="w-6 h-6 text-warning" />
                <div>
                  <p className="font-medium text-warning">Coping Strategies</p>
                  <p className="text-xs text-muted-foreground">Helpful techniques</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-md transition-smooth border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-3">
                <AlertCircle className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-medium text-primary">Get Professional Help</p>
                  <p className="text-xs text-muted-foreground">Connect with counselors</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Chat;