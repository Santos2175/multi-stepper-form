import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { StepFourFormData } from '@/schemas/form/step4-schema';
import type { UseFormReturn } from 'react-hook-form';
import { MdError } from 'react-icons/md';

const MAX_LENGTH = 135;

type ResourceAllocationProps = {
  methods: UseFormReturn<{ stepFour: StepFourFormData }>;
};

const ResourceAllocation = ({ methods }: ResourceAllocationProps) => {
  const {
    register,
    watch,
    formState: { errors },
  } = methods;

  const resourceAllocation = watch('stepFour.resourceAllocation');
  return (
    <div>
      <Label htmlFor='resouceAllocation' className='text-gray-600'>
        Resource Allocation
      </Label>
      <Textarea
        id='resourceAllocation'
        placeholder='Enter the resource allocation details'
        maxLength={MAX_LENGTH}
        className='mt-2 h-12 resize-none'
        {...register('stepFour.resourceAllocation')}
      />

      <div className='flex items-center justify-between mt-1'>
        {errors?.stepFour?.resourceAllocation && (
          <div className='flex items-center gap-2 text-red-500 text-sm'>
            <MdError />
            <span>{errors?.stepFour?.resourceAllocation.message}</span>
          </div>
        )}

        {/* Character count */}
        <div className='mt-1 text-sm text-gray-500'>
          <span>
            {resourceAllocation.length}/{MAX_LENGTH}
          </span>{' '}
          characters
        </div>
      </div>
    </div>
  );
};

export default ResourceAllocation;
