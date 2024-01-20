import { InputEnum } from '@/app/(auth)/shared/types/enums';

export const inputs = [
  {
    label: InputEnum.EMAIL,
    name: 'email',
    placeholder: 'Enter your email',
    required: true,
    type: InputEnum.EMAIL,
  },
  {
    label: 'First Name',
    name: 'firstName',
    placeholder: 'Enter your full name',
    required: true,
    type: InputEnum.TEXT,
  },
  {
    label: 'Last Name',
    name: 'lastName',
    placeholder: 'Enter your full name',
    required: true,
    type: InputEnum.TEXT,
  },
  {
    description: 'Must be at least 8 characters',
    label: InputEnum.PASSWORD,
    name: 'password',
    placeholder: 'Create your password',
    required: true,
    type: InputEnum.PASSWORD,
  },
];
