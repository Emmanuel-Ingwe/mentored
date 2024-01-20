import useDeviceType from '@/shared/hooks/useDeviceType';
import { useMentor } from '../../hooks/useMentor';
import { AboutCard } from '../AboutCard';
import { AvailabilityCard } from '../AvailabilityCard';
import { GetToKnowCard } from '../GetToKnowCard';
import { ProfileSummaryCard } from '../ProfileSummaryCard';
import { SimilarMentorsCard } from '../SimilarMentorsCard';
import { SkillsCard } from '../SkillsCard';

export const OverviewContent = () => {
  const { mentor } = useMentor();
  const { isMobile } = useDeviceType();
  const isProduction = process.env.NODE_ENV === 'production';

  return (
    <div className="w-ful mt-8 flex flex-col gap-4 lg:flex-row lg:gap-12">
      <div className="space-y-4 lg:w-[65%] lg:space-y-8">
        <ProfileSummaryCard
          summary={mentor?.careerSummary || ''}
          commitment={'2 hours weekly'}
          completedSessions={0}
          location={mentor?.country || ''}
        />
        <SkillsCard skills={mentor?.stack || []} />
        <AboutCard about={mentor?.careerSummary || ''} />
        {!isProduction && <GetToKnowCard name={mentor?.firstName || ''} />}
        {isMobile && <AvailabilityCard />}
        <SimilarMentorsCard />
      </div>
      {!isMobile && (
        <div className="lg:w-[35%]">
          <AvailabilityCard />
        </div>
      )}
    </div>
  );
};
