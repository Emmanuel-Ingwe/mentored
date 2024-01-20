import { InputEnum } from '@/app/(auth)/shared/types/enums';
import { countries } from '@/shared/lib/countries';

export const inputs = [
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
  {
    defaultValue: { label: 'Yes', value: 'Yes' },
    label: 'Are you a newbie in tech?',
    name: 'hasExperience',
    options: [
      { label: 'No', value: 'No' },
      { label: 'Yes', value: 'Yes' },
    ],
    placeholder: '',
    required: false,
    type: InputEnum.SELECT,
  },
];
