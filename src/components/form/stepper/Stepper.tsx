import type { Step } from '@/types/types';
import StepIndicator from './StepIndicator';
import StepLabel from './StepLabel';

type StepperProps = {
  steps: Step[];
  currentStep: number;
};

const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <div className='fixed top-4 z-50 w-full max-w-xl flex items-center justify-center  left-1/2 -translate-x-1/2 '>
      <div className='border rounded-lg w-full backdrop-blur-[4px]  shadow-md  flex items-center justify-between p-1 md:p-2 mx-2 '>
        {steps.map((step, index) => (
          <div
            key={index}
            className='flex items-center p-1 md:p-3 gap-2 md:gap-5 cursor-pointer'>
            {/* Step Indicator */}
            <StepIndicator Icon={step.icon} isActive={currentStep === index} />

            {/* Step Label (Only show for active label) */}
            {currentStep === index && (
              <StepLabel label={step.label} stepNumber={currentStep + 1} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
