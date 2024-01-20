import dynamic from 'next/dynamic';
import { FeaturesSection } from './components/FeaturesSection';
import { HeroSection } from './components/HeroSection';
import { WhatMentorsSayingSection } from './components/WhatMentorsSayingSection';
import { FAQsSection } from '../shared/components/FAQsSection';

const CTASection = dynamic(
  () => {
    return import('../shared/components/CTASection');
  },
  { ssr: false },
);
const WhyMentorsSection = dynamic(
  () => {
    return import('./components/WhyMentorsSection');
  },
  { ssr: false },
);

const BecomeAMentor = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <WhyMentorsSection />
      <WhatMentorsSayingSection />
      <FAQsSection />
      <CTASection
        mainText={'Ready to make a difference?'}
        subText="Join our community of passionate mentors and inspire future tech leaders"
        customButtonText="Become a mentor"
      />
    </div>
  );
};

export default BecomeAMentor;
