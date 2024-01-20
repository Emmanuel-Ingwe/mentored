import { InputEnum } from '@/app/(auth)/shared/types/enums';
import roles from '@/data/roles.json';
import stacks from '@/data/stacks.json';
import tools from '@/data/tools.json';

export const inputs = [
  {
    label: 'Current role title',
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
    label: 'Years of experience',
    name: 'yearsOfExperience',
    options: [
      { label: '0-1 year', value: '0-1 year' },
      { label: '1-3 years', value: '1-3 years' },
      { label: '3-5 years', value: '3-5 years' },
    ],
    placeholder: '0-1 year',
    type: InputEnum.SELECT,
  },
];
