import type { IconType } from 'react-icons/lib';
import type { UseFormReturn } from 'react-hook-form';
import type { StepOneFormData } from '@/schemas/form/step1-schema';

export type FormMethods = UseFormReturn<StepOneFormData>;

export type Step = {
  purpose: string;
  subtext: string;
  icon: IconType;
  label: string;
  content: ({ methods }: { methods: FormMethods }) => React.ReactNode;
};
