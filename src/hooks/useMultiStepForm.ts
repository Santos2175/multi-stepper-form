import { stepOneSchema } from '@/schemas/form/step1-schema';
import type { Step } from '@/types/types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const combinedSchema = z.object({
  stepOne: stepOneSchema,
});

export type CombinedFormData = z.infer<typeof combinedSchema>;

const initialFormData = {
  stepOne: {
    name: '',
    category: 'Software Development',
    description: '',
    startDate: new Date(),
    endDate: new Date(),
    clientName: '',
  },
  stepTwo: {
    users: [],
  },
  stepThree: {
    tasks: [],
  },
  stepFour: {
    costTrackingMethod: 'fixed-budget',
    resourceAllocation: '',
    totalBudget: 0,
  },
};

export function useMultiStepForm(steps: Step[]) {
  const [currentStep, setCurrentStep] = useState(0);
  const [allFormData, setAllFormData] = useState(initialFormData);

  const methods = useForm<CombinedFormData>({
    resolver: zodResolver(combinedSchema),
    defaultValues: initialFormData as CombinedFormData,
    mode: 'onChange',
  });

  const {
    trigger,
    getValues,
    formState: { errors },
  } = methods;

  // Step variable
  const isFirstStep = currentStep === 0;
  const isLastStep = currentStep === steps.length - 1;

  // Function to go to next step
  async function next() {
    console.log('Form Data', allFormData);
    const sectionKeys = ['stepOne', 'stepTwo', 'stepThree', 'stepFour'];
    const section = sectionKeys[currentStep] as keyof CombinedFormData;

    const isStepValid = await trigger(section);

    if (isStepValid) {
      const values = getValues();

      setAllFormData((prev) => ({ ...prev, [section]: values[section] }));
      setCurrentStep((prev) => prev + 1);
    } else {
      console.log('Form errors', errors?.stepOne);
    }
  }

  // Function to go back to previous state
  function back() {
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1));
  }

  // Function to go to desired step
  function goTo(step: number) {
    setCurrentStep(step);
  }

  return {
    currentStep,
    step: steps[currentStep],
    steps,
    isFirstStep,
    isLastStep,
    next,
    back,
    goTo,
    methods,
    allFormData,
  };
}
