import { Label } from '@/components/ui/label';
import type { User } from '@/schemas/form/step2-schema';
import type { Dispatch, SetStateAction } from 'react';
import { FaUser } from 'react-icons/fa';
import PopOverTeamLeader from './pop-over-team-leader';

type TeamLeaderProps = {
  users: User[];
  setUsers: Dispatch<SetStateAction<User[]>> | undefined;
};

const TeamLeader = ({ users, setUsers }: TeamLeaderProps) => {
  console.log(users);
  const teamLeader = users.find((user) => user.isLeader);

  return (
    <div className='mt-[66px] w-1/2'>
      <div className='flex flex-col'>
        <Label className='text-gray-600'>Team Leader</Label>
        <span className='text-[13px] mt-1 text-gray-400'>
          Please choose a team leader
        </span>
      </div>

      <div className='border p-3 w-full rounded-lg mt-4 flex justify-between items-center'>
        <div>
          {teamLeader ? (
            <SingleUser user={teamLeader} />
          ) : (
            <span className='text-slate-500 text-sm'>
              Please add a team leader..
            </span>
          )}
        </div>

        {/* Popup */}
        <PopOverTeamLeader users={users ?? []} setUsers={setUsers} />
      </div>
    </div>
  );
};

export default TeamLeader;

function SingleUser({ user }: { user: User }) {
  return (
    <div className='p-2 border rounded-lg px-7 flex items-center gap-2 select-none relative'>
      {/* User icon */}
      <span className='size-8 bg-primary/15 rounded-full flex items-center justify-center'>
        <FaUser className='text-primary/45 text-sm' />
      </span>

      {/* User details */}
      <div className='flex flex-col'>
        <span className='font-medium text-[14px]'>{user.name}</span>
        <span className='text-[13px] text-slate-500'>{user.role}</span>
      </div>
    </div>
  );
}
