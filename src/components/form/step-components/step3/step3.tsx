import StepWrapper from '../step-wrapper';

type Step3Props = {
  purpose: string;
  subtext: string;
};

const Step3 = ({ purpose, subtext }: Step3Props) => {
  return (
    <StepWrapper purpose={purpose} subtext={subtext}>
      step1
    </StepWrapper>
  );
};

export default Step3;
