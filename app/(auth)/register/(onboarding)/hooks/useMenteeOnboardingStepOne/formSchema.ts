import * as z from 'zod';

export const formSchema = z.object({
  country: z.object({
    label: z.string(),
    value: z.string(),
  }),
  githubUrl: z.string().url({ message: 'Must be a URL' }),
  hasExperience: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .default({ label: 'Yes', value: 'Yes' }),
  linkedinUrl: z.string().url({ message: 'Must be a URL' }),
});
