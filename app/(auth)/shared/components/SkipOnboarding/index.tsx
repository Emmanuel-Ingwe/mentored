import { useEffect, useState } from 'react';
import { useAuthContext } from '@/app/(auth)/shared/context/useAuthContext';
import { CloseIcon } from '@/shared/components/Icons/CloseIcon';
import { cn } from '@/shared/lib/utils';

export const SkipOnboarding = () => {
  const [rendered, setRendered] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const { currentStep, setCurrentStep, setSteps } = useAuthContext();

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSkip = () => {
    setCurrentStep(currentStep + 1);
    setSteps((prev) => {
      return {
        ...prev,
        [currentStep]: {
          active: false,
          completed: false,
          skipped: true,
        },
        [currentStep + 1]: {
          active: true,
          completed: false,
        },
      };
    });
  };

  useEffect(() => {
    const delay = 2000;
    const timeoutId = setTimeout(() => {
      setRendered(true);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  if (!rendered) {
    return null;
  }

  return (
    <div className={cn('flex justify-end', !isOpen && 'max-lg:hidden')}>
      <div
        className="bottom-0 left-[28%] z-[100] flex w-[16.75rem] justify-between rounded-xl border border-gray-100 bg-white p-4 text-xs leading-6 text-gray-600 shadow-lg transition-all data-[open=false]:translate-x-[150%] data-[open=false]:animate-out data-[open=false]:fade-out-80 data-[open=false]:slide-out-to-right max-lg:mt-8 lg:fixed lg:-translate-y-[100%] lg:data-[open=false]:translate-y-[100%] lg:data-[open=false]:slide-out-to-bottom"
        data-open={isOpen}
      >
        <p>
          <button
            className="inline underline hover:text-primaryx-400"
            onClick={handleSkip}
          >
            Skip this step{' '}
          </button>{' '}
          for now, you can <br /> always come back to it later.
        </p>
        <button className="self-start" onClick={toggleOpen}>
          <CloseIcon
            width="20"
            height="20"
            viewBox="0 0 20 20"
            d="M15 5L5 15M5 5L15 15"
            className="stroke-[1.7px]"
          />
        </button>
      </div>
    </div>
  );
};
