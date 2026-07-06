import { GraduationCap, Users, Lightbulb, MessageCircle, Rocket, Sparkles } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export function MissionsSection() {
  const { t } = useLanguage();

  const missions = [
    {
      icon: GraduationCap,
      title: t('Train', 'Former'),
      titleFr: 'Former',
      description: t(
        'Develop key skills through practical workshops: pitching, leadership, negotiation, public speaking, project management, and more.',
        'Développer les compétences clés des membres via des ateliers pratiques : pitch, leadership, négociation, prise de parole en public, gestion de projet, etc.'
      ),
    },
    {
      icon: Users,
      title: t('Connect', 'Connecter'),
      titleFr: 'Connecter',
      description: t(
        'Build relationships between talents and inspiring mentors, investors, companies, and partner institutions.',
        'Mettre en relation les talents avec des mentors inspirants, des investisseurs, des entreprises et des institutions partenaires.'
      ),
    },
    {
      icon: Lightbulb,
      title: t('Innovate', 'Innover'),
      titleFr: 'Innover',
      description: t(
        'Support African entrepreneurship from idea to funding, focusing on solutions adapted to the continent\'s realities.',
        'Accompagner l\'entrepreneuriat africain, de l\'idée au financement, avec un focus sur les solutions adaptées aux réalités du continent.'
      ),
    },
    {
      icon: MessageCircle,
      title: t('Reflect', 'Réfléchir'),
      titleFr: 'Réfléchir',
      description: t(
        'Organize debate spaces on major issues: geopolitics, sustainable development, economy, technology, African leadership.',
        'Organiser des espaces de débat sur les grands enjeux : géopolitique, développement durable, économie, technologie, leadership africain.'
      ),
    },
    {
      icon: Rocket,
      title: t('Act', 'Agir'),
      titleFr: 'Agir',
      description: t(
        'Support concrete initiatives led by members: investment clubs, solidarity projects, field missions.',
        'Soutenir des initiatives concrètes portées par les membres : clubs d\'investissement, projets solidaires, missions terrain.'
      ),
    },
    {
      icon: Sparkles,
      title: t('Inspire', 'Inspirer'),
      titleFr: 'Inspirer',
      description: t(
        'Amplify the successes and voices of African youth through conferences, publications, and media partnerships.',
        'Faire rayonner les succès et les voix de la jeunesse africaine à travers des conférences, publications et partenariats médiatiques.'
      ),
    },
  ];

  return (
    <section id="missions" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('Our Missions', 'Nos Missions')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Six pillars that drive our commitment to developing African leadership',
              'Six piliers qui animent notre engagement pour le développement du leadership africain'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {missions.map((mission, index) => {
            const Icon = mission.icon;
            return (
              <Card
                key={index}
                className="p-8 border border-border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                data-testid={`card-mission-${index}`}
              >
                <div className="mb-6 inline-flex p-3 bg-primary/10 rounded-lg">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">{mission.title}</h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {mission.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
