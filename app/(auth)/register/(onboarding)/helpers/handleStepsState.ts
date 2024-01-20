import type { Dispatch, SetStateAction } from 'react';
import type { Step, Steps } from '@/app/(auth)/shared/types';

export const handleStepsState = (
  setSteps: Dispatch<SetStateAction<Steps>>,
  currentStep: Step,
  isDataEmpty?: boolean,
) => {
  setSteps((prev) => {
    return {
      ...prev,
      [currentStep]: {
        active: false,
        completed: !isDataEmpty,
      },
      [currentStep + 1]: {
        active: true,
        completed: false,
      },
    };
  });
};
