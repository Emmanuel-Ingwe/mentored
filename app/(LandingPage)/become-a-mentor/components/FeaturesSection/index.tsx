import ChatIconLarge from '@/shared/components/Icons/ChatIconLarge';
import {
  LigthningIcon,
  ProfilePlusIcon,
} from '@/shared/components/Icons/group-icons';
import FeaturedCards from '../FeaturedCards';

export const FeaturesSection = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 px-4 py-16 lg:flex-row lg:px-28 lg:py-24">
      <FeaturedCards
        title="Share your wisdom"
        highlight="Guide and mentor aspiring tech professionals with your valuable insights and real-world experience"
        icon={<ChatIconLarge />}
      />
      <FeaturedCards
        title="Expand Your Network:"
        highlight="Connect with fellow mentors and industry experts, fostering meaningful relationships."
        icon={<ProfilePlusIcon />}
      />
      <FeaturedCards
        title="Boost Your Skills"
        highlight="Sharpen your leadership, communication, and mentoring abilities through diverse interactions"
        icon={<LigthningIcon />}
      />
    </div>
  );
};
