import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Services', href: '#services' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Contact', href: '#contact' }
  ];

  const courses = [
    { name: 'Web Development', href: '#courses' },
    { name: 'Data Science', href: '#courses' },
    { name: 'Digital Marketing', href: '#courses' },
    { name: 'Programming', href: '#courses' },
    { name: 'Graphic Design', href: '#courses' }
  ];

  return (
    <footer className="bg-gradient-dark-gel border-t border-border/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-purple bg-clip-text text-transparent mb-4" data-testid="text-footer-logo">
                Shreeram Computers
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md" data-testid="text-footer-description">
                Empowering individuals and organizations through comprehensive computer education and innovative technology solutions since 2010.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground">Stay Updated</h4>
                <div className="flex gap-2 max-w-sm">
                  <Input 
                    placeholder="Enter your email" 
                    className="bg-card/50 border-border/30"
                    data-testid="input-newsletter"
                  />
                  <Button 
                    className="bg-gradient-purple flex-shrink-0"
                    data-testid="button-newsletter"
                    onClick={() => console.log('Newsletter subscription clicked')}
                  >
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-primary/20"
                  data-testid="button-facebook"
                  onClick={() => console.log('Facebook clicked')}
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-primary/20"
                  data-testid="button-twitter"
                  onClick={() => console.log('Twitter clicked')}
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-primary/20"
                  data-testid="button-instagram"
                  onClick={() => console.log('Instagram clicked')}
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hover:bg-primary/20"
                  data-testid="button-linkedin"
                  onClick={() => console.log('LinkedIn clicked')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href} 
                      className="text-muted-foreground hover:text-accent-foreground transition-colors"
                      data-testid={`link-footer-${link.name.toLowerCase().replace(' ', '-')}`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Courses */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Popular Courses</h4>
              <ul className="space-y-3">
                {courses.map((course) => (
                  <li key={course.name}>
                    <a 
                      href={course.href} 
                      className="text-muted-foreground hover:text-accent-foreground transition-colors"
                      data-testid={`link-course-${course.name.toLowerCase().replace(' ', '-')}`}
                    >
                      {course.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="py-6 border-t border-border/30">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3" data-testid="footer-contact-address">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-muted-foreground">123 Technology Street, Digital City</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3" data-testid="footer-contact-phone">
              <Phone className="w-5 h-5 text-accent" />
              <span className="text-muted-foreground">+91 98765 43210</span>
            </div>
            <div className="flex items-center justify-center md:justify-start space-x-3" data-testid="footer-contact-email">
              <Mail className="w-5 h-5 text-accent" />
              <span className="text-muted-foreground">info@shreeramcomputers.com</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm" data-testid="text-copyright">
              © {currentYear} Shreeram Computers. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent-foreground transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent-foreground transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-accent-foreground transition-colors"
                data-testid="link-sitemap"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}