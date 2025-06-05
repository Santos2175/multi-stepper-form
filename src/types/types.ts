import type { IconType } from 'react-icons/lib';
import type { UseFormReturn } from 'react-hook-form';
import type { StepOneFormData } from '@/schemas/form/step1-schema';
import type { User } from '@/schemas/form/step2-schema';
import type { Dispatch, SetStateAction } from 'react';

export type FormMethods = UseFormReturn<StepOneFormData>;

export type Step = {
  purpose: string;
  subtext: string;
  icon: IconType;
  label: string;
  content: ({
    users,
    setUsers,
  }: {
    users?: User[] | undefined;
    setUsers?: Dispatch<SetStateAction<User[]>> | undefined;
  }) => React.ReactNode;
};
