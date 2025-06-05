import type { StepThreeFormData, Task } from '@/schemas/form/step3-schema';
import StepWrapper from '../step-wrapper';
import {
  useEffect,
  useMemo,
  useState,
  type Dispatch,
  type SetStateAction,
} from 'react';
import { Label } from '@/components/ui/label';
import { useFormContext } from 'react-hook-form';
import { MdError } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import TasksDialog from './tasks.dialog';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { TasksColumn } from './tasks-columns';

type Step3Props = {
  purpose: string;
  subtext: string;
  tasks?: Task[];
  setTasks?: Dispatch<SetStateAction<Task[]>> | undefined;
};

const Step3 = ({ purpose, subtext, tasks = [], setTasks }: Step3Props) => {
  const [rowSelection, setRowSelection] = useState<Record<number, boolean>>({});
  const [isOpen, setIsOpen] = useState(false);
  const {
    setValue,
    formState: { errors },
  } = useFormContext<{ stepThree: StepThreeFormData }>();

  useEffect(() => {
    if (setTasks) {
      setValue('stepThree.tasks', tasks, { shouldValidate: true });
    }
  }, [tasks, setTasks, setValue]);

  // Filter added tasks
  const addedTasks = useMemo(
    () => tasks?.filter((task) => task.isAdded === true),
    [tasks]
  );

  // Table
  const table = useReactTable({
    data: tasks,
    columns: TasksColumn,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  // Convert row selection into series of selected tasks
  const selectedTasks = Object.keys(rowSelection)
    .map(Number)
    .map((index) => tasks[index])
    .filter(Boolean);

  // Function to add task
  const handleAddTask = () => {
    if (setTasks) {
      setTasks((prevTasks) =>
        prevTasks.map((task) => ({
          ...task,
          isAdded: selectedTasks.some((selected) => selected.id === task.id),
        }))
      );
    }

    setIsOpen(false);
  };

  // Function to handle delete task
  const handleDeleteTask = (taskArg: Task) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskArg.id) {
        return { ...task, isAdded: false };
      }
      return task;
    });

    // Creat copy of row selection
    const updateRowSelection = { ...rowSelection };

    // Extract task index
    const taskIndex = tasks.findIndex((task) => task.id === taskArg.id);

    if (setTasks) {
      setTasks(updatedTasks);

      if (typeof taskIndex === 'number' && taskIndex !== -1) {
        delete updateRowSelection[taskIndex];

        setRowSelection(updateRowSelection);
      }
    }
  };
  return (
    <StepWrapper purpose={purpose} subtext={subtext}>
      <div className='mt-20 mb-30'>
        <div className='flex flex-col'>
          <Label className='text-gray-600 text-[14px]'>Tasks</Label>
          <span className='text-gray-400 text-[13px] '>
            Choose the tasks to add in the project
          </span>
        </div>

        <div className='border p-3 rounded flex flex-wrap gap-3 mt-7'>
          {/* If no task is added */}
          {addedTasks?.length === 0 && (
            <div className='h-7 flex items-center '>
              <span className='text-gray-500 text-sm'>
                Select tasks to add to this project..
              </span>
            </div>
          )}

          {/* If the tasks are added */}
          {addedTasks?.map((task) => (
            <AddedTask
              key={task.id}
              task={task}
              onDeleteTaskBtn={handleDeleteTask}
            />
          ))}
        </div>

        <div className='flex justify-between items-center'>
          {errors?.stepThree?.tasks && (
            <div className='text-red-500 text-sm flex items-center gap-2 mt-1 '>
              <MdError />
              <span>{errors?.stepThree?.tasks?.message}</span>
            </div>
          )}

          {/* Open dialog to add tasks */}
          <TasksDialog
            table={table}
            onAddTask={handleAddTask}
            openState={{ isOpen, setIsOpen }}
          />
        </div>
      </div>
    </StepWrapper>
  );
};

export default Step3;

function AddedTask({
  task,
  onDeleteTaskBtn,
}: {
  task: Task;
  onDeleteTaskBtn: (task: Task) => void;
}) {
  return (
    <div className='border p-3 rounded-md relative pr-6 mr-8'>
      <div className='flex items-center gap-2'>
        {/* Task Icon */}
        <div className='size-8 bg-primary/15 text-primary/45 rounded-md flex items-center justify-center '>
          <task.icon className='text-sm' />
        </div>

        {/* Task Detail */}
        <div className='flex flex-col'>
          <span className='font-medium text-sm'>{task.title}</span>
          <span className='text-[13px] text-gray-500'>{task.priority}</span>
        </div>
      </div>

      <IoClose
        onClick={() => onDeleteTaskBtn(task)}
        className='absolute text-sm top-1 right-1 text-gray-500 cursor-pointer'
      />
    </div>
  );
}
