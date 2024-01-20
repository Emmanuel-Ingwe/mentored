import { AuthStepEnum } from '@/app/(auth)/shared/context/AuthStepsEnum';
import { cn } from '@/shared/lib/utils';
import type { Steps } from '../../types';

type Props = {
  steps: Steps;
};

function DotProgress({ steps }: Props) {
  return (
    <div className="mt-8 flex justify-center space-x-4 md:hidden">
      <div
        className={cn(
          'h-2.5 w-2.5 rounded-full',
          steps[AuthStepEnum.ONBOARDINGSTEPONE].active ||
            steps[AuthStepEnum.ONBOARDINGSTEPONE].completed
            ? 'bg-primary'
            : 'bg-gray-100',
        )}
      />
      <div
        className={cn(
          'h-2.5 w-2.5 rounded-full',
          steps[AuthStepEnum.ONBOARDINGSTEPTWO].active ||
            steps[AuthStepEnum.ONBOARDINGSTEPTWO].completed
            ? 'bg-primary'
            : 'bg-gray-100',
        )}
      />
      <div
        className={cn(
          'h-2.5 w-2.5 rounded-full',
          steps[AuthStepEnum.ONBOARDINGSTEPTHREE].active ||
            steps[AuthStepEnum.ONBOARDINGSTEPTHREE].completed
            ? 'bg-primary'
            : 'bg-gray-100',
        )}
      />
    </div>
  );
}

export default DotProgress;
