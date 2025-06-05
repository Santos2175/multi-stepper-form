import { z } from 'zod';

// Define the User schema
const userSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  role: z.enum(['Owner', 'Member', 'Viewer']),
  isAdded: z.boolean(),
  isLeader: z.boolean(),
});

export const stepTwoSchema = z.object({
  users: z
    .array(userSchema)
    .refine((users) => users.some((user) => user.isAdded), {
      message: 'At least one user must be added to the project',
    }),
});

export type StepTwoFormData = z.infer<typeof stepTwoSchema>;

export type User = z.infer<typeof userSchema>;
