import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { VisionSection } from '@/components/VisionSection';
import { MissionsSection } from '@/components/MissionsSection';
import { ProgramsSection } from '@/components/ProgramsSection';
import { StatsSection } from '@/components/StatsSection';
import { EventsSection } from '@/components/EventsSection';
import { SuccessStoriesSection } from '@/components/SuccessStoriesSection';
import { RegistrationSection } from '@/components/RegistrationSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <VisionSection />
      <MissionsSection />
      <ProgramsSection />
      <StatsSection />
      <EventsSection />
      <SuccessStoriesSection />
      <RegistrationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
