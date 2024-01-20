import { InputEnum } from '@/app/(auth)/shared/types/enums';
import roles from '@/data/roles.json';
import { countries } from '@/shared/lib/countries';

export const inputs = [
  {
    label: 'Role Title',
    name: 'jobTitle',
    options: roles,
    placeholder: 'E.g data analyst, product designer',
    type: InputEnum.SELECT,
  },
  {
    label: 'LinkedIn Profile URL',
    name: 'linkedinUrl',
    placeholder: 'Enter url',
    required: false,
    type: InputEnum.URL,
  },
  {
    label: 'GitHub or Portfolio URL',
    name: 'githubUrl',
    placeholder: 'Enter url',
    required: false,
    type: InputEnum.URL,
  },
  {
    label: 'Location',
    name: 'country',
    options: countries,
    placeholder: 'Select country',
    required: false,
    type: InputEnum.SELECT,
  },
];
