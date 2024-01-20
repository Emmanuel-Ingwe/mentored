'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';
import { resetPassword } from '@/app/(auth)/shared/api/resetPassword';
import { inputs } from '@/app/(auth)/login/components/LoginForm/inputs';
import { useToast } from '@/shared/hooks/useToast';
import { resetPasswordSchema } from './formSchema';

export function useResetPassword() {
  const router = useRouter();

  const { toast } = useToast();

  type IFormSchema = z.infer<typeof resetPasswordSchema>;
  const form = useForm<IFormSchema>({
    defaultValues: {
      confirmPassword: '',
      password: '',
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutateAsync, isLoading } = useMutation(resetPassword);

  const onSubmit = async (data: IFormSchema) => {
    try {
      await mutateAsync(data);
      router.push('/reset-password-success');
    } catch (error) {
      const errorJson = JSON.parse((error as Error).message);
      toast({
        className: 'rounded-xl',
        description:
          errorJson.error || 'Something went wrong, please try again.',
        title: 'Error',
        variant: 'destructive',
      });
    }
  };

  return {
    form,
    inputs,
    isLoading,
    onSubmit,
  };
}
