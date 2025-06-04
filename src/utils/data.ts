import type { Step } from '@/types/types';
import { FaProjectDiagram, FaMoneyBillWave } from 'react-icons/fa';
import { RiTeamFill } from 'react-icons/ri';
import { LuMilestone } from 'react-icons/lu';
import { RiSpaceShipFill } from 'react-icons/ri';

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
    content: 'Step 1',
  },
  {
    purpose: STEP_DATA.step2.purpose,
    subtext: STEP_DATA.step2.subtext,
    icon: RiTeamFill,
    label: 'Team & Roles',
    content: 'Step 2',
  },
  {
    purpose: STEP_DATA.step3.purpose,
    subtext: STEP_DATA.step3.subtext,
    icon: LuMilestone,
    label: 'Tasks & Milestones',
    content: 'Step 3',
  },
  {
    purpose: STEP_DATA.step4.purpose,
    subtext: STEP_DATA.step4.subtext,
    icon: FaMoneyBillWave,
    label: 'Budget & Resources',
    content: 'Step 4',
  },
  {
    purpose: STEP_DATA.step5.purpose,
    subtext: STEP_DATA.step5.subtext,
    icon: RiSpaceShipFill,
    label: 'Review & Lunch',
    content: 'Step 5',
  },
];
