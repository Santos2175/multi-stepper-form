import StepWrapper from '../step-wrapper';

type Step5Props = {
  purpose: string;
  subtext: string;
};

const Step5 = ({ purpose, subtext }: Step5Props) => {
  return (
    <StepWrapper purpose={purpose} subtext={subtext}>
      step4
    </StepWrapper>
  );
};

export default Step5;
