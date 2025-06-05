import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { StepOneFormData } from '@/schemas/form/step1-schema';
import type { UseFormReturn } from 'react-hook-form';
import { MdError } from 'react-icons/md';

type ProjectNameProps = {
  methods: UseFormReturn<{ stepOne: StepOneFormData }>;
};

const ProjectName = ({ methods }: ProjectNameProps) => {
  const {
    register,
    formState: { errors },
  } = methods;

  return (
    <div className='h-28'>
      <Label htmlFor='projectName' className='text-gray-600'>
        Project Name
      </Label>
      <Input
        id='projectName'
        className='h-12 mt-2'
        {...register('stepOne.name')}
      />

      {errors.stepOne?.name && (
        <div className='text-red-500 text-sm flex items-center gap-2 mt-2'>
          <MdError />
          <span>{errors.stepOne?.name?.message}</span>
        </div>
      )}
    </div>
  );
};

export default ProjectName;
