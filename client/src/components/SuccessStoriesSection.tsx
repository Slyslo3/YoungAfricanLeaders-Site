import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import member1 from '@assets/generated_images/Female_professional_headshot_portrait_3dd37f26.png';
import member2 from '@assets/generated_images/Male_professional_headshot_portrait_c3d5c55d.png';
import member3 from '@assets/generated_images/Female_professional_headshot_2_ccbbbdd9.png';
import member4 from '@assets/generated_images/Male_professional_headshot_2_7e4cca59.png';

export function SuccessStoriesSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      image: member1,
      name: 'Aïcha Diallo',
      title: t('Tech Entrepreneur, Senegal', 'Entrepreneuse Tech, Sénégal'),
      quote: t(
        'YALW connected me with mentors who helped turn my startup idea into reality. The network opened doors I never imagined.',
        'YALW m\'a mise en relation avec des mentors qui ont transformé mon idée de startup en réalité. Le réseau m\'a ouvert des portes que je n\'imaginais pas.'
      ),
    },
    {
      image: member2,
      name: 'Kwame Mensah',
      title: t('Investment Analyst, France', 'Analyste Investissement, France'),
      quote: t(
        'The professional development workshops gave me skills that directly advanced my career. YALW is more than a network—it\'s a family.',
        'Les ateliers de développement professionnel m\'ont donné des compétences qui ont directement fait progresser ma carrière. YALW est plus qu\'un réseau—c\'est une famille.'
      ),
    },
    {
      image: member3,
      name: 'Amina Hassan',
      title: t('Policy Advisor, Kenya', 'Conseillère Politique, Kenya'),
      quote: t(
        'Being part of YALW exposed me to diverse perspectives from across Africa. It shaped how I approach solving continental challenges.',
        'Faire partie de YALW m\'a exposée à des perspectives diverses de toute l\'Afrique. Cela a façonné ma façon d\'aborder les défis continentaux.'
      ),
    },
    {
      image: member4,
      name: 'Yves Kouadio',
      title: t('Social Entrepreneur, Ivory Coast', 'Entrepreneur Social, Côte d\'Ivoire'),
      quote: t(
        'YALW\'s support helped me secure funding for my social enterprise. The community believes in African-led solutions.',
        'Le soutien de YALW m\'a aidé à obtenir du financement pour mon entreprise sociale. La communauté croit aux solutions menées par des Africains.'
      ),
    },
  ];

  return (
    <section className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('Success Stories', 'Histoires de Succès')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Hear from members who are making an impact across Africa and the world',
              'Écoutez les membres qui ont un impact à travers l\'Afrique et le monde'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 border border-border" data-testid={`card-testimonial-${index}`}>
              <Quote className="h-8 w-8 text-primary/30 mb-4" />
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-primary/20">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                  <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
