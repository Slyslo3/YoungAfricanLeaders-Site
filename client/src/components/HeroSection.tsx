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
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-black/60 to-primary/40" />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 backdrop-blur-md rounded-full pl-2 pr-5 py-1.5 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <img
            src="/logo.jpg"
            alt=""
            aria-hidden="true"
            className="h-9 w-9 rounded-full object-cover bg-white"
          />
          <span className="text-sm font-medium text-white/90 tracking-wide">
            Young African Leaders Worldwide
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
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
    </section>
  );
}
