import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@assets/generated_images/Hero_-_African_professionals_networking_5f6c4799.png';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Young African leaders networking"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {t(
            'Empowering the Next Generation of African Leaders',
            'Faire Émerger la Prochaine Génération de Leaders Africains'
          )}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
          {t(
            'A global network of young African talents from top universities, united to build, connect, and impact the world.',
            'Un réseau international de jeunes talents africains des grandes écoles, unis pour construire, connecter et impacter le monde.'
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
          <Button
            size="lg"
            onClick={() => scrollToSection('register')}
            className="group min-w-[200px]"
            data-testid="button-hero-join"
          >
            {t('Join the Network', 'Rejoindre le Réseau')}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('about')}
            className="min-w-[200px] backdrop-blur-md bg-white/10 border-white/20 text-white hover:bg-white/20"
            data-testid="button-hero-learn"
          >
            {t('Learn More', 'En Savoir Plus')}
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
