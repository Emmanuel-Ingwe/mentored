// import CTASection from '@/app/(LandingPage)/shared/components/CTASection';
import dynamic from 'next/dynamic';
import AboutUsSection from './components/AboutUsSection';
import HeroSection from './components/HeroSection';
import MetricSection from './components/MetricSection';
import TeamSection from './components/TeamSection';
import UserStories from './components/UserStoriesSection';

const CTASection = dynamic(
  () => {
    return import('../shared/components/CTASection');
  },
  { ssr: false },
);

const AboutUs = () => {
  return (
    <>
      <HeroSection />
      <MetricSection />
      <AboutUsSection />
      <TeamSection />
      <UserStories />
      <CTASection
        mainText="Ready to make a difference?"
        subText="Join our community of passionate mentors and mentees on MentorsHub"
        customButtonText="Get Started"
      />
    </>
  );
};

export default AboutUs;
