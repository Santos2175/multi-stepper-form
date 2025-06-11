type StepLabelProps = {
  label: string;
  stepNumber: number;
};

const StepLabel = ({ label, stepNumber }: StepLabelProps) => {
  return (
    <div className='flex flex-col'>
      <span className='text-[10px] md:text-[13px] font-medium text-primary'>
        STEP {stepNumber}
      </span>
      <span className='font-bold text-[13px] md:text-[16px]'>{label}</span>
    </div>
  );
};

export default StepLabel;
