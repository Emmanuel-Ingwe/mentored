'use client';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { FilterLabelsGroup } from '@/app/(LandingPage)/shared/components/FilterLabelsGroup';
import Lazyload from '@/app/shared/Hydrate/Lazyload';
import MentorCard from '@/shared/components/card/MentorCard';
import { ArrowLeft } from '@/shared/components/Icons/ArrowLeft';
import { ArrowRight } from '@/shared/components/Icons/ArrowRight';
import { Button } from '@/shared/components/ui/button';
import { Skeleton } from '@/shared/components/ui/skeleton';
import { useTopMentors } from '../../../hooks/useTopMentors';

const TopMentors = () => {
  const [emblaRef2, emblaApi2] = useEmblaCarousel();
  const { topMentors, isLoading } = useTopMentors();

  const scrollNext2 = useCallback(() => {
    if (emblaApi2) emblaApi2.scrollNext();
  }, [emblaApi2]);

  const scrollPrev2 = useCallback(() => {
    if (emblaApi2) emblaApi2.scrollPrev();
  }, [emblaApi2]);
  const skeleton = <Skeleton />;

  return (
    <Lazyload placeholder={skeleton}>
      <div className="bg-gray-50 px-4 py-16 lg:px-28 lg:py-24">
        <div className="flex items-start justify-between">
          <div className="space-y-4 lg:space-y-5">
            <h3 className="text-3xl font-semibold text-gray-900 lg:text-4xl">
              Explore top mentors worldwide
            </h3>
            <p className="text-lg text-gray-600 lg:text-xl">
              Search for mentors based on skills, industry, location, and more
            </p>
          </div>
        </div>
        <FilterLabelsGroup id={'topMember'} />
        <div>
          {isLoading &&
            new Array(4).fill(0).map((_, index) => {
              return (
                <div key={index} className="space-y-8">
                  <Skeleton className="h-[14rem]" key={index} />
                  <div className="space-y-4">
                    <Skeleton className="h-6 w-2/3" />
                    <Skeleton className="h-6 w-3/4" />
                  </div>
                </div>
              );
            })}
          <div ref={emblaRef2} className="overflow-hidden">
            <div className="flex max-w-full items-center px-4">
              {topMentors?.map((mentor, index) => {
                if (!mentor.profilePicture) {
                  return null;
                }
                return (
                  <div
                    className="flex flex-[0_0_18rem] flex-wrap items-center justify-center"
                    key={index}
                  >
                    <MentorCard
                      src={mentor.profilePicture ?? ''}
                      name={`${mentor.firstName}  ${mentor.lastName}`}
                      company={mentor.industry ?? ''}
                      role={mentor.jobTitle ?? ''}
                      experience={mentor.yearsOfExperience}
                      className="max-h-[29rem]"
                      _id={mentor._id}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-8 flex items-center gap-4 lg:gap-8">
            <Button
              className="group h-12 w-12 rounded-full border border-gray-200 bg-white lg:h-14 lg:w-14"
              onClick={scrollPrev2}
            >
              <ArrowLeft className="h-6 w-6 group-hover:stroke-white" />
            </Button>
            <Button
              className="group h-12 w-12 rounded-full border border-gray-200 bg-white lg:h-14 lg:w-14"
              onClick={scrollNext2}
            >
              <ArrowRight className="h-6 w-6 stroke-gray-500 group-hover:stroke-white" />
            </Button>
          </div>
          <Link
            href="/find-a-mentor"
            className="mt-8 flex justify-center lg:hidden"
          >
            <Button>Explore all mentors</Button>
          </Link>
        </div>
      </div>
    </Lazyload>
  );
};

export default TopMentors;
