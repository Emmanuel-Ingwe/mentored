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
    label: InputEnum.PASSWORD,
    name: 'password',
    placeholder: 'Create your password',
    required: true,
    type: InputEnum.PASSWORD,
  },
];
