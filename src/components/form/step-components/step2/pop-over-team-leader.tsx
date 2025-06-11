import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import type { User } from '@/schemas/form/step2-schema';
import { type Dispatch, type SetStateAction } from 'react';
import { FaPlus, FaUser } from 'react-icons/fa';
import { FaCirclePlus } from 'react-icons/fa6';
import { TbFlag2Filled } from 'react-icons/tb';

type PopOverTeamLeaderProps = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>> | undefined;
};

const PopOverTeamLeader = ({ users, setUsers }: PopOverTeamLeaderProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'secondary'}
          className='text-sm border border-gray-200 shadow-md'>
          <FaPlus size={12} className='text-[10px] text-gray-600' />
          <span>Add Leader</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Command>
          <CommandInput placeholder='Search a member...' />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            {setUsers && (
              <>
                {users.map((user) => (
                  <CommandItem key={user.id}>
                    <SingleUser user={user} setUsers={setUsers} />
                  </CommandItem>
                ))}
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default PopOverTeamLeader;

function SingleUser({
  user,
  setUsers,
}: {
  user: User;
  setUsers: Dispatch<SetStateAction<User[]>>;
}) {
  // Update leader
  function updateLeader() {
    setUsers((prevState) =>
      prevState.map((u) => {
        if (u.id === user.id) {
          return { ...u, isLeader: true };
        }
        return { ...u, isLeader: false };
      })
    );
  }

  return (
    <div className='flex items-center justify-between w-full'>
      <div className='flex items-center gap-2 relative'>
        {/* User avatar */}
        <span className='size-8 bg-primary/15 rounded-full flex items-center justify-center'>
          <FaUser className='text-sm text-primary/45' />
        </span>

        {/* User details */}
        <div className='flex flex-col'>
          <span className='font-medium'>{user.name}</span>
          <span className='text-slate-500 text-[13px]'>{user.role}</span>
        </div>
      </div>

      {/* If user is not leader show button to add, else show flag */}
      <div>
        {!user.isLeader ? (
          <Button variant={'outline'} onClick={updateLeader}>
            <FaCirclePlus className='text-gray-400' />
          </Button>
        ) : (
          <Button variant={'ghost'} disabled={true}>
            <TbFlag2Filled className='text-blue-500' />
          </Button>
        )}
      </div>
    </div>
  );
}
