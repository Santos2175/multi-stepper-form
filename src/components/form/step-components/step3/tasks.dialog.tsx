import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { Task } from '@/schemas/form/step3-schema';
import type { Table } from '@tanstack/react-table';
import TasksTable from './tasks-table';

const TEXTS = {
  TEXT_BUTTON: 'Select Task',
  DIALOG_HEADER: 'Manage Tasks',
  DIALOG_DESCRIPTION:
    'Create and manage tasks for your project. Select the tasks to add  to your project',
};

type TasksDialogProps = {
  table: Table<Task>;
  onAddTask: () => void;
  openState: { isOpen: boolean; setIsOpen: (open: boolean) => void };
};

const TasksDialog = ({ table, onAddTask, openState }: TasksDialogProps) => {
  return (
    <Dialog open={openState.isOpen} onOpenChange={openState.setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant={'secondary'}
          className='text-sm mt-4 border border-gray-200 shadow-md'>
          <span>{TEXTS.TEXT_BUTTON}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-5xl'>
        <DialogHeader>
          <DialogTitle className='text-2xl'>{TEXTS.DIALOG_HEADER}</DialogTitle>
          <DialogDescription>{TEXTS.DIALOG_DESCRIPTION}</DialogDescription>
        </DialogHeader>

        {/* Tasks table */}
        <div>
          <TasksTable table={table} />
        </div>

        {/* Dialog footer */}
        <DialogFooter>
          <div className='flex items-center gap-6 mt-4 mb-3'>
            <DialogClose asChild>
              <Button type='button' variant={'secondary'} className='h-11'>
                Close
              </Button>
            </DialogClose>
            <Button onClick={onAddTask} className='h-11' variant={'default'}>
              Update Task(s)
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TasksDialog;
