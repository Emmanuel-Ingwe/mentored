import { LongDashArrow } from '@/shared/components/Icons/LongDashArrow';
import { MessageChatCircle } from '@/shared/components/Icons/MessageChatCircle';
import { Users } from '@/shared/components/Icons/Users';
import { UsersCheck } from '@/shared/components/Icons/UsersCheck';
import { SectionHeader } from '@/shared/components/SectionHeader';
import { HowItWorksCard } from '../HowItWorksCard';

export const HowItWorksSection = () => {
  return (
    <div className="px-4 py-16 text-gray-900 lg:px-28 lg:py-24">
      <SectionHeader
        subHeader={' Your mentorship journey, simplified in three easy steps'}
      >
        How It Works
      </SectionHeader>

      <div className="mt-16 flex flex-col items-center justify-center gap-y-16 lg:flex-row">
        <HowItWorksCard
          Icon={Users}
          title={'Browse mentors'}
          description={
            'Explore mentor profiles, read reviews, and filter by category or expertise.'
          }
        />
        <LongDashArrow className="hidden self-start lg:block" />
        <HowItWorksCard
          Icon={UsersCheck}
          title={'Choose your mentor'}
          description={
            'Select the mentor whose background aligns with your goals and aspirations.'
          }
        />
        <LongDashArrow className="mb-4 hidden -scale-y-100 self-center lg:block" />
        <HowItWorksCard
          Icon={MessageChatCircle}
          title={'Book a session'}
          description={
            'Schedule a session with your mentor and start your mentorship journey.'
          }
        />
      </div>
    </div>
  );
};
