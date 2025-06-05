import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import type { StepOneFormData } from '@/schemas/form/step1-schema';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Controller, type UseFormReturn } from 'react-hook-form';

type ProjectEndDateProps = {
  methods: UseFormReturn<{ stepOne: StepOneFormData }>;
};

function getNextDate() {
  // Get todays date
  const today = new Date();

  // Copy of todays date
  const nextDay = new Date(today);

  // Add 1 day to copy of todays date
  nextDay.setDate(today.getDate() + 1);

  // Set hours
  nextDay.setHours(0, 0, 0, 0);

  return nextDay;
}

const ProjectEndDate = ({ methods }: ProjectEndDateProps) => {
  const { control } = methods;

  const isDateDisabled = (date: Date) => {
    const nextDay = getNextDate();

    return date < nextDay;
  };
  return (
    <div className='h-[140px]'>
      <Label className='text-gray-600 mb-2'>End Date</Label>
      <Controller
        control={control}
        defaultValue={new Date()}
        name='stepOne.endDate'
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className='w-full justify-start text-left h-12 font-normal'>
                <CalendarIcon className='mr-2 h-4 w-4' />
                {field.value ? (
                  format(field.value, 'PPP')
                ) : (
                  <span>Pick an end date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
              <Calendar
                className='w-full'
                mode='single'
                selected={field.value}
                disabled={isDateDisabled}
                onSelect={field.onChange}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      />
    </div>
  );
};

export default ProjectEndDate;
