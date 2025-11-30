import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';
import workshopImage from '@assets/generated_images/Leadership.jpg';
import conferenceImage from '@assets/generated_images/Conference.jpg';
import pitchImage from '@assets/generated_images/Entrepreneurship_pitch_event_2d3ed69e.png';
import communityImage from '@assets/generated_images/Community.jpg';

export function ProgramsSection() {
  const { t } = useLanguage();

  const programs = [
    {
      image: conferenceImage,
      title: t('Conferences & Networking', 'Conférences & Rencontres'),
      description: t(
        'Meet exceptional leaders who share their journey, insights, and vision for the future.',
        'Rencontrez des leaders d\'exception qui partagent leur parcours, leurs insights et leur vision.'
      ),
      benefits: [
        t('Access to industry leaders', 'Accès aux leaders d\'industrie'),
        t('High-level networking', 'Réseautage de haut niveau'),
        t('Inspiring success stories', 'Histoires de succès inspirantes'),
      ],
    },
    {
      image: workshopImage,
      title: t('Training Workshops', 'Ateliers de Formation'),
      description: t(
        'Practical skill-building sessions on pitching, leadership, negotiation, and more.',
        'Sessions pratiques de développement de compétences en pitch, leadership, négociation et plus.'
      ),
      benefits: [
        t('Hands-on learning', 'Apprentissage pratique'),
        t('Expert facilitators', 'Facilitateurs experts'),
        t('Career development', 'Développement de carrière'),
      ],
    },
    {
      image: pitchImage,
      title: t('Entrepreneurship Support', 'Accompagnement Entrepreneurial'),
      description: t(
        'From idea to funding: comprehensive support for African entrepreneurs building impactful ventures.',
        'De l\'idée au financement : accompagnement complet pour les entrepreneurs africains créant des projets à impact.'
      ),
      benefits: [
        t('Mentorship programs', 'Programmes de mentorat'),
        t('Investor connections', 'Connexions investisseurs'),
        t('Funding opportunities', 'Opportunités de financement'),
      ],
    },
    {
      image: communityImage,
      title: t('Community & Clubs', 'Communauté & Clubs'),
      description: t(
        'Join thematic clubs led by members: investment, debate, innovation, and solidarity projects.',
        'Rejoignez des clubs thématiques animés par les membres : investissement, débat, innovation et projets solidaires.'
      ),
      benefits: [
        t('Peer learning', 'Apprentissage entre pairs'),
        t('Shared interests', 'Intérêts communs'),
        t('Global network', 'Réseau mondial'),
      ],
    },
  ];

  return (
    <section id="programs" className="py-32 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('What We Offer', 'Ce Que Nous Offrons')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Comprehensive programs designed to develop your leadership potential',
              'Des programmes complets conçus pour développer votre potentiel de leadership'
            )}
          </p>
        </div>

        <div className="space-y-24">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-auto rounded-xl shadow-lg"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {program.title}
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {program.description}
                </p>
                <ul className="space-y-3">
                  {program.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0 inline-flex items-center justify-center w-5 h-5 bg-primary/10 rounded-full">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="text-base text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
