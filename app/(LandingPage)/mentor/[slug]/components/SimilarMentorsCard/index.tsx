import { useParams } from 'next/navigation';
import { useFindAMentorContext } from '@/app/(LandingPage)/find-a-mentor/[slug]/context/useFindAMentorContext';
import MentorCard from '@/shared/components/card/MentorCard';
import { OverviewCardWrapper } from '../OverviewCardWrapper';

export const SimilarMentorsCard = () => {
  const { mentorsData } = useFindAMentorContext();
  const currentMentorId = useParams().slug;

  return (
    <OverviewCardWrapper title="Similar Mentors">
      <div className="grid gap-4 lg:grid-cols-2">
        {mentorsData
          .filter((mentor) => {
            return mentor._id !== currentMentorId;
          })
          .slice(0, 2)
          .map((mentor) => {
            if (!mentor.profilePicture) {
              return null;
            }
            return (
              <MentorCard
                _id={mentor._id}
                key={mentor._id}
                src={mentor.profilePicture ?? ''}
                name={mentor.firstName + ' ' + mentor.lastName}
                role={mentor.jobTitle ?? ''}
                company={mentor.industry ?? ''}
                experience={mentor.yearsOfExperience}
                className="h-[24rem] rounded-lg border border-polar-100"
                imageClassName="rounded-lg h-[160px]"
              />
            );
          })}
      </div>
    </OverviewCardWrapper>
  );
};
