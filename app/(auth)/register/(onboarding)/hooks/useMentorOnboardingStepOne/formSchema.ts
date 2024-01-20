import * as z from 'zod';

export const formSchema = z.object({
  country: z.optional(
    z
      .object({
        label: z.string(),
        value: z.string(),
      })
      .optional(),
  ),
  githubUrl: z.optional(z.string().url({ message: 'Must be a URL' })),
  jobTitle: z.object({
    label: z.string(),
    value: z.string(),
  }),
  linkedinUrl: z.optional(z.string().url({ message: 'Must be a URL' })),
});
