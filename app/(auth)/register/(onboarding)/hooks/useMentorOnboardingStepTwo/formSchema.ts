import * as z from 'zod';

export const formSchema = z.object({
  company: z.optional(
    z.string().max(100, {
      message: 'Can not be more than 100 characters',
    }),
  ),
  industry: z.optional(
    z.object({
      label: z.string(),
      value: z.string(),
    }),
  ),
  stack: z.optional(
    z
      .object({
        label: z.string(),
        value: z.string(),
      })
      .array(),
  ),
  tools: z.optional(
    z
      .object({
        label: z.string(),
        value: z.string(),
      })
      .array(),
  ),
  yearsOfExperience: z.optional(
    z.object({
      label: z.string(),
      value: z.string(),
    }),
  ),
});
