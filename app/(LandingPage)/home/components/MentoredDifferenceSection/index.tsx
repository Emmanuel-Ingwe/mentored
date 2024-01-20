'use client';
import { shouldShowFeature } from '@/app/(LandingPage)/hooks/featureFlags';
import ChatIconLarge from '@/shared/components/Icons/ChatIconLarge';
import { GoalIcon } from '@/shared/components/Icons/GoalIcon';
import { ProfileIcon } from '@/shared/components/Icons/ProfileIcon';
import { SectionHeader } from '@/shared/components/SectionHeader';
import { Button } from '@/shared/components/ui/button';
import { CDN_URL } from '@/shared/lib/constants';
import userTypeSwitchStore from '@/shared/store';
import ServiceContainer from './ServiceContainer';

const MentoredDifferenceSection = () => {
  const { userType } = userTypeSwitchStore();
  const buttonLabel =
    userType === 'MENTEE' ? 'Find a mentor' : 'Become a mentor';
  const subHeaderLabel =
    userType === 'MENTEE'
      ? 'Elevate Your Tech Skills and Career with Our Unique Mentorship Experience'
      : 'Discover a platform that maximizes your influence as a tech mentor.';

  const shouldShowReivews = shouldShowFeature('reviews');

  return (
    <div className="mb-28 max-w-full space-y-16 px-4 max-lg:py-16 lg:px-28 lg:pt-24">
      <SectionHeader subHeader={subHeaderLabel}>
        Experience the <span className="text-primaryx">MentorsHub</span>{' '}
        difference
      </SectionHeader>

      <div className="mt-12 space-y-16 lg:space-y-24">
        <ServiceContainer
          title="Personalized mentorship"
          icon={<ProfileIcon />}
          imgSrc={`${CDN_URL}/images/wtz7zml0oapilydeeidb.png`}
          description="Benefit from mentorship tailored to your unique goals, ensuring focused guidance for your success. Get a customized plan to ensure you receive the right support at every step."
        />
        <ServiceContainer
          title="Networking"
          icon={<ChatIconLarge />}
          imgSrc={`${CDN_URL}/images/kmkb9w1aafdadpri6tc1.png`}
          description="Build a strong professional network by connecting with mentors and fellow mentees from diverse backgrounds. Expand your horizons, collaborate, and open doors to new opportunities."
        />

        <ServiceContainer
          title="Skills development"
          icon={<GoalIcon />}
          imgSrc={`${CDN_URL}/images/nzmhqmjh7tcn29nulymm.png`}
          description="Elevate your technical skills through hands-on projects and expert guidance. Stay updated with the latest advancements in your field and build a strong foundation for continuous learning."
        />
      </div>

      {shouldShowReivews && (
        <div className="mt-24 hidden justify-center lg:flex">
          <Button hasAnimaion>{buttonLabel}</Button>
        </div>
      )}
    </div>
  );
};

export default MentoredDifferenceSection;
