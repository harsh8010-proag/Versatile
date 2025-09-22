import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroImage from '@assets/generated_images/Computer_education_hero_illustration_44f01bf3.png';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-dark-gel"></div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-purple rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-accent rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6" data-testid="text-hero-title">
              Invest In Your{' '}
              <span className="bg-gradient-purple bg-clip-text text-transparent">
                Education
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl" data-testid="text-hero-description">
              Unlock the doors of opportunity. Empower yourself with knowledge. 
              Discover the hidden potential within. Unleash your true self through education. 
              Embark on a journey of self-discovery. Invest in your education.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-purple hover-elevate text-lg px-8 py-3"
                data-testid="button-explore-courses"
                onClick={() => console.log('Explore Courses clicked')}
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-primary/30 backdrop-blur-sm bg-background/10 text-lg px-8 py-3"
                data-testid="button-watch-demo"
                onClick={() => console.log('Watch Demo clicked')}
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/30">
              <div className="text-center" data-testid="stat-students">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center" data-testid="stat-courses">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
              <div className="text-center" data-testid="stat-success">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative bg-gradient-card rounded-2xl p-8 backdrop-blur-md border border-border/30">
              <img 
                src={heroImage} 
                alt="Computer Education" 
                className="w-full h-auto rounded-xl"
                data-testid="img-hero-illustration"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-gradient-accent rounded-full p-4 backdrop-blur-md border border-border/30">
                <div className="text-accent-foreground font-semibold text-sm">Live Classes</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-purple rounded-full p-4 backdrop-blur-md border border-border/30">
                <div className="text-primary-foreground font-semibold text-sm">Expert Guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}