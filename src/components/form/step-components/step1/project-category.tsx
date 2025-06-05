import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type {
  ProjectCategorySchema,
  StepOneFormData,
} from '@/schemas/form/step1-schema';
import { Controller, type UseFormReturn } from 'react-hook-form';
import type { IconType } from 'react-icons/lib';
import type { z } from 'zod';

import {
  FaChartLine,
  FaCode,
  FaHardHat,
  FaGraduationCap,
  FaHeart,
} from 'react-icons/fa';

type Category = z.infer<typeof ProjectCategorySchema>['category'];

type SelectedItemType = {
  label: Category;
  icon: IconType;
};

const selectedItems: SelectedItemType[] = [
  {
    label: 'Marketing',
    icon: FaChartLine,
  },
  {
    label: 'Software Development',
    icon: FaCode,
  },
  {
    label: 'Construction',
    icon: FaHardHat,
  },
  {
    label: 'Education',
    icon: FaGraduationCap,
  },
  {
    label: 'Healthcare',
    icon: FaHeart,
  },
];

type ProjectCategoryProps = {
  methods: UseFormReturn<{ stepOne: StepOneFormData }>;
};

const ProjectCategory = ({ methods }: ProjectCategoryProps) => {
  const { control } = methods;
  return (
    <div className='h-28'>
      <Label htmlFor='projectCategory' className='text-gray-600 mb-2'>
        Project Category
      </Label>
      <Controller
        control={control}
        defaultValue={'Software Development'}
        name='stepOne.category'
        render={({ field }) => (
          <Select
            value={field.value}
            onValueChange={(value: string) => {
              const selectedItem = selectedItems.find(
                (item) => item.label === value
              );

              if (selectedItem) {
                field.onChange(selectedItem.label);
              }
            }}>
            <SelectTrigger className='h-[52px] mt-1'>
              <SelectValue placeholder='Select a category' />
            </SelectTrigger>
            <SelectContent>
              {selectedItems.map((item) => (
                <SelectItem key={item.label} value={item.label}>
                  {' '}
                  <div className='flex items-center gap-2'>
                    {/* icon */}
                    <div className='bg-primary/10 size-8 rounded-md flex items-center justify-center'>
                      <item.icon className='text-primary/45' />
                    </div>
                    {/* label */}
                    <span> {item.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
};

export default ProjectCategory;
