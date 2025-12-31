import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { Linkedin, Twitter, Instagram, Facebook, Mail, Loader2 } from 'lucide-react';
import { insertNewsletterSchema, type InsertNewsletter } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';

export function Footer() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletter) => {
      return await apiRequest(`/api/newsletter`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      toast({
        title: t('Subscribed!', 'Inscrit !'),
        description: t('Thank you for subscribing to our newsletter.', 'Merci de vous être abonné à notre newsletter.'),
      });
      setEmail('');
    },
    onError: (error: any) => {
      toast({
        title: t('Subscription Failed', 'Échec de l\'Abonnement'),
        description: error.message || t('Please try again.', 'Veuillez réessayer.'),
        variant: 'destructive',
      });
    },
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = insertNewsletterSchema.safeParse({ email });
    if (result.success) {
      newsletterMutation.mutate(result.data);
    } else {
      toast({
        title: t('Invalid Email', 'Email Invalide'),
        description: t('Please enter a valid email address.', 'Veuillez entrer une adresse email valide.'),
        variant: 'destructive',
      });
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: t('About', 'À Propos'), id: 'about' },
    { label: t('Missions', 'Missions'), id: 'missions' },
    { label: t('Programs', 'Programmes'), id: 'programs' },
    { label: t('Events', 'Événements'), id: 'events' },
    { label: t('Contact', 'Contact'), id: 'contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/company/yalw/' },
     //{ icon: Twitter, label: 'Twitter', url: '#' },
    //{ icon: Instagram, label: 'Instagram', url: '#' },
    //{ icon: Facebook, label: 'Facebook', url: '#' },
  ];

  return (
    <footer className="bg-card border-t border-card-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">YALW</h3>
            <p className="text-sm text-muted-foreground mb-6">
              {t(
                'Empowering the next generation of African leaders through education, mentorship, and global connections.',
                'Faire émerger la prochaine génération de leaders africains par l\'éducation, le mentorat et les connexions mondiales.'
              )}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center transition-colors group"
                    aria-label={social.label}
                    data-testid={`link-footer-social-${social.label.toLowerCase()}`}
                  >
                    <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t('Quick Links', 'Liens Rapides')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t('Programs', 'Programmes')}
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>{t('Leadership Training', 'Formation Leadership')}</li>
              <li>{t('Mentorship', 'Mentorat')}</li>
              <li>{t('Entrepreneurship Support', 'Accompagnement Entrepreneurial')}</li>
              <li>{t('Networking Events', 'Événements Réseautage')}</li>
              <li>{t('Investment Clubs', 'Clubs d\'Investissement')}</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t('Stay Updated', 'Restez Informé')}
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              {t(
                'Subscribe to our newsletter for updates and opportunities.',
                'Abonnez-vous à notre newsletter pour les mises à jour et opportunités.'
              )}
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder={t('Your email', 'Votre email')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={newsletterMutation.isPending}
                className="flex-1"
                data-testid="input-newsletter-email"
              />
              <Button
                type="submit"
                size="icon"
                disabled={newsletterMutation.isPending}
                data-testid="button-subscribe-newsletter"
              >
                {newsletterMutation.isPending ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Mail className="h-4 w-4" />
                )}
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Young African Leaders Worldwide. {t('All rights reserved.', 'Tous droits réservés.')}
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <button className="hover:text-primary transition-colors">
              {t('Privacy Policy', 'Politique de Confidentialité')}
            </button>
            <button className="hover:text-primary transition-colors">
              {t('Terms of Service', 'Conditions d\'Utilisation')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
