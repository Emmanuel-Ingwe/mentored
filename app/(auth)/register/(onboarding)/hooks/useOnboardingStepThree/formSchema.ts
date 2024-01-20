import * as z from 'zod';

export const formSchema = z.object({
  careerSummary: z.optional(z.string()),
  interestedTools: z.optional(
    z
      .object({
        label: z.string(),
        value: z.string(),
      })
      .array(),
  ),
  profilePicture: z.optional(z.string()),
});
