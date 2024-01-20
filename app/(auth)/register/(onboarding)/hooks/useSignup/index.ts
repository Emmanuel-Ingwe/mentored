'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { setCookie } from 'cookies-next';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';
import { AuthStepEnum } from '@/app/(auth)/shared/context/AuthStepsEnum';
import { useAuthContext } from '@/app/(auth)/shared/context/useAuthContext';
import authServices from '@/app/(auth)/shared/util/services';
import { formSchema } from './formSchema';
import { handleStepsState } from '../../helpers/handleStepsState';

export const useSignup = () => {
  const { setCurrentStep, userType, setData, setSteps, currentStep } =
    useAuthContext();
  const [loading, setLoading] = useState(false);

  type IFormSchema = z.infer<typeof formSchema>;

  const form = useForm<IFormSchema>({
    defaultValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: IFormSchema) => {
    try {
      setLoading(true);
      const response = await authServices.register({
        ...data,
        accountType: userType.toLowerCase(),
      });

      setCurrentStep(AuthStepEnum.ONBOARDINGSTEPONE);
      handleStepsState(setSteps, currentStep);
      setData((prev) => {
        return { ...prev, ...response };
      });
      setCookie('token', response.accessToken);
      setLoading(false);
    } catch (error) {
      const errorJson = JSON.parse((error as Error).message);
      setLoading(false);

      form.setError('email', {
        message: errorJson.error,
        type: 'manual',
      });
    }
  };

  return {
    form,
    loading,
    onSubmit,
    userType,
  };
};
