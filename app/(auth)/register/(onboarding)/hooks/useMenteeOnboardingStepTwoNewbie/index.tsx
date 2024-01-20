'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';
import { updateUser } from '@/app/(auth)/shared/api/updateUser';
import roles from '@/data/roles.json';
import stacks from '@/data/stacks.json';
import tools from '@/data/tools.json';
import { formSchema } from './formSchema';
import { useAuthContext } from '../../../../shared/context/useAuthContext';
import { getSelectArray } from '../../helpers/getSelectArray';
import { handleStepsState } from '../../helpers/handleStepsState';
import { isObjEmpty } from '../../helpers/isObjEmpty';

const periods = [
  { label: '1-3 months', value: '1-3 months' },
  { label: '3-6 months', value: '3-6 months' },
  { label: '6-12 months', value: '6-12 months' },
];

export const useMenteeOnboardingStepTwoNewbie = () => {
  const { setCurrentStep, setSteps, currentStep, setData, data } =
    useAuthContext();

  const {
    _id,
    jobTitle,
    stack: userStacks,
    tools: userTools,
    learningPeriod,
  } = data;

  type IFormSchema = z.infer<typeof formSchema>;

  const form = useForm<IFormSchema>({
    defaultValues: {
      jobTitle: roles.find((item) => {
        return item.value === jobTitle;
      }),
      learningPeriod: periods.find((item) => {
        return item.value === learningPeriod;
      }),
      stack: getSelectArray(userStacks, stacks),
      tools: getSelectArray(userTools, tools),
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
      jobTitle: data.jobTitle?.value,
      learningPeriod: data.learningPeriod?.value,
      stack: data.stack?.map((item) => {
        return item.value;
      }),
      tools: data.tools?.map((tool) => {
        return tool.value;
      }),
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
      form.setError('tools', {
        message: errorJson.stack,
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
