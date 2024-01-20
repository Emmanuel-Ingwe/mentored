import Companies from './components/Companies';
import FeaturesSection from './components/FeaturesSection';
import HeroSection from './components/HeroSection';
import MentoredDifferenceSection from './components/MentoredDifferenceSection';
import TopMentors from './components/TopMentors';
import CTASection from '../shared/components/CTASection';
import Reviews from '../shared/components/Reviews';
import { testimonials } from '../shared/contents';

const LandingPage = () => {
  return (
    <>
      <div className="px-4 lg:px-28">
        <HeroSection />
        <Companies />
        <FeaturesSection />
      </div>
      <TopMentors />
      <MentoredDifferenceSection />
      <Reviews
        reviews={testimonials}
        className="px-4 pb-16 lg:px-28 lg:py-24"
        autoPlay
      />
      <CTASection
        mainText={
          <>
            Ready to grow with us? Join{' '}
            <span className="text-primaryx">MentorsHub</span> today!
          </>
        }
        subText="Explore our 10000+ mentors worldwide to help you achieve your career goals in tech"
      />
    </>
  );
};

export default LandingPage;
