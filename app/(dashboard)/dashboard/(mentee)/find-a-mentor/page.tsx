import FindAMentorProvider from '@/app/(LandingPage)/find-a-mentor/[slug]/context/FindAMentorProvider';
import AllMentorsSection from './components/AllMentorsSection';

export default function FindMentor() {
  return (
    <div className="w-full">
      <FindAMentorProvider>
        <AllMentorsSection />
      </FindAMentorProvider>
    </div>
  );
}
