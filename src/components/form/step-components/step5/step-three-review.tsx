import { Card } from '@/components/ui/card';
import type { CombinedFormData } from '@/hooks/useMultiStepForm';

type StepthreeReviewProps = {
  combinedFormData?: CombinedFormData;
};

const StepThreeReview = ({ combinedFormData }: StepthreeReviewProps) => {
  const stepThreeData =
    combinedFormData?.stepThree.tasks.filter((task) => task.isAdded) || [];

  return (
    <div>
      <h3 className='font-medium'>Tasks and Milestones</h3>
      <Card className='p-5 bg-gray-50 shadow-none mt-3 flex flex-row flex-wrap gap-6'>
        {/* Map through the stepThreeData array */}
        {stepThreeData?.length > 0 ? (
          stepThreeData.map((task) => (
            <div
              key={task.id}
              className='p-2 px-3 border rounded-lg text-sm flex gap-2 items-center bg-gray-100'>
              <div className='flex flex-col'>
                <span className='font-medium'>{task.title}</span>
              </div>
            </div>
          ))
        ) : (
          <p className='text-sm opacity-70'>No tasks added yet.</p>
        )}
      </Card>
    </div>
  );
};

export default StepThreeReview;
