import type { StepOneFormData } from '@/schemas/form/step1-schema';
import { Controller, type UseFormReturn } from 'react-hook-form';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

type ProjectStartDateProps = {
  methods: UseFormReturn<{ stepOne: StepOneFormData }>;
};

const ProjectStartDate = ({ methods }: ProjectStartDateProps) => {
  const { control } = methods;

  const isDateDisabled = (date: Date) => {
    const today = new Date();

    today.setHours(0, 0, 0, 0);
    return date < today;
  };
  return (
    <div className='h-28'>
      <Label className='text-gray-600 mb-2'>Start Date</Label>
      <Controller
        control={control}
        defaultValue={new Date()}
        name='stepOne.startDate'
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
                  <span>Pick a Date</span>
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

export default ProjectStartDate;
