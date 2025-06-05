import { type CombinedFormData } from '@/hooks/useMultiStepForm';
import StepWrapper from '../step-wrapper';
import StepOneReview from './step-one-review';
import StepTwoReview from './step-two-review';
import StepFourReview from './step-four-review';
import StepThreeReview from './step-three-review';

type Step5Props = {
  purpose: string;
  subtext: string;
  combinedFormData?: CombinedFormData;
};

const Step5 = ({ purpose, subtext, combinedFormData }: Step5Props) => {
  console.log('combined:', combinedFormData);
  return (
    <StepWrapper purpose={purpose} subtext={subtext}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-16'>
        <div className='flex flex-col gap-9'>
          <StepOneReview combinedFormData={combinedFormData} />
          <StepThreeReview combinedFormData={combinedFormData} />
        </div>

        <div className='flex flex-col gap-9'>
          <StepTwoReview combinedFormData={combinedFormData} />
          <StepFourReview combinedFormData={combinedFormData} />
        </div>
      </div>
    </StepWrapper>
  );
};

export default Step5;
