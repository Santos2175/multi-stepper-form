import type { IconType } from 'react-icons/lib';
import type { UseFormReturn } from 'react-hook-form';
import type { StepOneFormData } from '@/schemas/form/step1-schema';
import type { User } from '@/schemas/form/step2-schema';
import type { Dispatch, SetStateAction } from 'react';
import type { Task } from '@/schemas/form/step3-schema';
import type { CombinedFormData } from '@/hooks/useMultiStepForm';

export type FormMethods = UseFormReturn<StepOneFormData>;

export type Step = {
  purpose: string;
  subtext: string;
  icon: IconType;
  label: string;
  content: ({
    users,
    setUsers,
    tasks,
    setTasks,
    combinedFormData,
  }: {
    users?: User[] | undefined;
    setUsers?: Dispatch<SetStateAction<User[]>> | undefined;
    tasks?: Task[] | undefined;
    setTasks?: Dispatch<SetStateAction<Task[]>> | undefined;
    combinedFormData?: CombinedFormData;
  }) => React.ReactNode;
};
