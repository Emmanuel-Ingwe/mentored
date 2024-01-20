/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { useCallback, useContext, useMemo, useState } from 'react';
import {
  type UserType,
  type MenteeType,
  type Step,
  type Steps,
  defaultStepsValues,
} from '@/app/(auth)/shared/types';
import { UserEnum } from '@/app/(auth)/shared/types/enums';
import AuthContext from './AuthContext';
import { AuthStepEnum } from './AuthStepsEnum';

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const [currentStep, setCurrentStep] = useState<Step>(
    AuthStepEnum.SELECTUSERTYPE,
  );
  const [userType, setUserType] = useState<UserType>(UserEnum.MENTEE);
  const [menteeType, setMenteeType] = useState<MenteeType>(UserEnum.NEWBIE);
  const [data, setData] = useState<Partial<User>>({});
  const [steps, setSteps] = useState<Steps>(defaultStepsValues);
  const [acceptedFiles, setAcceptedFiles] = useState<File[]>([]);

  const goToPrevStep = useCallback(() => {
    setCurrentStep(currentStep - 1);
    setSteps((prev) => {
      return {
        ...prev,
        [currentStep - 1]: {
          active: true,
          completed: false,
        },
        [currentStep]: {
          active: false,
          completed: false,
        },
      };
    });
  }, [currentStep]);

  const AuthStepContext = useContext(AuthContext);

  if (AuthStepContext === undefined) {
    throw new Error('useAuthStep must be used within a AuthStepProvider');
  }

  const value = useMemo(() => {
    return {
      acceptedFiles,
      currentStep,
      data,
      goToPrevStep,
      menteeType,
      setAcceptedFiles,
      setCurrentStep,
      setData,
      setMenteeType,
      setSteps,
      setUserType,
      steps,
      userType,
    };
  }, [
    acceptedFiles,
    currentStep,
    data,
    goToPrevStep,
    menteeType,
    steps,
    userType,
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthProvider;
