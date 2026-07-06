import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { insertMemberSchema, type InsertMember } from '@shared/schema';
import emailjs from '@emailjs/browser';
import { CheckCircle2, Loader2 } from 'lucide-react';

export function RegistrationSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const areasOptions = [
    { id: 'entrepreneurship', label: t('Entrepreneurship', 'Entrepreneuriat') },
    { id: 'technology', label: t('Technology', 'Technologie') },
    { id: 'finance', label: t('Finance', 'Finance') },
    { id: 'policy', label: t('Policy & Governance', 'Politique & Gouvernance') },
    { id: 'sustainability', label: t('Sustainability', 'Développement Durable') },
    { id: 'education', label: t('Education', 'Éducation') },
  ];

  const form = useForm<InsertMember>({
    resolver: zodResolver(insertMemberSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      university: '',
      fieldOfStudy: '',
      linkedinProfile: '',
      areasOfInterest: [],
      motivation: '',
    },
  });

  const onSubmit = async (data: InsertMember) => {
    setIsSubmitting(true);
    
    try {
      // Formatage des données pour l'email
      const areasText = data.areasOfInterest
        .map(area => areasOptions.find(opt => opt.id === area)?.label)
        .join(', ');

      // Envoi avec EmailJS
      const result = await emailjs.send(
        'service_vhyr06x',
        'template_f7flo3h', 
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone || 'Non fourni',
          university: data.university,
          fieldOfStudy: data.fieldOfStudy || 'Non fourni',
          linkedinProfile: data.linkedinProfile || 'Non fourni',
          areasOfInterest: areasText,
          motivation: data.motivation,
          to_email: 'yalw@outlook.fr',
        },
        '6HExC3jPHz2VV-K2R'
      );

      if (result.status === 200) {
        setIsSuccess(true);
        toast({
          title: t('Registration Successful!', 'Inscription Réussie !'),
          description: t(
            "Welcome to YALW! We'll be in touch soon.",
            'Bienvenue à YALW ! Nous vous contacterons bientôt.'
          ),
        });
        form.reset();
      }
    } catch (error: any) {
      console.error('EmailJS Error:', error);
      toast({
        title: t('Registration Failed', "Échec de l'Inscription"),
        description: error.text || t('Please try again later.', 'Veuillez réessayer plus tard.'),
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="register" className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-6">
          <Card className="p-12 text-center border border-border">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {t('Welcome to YALW!', 'Bienvenue à YALW !')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t(
                'Your application has been received. Our team will review it and get back to you within 48 hours.',
                "Votre candidature a été reçue. Notre équipe l'examinera et vous contactera dans les 48 heures."
              )}
            </p>
            <Button
              onClick={() => setIsSuccess(false)}
              data-testid="button-register-another"
            >
              {t('Register Another Member', 'Inscrire un Autre Membre')}
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="register" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('Join Our Network', 'Rejoindre Notre Réseau')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Take the first step towards becoming part of a transformative community',
              'Faites le premier pas pour rejoindre une communauté transformatrice'
            )}
          </p>
        </div>

        <Card className="p-8 border border-border">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('First Name', 'Prénom')} *</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={isSubmitting} data-testid="input-firstName" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Last Name', 'Nom')} *</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={isSubmitting} data-testid="input-lastName" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Email', 'Email')} *</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} disabled={isSubmitting} data-testid="input-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Phone', 'Téléphone')}</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={isSubmitting} data-testid="input-phone" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Education Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="university"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('University/School', 'Université/École')} *</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={isSubmitting} data-testid="input-university" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fieldOfStudy"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Field of Study', "Domaine d'Études")}</FormLabel>
                      <FormControl>
                        <Input {...field} value={field.value ?? ''} disabled={isSubmitting} data-testid="input-fieldOfStudy" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* LinkedIn */}
              <FormField
                control={form.control}
                name="linkedinProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('LinkedIn Profile URL', 'URL Profil LinkedIn')}</FormLabel>
                    <FormControl>
                      <Input {...field} disabled={isSubmitting} data-testid="input-linkedinProfile" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Areas of Interest */}
              <FormField
                control={form.control}
                name="areasOfInterest"
                render={() => (
                  <FormItem>
                    <FormLabel>{t('Areas of Interest', "Domaines d'Intérêt")} *</FormLabel>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                      {areasOptions.map((area) => (
                        <FormField
                          key={area.id}
                          control={form.control}
                          name="areasOfInterest"
                          render={({ field }) => (
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(area.id)}
                                  onCheckedChange={(checked) => {
                                    const current = field.value || [];
                                    if (checked) {
                                      field.onChange([...current, area.id]);
                                    } else {
                                      field.onChange(current.filter(val => val !== area.id));
                                    }
                                  }}
                                  disabled={isSubmitting}
                                  data-testid={`checkbox-interest-${area.id}`}
                                />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer">
                                {area.label}
                              </FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Motivation */}
              <FormField
                control={form.control}
                name="motivation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t('Why do you want to join YALW?', 'Pourquoi souhaitez-vous rejoindre YALW ?')} *</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        rows={4}
                        disabled={isSubmitting}
                        data-testid="input-motivation"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
                data-testid="button-submit-registration"
              >
                {isSubmitting && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                {isSubmitting
                  ? t('Submitting...', 'Envoi en cours...')
                  : t('Submit Application', 'Soumettre la Candidature')}
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </section>
  );
}