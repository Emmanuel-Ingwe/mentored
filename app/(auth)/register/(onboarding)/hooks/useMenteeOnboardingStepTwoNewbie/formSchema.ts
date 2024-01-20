import * as z from 'zod';

export const formSchema = z.object({
  jobTitle: z.object({
    label: z.string(),
    value: z.string(),
  }),
  learningPeriod: z.object({
    label: z.string(),
    value: z.string(),
  }),

  stack: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .array(),
  tools: z
    .object({
      label: z.string(),
      value: z.string(),
    })
    .array(),
});
