import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import type { StepOneFormData } from '@/schemas/form/step1-schema';
import type { UseFormReturn } from 'react-hook-form';
import { MdError } from 'react-icons/md';

type ProjectDescriptionProps = {
  methods: UseFormReturn<{ stepOne: StepOneFormData }>;
};

const MAX_LENGTH = 135;

const ProjectDescription = ({ methods }: ProjectDescriptionProps) => {
  const {
    register,
    watch,
    formState: { errors },
  } = methods;

  const description = watch('stepOne.description');
  return (
    <div className='h-[140px]'>
      <Label htmlFor='projectDescription' className='text-gray-600'>
        Project Description
      </Label>
      <Textarea
        id='projectDescription'
        className='h-12 mt-2 resize-none'
        placeholder='Enter a description for the project.'
        {...register('stepOne.description')}
      />

      <div className='flex justify-between mt-1'>
        {errors.stepOne?.description && (
          <div className='text-sm text-red-500 flex items-center gap-2'>
            <MdError />
            <span>{errors.stepOne?.description?.message}</span>
          </div>
        )}

        <div className='text-sm text-gray-500 mt-1'>
          {description.length} / {MAX_LENGTH} characters
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
