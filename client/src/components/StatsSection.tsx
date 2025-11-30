import { useLanguage } from '@/contexts/LanguageContext';

export function StatsSection() {
  const { t } = useLanguage();

  const stats = [
    {
      value: '25+',
      label: t('Members', 'Membres'),
    },
    {
      value: '2+',
      label: t('Cities Worldwide', 'Villes dans le Monde'),
    },
    {
      value: '2+',
      label: t('Partner Organizations', 'Organisations Partenaires'),
    },
    {
      value: '2+',
      label: t('Events per Year', 'Événements par An'),
    },
  ];

  return (
    <section className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
