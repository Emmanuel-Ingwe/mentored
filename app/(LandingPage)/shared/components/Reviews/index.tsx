'use client';

import Image from 'next/image';
import { shouldShowFeature } from '@/app/(LandingPage)/hooks/featureFlags';
import type { ReviewType } from '@/app/(LandingPage)/shared/types/type';
import { cn } from '@/shared/lib/utils';
import { ButtonNavigation } from './ButtonNavigation';
import { DotNavigation } from './DotNavigation';
import { useReviewsCarousel } from '../../hooks/useReviewsCarousel';
import { Rating } from '../Rating';
import { VideoPlayer } from '../VideoPlayer/VideoPlayer';

type Props = {
  reviews: ReviewType[];
  showButton?: boolean;
  autoPlay?: boolean;
  className?: string;
};

const Reviews = ({ reviews, showButton, autoPlay, className }: Props) => {
  const {
    emblaRef,
    emblaRef2,
    prevBtnDisabled,
    nextBtnDisabled,
    scrollPrev,
    scrollNext,
    scrollTo,
    selectedIndex,
    scrollSnaps,
  } = useReviewsCarousel(autoPlay);
  const shouldShowReivews = shouldShowFeature('reviews');
  if (!shouldShowReivews) {
    return null;
  }

  return (
    <section className={cn('relative', className)}>
      <div className="relative flex w-full flex-col lg:flex-row">
        <div className="bg-gradient-to-r from-primaryx-800 to-primaryx-600 px-6 py-10 max-lg:rounded-t-3xl lg:w-[60%] lg:rounded-l-3xl lg:p-16">
          <div className="embla__view_port overflow-hidden" ref={emblaRef}>
            <div className="embla_container flex">
              {reviews.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="slides min-w-0 max-w-full flex-[0_0_auto]"
                  >
                    <Rating rating={item.rating} />
                    <h1 className=";g:leading-[2.75rem mt-6 text-2xl font-medium leading-8 text-white lg:text-4xl">
                      {item.description}
                    </h1>
                    <p className="relative mt-8 pl-7 text-lg font-semibold text-white before:absolute before:left-0 before:top-2/4 before:h-[2px] before:w-5 before:-translate-y-2/4 before:bg-white">
                      {item.name}
                    </p>
                    <p className="text-white">{item.position}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <DotNavigation
            scrollSnaps={scrollSnaps}
            selectedIndex={selectedIndex}
            scrollTo={scrollTo}
          />
        </div>

        <div
          className="viewpoint overflow-hidden max-lg:rounded-b-3xl lg:w-auto lg:rounded-r-3xl"
          ref={emblaRef2}
        >
          <div className="flex h-full w-full">
            {reviews.map((item) => {
              return (
                <div
                  key={item.id}
                  className="relative min-w-0 max-w-full flex-[0_0_auto]"
                >
                  {item.mediaType === 'video' && (
                    <VideoPlayer
                      videoUrl={item.media as string}
                      poster="/images/man-smiling.jpeg"
                      key={item.id}
                    />
                  )}

                  {item.mediaType === 'image' && (
                    <Image
                      src={item.media}
                      key={item.id}
                      alt="testimonial img"
                      className="h-[280px] object-cover lg:h-full"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {showButton && (
          <ButtonNavigation
            nextBtnDisabled={nextBtnDisabled}
            prevBtnDisabled={prevBtnDisabled}
            scrollNext={scrollNext}
            scrollPrev={scrollPrev}
          />
        )}
      </div>
    </section>
  );
};
export default Reviews;
