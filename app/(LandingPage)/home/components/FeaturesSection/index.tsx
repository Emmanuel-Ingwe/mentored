'use client';
import Image from 'next/image';
import Lazyload from '@/app/shared/Hydrate/Lazyload';
import { FeaturesDescription } from './FeaturesDescription';
import { useFeatureSection } from './useFeatureSection';

const FeaturesSection = () => {
  const { featureData, handleFeatureClick, featureImg, onHover } =
    useFeatureSection();
  return (
    <Lazyload>
      <section className="pb-16 lg:py-24">
        <div className="space-y-4 lg:w-[768px] lg:space-y-8">
          <h3 className="text-3xl font-semibold text-gray-900 lg:text-4xl">
            Features
          </h3>
          <p className="text-lg text-gray-600 lg:text-xl">
            Achieve More with Guided Tasks, Insightful Reviews, and Goal
            Achievement features on MentorsHub.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-start justify-start gap-y-12 lg:mt-16 lg:h-fit xl:flex-row xl:items-center">
          <div className="xl:w-1/2">
            {featureData.map(
              ({ featureTitle, featureDescription, isActive }, index) => {
                return (
                  <FeaturesDescription
                    key={featureTitle}
                    idx={index}
                    featureTitle={featureTitle}
                    onHover={onHover}
                    featureDescription={featureDescription}
                    isActive={isActive}
                    onClick={handleFeatureClick}
                  />
                );
              },
            )}
          </div>
          {/* h-[14.25rem] */}
          <div className="flex h-full w-full items-center justify-start bg-gray-100 lg:p-12 xl:w-1/2 xl:pl-12">
            <div className="h-fit w-full rounded-lg border-4 border-gray-900 bg-white text-black lg:h-[80%] xl:rounded-r-none xl:border-r-0">
              <Image src={featureImg} alt="feature" width={800} height={1200} />
            </div>
          </div>
        </div>
      </section>
    </Lazyload>
  );
};

export default FeaturesSection;
