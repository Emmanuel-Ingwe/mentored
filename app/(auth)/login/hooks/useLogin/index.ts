'use client';

import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';
import { useAuthContext } from '@/app/(auth)/shared/context/useAuthContext';
import authServices from '@/app/(auth)/shared/util/services';
import { useToast } from '@/shared/hooks/useToast';
import { loginSchema } from './loginSchema';
import { inputs } from '../../components/LoginForm/inputs';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { setData } = useAuthContext();

  const { toast } = useToast();

  type IFormSchema = z.infer<typeof loginSchema>;
  const form = useForm<IFormSchema>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: IFormSchema) => {
    try {
      setLoading(true);
      const response = await authServices.login(data);
      setCookie('token', response.accessToken);
      setCookie('userId', response.user._id);
      setData((prev) => {
        return {
          ...prev,
          ...response.user,
        };
      });
      router.push('/dashboard');
      setLoading(false);
    } catch (error) {
      setLoading(false);
      const errorJson = JSON.parse((error as Error).message);
      toast({
        autoCapitalize: 'sentences',
        className: 'rounded-xl',
        description:
          errorJson.error || 'Something went wrong, please try again.',
        title: 'Error',
        type: 'foreground',
        variant: 'destructive',
      });
    }
  };

  return {
    form,
    inputs,
    loading,
    onSubmit,
  };
}
