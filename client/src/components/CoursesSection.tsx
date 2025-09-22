import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star } from 'lucide-react';

export default function CoursesSection() {
  //todo: remove mock functionality
  const courses = [
    {
      id: 1,
      title: 'Web Development Mastery',
      description: 'Learn modern web development with React, Node.js, and databases. Build real-world projects.',
      duration: '12 weeks',
      students: 245,
      rating: 4.8,
      level: 'Intermediate',
      price: '₹15,000',
      features: ['Live Projects', 'Job Assistance', 'Certificate']
    },
    {
      id: 2,
      title: 'Data Science & Analytics',
      description: 'Master data analysis, machine learning, and visualization with Python and modern tools.',
      duration: '16 weeks',
      students: 180,
      rating: 4.9,
      level: 'Advanced',
      price: '₹20,000',
      features: ['Real Datasets', 'Industry Projects', 'Placement Support']
    },
    {
      id: 3,
      title: 'Digital Marketing',
      description: 'Complete digital marketing course covering SEO, social media, ads, and analytics.',
      duration: '8 weeks',
      students: 320,
      rating: 4.7,
      level: 'Beginner',
      price: '₹12,000',
      features: ['Live Campaigns', 'Tool Access', 'Portfolio Building']
    },
    {
      id: 4,
      title: 'Programming Fundamentals',
      description: 'Start your coding journey with Python, Java, and programming concepts.',
      duration: '10 weeks',
      students: 450,
      rating: 4.6,
      level: 'Beginner',
      price: '₹10,000',
      features: ['Hands-on Practice', 'Mentorship', 'Project Portfolio']
    },
    {
      id: 5,
      title: 'Graphic Design Pro',
      description: 'Master Adobe Creative Suite and modern design principles for professional work.',
      duration: '14 weeks',
      students: 200,
      rating: 4.8,
      level: 'Intermediate',
      price: '₹18,000',
      features: ['Adobe Access', 'Client Projects', 'Portfolio Review']
    },
    {
      id: 6,
      title: 'Cybersecurity Essentials',
      description: 'Learn ethical hacking, network security, and cybersecurity best practices.',
      duration: '12 weeks',
      students: 150,
      rating: 4.9,
      level: 'Advanced',
      price: '₹25,000',
      features: ['Lab Access', 'Certification Prep', 'Industry Mentors']
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-300';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300';
      case 'Advanced': return 'bg-red-500/20 text-red-300';
      default: return 'bg-primary/20 text-primary';
    }
  };

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
          {courses.map((course) => (
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
                  <div className="flex items-center text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="ml-1 text-sm text-muted-foreground" data-testid={`text-rating-${course.id}`}>
                      {course.rating}
                    </span>
                  </div>
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
                  <div className="flex items-center" data-testid={`text-students-${course.id}`}>
                    <Users className="w-4 h-4 mr-1" />
                    {course.students} students
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
                  {course.price}
                </div>
              </CardContent>

              <CardFooter className="pt-4">
                <Button 
                  className="w-full bg-gradient-purple"
                  data-testid={`button-enroll-${course.id}`}
                  onClick={() => console.log(`Enroll in ${course.title} clicked`)}
                >
                  Enroll Now
                </Button>
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