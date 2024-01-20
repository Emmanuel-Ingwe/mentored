'use client';

import { useState } from 'react';
import { FilterLabelsGroup } from '@/app/(LandingPage)/shared/components/FilterLabelsGroup';
import { SearchInput } from '@/app/(LandingPage)/shared/components/SearchInput';
import SearchFilterNotFound from '@/app/shared/NotFound';
import MentorCard from '@/shared/components/card/MentorCard';
import { Button } from '@/shared/components/ui/button';
import { Skeleton } from '@/shared/components/ui/skeleton';
import { useSearchMentorSection } from '../../hooks/useSearchMentorSection';
import { FilterPanel } from '../FilterPanel';
import { SortPanel } from '../SortPanel';

export const SearchMentorSection = () => {
  const { filteredData, handleSearch, NoResultFound, isLoading } =
    useSearchMentorSection();

  const [endIndex, setEndIndex] = useState(8);

  return (
    <div className="bg-slate-50 px-4 pb-8 pt-8 lg:px-20">
      <div className="mt-16 flex flex-col items-center justify-between gap-y-4 lg:flex-row">
        <SearchInput
          placeholder="Search mentors by name, company, or role"
          className="h-10 w-[25rem] lg:h-11"
          onChange={handleSearch}
        />

        <div className="flex items-center gap-3 text-gray-700 max-lg:w-full">
          <SortPanel />
          <FilterPanel />
        </div>
      </div>
      <FilterLabelsGroup id="allMentors" />

      <div className="grid gap-8 pb-16 lg:grid-cols-4">
        {filteredData.length > 0 &&
          filteredData.slice(0, endIndex).map((mentor) => {
            if (!mentor.profilePicture) {
              return null;
            }
            return (
              <MentorCard
                src={mentor.profilePicture ?? ''}
                name={mentor.firstName + ' ' + mentor.lastName}
                company={mentor.industry ?? ''}
                role={mentor.jobTitle ?? ''}
                key={mentor._id}
                imgageWidth={210}
                imageClassName="rounded-lg h-[200px]"
                experience={mentor.yearsOfExperience}
                className="mb-6 min-h-[26rem] max-w-[252px] items-center justify-center"
                _id={mentor._id}
              />
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
      <SearchFilterNotFound error={NoResultFound && filteredData.length < 1} />
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
  );
};
