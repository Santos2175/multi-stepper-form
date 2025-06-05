import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { StepFourFormData } from '@/schemas/form/step4-schema';
import { Controller, type UseFormReturn } from 'react-hook-form';

type CostTrackingMethodProps = {
  methods: UseFormReturn<{ stepFour: StepFourFormData }>;
};

const CostTrackingMethod = ({ methods }: CostTrackingMethodProps) => {
  const { control } = methods;
  return (
    <div>
      <Label htmlFor='costTrackingMethod' className='text-gray-600'>
        Cost Tracking Method
      </Label>
      <Controller
        control={control}
        defaultValue='fixed-budget'
        name='stepFour.costTrackingMethod'
        render={({ field }) => (
          <Select
            value={field.value}
            defaultValue='fixed-budget'
            onValueChange={field.onChange}>
            <SelectTrigger className='h-12 mt-2'>
              <SelectValue placeholder='Please select a cost tracking method' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='fixed-budget' className='h-11'>
                Fixed Budget
              </SelectItem>
              <SelectItem value='hourly-billing' className='h-11'>
                Hourly Billing
              </SelectItem>
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

export default CostTrackingMethod;
