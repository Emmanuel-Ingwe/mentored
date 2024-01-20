'use client';
import { useState } from 'react';
import { FilterPanel } from '@/app/(LandingPage)/find-a-mentor/[slug]/components/FilterPanel';
import { SortPanel } from '@/app/(LandingPage)/find-a-mentor/[slug]/components/SortPanel';
import { useSearchMentorSection } from '@/app/(LandingPage)/find-a-mentor/[slug]/hooks/useSearchMentorSection';
import { FilterLabelsGroup } from '@/app/(LandingPage)/shared/components/FilterLabelsGroup';
import { SearchInput } from '@/app/(LandingPage)/shared/components/SearchInput';
import SearchFilterNotFound from '@/app/shared/NotFound';
import MentorCard from '@/shared/components/card/MentorCard';
import { Button } from '@/shared/components/ui/button';
import { Skeleton } from '@/shared/components/ui/skeleton';
import Header from '../../../shared/components/header';

const AllMentorsSection = () => {
  const { filteredData, handleSearch, NoResultFound, isLoading } =
    useSearchMentorSection();

  const [endIndex, setEndIndex] = useState(8);
  return (
    <>
      <Header />
      <div className="flex items-center justify-center lg:max-w-6xl 2xl:ml-16 2xl:w-full">
        <div className="pb-8 pt-4">
          <div className="mt-16 flex w-full flex-col items-center justify-between gap-y-4 lg:flex-row">
            <SearchInput
              placeholder="Search mentors by name, company, or role"
              className="h-10 w-[25rem] lg:h-11"
              onChange={handleSearch}
            />
            <div className="mr-4 flex w-1/3 items-center justify-center gap-3 text-gray-700  max-lg:w-full xl:px-0">
              <SortPanel />
              <FilterPanel />
            </div>
          </div>
          <div className=" lg:max-w-[1050px] 2xl:w-full">
            <FilterLabelsGroup id="" />
          </div>
          <div className="flex flex-row flex-wrap justify-start">
            {filteredData.length > 0 &&
              filteredData.slice(0, endIndex).map((mentor) => {
                return (
                  <div key={mentor._id} className="mb-6 mr-4">
                    <MentorCard
                      src={mentor.profilePicture ?? ''}
                      name={mentor.firstName + ' ' + mentor.lastName}
                      company={mentor.industry ?? ''}
                      role={mentor.jobTitle ?? ''}
                      imgageWidth={210}
                      imageClassName="rounded-lg h-[200px]"
                      experience={mentor.yearsOfExperience}
                      className="mb-6 min-h-[432px] max-w-[252px] items-center justify-center"
                      _id={mentor._id}
                      href={`/dashboard/find-a-mentor/${mentor._id}`}
                      showApplyButton
                    />
                  </div>
                );
              })}
          </div>
          {
            <div>
              {isLoading &&
                Array.from({ length: 4 }, (_, index) => {
                  return (
                    <div key={index} className="space-y-8">
                      <Skeleton className="h-14rem" />
                      <div className="space-y-4">
                        <Skeleton className="h-6 w-2/3" />
                        <Skeleton className="h-6 w-3/4" />
                      </div>
                    </div>
                  );
                })}
            </div>
          }
          <SearchFilterNotFound
            error={NoResultFound && filteredData.length < 1}
          />
          {!NoResultFound && filteredData.length > 1 && (
            <div className="flex justify-center">
              <Button
                onClick={() => {
                  return setEndIndex((prev) => {
                    return prev + 4;
                  });
                }}
              >
                Load more mentors
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AllMentorsSection;
