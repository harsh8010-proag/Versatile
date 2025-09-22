import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Laptop, Users, Zap, Shield, TrendingUp } from 'lucide-react';

export default function ServicesSection() {
  //todo: remove mock functionality
  const services = [
    {
      id: 1,
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions for your business needs using modern technologies and best practices.',
      features: ['Web Applications', 'Mobile Apps', 'Desktop Software', 'API Development']
    },
    {
      id: 2,
      icon: Laptop,
      title: 'Computer Training & Education',
      description: 'Comprehensive computer education programs from basic to advanced levels for all age groups.',
      features: ['Basic Computer Skills', 'Office Suite Training', 'Programming Courses', 'Certification Prep']
    },
    {
      id: 3,
      icon: Users,
      title: 'Corporate Training',
      description: 'Professional training programs designed for organizations to upskill their workforce.',
      features: ['Team Workshops', 'On-site Training', 'Custom Curriculum', 'Progress Tracking']
    },
    {
      id: 4,
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Help businesses modernize their processes with digital solutions and automation.',
      features: ['Process Automation', 'Cloud Migration', 'Digital Strategy', 'Technology Consulting']
    },
    {
      id: 5,
      icon: Shield,
      title: 'IT Support & Maintenance',
      description: 'Reliable technical support and maintenance services for your computer systems and networks.',
      features: ['Hardware Support', 'Software Installation', 'Network Setup', '24/7 Assistance']
    },
    {
      id: 6,
      icon: TrendingUp,
      title: 'Career Guidance',
      description: 'Professional career counseling and placement assistance for technology careers.',
      features: ['Resume Building', 'Interview Prep', 'Job Placement', 'Industry Connections']
    }
  ];

  return (
    <section id="services" className="py-20 px-6 lg:px-8 bg-gradient-card/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-services-description">
            Complete technology solutions and education services to empower individuals and organizations in the digital age.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.id} 
                className="bg-card/50 backdrop-blur-md border-border/30 hover-elevate transition-all duration-300 group"
                data-testid={`card-service-${service.id}`}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-purple rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-foreground" data-testid={`text-service-title-${service.id}`}>
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground" data-testid={`text-service-description-${service.id}`}>
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex items-center text-sm text-muted-foreground"
                        data-testid={`text-feature-${service.id}-${index}`}
                      >
                        <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn More Button */}
                  <Button 
                    variant="outline" 
                    className="w-full mt-6 border-primary/30 hover:bg-primary/10"
                    data-testid={`button-learn-more-${service.id}`}
                    onClick={() => console.log(`Learn more about ${service.title} clicked`)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-card rounded-2xl p-8 backdrop-blur-md border border-border/30">
            <h3 className="text-2xl font-bold text-foreground mb-4" data-testid="text-cta-title">
              Need a Custom Solution?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto" data-testid="text-cta-description">
              We understand that every business has unique requirements. Let's discuss how we can create a tailored solution for your specific needs.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-accent"
              data-testid="button-contact-us"
              onClick={() => console.log('Contact Us clicked')}
            >
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}