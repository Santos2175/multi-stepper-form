import { useFormContext } from 'react-hook-form';
import StepWrapper from '../step-wrapper';
import type { StepTwoFormData, User } from '@/schemas/form/step2-schema';
import TeamMembers from './team-members';
import TeamLeader from './team-leader';
import type { Dispatch, SetStateAction } from 'react';

type Step2Props = {
  purpose: string;
  subtext: string;
  users?: User[];
  setUsers?: Dispatch<SetStateAction<User[]>> | undefined;
};

const Step2 = ({ purpose, subtext, users, setUsers }: Step2Props) => {
  const methods = useFormContext<{ stepTwo: StepTwoFormData }>();
  return (
    <StepWrapper purpose={purpose} subtext={subtext}>
      <div className='mt-10'>
        <TeamMembers
          users={users ?? []}
          setUsers={setUsers}
          methods={methods}
        />
        <TeamLeader users={users ?? []} setUsers={setUsers} />
      </div>
    </StepWrapper>
  );
};

export default Step2;
