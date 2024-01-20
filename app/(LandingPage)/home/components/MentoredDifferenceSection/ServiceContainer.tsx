import React, { useRef } from 'react';
import type { FC } from 'react';
import { useInView } from 'framer-motion';
import { FeaturesText } from '@/app/(LandingPage)/shared/components/FeatureText';
import { LinesPattern } from '@/shared/components/Icons/LinesPattern';
import { ImgComp } from '@/shared/components/ImgComp';
import { cn } from '@/shared/lib/utils';

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
  imgSrc: string;
};

const ServiceContainer: FC<Props> = ({ icon, title, description, imgSrc }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'none' : 'translateX(-100px)',
        transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s',
      }}
      className={cn(
        'group flex w-full flex-col items-center justify-between gap-8 lg:gap-24 xl:flex-row xl:even:flex-row-reverse',
      )}
    >
      <FeaturesText title={title} icon={icon} description={description} />
      <div
        className={cn(
          'relative flex justify-end group-odd:lg:ml-12 group-even:lg:mr-12',
        )}
      >
        <div className="rounded-md border border-transparent bg-gray-100 p-3 md:p-6 lg:rounded-2xl lg:p-10">
          <div className="relative h-[228px] w-[342px] rounded-2xl border-4 border-black lg:h-[20rem] lg:w-[30rem]">
            <ImgComp
              src={imgSrc}
              alt="rich features"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>
        <LinesPattern className="absolute -right-24 top-[5.5rem] -z-10 hidden group-even:-left-24 lg:block" />
      </div>
    </div>
  );
};

export default ServiceContainer;
