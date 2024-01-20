'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';
import { updateUser } from '@/app/(auth)/shared/api/updateUser';
import { UserEnum } from '@/app/(auth)/shared/types/enums';
import { useToast } from '@/shared/hooks/useToast';
import { countries } from '@/shared/lib/countries';
import { formSchema } from './formSchema';
import { useAuthContext } from '../../../../shared/context/useAuthContext';
import { extractSocialLinks } from '../../helpers/extractSocialLinks';
import { handleStepsState } from '../../helpers/handleStepsState';
import { isObjEmpty } from '../../helpers/isObjEmpty';

type IFormSchema = z.infer<typeof formSchema>;

export const useMenteeOnboardingStepOne = () => {
  const {
    setCurrentStep,
    setMenteeType,
    setData,
    data,
    currentStep,
    setSteps,
  } = useAuthContext();
  const { hasExperience, socialUrls, country, _id } = data;

  const { toast } = useToast();

  const form = useForm<IFormSchema>({
    defaultValues: {
      ...extractSocialLinks(socialUrls || []),
      country: countries.find((c) => {
        return c.value === country;
      }),
      hasExperience: hasExperience
        ? { label: 'Yes', value: 'Yes' }
        : { label: 'No', value: 'No' },
    },
    resolver: zodResolver(formSchema),
  });

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: ({ data, userId }: { userId: string; data: Partial<User> }) => {
      return updateUser(data, userId);
    },
  });

  const onSubmit = async (data: IFormSchema) => {
    const socialUrls = [data.githubUrl, data.linkedinUrl].filter((url) => {
      return url;
    }) as string[];

    const dataToSend = {
      country: data.country?.value,
      hasExperience: data.hasExperience?.value === 'Yes',
      socialUrls: socialUrls,
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

      setMenteeType(
        data.hasExperience?.value === 'Yes'
          ? UserEnum.NEWBIE
          : UserEnum.EXPERIENCED,
      );

      setCurrentStep(currentStep + 1);
      handleStepsState(setSteps, currentStep, isObjEmpty(data));
    } catch (error) {
      const errorJson = JSON.parse((error as Error).message);
      form.setError('hasExperience', {
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
