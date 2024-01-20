'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';
import { updateUser } from '@/app/(auth)/shared/api/updateUser';
import { useAuthContext } from '@/app/(auth)/shared/context/useAuthContext';
import experienceYears from '@/data/experienceYears.json';
import industries from '@/data/industries.json';
import stacks from '@/data/stacks.json';
import tools from '@/data/tools.json';
import { formSchema } from './formSchema';
import { getSelectArray } from '../../helpers/getSelectArray';
import { handleStepsState } from '../../helpers/handleStepsState';
import { isObjEmpty } from '../../helpers/isObjEmpty';

export const useMentorOnboardingStepTwo = () => {
  const {
    setSteps,
    setData,
    data: userData,
    currentStep,
    setCurrentStep,
  } = useAuthContext();

  const {
    _id,
    yearsOfExperience,
    industry,
    stack: userStacks,
    tools: userTools,
    company,
  } = userData;

  type IFormSchema = z.infer<typeof formSchema>;

  const form = useForm<IFormSchema>({
    defaultValues: {
      company: company,
      industry: industries.find((item) => {
        return item.value === industry;
      }),
      stack: getSelectArray(userStacks, stacks),
      tools: getSelectArray(userTools, tools),
      yearsOfExperience: experienceYears.find((item) => {
        return item.value === yearsOfExperience;
      }),
    },
    resolver: zodResolver(formSchema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: ({ data, userId }: { userId: string; data: Partial<User> }) => {
      return updateUser(data, userId);
    },
  });

  const onSubmit = async (data: IFormSchema) => {
    const dataToSend = {
      company: data.company,
      industry: data.industry?.value,
      stack: data.stack?.map((item) => {
        return item.value;
      }),
      tools: data.tools?.map((tool) => {
        return tool.value;
      }),
      yearsOfExperience: data.yearsOfExperience?.value,
    };

    try {
      await mutateAsync({
        data: dataToSend,
        userId: _id || '',
      });

      setData((prev) => {
        return {
          ...prev,
          ...dataToSend,
        };
      });

      setCurrentStep(currentStep + 1);
      handleStepsState(setSteps, currentStep, isObjEmpty(data));
    } catch (error) {
      const errorJson = JSON.parse((error as Error).message);
      form.setError('company', {
        message: errorJson.error,
        type: 'manual',
      });
    }
  };

  return {
    form,
    isLoading,
    onSubmit,
  };
};
