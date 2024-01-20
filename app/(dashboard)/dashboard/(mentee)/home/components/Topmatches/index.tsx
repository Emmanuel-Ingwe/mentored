import MentorCard from '@/shared/components/card/MentorCard';
import { Button } from '@/shared/components/ui/button';
import { Skeleton } from '@/shared/components/ui/skeleton';
import useTopmatches from './useTopmatches';

const Topmatches = () => {
  const { data, isLoading, showAllTopMatches, topMatchesShown } =
    useTopmatches();

  if (isLoading) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-14rem" />
        <div className="flex-row justify-center space-x-6 lg:flex">
          <Skeleton className="h-[366px] w-[242px]" />
          <Skeleton className="h-[366px] w-[242px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-6">
      <div className="flex justify-between border-b border-gray-200">
        <p className="text-lg font-semibold text-gray-900">Your top matches</p>
        <Button
          onClick={showAllTopMatches}
          className="items-start bg-transparent pt-0 text-sm font-semibold text-blue-900 hover:bg-transparent"
        >
          {topMatchesShown ? 'Show less' : 'Show all'}
        </Button>
      </div>

      <div className="flex h-[466px] flex-row flex-wrap justify-start overflow-auto">
        {data?.map((mentor) => {
          return (
            <div key={mentor._id} className="mb-6 mr-4">
              <MentorCard
                key={mentor._id}
                src={mentor.profilePicture ?? ''}
                imgageWidth={210}
                imageClassName="rounded-lg h-[200px]"
                name={`${mentor.firstName}  ${mentor.lastName}`}
                company={mentor.industry ?? ''}
                role={mentor.jobTitle ?? ''}
                experience={mentor.yearsOfExperience}
                _id={mentor._id}
                className="mb-6 h-[366px] max-w-[252px] items-center justify-center"
                showExperienceField={false}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Topmatches;
