import { useLanguage } from '@/contexts/LanguageContext';

export function VisionSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
          {t('Our Vision', 'Notre Vision')}
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
          {t(
            'Young African Leaders Worldwide (YALW) is an international network of young African talents from top universities and grandes écoles. Based in Paris with upcoming chapters worldwide, we unite ambitious students and young professionals.',
            'Young African Leaders Worldwide (YALW) est un réseau international de jeunes talents africains issus des grandes écoles et universités. Basé à Paris, et prochainement implanté dans plusieurs villes dans le monde, nous réunissons des étudiants et jeunes professionnels ambitieux.'
          )}
        </p>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          {t(
            'Rooted in Africa and open to the world, our community promotes collective intelligence, responsible innovation, and the concrete impact of African youth. We believe in building bridges between continents, disciplines, and generations to shape tomorrow\'s solutions.',
            'Ancrée en Afrique et ouverte sur le monde, notre communauté promeut l\'intelligence collective, l\'innovation responsable et l\'impact concret de la jeunesse africaine. Nous croyons en la puissance des ponts entre continents, disciplines et générations pour façonner les solutions de demain.'
          )}
        </p>
        
        <div className="mt-12 p-8 bg-primary/5 border border-primary/10 rounded-xl">
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            {t('Our Objective', 'Notre Objectif')}
          </p>
          <p className="text-lg text-muted-foreground">
            {t(
              'To develop a new generation of African leaders capable of thinking, acting, and influencing on both local and global scales.',
              'Faire émerger une nouvelle génération de leaders africains capables de penser, d\'agir et d\'influencer à l\'échelle locale et globale.'
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
