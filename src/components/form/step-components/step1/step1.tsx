import StepWrapper from '../step-wrapper';

type Step1Props = {
  purpose: string;
  subtext: string;
};

const Step1 = ({ purpose, subtext }: Step1Props) => {
  return (
    <StepWrapper purpose={purpose} subtext={subtext}>
      step1
    </StepWrapper>
  );
};

export default Step1;
