import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { id: 'about', label: t('About', 'À Propos') },
    { id: 'missions', label: t('Missions', 'Missions') },
    { id: 'programs', label: t('Programs', 'Programmes') },
   //{ id: 'events', label: t('Events', 'Événements') },
    { id: 'contact', label: t('Contact', 'Contact') },
  ];

  return (
  <nav
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}
    style={{
      backgroundColor: isScrolled ? 'rgba(102, 51, 153, 0.95)' : 'transparent'
    }}
  >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-foreground hover-elevate active-elevate-2 rounded-md px-2 py-1"
            data-testid="link-logo"
          >
            <span className="text-primary">YALW</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md"
                data-testid={`link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA and Language Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              data-testid="button-language-toggle"
              className="relative"
            >
              <Globe className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 text-xs font-semibold text-primary">
                {language.toUpperCase()}
              </span>
            </Button>
            <Button
              onClick={() => scrollToSection('register')}
              data-testid="button-join-nav"
            >
              {t('Join Us', 'Rejoindre')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              data-testid="button-language-toggle-mobile"
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border" data-testid="mobile-menu">
          <div className="px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left text-sm font-medium text-foreground hover:text-primary transition-colors hover-elevate active-elevate-2 px-3 py-2 rounded-md"
                data-testid={`link-mobile-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('register')}
              className="w-full"
              data-testid="button-join-mobile"
            >
              {t('Join Us', 'Rejoindre')}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
