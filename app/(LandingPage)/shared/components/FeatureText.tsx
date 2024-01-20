'use client';
import type { FC } from 'react';

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
};
export const FeaturesText: FC<Props> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col space-y-6 overflow-hidden md:w-[475px] lg:w-[586px]">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primaryx-50">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primaryx-100 text-primaryx">
          {icon}
        </div>
      </div>
      <div className="flex flex-col items-start space-y-6">
        <h3 className="text-xl font-semibold text-gray-900 lg:text-3xl">
          {title}
        </h3>
        <p className="text-sm font-normal text-gray-600 lg:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};
