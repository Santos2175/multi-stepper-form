import type { IconType } from 'react-icons/lib';

export type Step = {
  purpose: string;
  subtext: string;
  icon: IconType;
  label: string;
  content: string;
};
