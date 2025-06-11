import { Button } from '@/components/ui/button';
import type { User } from '@/schemas/form/step2-schema';
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import type { Dispatch, SetStateAction } from 'react';
import { FaPlus, FaUser } from 'react-icons/fa';
import { TbFlag2Filled } from 'react-icons/tb';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

import { IoPersonAddSharp, IoPersonRemoveSharp } from 'react-icons/io5';

type MemberDialogProps = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>>;
};

const MemberDialog = ({ users, setUsers }: MemberDialogProps) => {
  const alreadyAddedUsers = users.filter((user) => user.isAdded === true);
  const notAddedUsers = users.filter((user) => user.isAdded === false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={'secondary'}
          className='text-sm mt-4 cursor-pointer border border-gray-200 shadow-md'>
          <FaPlus size={12} className='text-[10px] text-gray-600' />
          <span>Add Member</span>
        </Button>
      </DialogTrigger>
      <DialogContent className='min-w-68 p-2 md:p-4 mx-auto'>
        <DialogHeader>
          <DialogTitle className='text-[22px]'>Manage Team Members</DialogTitle>
          <DialogDescription>
            {' '}
            Add new or remove existing members to this project
          </DialogDescription>
        </DialogHeader>

        {/* Users list */}
        <div className='mt-4'>
          <Command>
            <CommandInput placeholder='Search and add team members...' />
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandList className='mt-6'>
              {/* Already added users */}
              {alreadyAddedUsers.length > 0 && (
                <CommandGroup heading='Already Added Members'>
                  {alreadyAddedUsers.map((user) => (
                    <CommandItem key={user.id}>
                      <UserItem user={user} setUsers={setUsers} />
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}

              {/* Not added users */}
              {notAddedUsers.length > 0 && (
                <CommandGroup heading='All Members'>
                  {notAddedUsers.map((user) => (
                    <CommandItem key={user.id}>
                      {' '}
                      <UserItem user={user} setUsers={setUsers} />
                    </CommandItem>
                  ))}
                </CommandGroup>
              )}
            </CommandList>
          </Command>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MemberDialog;

// User Item
function UserItem({
  user,
  setUsers,
}: {
  user: User;
  setUsers: Dispatch<SetStateAction<User[]>>;
}) {
  // Function to add or remove user
  const addOrRemove = (userArg: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (userArg.id === user.id) {
          return { ...user, isAdded: !user.isAdded };
        }
        return user;
      })
    );
  };
  return (
    <div className='flex justify-between items-center w-full'>
      {/* Avatar, name , role */}
      <div className='flex items-center gap-6'>
        {/* Avatar */}
        <div className='size-8 bg-primary/25 rounded-full  flex items-center justify-center text-primary/35'>
          <FaUser className='text-sm' />
        </div>

        {/* Name and role */}
        <div className='flex flex-col'>
          <span className='font-bold'>{user.name}</span>
          <span className='text-slate-500'>{user.role}</span>
        </div>

        {/* Add flag if the user is leader */}
        {user.isLeader && <TbFlag2Filled className='text-slate-400' />}
      </div>

      {/* Roles and add, remove button */}
      <div className='flex items-center gap-2'>
        {/* Roles */}

        {/* Add or remove button */}
        <div>
          {user.isAdded ? (
            <Button variant={'outline'} onClick={() => addOrRemove(user)}>
              <IoPersonRemoveSharp className='text-red-500' />
            </Button>
          ) : (
            <Button variant={'outline'} onClick={() => addOrRemove(user)}>
              <IoPersonAddSharp className='text-primary' />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
