import ChatIconLarge from '@/shared/components/Icons/ChatIconLarge';
import { ZapFastIcon } from '@/shared/components/Icons/group-icons';
import { SectionHeader } from '@/shared/components/SectionHeader';
import MentoredGoals from '../MentoredGoals';

const WhyMentorsSection = () => {
  return (
    <div className="bg-light-gray-50 px-4 py-16 lg:px-0 lg:py-24">
      <SectionHeader subHeader="Discover the Guiding Principles That Inspire Mentorship on MentorsHub.">
        Why Mentors love <span className="text-primaryx">MentorsHub</span>
      </SectionHeader>

      <div className="mt-24 space-y-12 lg:space-y-24">
        <MentoredGoals
          title="Dedication to Growth"
          icon={<ChatIconLarge />}
          description="We are committed to fostering an environment of continuous learning and development for Mentors."
          text={[
            'Continuous learning',
            'Personal Growth as a mentor and industry expert.',
            'Professional development',
          ]}
          src="mentored-feature.jpg"
        />
        <MentoredGoals
          title="Mentor Empowerment"
          className="lg:flex-row-reverse"
          icon={<ZapFastIcon />}
          reversed
          description="We empower mentors with the tools and support needed to make a real difference."
          text={[
            'Supportive community',
            'Recognition of mentors.',
            'User-friendly mentorship platform ',
          ]}
          src="mentored-feature-1.jpg"
        />
      </div>
    </div>
  );
};
export default WhyMentorsSection;
