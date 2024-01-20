import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { InputEnum } from '@/app/(auth)/shared/types/enums';
import Http from '@/app/shared/helpers/http';

type AccountType = { label: string; value: string };
type FormData = {
  firstName: string;
  lastName?: string;
  email: string;
  accountType: AccountType;
};

const useWaitlist = () => {
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const inputs = [
    {
      label: 'Account Type',
      name: 'accountType',
      options: [
        { label: 'Mentor', value: 'mentor' },
        { label: 'Mentee', value: 'mentee' },
      ],
      placeholder: 'Select or type interests',
      required: true,
      type: InputEnum.SELECT,
    },

    {
      label: 'First Name',
      name: 'firstName',
      placeholder: 'Enter your first name',
      required: true,
      type: InputEnum.TEXT,
    },
    {
      label: 'Last Name',
      name: 'lastName',
      placeholder: 'Enter your last name',
      required: true,
      type: InputEnum.TEXT,
    },
    {
      label: InputEnum.EMAIL,
      name: 'email',
      placeholder: 'Enter your email',
      required: true,
      type: InputEnum.EMAIL,
    },
  ];
  const formSchema = z.object({
    accountType: z
      .union([
        z.enum(['mentor', 'mentee']),
        z.object({
          label: z.string(),
          value: z.string(),
        }),
      ])
      .refine((val) => {
        if (typeof val === 'object') {
          return (
            Object.prototype.hasOwnProperty.call(val, 'label') &&
            Object.prototype.hasOwnProperty.call(val, 'value')
          );
        }
        return true;
      })
      .transform((val) => {
        if (typeof val === 'object') {
          return val;
        }
        return {
          label: val.charAt(0).toUpperCase() + val.slice(1),
          value: val,
        };
      }),

    email: z.string().email({
      message: 'Invalid email address',
    }),

    firstName: z.string().max(100, {
      message: 'First name can not be more than 100 characters',
    }),
    lastName: z.string().max(100, {
      message: 'First name can not be more than 100 characters',
    }),
  });
  type IFormSchema = z.infer<typeof formSchema>;
  const form = useForm<IFormSchema>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const res = await Http.post({
        body: {
          ...data,
          accountType: data.accountType.value,
        },
        endpoint: '/waitlist',
      });
      if (res._id) {
        setContent(
          `${res.firstName}, Thank you for joining the waitlist! We will be in touch soon, you can close this dialog now.`,
        );
        setLoading(false);
        return;
      }
    } catch (error) {
      setError(
        `${data.firstName}, Something went wrong, please try again later.`,
      );
      setLoading(false);
      return;
    }
  };
  return {
    content,
    error,
    form,
    inputs,
    loading,
    onSubmit,
  };
};
export default useWaitlist;
