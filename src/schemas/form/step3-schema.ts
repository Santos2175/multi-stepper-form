import { z } from 'zod';

// Define the Task schema
const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  dueDate: z.date(),
  status: z.enum(['Not Started', 'In Progress', 'Completed']),
  priority: z.enum(['Low', 'Medium', 'High']),
  isAdded: z.boolean(),
  icon: z.unknown(), // Use z.any() for IconType (React Icons)
});

export const stepThreeSchema = z.object({
  tasks: z
    .array(taskSchema)
    .refine((tasks) => tasks.some((task) => task.isAdded === true), {
      message: 'At least one task should be added',
    }),
});

export type StepThreeFormData = z.infer<typeof stepThreeSchema>;

export type Task = z.infer<typeof taskSchema>;
