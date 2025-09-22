import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Services', href: '#services' },
    { name: 'Workshops', href: '#workshops' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-purple bg-clip-text text-transparent" data-testid="text-logo">
              Shreeram Computers
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-accent-foreground hover-elevate px-3 py-2 rounded-md text-sm font-medium transition-colors"
                    data-testid={`link-nav-${item.name.toLowerCase()}`}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="flex items-center space-x-2">
                <ThemeToggle />
                <Button 
                  variant="default" 
                  size="sm" 
                  className="bg-gradient-purple"
                  data-testid="button-demo-registration"
                  onClick={() => console.log('Demo Registration clicked')}
                >
                  Demo Registration
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card rounded-lg mt-2 backdrop-blur-md">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-accent-foreground block px-3 py-2 rounded-md text-base font-medium hover-elevate"
                  data-testid={`link-mobile-${item.name.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button 
                variant="default" 
                className="w-full mt-2 bg-gradient-purple"
                data-testid="button-mobile-demo"
                onClick={() => {
                  console.log('Demo Registration clicked');
                  setIsMenuOpen(false);
                }}
              >
                Demo Registration
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}