import type { UserType } from '@/app/(auth)/shared/types';
import { AuthStepEnum } from '../../../../shared/context/AuthStepsEnum';
import { useAuthContext } from '../../../../shared/context/useAuthContext';

const useUserType = () => {
  const { setCurrentStep, setSteps, setUserType, setData } = useAuthContext();

  const selectUserType = (userType: UserType) => {
    setData({}); // this is to reset the saved data on switching of the user type.
    setUserType(userType);
    setCurrentStep(AuthStepEnum.SIGNUP);
    setSteps((prev) => {
      return {
        ...prev,
        [AuthStepEnum.SELECTUSERTYPE]: {
          active: false,
          completed: true,
        },
        [AuthStepEnum.SELECTUSERTYPE + 1]: {
          active: true,
          completed: false,
        },
      };
    });
  };
  return { selectUserType };
};

export default useUserType;
