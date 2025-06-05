import { useFormContext } from 'react-hook-form';
import StepWrapper from '../step-wrapper';
import type { StepOneFormData } from '@/schemas/form/step1-schema';
import ProjectName from './project-name';
import ProjectDescription from './project-description';
import ProjectCategory from './project-category';
import ProjectStartDate from './project-start-date';
import ProjectEndDate from './project-end-date';
import ProjectClientName from './project-client-name';

type Step1Props = {
  purpose: string;
  subtext: string;
};

const Step1 = ({ purpose, subtext }: Step1Props) => {
  const methods = useFormContext<{ stepOne: StepOneFormData }>();
  return (
    <StepWrapper purpose={purpose} subtext={subtext}>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-10 mt-10'>
        <div className='flex flex-col gap-7 mt-7'>
          <ProjectName methods={methods} />
          <ProjectDescription methods={methods} />
          <ProjectCategory methods={methods} />
        </div>
        <div className='flex flex-col mt-7 gap-7'>
          <ProjectStartDate methods={methods} />
          <ProjectEndDate methods={methods} />
          <ProjectClientName methods={methods} />
        </div>
      </div>
    </StepWrapper>
  );
};

export default Step1;
