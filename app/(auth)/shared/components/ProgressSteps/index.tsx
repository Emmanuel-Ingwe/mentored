import { useAuthContext } from '@/app/(auth)/shared/context/useAuthContext';
import useDeviceType from '@/shared/hooks/useDeviceType';
import { ProgressLine } from './ProgressLine';
import { StepBase } from './StepBase';
import { AuthStepEnum } from '../../context/AuthStepsEnum';
import DotProgress from '../DotProgress';

export const ProgressSteps = () => {
  const { isMobile } = useDeviceType();
  const { steps } = useAuthContext();

  if (isMobile) {
    return <DotProgress steps={steps} />;
  }

  return (
    <div className="absolute bottom-0 left-[9%] right-[9%] -z-10 flex items-center justify-between bg-white pb-10 pt-2">
      <StepBase
        text="Personal details"
        description="Please provide your personal info"
        data-active={steps[AuthStepEnum.ONBOARDINGSTEPONE].active}
        data-completed={steps[AuthStepEnum.ONBOARDINGSTEPONE].completed}
      />
      <ProgressLine
        data-active={
          steps[AuthStepEnum.ONBOARDINGSTEPONE].skipped ||
          steps[AuthStepEnum.ONBOARDINGSTEPONE].completed
        }
      />
      <StepBase
        text="Work details"
        description="A few details about your role"
        data-active={steps[AuthStepEnum.ONBOARDINGSTEPTWO].active}
        data-completed={steps[AuthStepEnum.ONBOARDINGSTEPTWO].completed}
      />
      <ProgressLine
        data-active={
          steps[AuthStepEnum.ONBOARDINGSTEPTWO].skipped ||
          steps[AuthStepEnum.ONBOARDINGSTEPTWO].completed
        }
      />
      <StepBase
        text="Complete Registration"
        description="Tell us more about yourself!"
        data-active={steps[AuthStepEnum.ONBOARDINGSTEPTHREE].active}
        data-completed={steps[AuthStepEnum.ONBOARDINGSTEPTHREE].completed}
      />
    </div>
  );
};
