import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { 
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Video,
  Phone,
  User,
  Shield,
  CheckCircle,
  AlertCircle,
  Star,
  Heart
} from 'lucide-react';

const Counseling = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [selectedCounselor, setSelectedCounselor] = useState<string>('');

  const appointmentTypes = [
    { id: 'in-person', label: 'In-Person', icon: MapPin, description: 'Face-to-face counseling' },
    { id: 'video', label: 'Video Call', icon: Video, description: 'Online video session' },
    { id: 'phone', label: 'Phone Call', icon: Phone, description: 'Voice-only consultation' }
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const counselors = [
    {
      id: 'dr-smith',
      name: 'Dr. Sarah Smith',
      specialties: ['Anxiety', 'Depression', 'Academic Stress'],
      rating: 4.9,
      experience: '8 years',
      available: true
    },
    {
      id: 'dr-johnson',
      name: 'Dr. Michael Johnson',
      specialties: ['Relationship Issues', 'Self-Esteem', 'Life Transitions'],
      rating: 4.8,
      experience: '12 years',
      available: true
    },
    {
      id: 'dr-williams',
      name: 'Dr. Emily Williams',
      specialties: ['Trauma', 'PTSD', 'Crisis Counseling'],
      rating: 4.9,
      experience: '10 years',
      available: false
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      counselor: 'Dr. Sarah Smith',
      date: 'Tomorrow',
      time: '2:00 PM',
      type: 'Video Call',
      status: 'confirmed'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <CalendarIcon className="w-10 h-10 text-primary" />
            Counseling Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book confidential counseling sessions with licensed mental health professionals
          </p>
        </div>

        {/* Privacy Notice */}
        <Card className="mb-8 border-green-200 bg-green-50/50">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Shield className="w-6 h-6 text-green-600 mt-1" />
              <div>
                <h3 className="font-semibold text-green-800 mb-2">Your Privacy is Protected</h3>
                <p className="text-green-700 text-sm">
                  All counseling sessions are completely confidential. Your personal information and session details 
                  are protected under HIPAA regulations and campus privacy policies.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Book an Appointment</CardTitle>
                <CardDescription>
                  Schedule a confidential session with our professional counselors
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Appointment Type */}
                <div>
                  <h3 className="font-medium mb-3">Session Type</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {appointmentTypes.map((type) => {
                      const Icon = type.icon;
                      return (
                        <Button
                          key={type.id}
                          variant={selectedType === type.id ? "default" : "outline"}
                          className="h-auto p-4 flex flex-col items-center"
                          onClick={() => setSelectedType(type.id)}
                        >
                          <Icon className="w-6 h-6 mb-2" />
                          <span className="font-medium">{type.label}</span>
                          <span className="text-xs text-muted-foreground">{type.description}</span>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                {/* Counselor Selection */}
                <div>
                  <h3 className="font-medium mb-3">Choose a Counselor</h3>
                  <div className="space-y-3">
                    {counselors.map((counselor) => (
                      <Card 
                        key={counselor.id}
                        className={`cursor-pointer transition-all ${
                          selectedCounselor === counselor.id ? 'ring-2 ring-primary' : ''
                        } ${!counselor.available ? 'opacity-60' : 'hover:shadow-md'}`}
                        onClick={() => counselor.available && setSelectedCounselor(counselor.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start gap-3">
                              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                <User className="w-6 h-6 text-primary" />
                              </div>
                              <div>
                                <h4 className="font-medium">{counselor.name}</h4>
                                <p className="text-sm text-muted-foreground mb-2">{counselor.experience} experience</p>
                                <div className="flex flex-wrap gap-1">
                                  {counselor.specialties.map((specialty) => (
                                    <Badge key={specialty} variant="secondary" className="text-xs">
                                      {specialty}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span className="text-sm font-medium">{counselor.rating}</span>
                              </div>
                              <Badge 
                                variant={counselor.available ? "default" : "secondary"}
                                className="mt-2"
                              >
                                {counselor.available ? 'Available' : 'Unavailable'}
                              </Badge>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Date and Time Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-medium mb-3">Select Date</h3>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 6}
                      className="rounded-md border"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-3">Select Time</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          size="sm"
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div>
                  <h3 className="font-medium mb-3">Additional Information (Optional)</h3>
                  <Textarea
                    placeholder="Briefly describe what you'd like to discuss or any specific concerns..."
                    className="min-h-[100px]"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  variant="hero" 
                  className="w-full"
                  disabled={!selectedDate || !selectedTime || !selectedType || !selectedCounselor}
                >
                  Book Appointment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Upcoming Sessions
                </CardTitle>
              </CardHeader>
              <CardContent>
                {upcomingAppointments.length > 0 ? (
                  <div className="space-y-3">
                    {upcomingAppointments.map((appointment) => (
                      <div key={appointment.id} className="p-3 bg-muted rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">{appointment.counselor}</span>
                          <Badge variant="outline" className="bg-green-50 text-green-700">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Confirmed
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {appointment.date} at {appointment.time}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {appointment.type}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-4">
                    No upcoming appointments
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Crisis Support */}
            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-800">
                  <AlertCircle className="w-5 h-5" />
                  Crisis Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-orange-700 mb-3">
                  If you're experiencing a mental health emergency, get immediate help:
                </p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-2" />
                    Campus Crisis Line: 24/7
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Heart className="w-4 h-4 mr-2" />
                    National Suicide Prevention: 988
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle>Self-Help Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Breathing Exercises
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Coping Strategies
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    Mental Health FAQs
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

export default Counseling;