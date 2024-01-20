'use client';

import { useRef, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { InputEnum } from '@/app/(auth)/shared/types/enums';
import Http from '@/app/shared/helpers/http';
import { useToast } from '@/shared/hooks/useToast';

export function useContactForm() {
  const nameInputs = [
    {
      label: 'First Name',
      name: 'firstName',
      placeholder: 'First name',
      required: true,
      type: InputEnum.TEXT,
    },
    {
      label: 'Last name',
      name: 'lastName',
      placeholder: 'Last name',
      required: true,
      type: InputEnum.TEXT,
    },
  ];

  const inputs = [
    {
      defaultValue: { label: 'Choose', value: 'Choose' },
      label: 'Message Title',
      name: 'title',
      options: [
        { label: 'Issues', value: 'Issues' },
        { label: 'Suggestions', value: 'Suggestions' },
        { label: 'Feedbacks', value: 'Feedbacks' },
        { label: 'Questions', value: 'Questions' },
      ],
      placeholder: '',
      required: false,
      type: InputEnum.SELECT,
    },
    {
      label: InputEnum.EMAIL,
      name: 'email',
      placeholder: 'Enter your email',
      required: true,
      type: InputEnum.EMAIL,
    },
    {
      label: 'Message',
      name: 'message',
      placeholder: 'Leave us a message',
      required: true,
      type: InputEnum.TEXTAREA,
    },
  ];

  const formSchema = z.object({
    email: z.string().email({
      message: 'Invalid email address',
    }),
    firstName: z.string().min(2, {
      message: 'First name must be at least 2 characters.',
    }),
    lastName: z.string().min(2, {
      message: 'Last name must be at least 2 characters.',
    }),
    message: z.string().min(2, {
      message: 'Message must be at least 2 characters.',
    }),
    title: z.any(),
  });

  const [loading, setLoading] = useState(false);

  type IFormSchema = z.infer<typeof formSchema>;

  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
  });

  const contactUs = async (data: any) => {
    const endpoint = '/contact-us';
    return await Http.post({
      body: data,
      endpoint: endpoint,
    });
  };
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);
  const { mutateAsync, isLoading } = useMutation(contactUs);

  const onSubmit = async (data: IFormSchema) => {
    setLoading(isLoading);
    await mutateAsync({
      ...data,
      messageTitle: data.title.value,
    });
    toast({
      autoCapitalize: 'sentences',
      className: 'rounded-xl',
      description:
        'Contact message successfully submitted. We will get back to you.',
      title: 'Success! ✅',
      type: 'foreground',
    });
    form.setValue('email', '');
    form.setValue('firstName', '');
    form.setValue('lastName', '');
    form.setValue('message', '');
    form.setValue('title', { title: 'Choose' });
  };

  return {
    form,
    formRef,
    inputs,
    loading,
    nameInputs,
    onSubmit,
  };
}
