import StepWrapper from '../step-wrapper';

type Step2Props = {
  purpose: string;
  subtext: string;
};

const Step2 = ({ purpose, subtext }: Step2Props) => {
  return (
    <StepWrapper purpose={purpose} subtext={subtext}>
      step1
    </StepWrapper>
  );
};

export default Step2;
