/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { useAuthContext } from '@/app/(auth)/shared/context/useAuthContext';
import { Logo } from '@/shared/components/Logo';
import { HandDrawnArrow } from '@/shared/components/Svgs/Hand-drawn arrow';
import { cn } from '@/shared/lib/utils';
import { ProgressSteps } from '../ProgressSteps';
import { SkipOnboarding } from '../SkipOnboarding';

type Props = {
  children: React.ReactNode;
  skip?: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
};

export const Base = ({ children, title, className, subtitle }: Props) => {
  const { currentStep } = useAuthContext();

  return (
    <div
      className={cn(
        'relative px-4 py-8 lg:px-[22.5%] lg:py-[4.9rem]',
        className,
      )}
    >
      <div className="lg:mb-20">
        <Logo />
        <h1 className="mt-6 text-2xl font-semibold text-gray-900 lg:text-3xl">
          {title}
        </h1>
        {subtitle && <p className="mt-2 text-gray-600 lg:mt-3">{subtitle}</p>}
        <div className="mt-8">{children}</div>
      </div>

      {currentStep > 1 && currentStep < 4 && <SkipOnboarding />}
      {currentStep > 1 && <ProgressSteps />}
      {currentStep < 1 && (
        <HandDrawnArrow className="fixed left-2/4 top-[75vh] z-50 hidden -translate-x-2/4 lg:block" />
      )}
    </div>
  );
};
