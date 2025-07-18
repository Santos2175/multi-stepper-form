import { Checkbox } from '@/components/ui/checkbox';
import type { Task } from '@/schemas/form/step3-schema';
import type { ColumnDef } from '@tanstack/react-table';

import { Circle, ArrowUpCircle, CheckCircle2 } from 'lucide-react';
import { IoMdArrowUp } from 'react-icons/io';

import { IoArrowBack, IoArrowDown } from 'react-icons/io5';

// Format date
function formatDate(date: Date): string {
  // Extract date parts
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  // Add ordinal suffix
  const suffix =
    day % 10 === 1 && day !== 11
      ? 'st'
      : day % 10 === 2 && day !== 12
      ? 'nd'
      : day % 10 === 3 && day !== 13
      ? 'rd'
      : 'th';

  return `${day}${suffix} ${month} ${year}`;
}

// Render status icons
function renderStatusIcons(status: Task['status']) {
  switch (status) {
    case 'Not Started':
      return Circle;
    case 'In Progress':
      return ArrowUpCircle;
    case 'Completed':
      return CheckCircle2;

    default:
      break;
  }
}

// Render priority icons
function renderPriorityIcons(priority: Task['priority']) {
  switch (priority) {
    case 'Low':
      return IoArrowDown;
    case 'Medium':
      return IoArrowBack;
    case 'High':
      return IoMdArrowUp;

    default:
      break;
  }
}
// Task Columns
export const TasksColumn: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select All'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select Row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
    meta: { showOnSmallScreen: true },
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => {
      const title = row.original.title;
      const Icon = row.original.icon;

      return (
        <div className='flex items-center gap-2'>
          <div className='size-7 bg-primary/15 rounded-lg flex items-center justify-center'>
            <Icon className='text-[13px] text-primary/35' />
          </div>

          <span className='font-medium'>{title}</span>
        </div>
      );
    },
    meta: { showOnSmallScreen: true },
  },
  {
    accessorKey: 'description',
    header: 'Description',
    cell: ({ row }) => (
      <span className='text-gray-600'>{row.original.description}</span>
    ),
    meta: { showOnSmallScreen: false },
  },
  {
    accessorKey: 'dueDate',
    header: 'Due Date',
    cell: ({ row }) => {
      const date = row.original.dueDate;
      const formattedDate = formatDate(date);

      return formattedDate;
    },
    meta: { showOnSmallScreen: false },
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const StatusIcon = renderStatusIcons(row.original.status);
      const status = row.original.status;

      return (
        <div>
          {StatusIcon && (
            <div className='flex items-center gap-2 text-sm'>
              <StatusIcon size={18} className='text-gray-600 opacity-95' />
              <span>{status}</span>
            </div>
          )}
        </div>
      );
    },
    meta: { showOnSmallScreen: false },
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
    cell: ({ row }) => {
      const PriorityIcon = renderPriorityIcons(row.original.priority);
      const priority = row.original.priority;

      return (
        <div>
          {PriorityIcon && (
            <div className='flex items-center gap-2 text-sm'>
              <PriorityIcon className='text-gray-600 opacity-95' />
              <span>{priority}</span>
            </div>
          )}
        </div>
      );
    },
    meta: { showOnSmallScreen: false },
  },
];
