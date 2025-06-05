import { useFormContext } from 'react-hook-form';
import StepWrapper from '../step-wrapper';
import TotalBudget from './total-budget';
import type { StepFourFormData } from '@/schemas/form/step4-schema';
import CostTrackingMethod from './cost-tracking-method';
import ResourceAllocation from './resource-allocation';

type Step4Props = {
  purpose: string;
  subtext: string;
};

const Step4 = ({ purpose, subtext }: Step4Props) => {
  const methods = useFormContext<{ stepFour: StepFourFormData }>();
  return (
    <StepWrapper purpose={purpose} subtext={subtext}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 mt-[66px]'>
        <TotalBudget methods={methods} />
        <CostTrackingMethod methods={methods} />
      </div>
      {/* Resource Allocation */}
      <ResourceAllocation methods={methods} />
    </StepWrapper>
  );
};

export default Step4;
