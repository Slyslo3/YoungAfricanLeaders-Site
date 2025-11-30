/*import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function EventsSection() {
  const { t } = useLanguage();

  const upcomingEvents = [
    {
      date: t('Dec 15, 2025', '15 Déc 2025'),
      title: t('Leadership Summit Paris', 'Sommet Leadership Paris'),
      location: t('Paris, France', 'Paris, France'),
      description: t(
        'Annual gathering of African leaders to discuss innovation and impact.',
        'Rassemblement annuel de leaders africains pour discuter innovation et impact.'
      ), 
    },
    {
      /*date: t('Jan 20, 2026', '20 Jan 2026'),
      title: t('Entrepreneurship Workshop', 'Atelier Entrepreneuriat'),
      location: t('Online', 'En Ligne'),
      description: t(
        'Learn pitch techniques and connect with potential investors.',
        'Apprenez les techniques de pitch et connectez-vous avec des investisseurs potentiels.'
      ), 
    },
    {
      date: t('Feb 10, 2026', '10 Fév 2026'),
      title: t('Networking Evening Abidjan', 'Soirée Réseautage Abidjan'),
      location: t('Abidjan, Ivory Coast', 'Abidjan, Côte d\'Ivoire'),
      description: t(
        'Connect with fellow members and mentors in a relaxed setting.',
        'Connectez-vous avec d\'autres membres et mentors dans un cadre décontracté.'
      ), 
    },
    {
      date: t('Mar 5, 2026', '5 Mar 2026'),
      title: t('Tech Innovation Forum', 'Forum Innovation Tech'),
      location: t('Lagos, Nigeria', 'Lagos, Nigeria'),
      description: t(
        'Explore the latest in African tech and digital transformation.',
        'Explorez les dernières innovations tech africaines et transformation digitale.'
      ), 
    },
  ];

  return (
    <section id="events" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('Upcoming Events', 'Événements à Venir')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Join us at conferences, workshops, and networking events across Africa and beyond',
              'Rejoignez-nous lors de conférences, ateliers et événements de réseautage à travers l\'Afrique et au-delà'
            )}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {upcomingEvents.map((event, index) => (
            <Card key={index} className="p-6 border border-border" data-testid={`card-event-${index}`}>
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex flex-col items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-primary mb-1">{event.date}</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">{event.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
              <p className="text-base text-muted-foreground mb-4">{event.description}</p>
              <Button variant="outline" className="w-full group" data-testid={`button-register-event-${index}`}>
                {t('Register Now', 'S\'Inscrire')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section> 
    
  );
}
*/