import { useState } from 'react';

export function useMultiStepForm(steps: React.ReactNode[]) {
  const [currentStep, setCurrentStep] = useState(0);

  // Function to go to next step
  function next() {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  }

  // Function to go back to previous state
  function back() {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  }

  // Function to go to desired step
  function goTo(step: number) {
    setCurrentStep(step);
  }

  return {
    currentStep,
    step: steps[currentStep],
    steps,
    isFirstStep: currentStep === 0,
    isLastStep: currentStep === steps.length - 1,
    next,
    back,
    goTo,
  };
}
