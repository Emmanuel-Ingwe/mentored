'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';
import Http from '@/app/shared/helpers/http';
import tools from '@/data/tools.json';
import { formSchema } from './formSchema';
import { useAuthContext } from '../../../../shared/context/useAuthContext';
import { getSelectArray } from '../../helpers/getSelectArray';

export const useOnboardingStepThree = () => {
  const { setData, data: userData, acceptedFiles } = useAuthContext();

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  type IFormSchema = z.infer<typeof formSchema>;

  const form = useForm<IFormSchema>({
    defaultValues: {
      careerSummary: userData.careerSummary || '',
      interestedTools: getSelectArray(userData.interestedTools, tools),
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: IFormSchema) => {
    try {
      setLoading(true);
      const { interestedTools, careerSummary } = data;
      const interestedToolsArray: string[] | undefined = interestedTools?.map(
        (tool) => {
          return tool.value;
        },
      );

      const formData = new FormData();

      formData.append('careerSummary', careerSummary || '');
      if (interestedToolsArray) {
        formData.append('interestedTools', interestedToolsArray.join(','));
      }
      if (acceptedFiles.length > 0) {
        formData.append('profileImg', acceptedFiles[0]);
      }

      const response = await Http.patchMultipart({
        body: formData,
        endpoint: `/users/${userData.id}`,
      });

      const { data: user } = await response.json();

      setData((prev) => {
        return {
          ...prev,
          ...user,
        };
      });

      setLoading(false);
      router.push('/dashboard');
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    onSubmit,
  };
};
