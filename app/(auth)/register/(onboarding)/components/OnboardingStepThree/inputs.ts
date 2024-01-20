import { InputEnum } from '@/app/(auth)/shared/types/enums';
import tools from '@/data/tools.json';

export const inputs = [
  {
    isMulti: true,
    label: 'Interests',
    name: 'interestedTools',
    options: tools,
    placeholder: 'Select or type interests',
    type: InputEnum.SELECT,
  },
  {
    label: 'Upload Profile Photo',
    name: 'profilePicture',
    placeholder: 'Enter url',
    type: InputEnum.IMAGE,
  },
  {
    label: 'Summary',
    name: 'careerSummary',
    placeholder: 'Enter a professional summary...',
    type: InputEnum.TEXTAREA,
  },
];
