import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { StepOneFormData } from '@/schemas/form/step1-schema';
import type { UseFormReturn } from 'react-hook-form';

type ProjectClientNameProps = {
  methods: UseFormReturn<{ stepOne: StepOneFormData }>;
};

const ProjectClientName = ({ methods }: ProjectClientNameProps) => {
  const { register } = methods;
  return (
    <div className='h-28'>
      <Label htmlFor='projectClientName' className='text-gray-600 mb-2'>
        Client Name (Optional)
      </Label>

      <Input
        id='projectClientName'
        className='h-12'
        {...register('stepOne.clientName')}
        placeholder='Enter a client name'
      />
    </div>
  );
};

export default ProjectClientName;
