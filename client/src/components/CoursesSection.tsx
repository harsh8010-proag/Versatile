import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, Loader2 } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  duration: string;
  level: string;
  price: number;
  features: string[];
  isPopular: boolean;
  createdAt: string;
}

interface EnrollmentFormData {
  name: string;
  email: string;
  phone: string;
}

export default function CoursesSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrollmentForm, setEnrollmentForm] = useState<EnrollmentFormData>({
    name: '',
    email: '',
    phone: ''
  });
  const [isEnrollmentDialogOpen, setIsEnrollmentDialogOpen] = useState(false);

  // Fetch courses from API
  const { data: courses = [], isLoading, error } = useQuery({
    queryKey: ['/api', 'courses'],
  });

  // Enrollment mutation
  const enrollmentMutation = useMutation({
    mutationFn: async (data: { courseId: string } & EnrollmentFormData) => {
      const response = await apiRequest('POST', '/api/enrollments', data);
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Enrollment Successful!",
        description: "Thank you for enrolling! We will contact you soon with course details.",
        duration: 5000,
      });
      setEnrollmentForm({ name: '', email: '', phone: '' });
      setIsEnrollmentDialogOpen(false);
      setSelectedCourse(null);
    },
    onError: (error) => {
      console.error('Error enrolling in course:', error);
      toast({
        title: "Enrollment Failed",
        description: "There was an error processing your enrollment. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    },
  });

  const handleEnrollClick = (course: Course) => {
    setSelectedCourse(course);
    setIsEnrollmentDialogOpen(true);
  };

  const handleEnrollmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedCourse) return;
    
    // Basic validation
    if (!enrollmentForm.name.trim() || !enrollmentForm.email.trim()) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields (Name and Email).",
        variant: "destructive",
        duration: 5000,
      });
      return;
    }

    enrollmentMutation.mutate({
      courseId: selectedCourse.id,
      ...enrollmentForm
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEnrollmentForm(prev => ({ ...prev, [name]: value }));
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-300';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300';
      case 'Advanced': return 'bg-red-500/20 text-red-300';
      default: return 'bg-primary/20 text-primary';
    }
  };

  if (isLoading) {
    return (
      <section id="courses" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our <span className="bg-gradient-purple bg-clip-text text-transparent">Courses</span>
            </h2>
          </div>
          <div className="flex items-center justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-muted-foreground">Loading courses...</span>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="courses" className="py-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our <span className="bg-gradient-purple bg-clip-text text-transparent">Courses</span>
            </h2>
          </div>
          <div className="text-center py-20">
            <p className="text-muted-foreground">Unable to load courses. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="courses" className="py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-courses-title">
            Our <span className="bg-gradient-purple bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-courses-description">
            Comprehensive technology courses designed to transform your career and unlock new opportunities in the digital world.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course: Course) => (
            <Card 
              key={course.id} 
              className="bg-gradient-card backdrop-blur-md border-border/30 hover-elevate transition-all duration-300"
              data-testid={`card-course-${course.id}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getLevelColor(course.level)} data-testid={`badge-level-${course.id}`}>
                    {course.level}
                  </Badge>
                  {course.isPopular && (
                    <Badge className="bg-primary/20 text-primary border-primary/30">
                      Popular
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-foreground" data-testid={`text-course-title-${course.id}`}>
                  {course.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground" data-testid={`text-course-description-${course.id}`}>
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center" data-testid={`text-duration-${course.id}`}>
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center" data-testid={`text-category-${course.id}`}>
                    <Badge variant="outline" className="text-xs">
                      {course.category}
                    </Badge>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {course.features.map((feature, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="text-xs"
                      data-testid={`badge-feature-${course.id}-${index}`}
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>

                {/* Price */}
                <div className="text-2xl font-bold text-primary" data-testid={`text-price-${course.id}`}>
                  ₹{course.price.toLocaleString()}
                </div>
              </CardContent>

              <CardFooter className="pt-4">
                <Dialog open={isEnrollmentDialogOpen && selectedCourse?.id === course.id} onOpenChange={(open) => {
                  if (!open) {
                    setIsEnrollmentDialogOpen(false);
                    setSelectedCourse(null);
                    setEnrollmentForm({ name: '', email: '', phone: '' });
                  }
                }}>
                  <DialogTrigger asChild>
                    <Button 
                      className="w-full bg-gradient-purple"
                      data-testid={`button-enroll-${course.id}`}
                      onClick={() => handleEnrollClick(course)}
                    >
                      Enroll Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md bg-card border-border">
                    <DialogHeader>
                      <DialogTitle className="text-foreground">Enroll in {selectedCourse?.title}</DialogTitle>
                      <DialogDescription className="text-muted-foreground">
                        Fill out your details to enroll in this course. We'll contact you with payment and course details.
                      </DialogDescription>
                    </DialogHeader>
                    <form onSubmit={handleEnrollmentSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="enroll-name">Full Name *</Label>
                        <Input
                          id="enroll-name"
                          name="name"
                          value={enrollmentForm.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          data-testid="input-enroll-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="enroll-email">Email *</Label>
                        <Input
                          id="enroll-email"
                          name="email"
                          type="email"
                          value={enrollmentForm.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          data-testid="input-enroll-email"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="enroll-phone">Phone Number</Label>
                        <Input
                          id="enroll-phone"
                          name="phone"
                          type="tel"
                          value={enrollmentForm.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number (optional)"
                          data-testid="input-enroll-phone"
                        />
                      </div>
                      <div className="flex space-x-2">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setIsEnrollmentDialogOpen(false)}
                          className="flex-1"
                        >
                          Cancel
                        </Button>
                        <Button 
                          type="submit" 
                          className="flex-1 bg-gradient-purple"
                          disabled={enrollmentMutation.isPending}
                          data-testid="button-submit-enrollment"
                        >
                          {enrollmentMutation.isPending ? 'Enrolling...' : 'Enroll'}
                        </Button>
                      </div>
                    </form>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Courses Button */}
        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 backdrop-blur-sm bg-background/10"
            data-testid="button-view-all-courses"
            onClick={() => console.log('View All Courses clicked')}
          >
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
}