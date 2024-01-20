import React from 'react';
import type { FC } from 'react';
import Image from 'next/image';
import { CheckedIcon } from '@/shared/components/Icons/group-icons';
import { CDN_URL } from '@/shared/lib/constants';
import { cn } from '@/shared/lib/utils';
import { FeaturesText } from '../../../shared/components/FeatureText';
import { IconTextContainer } from '../../../shared/components/IconTextContainer';

type Props = {
  title: string;
  description: string;
  text: string[];
  icon: React.ReactNode;
  src: string;
  className?: string;
  reversed?: boolean;
};
const MentoredGoals: FC<Props> = ({
  title,
  text,
  description,
  icon,
  src,
  className,
  reversed,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-between gap-10 lg:h-[35rem] lg:flex-row lg:gap-16',
        className,
      )}
    >
      <div
        className={cn('space-y-4 lg:mx-8', reversed ? 'lg:pr-28' : 'lg:pl-28')}
      >
        <FeaturesText title={title} icon={icon} description={description} />
        {text.map((item) => {
          return (
            <div className="flex flex-col lg:mb-2 lg:ml-4" key={item}>
              <IconTextContainer icon={<CheckedIcon />} text={item} />
            </div>
          );
        })}
      </div>

      <div className="relative mt-4 flex h-[15rem] w-full lg:mt-0 lg:h-[35rem] lg:w-[45rem]">
        <Image
          src={`${CDN_URL}/images/${src}`}
          alt="featured mentored"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default MentoredGoals;
