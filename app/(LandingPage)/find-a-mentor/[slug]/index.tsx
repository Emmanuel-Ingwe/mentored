import { HowItWorksSection } from './components/HowItWorksSection';
import { MenteesStoriesSection } from './components/MenteesStoriesSection';
import { SearchMentorSection } from './components/SearchMentorSection';
import { FAQsSection } from '../../shared/components/FAQsSection';

export const FindAMentor = () => {
  return (
    <div>
      <SearchMentorSection />
      <HowItWorksSection />
      <MenteesStoriesSection />
      <FAQsSection className="lg:py-24" />
    </div>
  );
};
