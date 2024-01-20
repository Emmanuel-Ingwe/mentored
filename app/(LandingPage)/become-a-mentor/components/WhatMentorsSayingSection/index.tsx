import Reviews from '@/app/(LandingPage)/shared/components/Reviews';
import { testimonials } from '@/app/(LandingPage)/shared/contents';
import { SectionHeader } from '@/shared/components/SectionHeader';

export const WhatMentorsSayingSection = () => {
  return (
    <div className="space-y-16 px-4 py-16 lg:px-44 lg:py-24">
      <SectionHeader subHeader="Our mentors enjoy giving back and empowering the next generation of tech professionals on MentorsHub.">
        What our mentors are saying
      </SectionHeader>
      <Reviews reviews={testimonials} showButton />
    </div>
  );
};
