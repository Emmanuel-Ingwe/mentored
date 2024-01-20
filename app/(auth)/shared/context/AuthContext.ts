/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type {
  MenteeType,
  Step,
  Steps,
  UserType,
} from '@/app/(auth)/shared/types';
import { defaultStepsValues } from '@/app/(auth)/shared/types';
import { UserEnum } from '@/app/(auth)/shared/types/enums';
import { AuthStepEnum } from './AuthStepsEnum';

type AuthContextProps = {
  currentStep: Step;
  setCurrentStep: Dispatch<SetStateAction<Step>>;
  steps: Steps;
  setSteps: Dispatch<SetStateAction<Steps>>;
  userType: UserType;
  setUserType: Dispatch<SetStateAction<UserType>>;
  menteeType: MenteeType;
  setMenteeType: Dispatch<SetStateAction<MenteeType>>;
  data: Partial<User>;
  setData: Dispatch<SetStateAction<Partial<User>>>;
  acceptedFiles: File[];
  setAcceptedFiles: Dispatch<SetStateAction<File[]>>;
  goToPrevStep: () => void;
};

const AuthContext = createContext<AuthContextProps>({
  acceptedFiles: [],
  currentStep: AuthStepEnum.SELECTUSERTYPE,
  data: {},
  goToPrevStep: () => {
    return null;
  },
  menteeType: UserEnum.NEWBIE,
  setAcceptedFiles: (_) => {
    return null;
  },
  setCurrentStep: (_) => {
    return null;
  },
  setData: (_) => {
    return null;
  },
  setMenteeType: (_) => {
    return null;
  },
  setSteps: (_) => {
    return null;
  },
  setUserType: (_) => {
    return null;
  },
  steps: defaultStepsValues,
  userType: UserEnum.MENTEE,
});

export default AuthContext;
