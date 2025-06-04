import StepWrapper from '../step-wrapper';

type Step4Props = {
  purpose: string;
  subtext: string;
};

const Step4 = ({ purpose, subtext }: Step4Props) => {
  return (
    <StepWrapper purpose={purpose} subtext={subtext}>
      step4
    </StepWrapper>
  );
};

export default Step4;
