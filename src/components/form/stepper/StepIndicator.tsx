import type { IconType } from 'react-icons/lib';

type StepIndicatorProps = {
  Icon: IconType;
  isActive: boolean;
};

const StepIndicator = ({ Icon, isActive }: StepIndicatorProps) => {
  return (
    <div
      className={`p-2 md:p-3 rounded-full ${
        isActive ? 'bg-blue-200/50' : 'bg-gray-200/50'
      }`}>
      <Icon
        className={`${isActive ? 'text-primary' : 'text-gray-500'} md:size-6`}
      />
    </div>
  );
};

export default StepIndicator;
