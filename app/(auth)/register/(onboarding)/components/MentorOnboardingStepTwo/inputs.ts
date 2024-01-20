import { InputEnum } from '@/app/(auth)/shared/types/enums';
import experienceYears from '@/data/experienceYears.json';
import industries from '@/data/industries.json';
import stacks from '@/data/stacks.json';
import tools from '@/data/tools.json';

export const inputs = [
  {
    label: 'Industry',
    name: 'industry',
    options: industries,
    placeholder: 'Select the industry',
    type: InputEnum.SELECT,
  },
  {
    label: 'Current place of work',
    name: 'company',
    placeholder: 'Where do you work currently?',
    type: InputEnum.TEXT,
  },
  {
    label: 'Years of experience',
    name: 'yearsOfExperience',
    options: experienceYears,
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
];
