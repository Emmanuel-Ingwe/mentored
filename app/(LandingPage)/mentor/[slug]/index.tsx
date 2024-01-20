'use client';
import { HeroSection } from './components/HeroSection';
import { MainSection } from './components/MainSection';

const Mentor = async () => {
  return (
    <div className="mt-8 px-4 lg:mt-16 lg:px-28">
      <HeroSection />
      <MainSection />
    </div>
  );
};
export default Mentor;
