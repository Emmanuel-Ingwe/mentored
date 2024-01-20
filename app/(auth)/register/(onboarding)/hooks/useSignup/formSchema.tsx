import * as z from 'zod';

export const formSchema = z.object({
  email: z.string().email({
    message: 'Invalid email address',
  }),
  firstName: z.string().max(100, {
    message: 'First name can not be more than 100 characters',
  }),
  lastName: z.string().max(100, {
    message: 'Last name can not be more than 100 characters',
  }),
  password: z.string().min(8, { message: 'Must be 8 or more characters long' }),
});
