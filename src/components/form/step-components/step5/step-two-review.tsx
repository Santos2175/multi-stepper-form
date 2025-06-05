import { Card } from '@/components/ui/card';
import type { CombinedFormData } from '@/hooks/useMultiStepForm';

type StepTwoReviewProps = {
  combinedFormData?: CombinedFormData;
};

const StepTwoReview = ({ combinedFormData }: StepTwoReviewProps) => {
  const stepTwoData = [
    {
      label: 'Team Members',
      value: combinedFormData?.stepTwo?.users
        .filter((user) => user.isAdded)
        .map((user) => user.name)
        .join(', '),
    },
    {
      label: 'Team Leader',
      value: combinedFormData?.stepTwo?.users
        .filter((user) => user.isLeader)
        .map((user) => user.name),
    },
  ];
  return (
    <div>
      <h3 className='font-medium'>Teams And Roles</h3>
      <Card className='p-5 bg-gray-50 shadow-none mt-3 flex flex-col gap-6'>
        {stepTwoData.map((field, index) => (
          <div key={index} className='flex gap-2'>
            <span className={`text-sm font-medium w-[40%]`}>
              {field.label} :
            </span>
            <span className='text-sm opacity-80 text-start w-full'>
              {field.value}
            </span>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default StepTwoReview;
