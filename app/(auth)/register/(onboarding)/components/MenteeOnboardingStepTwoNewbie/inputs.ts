import { InputEnum } from '@/app/(auth)/shared/types/enums';
import roles from '@/data/roles.json';
import stacks from '@/data/stacks.json';
import tools from '@/data/tools.json';

export const inputs = [
  {
    label: 'Intended tech track',
    name: 'jobTitle',
    options: roles,
    placeholder: 'E.g data analyst, product designer',
    type: InputEnum.SELECT,
  },
  {
    isMulti: true,
    label: 'Technologies',
    name: 'stack',
    options: stacks,
    placeholder: 'Select technologies',
    type: InputEnum.SELECT,
  },
  {
    isMulti: true,
    label: 'Tools',
    name: 'tools',
    options: tools,
    placeholder: 'Select or type tools',
    type: InputEnum.SELECT,
  },
  {
    label: 'Learning period so far',
    name: 'learningPeriod',
    options: [
      { label: '1-3 months', value: '1-3 months' },
      { label: '3-6 months', value: '3-6 months' },
      { label: '6-12 months', value: '6-12 months' },
    ],
    placeholder: '0-3 months',
    type: InputEnum.SELECT,
  },
];
