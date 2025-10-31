import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
import { Mail, MapPin, Clock, Linkedin, Twitter, Instagram, Facebook, Loader2 } from 'lucide-react';
import { insertContactSchema, type InsertContact } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import officeImage from '@assets/generated_images/Modern_office_headquarters_space_ec712e80.png';

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest('POST', '/api/contacts', data);
    },
    onSuccess: () => {
      toast({
        title: t('Message Sent!', 'Message Envoyé !'),
        description: t(
          'We\'ll get back to you within 24 hours.',
          'Nous vous répondrons dans les 24 heures.'
        ),
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: t('Failed to Send', 'Échec de l\'Envoi'),
        description: error.message || t('Please try again later.', 'Veuillez réessayer plus tard.'),
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: '#' },
    { icon: Twitter, label: 'Twitter', url: '#' },
    { icon: Instagram, label: 'Instagram', url: '#' },
    { icon: Facebook, label: 'Facebook', url: '#' },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('Get in Touch', 'Contactez-Nous')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t(
              'Have questions? Want to learn more? We\'d love to hear from you.',
              'Des questions ? Envie d\'en savoir plus ? Nous serions ravis de vous entendre.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">
              {t('Send us a Message', 'Envoyez-nous un Message')}
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Name', 'Nom')} *</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={contactMutation.isPending} data-testid="input-contact-name" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Email', 'Email')} *</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} disabled={contactMutation.isPending} data-testid="input-contact-email" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Subject', 'Sujet')} *</FormLabel>
                      <FormControl>
                        <Input {...field} disabled={contactMutation.isPending} data-testid="input-contact-subject" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('Message', 'Message')} *</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          rows={4}
                          disabled={contactMutation.isPending}
                          data-testid="input-contact-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit-contact"
                >
                  {contactMutation.isPending && (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  {contactMutation.isPending
                    ? t('Sending...', 'Envoi...')
                    : t('Send Message', 'Envoyer le Message')}
                </Button>
              </form>
            </Form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <img
                src={officeImage}
                alt="YALW Headquarters"
                className="w-full h-64 object-cover rounded-xl mb-8"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {t('Email', 'Email')}
                  </h4>
                  <a
                    href="mailto:contact@yalw.org"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@yalw.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {t('Headquarters', 'Siège Social')}
                  </h4>
                  <p className="text-muted-foreground">
                    Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">
                    {t('Office Hours', 'Heures d\'Ouverture')}
                  </h4>
                  <p className="text-muted-foreground">
                    {t('Monday - Friday: 9am - 6pm CET', 'Lundi - Vendredi : 9h - 18h CET')}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h4 className="font-semibold text-foreground mb-4">
                  {t('Follow Us', 'Suivez-Nous')}
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className="w-10 h-10 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center transition-colors group"
                        aria-label={social.label}
                        data-testid={`link-social-${social.label.toLowerCase()}`}
                      >
                        <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
