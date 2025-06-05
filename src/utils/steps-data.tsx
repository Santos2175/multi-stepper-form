import type { Step } from '@/types/types';
import type { User } from '@/schemas/form/step2-schema';
import type { Task } from '@/schemas/form/step3-schema';

import { FaProjectDiagram, FaMoneyBillWave } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { LuMilestone } from 'react-icons/lu';
import { RiSpaceShipFill } from 'react-icons/ri';
import { FaPaintBrush, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa';

import Step1 from '@/components/form/step-components/step1/step1';
import Step2 from '@/components/form/step-components/step2/step2';
import Step3 from '@/components/form/step-components/step3/step3';
import Step4 from '@/components/form/step-components/step4/Step4';
import Step5 from '@/components/form/step-components/step5/step5';

export const STEP_DATA = {
  step1: {
    purpose: 'Define the basic details of the project',
    subtext:
      'Provide a clear and concise overview of your project to help your team understand its scope and objectives.',
  },
  step2: {
    purpose: 'Assign team members and define their roles',
    subtext:
      'Add team members and assign roles to ensure everyone knows their responsibilities. You can also invite external collaborators if needed.',
  },
  step3: {
    purpose: 'Break down the project into tasks and milestones',
    subtext:
      'Create a detailed task list with deadlines and priorities to keep your project on track. Add milestones to mark key achievements.',
  },
  step4: {
    purpose: 'Plan the project’s financial and resource allocation',
    subtext:
      'Outline your budget and allocate resources effectively to avoid overspending and ensure smooth project execution.',
  },
  step5: {
    purpose: 'Finalize and launch the project',
    subtext:
      'Review all the details you’ve entered to ensure everything is accurate. Once confirmed, launch your project and get started!',
  },
};

// STEPS DATA
export const STEPS: Step[] = [
  {
    purpose: STEP_DATA.step1.purpose,
    subtext: STEP_DATA.step1.subtext,
    icon: FaProjectDiagram,
    label: 'Project Overview',
    content: () => (
      <Step1
        purpose={STEP_DATA.step1.purpose}
        subtext={STEP_DATA.step1.subtext}
      />
    ),
  },
  {
    purpose: STEP_DATA.step2.purpose,
    subtext: STEP_DATA.step2.subtext,
    icon: RiTeamFill,
    label: 'Team & Roles',
    content: ({ users, setUsers }) => (
      <Step2
        purpose={STEP_DATA.step2.purpose}
        subtext={STEP_DATA.step2.subtext}
        users={users}
        setUsers={setUsers}
      />
    ),
  },
  {
    purpose: STEP_DATA.step3.purpose,
    subtext: STEP_DATA.step3.subtext,
    icon: LuMilestone,
    label: 'Tasks & Milestones',
    content: () => (
      <Step3
        purpose={STEP_DATA.step3.purpose}
        subtext={STEP_DATA.step3.subtext}
      />
    ),
  },
  {
    purpose: STEP_DATA.step4.purpose,
    subtext: STEP_DATA.step4.subtext,
    icon: FaMoneyBillWave,
    label: 'Budget & Resources',
    content: () => (
      <Step4
        purpose={STEP_DATA.step4.purpose}
        subtext={STEP_DATA.step4.subtext}
      />
    ),
  },
  {
    purpose: STEP_DATA.step5.purpose,
    subtext: STEP_DATA.step5.subtext,
    icon: RiSpaceShipFill,
    label: 'Review & Lunch',
    content: () => (
      <Step5
        purpose={STEP_DATA.step5.purpose}
        subtext={STEP_DATA.step5.subtext}
      />
    ),
  },
];

// Step 2 data
export const usersArray: User[] = [
  {
    id: '1',
    name: 'Santosh Gurung',
    email: 'santosh@example.com',
    role: 'Owner',
    isAdded: true,
    isLeader: true,
  },
  {
    id: '2',
    name: 'Ramesh Shrestha',
    email: 'ramesh@example.com',
    role: 'Member',
    isAdded: false,
    isLeader: false,
  },
  {
    id: '3',
    name: 'Bibek Timalsina',
    email: 'p@example.com',
    role: 'Viewer',
    isAdded: false,
    isLeader: false,
  },
];

export const rolesArray = [
  { name: 'Owner', isChecked: false },
  { name: 'Member', isChecked: false },
  { name: 'Viewer', isChecked: false },
];

// Tasks data
export const TASK_DATA: Task[] = [
  {
    id: '1',
    title: 'Design Homepage',
    description: 'Create the layout and design for the homepage.',
    dueDate: new Date('2023-12-15'),
    status: 'Completed',
    priority: 'High',
    isAdded: false,
    icon: FaPaintBrush,
  },
  {
    id: '2',
    title: 'Develop API Endpoints',
    description: 'Build RESTful API endpoints for the backend.',
    dueDate: new Date('2023-12-15'),
    status: 'Not Started',
    priority: 'Medium',
    isAdded: false,
    icon: FaCode,
  },
  {
    id: '3',
    title: 'Write Unit Tests',
    description: 'Write unit tests for the core functionality.',
    dueDate: new Date('2023-12-18'),
    status: 'In Progress',
    priority: 'High',
    isAdded: false,
    icon: FaCheckCircle,
  },
  {
    id: '4',
    title: 'Deploy to Production',
    description: 'Deploy the application to the production server.',
    dueDate: new Date('2023-12-22'),
    status: 'Not Started',
    priority: 'Medium',
    isAdded: false,
    icon: FaRocket,
  },
];
