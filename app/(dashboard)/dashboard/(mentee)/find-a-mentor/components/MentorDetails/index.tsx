'use client';
import { HeroSection } from '@/app/(LandingPage)/mentor/[slug]/components/HeroSection';
import { MainSection } from '@/app/(LandingPage)/mentor/[slug]/components/MainSection';

const MentorDetails = () => {
  return (
    <div className="mt-8 px-4">
      <HeroSection />
      <MainSection />
    </div>
  );
};

export default MentorDetails;
