import * as z from 'zod';

export const resetPasswordSchema = z
  .object({
    confirmPassword: z
      .string()
      .min(8, { message: 'Must be 8 or more characters long' }),
    password: z
      .string()
      .min(8, { message: 'Must be 8 or more characters long' }),
  })
  .refine(
    (data) => {
      return data.password === data.confirmPassword;
    },
    {
      message: 'Passwords do not match',
      path: ['confirmPassword'],
    },
  );
