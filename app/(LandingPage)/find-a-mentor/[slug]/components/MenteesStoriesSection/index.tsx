import Reviews from '@/app/(LandingPage)/shared/components/Reviews';
import { testimonials } from '@/app/(LandingPage)/shared/contents';
import { SectionHeader } from '@/shared/components/SectionHeader';

export const MenteesStoriesSection = () => {
  return (
    <section className="space-y-16 px-4 max-lg:pb-16 max-lg:pt-8 lg:px-44">
      <SectionHeader subHeader="Discover how mentees found success through MentorsHub mentorship">
        Inspiring stories from our mentees
      </SectionHeader>
      <Reviews reviews={testimonials} showButton />
    </section>
  );
};
