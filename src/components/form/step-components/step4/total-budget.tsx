import { NumericFormat } from 'react-number-format';
import { Label } from '@/components/ui/label';
import type { StepFourFormData } from '@/schemas/form/step4-schema';
import { Controller, type UseFormReturn } from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';
import { Input } from '@/components/ui/input';
import { MdError } from 'react-icons/md';

type TotalBudgetProps = {
  methods: UseFormReturn<{ stepFour: StepFourFormData }>;
};

const TotalBudget = ({ methods }: TotalBudgetProps) => {
  const {
    control,
    formState: { errors },
  } = methods;
  return (
    <div className='relative'>
      <BiDollar className='absolute text-primary right-3 top-10' />
      <Label htmlFor='totalBudget' className='text-gray-600'>
        Total Budget
      </Label>
      <Controller
        control={control}
        name='stepFour.totalBudget'
        render={({ field }) => (
          <NumericFormat
            placeholder='Enter the budget of the project'
            value={field.value || 0}
            customInput={Input}
            onValueChange={async (values) => {
              field.onChange(values.floatValue ?? 0);
            }}
            thousandSeparator
            className='h-12 mt-2'
          />
        )}
      />

      {errors?.stepFour?.totalBudget && (
        <div className='flex gap-2 items-center text-red-500 text-sm mt-2'>
          <MdError />
          <span>{errors?.stepFour?.totalBudget.message}</span>
        </div>
      )}
    </div>
  );
};

export default TotalBudget;
