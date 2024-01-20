'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import type * as z from 'zod';
import { forgotPassword } from '@/app/(auth)/shared/api/forgotPassword';
import { inputs } from '@/app/(auth)/login/components/LoginForm/inputs';
import { useToast } from '@/shared/hooks/useToast';
import { forgotPasswordSchema } from './formSchema';

export function useForgotPassword() {
  const router = useRouter();

  const { toast } = useToast();

  type IFormSchema = z.infer<typeof forgotPasswordSchema>;
  const form = useForm<IFormSchema>({
    defaultValues: {
      email: '',
    },
    resolver: zodResolver(forgotPasswordSchema),
  });

  const { mutateAsync, isLoading } = useMutation(forgotPassword);

  const onSubmit = async (data: IFormSchema) => {
    try {
      await mutateAsync(data);
      router.push('/verify-email?email=' + data.email);
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
