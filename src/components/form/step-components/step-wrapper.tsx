import type React from 'react';

type StepWrapperProps = {
  purpose: string;
  subtext: string;
  children: React.ReactNode;
};

const StepWrapper = ({ purpose, subtext, children }: StepWrapperProps) => {
  return (
    <div>
      <h3 className='font-bold text-xl'>{purpose}</h3>
      <p className='text-sm text-gray-500'>{subtext}</p>
      <div>{children}</div>
    </div>
  );
};

export default StepWrapper;
