import type { Step } from '@/types/types';
import StepIndicator from './StepIndicator';
import StepLabel from './StepLabel';

type StepperProps = {
  steps: Step[];
  currentStep: number;
};

const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <div className='flex items-center justify-center p-7'>
      <div className='border rounded-lg flex items-center justify-center p-2'>
        {steps.map((step, index) => (
          <div
            key={index}
            className='flex items-center p-3 gap-2 cursor-pointer'>
            {/* Step Indicator */}
            <StepIndicator Icon={step.icon} isActive={currentStep === index} />

            {/* Step Label (Only show for active label) */}
            {currentStep === index && (
              <StepLabel label={step.label} stepNumber={currentStep} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
