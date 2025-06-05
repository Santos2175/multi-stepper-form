import { Label } from '@/components/ui/label';
import type { StepTwoFormData, User } from '@/schemas/form/step2-schema';
import type { Dispatch, SetStateAction } from 'react';
import type { UseFormReturn } from 'react-hook-form';
import { FaFlag, FaUser } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { MdError } from 'react-icons/md';
import MemberDialog from './member-dialog';

type TeamMemberProps = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>> | undefined;
  methods: UseFormReturn<{ stepTwo: StepTwoFormData }>;
};

const TeamMembers = ({ users, setUsers, methods }: TeamMemberProps) => {
  const {
    formState: { errors },
  } = methods;
  return (
    <div className='mb-6 mt-16'>
      <Label className='textgray-600 mb-2'>Team Members</Label>

      {/* Container for displaying list of members */}
      <div className='p-3 rounded-lg border flex flex-wrap gap-3'>
        {users.every((user) => user.isAdded === false) && (
          <div className='h-8 flex justify-center  text-slate-600 items-center'>
            <span className='text-sm italic'>
              Please add a member to the project...
            </span>
          </div>
        )}

        {/* Map through the users array and render a single user component for each user */}
        {setUsers && (
          <>
            {users
              .filter((user) => user.isAdded === true)
              .map((user, index) => (
                <SingleUser key={index} user={user} setUsers={setUsers} />
              ))}
          </>
        )}
      </div>

      {/* Member dialogue to add or remove user */}
      <div className='flex justify-between'>
        {errors?.stepTwo?.users && (
          <div className='text-red-500 flex items-center gap-2 mt-2'>
            <MdError />
            <span className='text-sm'>{errors.stepTwo.users.message}</span>
          </div>
        )}

        {setUsers && (
          <>
            <MemberDialog users={users} setUsers={setUsers} />
          </>
        )}
      </div>
    </div>
  );
};

export default TeamMembers;

// SingleUser
function SingleUser({
  user,
  setUsers,
}: {
  user: User;
  setUsers: Dispatch<SetStateAction<User[]>>;
}) {
  function removeUser(userArg: User) {
    setUsers((prevUsers) =>
      prevUsers.map((user) => {
        if (userArg.id === user.id) {
          return { ...user, isAdded: !user.isAdded };
        }
        return user;
      })
    );
  }

  return (
    <div className='p-2 border rounded-lg pl-5 pr-10 flex items-center gap-2 select-none relative'>
      {/* User avatar/icon */}
      <span className='size-8 bg-primary/15 rounded-full flex items-center justify-center'>
        <FaUser className='text-sm text-primary/45' />
      </span>

      {/* User details (name and role) */}
      <div className='flex items-start gap-3'>
        <div className='flex flex-col'>
          <span className='text-[14px] font-medium'>{user.name}</span>
          <span className='text-slate-500 text-[13px]'>{user.role}</span>
        </div>

        {user.isLeader && (
          <FaFlag size={12} className='text-sm mt-1 text-blue-500' />
        )}
      </div>

      {/* Close Icon */}
      <IoIosClose
        onClick={() => removeUser(user)}
        className='absolute text-[18px] top-1 right-1 cursor-pointer text-slate-500'
      />
    </div>
  );
}
