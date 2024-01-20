'use client';
import { useQuery } from '@tanstack/react-query';
import { getCookie } from 'cookies-next';
import MenteeOnboardingStepOne from './components/MenteeOnboardingStepOne';
import MenteeOnboardingStepTwoExperienced from './components/MenteeOnboardingStepTwoExperienced';
import MenteeOnboardingStepTwoNewbie from './components/MenteeOnboardingStepTwoNewbie';
import MentorOnboardingStepOne from './components/MentorOnboardingStepOne';
import MentorOnboardingStepTwo from './components/MentorOnboardingStepTwo';
import OnboardingStepThree from './components/OnboardingStepThree';
import { Signup } from './components/Signup';
import UserTypeSelect from './components/UserTypeSelect';
import { getUserData } from '../../../shared/helpers/getUserData';
import { AuthStepEnum } from '../../shared/context/AuthStepsEnum';
import { useAuthContext } from '../../shared/context/useAuthContext';
import { UserEnum } from '../../shared/types/enums';

const Onboarding = () => {
  const { currentStep, userType, menteeType, setData } = useAuthContext();
  const token = getCookie('token');

  useQuery(['userData'], async () => {
    if (!token) {
      return;
    }
    const res = await getUserData();
    setData(res);
    return res;
  });

  if (currentStep === AuthStepEnum.SELECTUSERTYPE) {
    return <UserTypeSelect />;
  }

  if (currentStep === AuthStepEnum.SIGNUP) {
    return <Signup />;
  }

  if (currentStep === AuthStepEnum.ONBOARDINGSTEPONE) {
    if (userType === UserEnum.MENTEE) {
      return <MenteeOnboardingStepOne />;
    }

    return <MentorOnboardingStepOne />;
  }

  if (currentStep === AuthStepEnum.ONBOARDINGSTEPTWO) {
    if (userType === UserEnum.MENTEE) {
      if (menteeType === UserEnum.NEWBIE) {
        return <MenteeOnboardingStepTwoNewbie />;
      }
      return <MenteeOnboardingStepTwoExperienced />;
    }

    return <MentorOnboardingStepTwo />;
  }

  if (currentStep === AuthStepEnum.ONBOARDINGSTEPTHREE) {
    return <OnboardingStepThree />;
  }

  return <UserTypeSelect />;
};

export default Onboarding;
