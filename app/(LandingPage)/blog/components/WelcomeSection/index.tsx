import React from 'react';
import { SearchMenu } from '@/app/(LandingPage)/blog/components/SearchMenu';

export const WelcomeSection = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="py-6 text-center text-5xl font-medium text-gray-800 max-lg:mt-10 lg:py-20 lg:text-[6.25rem]">
        Welcome To Our Blog
      </h1>
      <div className="h-[1px] w-full bg-gray-400" />
      <div className="mb-16 mt-8 flex w-full items-center justify-center lg:mb-[2.94rem] lg:mt-[6.25rem]">
        <SearchMenu />
      </div>
    </div>
  );
};
