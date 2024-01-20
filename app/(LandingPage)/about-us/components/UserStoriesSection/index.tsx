import Reviews from '@/app/(LandingPage)/shared/components/Reviews';
import { testimonials } from '@/app/(LandingPage)/shared/contents';
import { SectionHeader } from '@/shared/components/SectionHeader';

const UserStories = () => {
  return (
    <div className="space-y-16 px-4 py-16 lg:px-44 lg:py-24">
      <SectionHeader
        subHeader="Heres what some of our users have to say about their MentorsHub
          experiences"
      >
        Inspiring stories from our mentors and mentees
      </SectionHeader>

      <Reviews reviews={testimonials} showButton />
    </div>
  );
};

export default UserStories;
