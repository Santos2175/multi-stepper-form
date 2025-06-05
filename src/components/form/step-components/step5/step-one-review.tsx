import { Card } from '@/components/ui/card';
import type { CombinedFormData } from '@/hooks/useMultiStepForm';

type StepOneReviewProps = {
  combinedFormData?: CombinedFormData;
};

const StepOneReview = ({ combinedFormData }: StepOneReviewProps) => {
  interface StepOneData {
    label: string;
    value: Date | string;
  }

  const stepOneData: StepOneData[] = [
    { label: 'Project Name', value: combinedFormData?.stepOne.name || '' },
    {
      label: 'Project Description',
      value: combinedFormData?.stepOne.description || '',
    },
    {
      label: 'Project Category',
      value: combinedFormData?.stepOne.category || '',
    },
    {
      label: 'Start Date',
      value: combinedFormData?.stepOne.startDate || new Date(),
    },
    {
      label: 'End Date',
      value: combinedFormData?.stepOne.endDate || new Date(),
    },
    {
      label: 'Client Name',
      value: combinedFormData?.stepOne.clientName || '',
    },
  ];
  return (
    <div>
      <h3 className='font-medium'>Project Overview</h3>
      <Card className='p-5 bg-gray-50 shadow-none flex flex-col mt-3 gap-6'>
        {stepOneData?.map((field, index) => (
          <div key={index} className='flex gap-2'>
            <span className={`text-sm font-medium w-[40%]`}>
              {field.label} :
            </span>
            <span className='text-sm opacity-80 text-start w-full'>
              {field.value instanceof Date
                ? field.value.toLocaleDateString()
                : field.value}
            </span>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default StepOneReview;
