import type { IconType } from 'react-icons/lib';

type StepIndicatorProps = {
  Icon: IconType;
  isActive: boolean;
};

const StepIndicator = ({ Icon, isActive }: StepIndicatorProps) => {
  return (
    <div
      className={`p-3 rounded-full ${
        isActive ? 'bg-blue-200/10' : 'bg-gray-100'
      }`}>
      <Icon className={isActive ? 'text-primary' : 'text-gray-400'} />
    </div>
  );
};

export default StepIndicator;
