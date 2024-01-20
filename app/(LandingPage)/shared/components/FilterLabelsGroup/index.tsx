'use client';

import { ChevronRightIcon } from '@radix-ui/react-icons';
import { useFilterLabelsGroup } from '@/app/(LandingPage)/find-a-mentor/[slug]/hooks/useFilterLabelsGroup';
import { useTopMentors } from '@/app/(LandingPage)/hooks/useTopMentors';
import { Button } from '@/shared/components/ui/button';
import { Toggle } from '@/shared/components/ui/toggle';

export const FilterLabelsGroup = ({ id }: { id: string }) => {
  const { emblaRef, scrollNext } = useFilterLabelsGroup();
  const { filterLabels, handleLabelToggled } = useTopMentors();
  return (
    <div className="my-8 flex w-full items-center justify-between gap-2 lg:gap-8">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex items-center gap-1">
          {filterLabels?.map((label) => {
            return (
              <Toggle
                key={label.id}
                id={label.id}
                variant={label.variant}
                className="flex h-7 w-full items-center whitespace-nowrap border-[1.5px] px-3 text-sm font-medium"
                pressed={label.checked}
                onClick={() => {
                  return handleLabelToggled(label.jobTitle ?? '', id);
                }}
              >
                {label.jobTitle}
              </Toggle>
            );
          })}
        </div>
      </div>
      <div>
        <Button
          variant="outline"
          className="h-7 w-7 rounded-full border-primaryx text-primaryx"
          size="icon"
          onClick={scrollNext}
        >
          <ChevronRightIcon className="h-4 w-4 text-sm" />
        </Button>
      </div>
    </div>
  );
};
