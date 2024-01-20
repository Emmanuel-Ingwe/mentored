import Image from 'next/image';
import { VerifiedTick } from '@/shared/components/Icons/VerifiedTick';
import { Button } from '@/shared/components/ui/button';
import { Skeleton } from '@/shared/components/ui/skeleton';
import { CDN_URL } from '@/shared/lib/constants';
import { useMentor } from '../../hooks/useMentor';
import { ApplyConfirmDialog } from '../ApplyConfirmDialog';

export const HeroSection = () => {
  const { mentor, isLoading } = useMentor();
  if (isLoading) {
    return (
      <div className="space-y-8">
        <Skeleton className="h-14rem" />
        <div className="flex-row justify-center space-x-6 lg:flex">
          <Skeleton className="h-14rem" />
          <Skeleton className="h-14rem" />
          <Skeleton className="h-14rem" />
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="relative h-[124px] lg:h-[15rem]">
        <Image
          src={`${CDN_URL}/images/banner_p3jdua.png`}
          alt="banner image"
          className="z-10 object-cover"
          fill
        />
        <div className="absolute left-4 top-[95px] z-10 h-[81.25px] w-[81.25px] lg:left-16 lg:top-[194px] lg:h-[160px] lg:w-[160px]">
          <Image
            src={
              mentor?.profilePicture || `${CDN_URL}/images/banner_p3jdua.png`
            }
            alt="mentor image"
            fill
            className="rounded-full border-[4px] border-white bg-gray-300 object-cover"
          />
          {mentor && (
            <VerifiedTick className="absolute left-[55px] max-lg:bottom-[3px] max-lg:h-4 max-lg:w-4 lg:left-[118px] lg:top-[118px]" />
          )}
        </div>
      </div>
      <div className="relative mt-[3.8rem] flex items-center justify-between bg-gray-25 px-4 lg:mt-6 lg:flex-row lg:pl-[15.5rem] lg:pr-16">
        <div className="flex items-center gap-6">
          <div className="">
            <h3 className="text-xl font-semibold text-gray-900 lg:text-3xl">
              {mentor?.firstName + ' ' + mentor?.lastName}
            </h3>
            <p className="text-sm text-gray-600 lg:text-base">
              {`${mentor?.jobTitle} at ${mentor?.industry}`}
            </p>
          </div>
        </div>

        {mentor && (
          <ApplyConfirmDialog
            trigger={
              <Button className="-top-[42px] right-0 max-lg:absolute max-lg:h-9 max-lg:text-sm">
                Apply to be mentored
              </Button>
            }
          />
        )}
      </div>
    </div>
  );
};
