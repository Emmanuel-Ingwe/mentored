'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';
import { updateUser } from '@/app/(auth)/shared/api/updateUser';
import roles from '@/data/roles.json';
import { countries } from '@/shared/lib/countries';
import { formSchema } from './formSchema';
import { useAuthContext } from '../../../../shared/context/useAuthContext';
import { extractSocialLinks } from '../../helpers/extractSocialLinks';
import { handleStepsState } from '../../helpers/handleStepsState';
import { isObjEmpty } from '../../helpers/isObjEmpty';

export const useMentorOnboardingStepOne = () => {
  const { setCurrentStep, setData, data, currentStep, setSteps } =
    useAuthContext();
  const { jobTitle, socialUrls, country, _id } = data;

  type IFormSchema = z.infer<typeof formSchema>;

  const form = useForm<IFormSchema>({
    defaultValues: {
      ...extractSocialLinks(socialUrls || []),
      country: countries.find((c) => {
        return c.value === country;
      }),
      jobTitle: roles.find((item) => {
        return item.value === jobTitle;
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
    const socialUrls = [data.githubUrl, data.linkedinUrl].filter((url) => {
      return url;
    }) as string[];

    const dataToSend = {
      country: data.country?.value,
      jobTitle: data.jobTitle?.value,
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

      setCurrentStep(currentStep + 1);
      handleStepsState(setSteps, currentStep, isObjEmpty(data));
    } catch (error) {
      const errorJson = JSON.parse((error as Error).message);
      form.setError('jobTitle', {
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
