import { z } from 'zod';

// Project name schema
const ProjectNameSchema = z.object({
  name: z
    .string()
    .nonempty('Project name is required')
    .min(3, 'Project name must contain at least 3 characters'),
});

// Project description schema
const ProjectDescriptionSchema = z.object({
  description: z
    .string()
    .nonempty('Project description is required')
    .min(135, 'Project description must be 135 characters or less'),
});

// Project category schema
const ProjectCategorySchema = z.object({
  category: z.enum([
    'Marketing',
    'Software Development',
    'Construction',
    'Education',
    'Healthcare',
  ]),
});

// Project start date schema
const ProjectStartDateSchema = z.object({
  startDate: z.date({ required_error: 'Start date is required' }),
});

// Project end date schema
const ProjectEndDateSchema = z.object({
  endDate: z.date({ required_error: 'End date is required' }),
});

// project client name schema
const ProjectClientNameSchema = z.object({
  clientName: z.string().optional(),
});

const stepOneSchema = z.object({
  ...ProjectNameSchema.shape,
  ...ProjectDescriptionSchema.shape,
  ...ProjectCategorySchema.shape,
  ...ProjectStartDateSchema.shape,
  ...ProjectEndDateSchema.shape,
  ...ProjectClientNameSchema.shape,
});

export type StepOneFormData = z.infer<typeof stepOneSchema>;
