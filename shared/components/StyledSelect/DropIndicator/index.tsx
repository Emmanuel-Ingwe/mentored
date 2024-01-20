/* eslint-disable @typescript-eslint/no-explicit-any */
import { components, type DropdownIndicatorProps } from 'react-select';
import { ChevronArrowDown } from '../../Icons/ChevronArrowDown';

export const DropdownIndicator = (props: DropdownIndicatorProps<any, any>) => {
  return (
    <components.DropdownIndicator {...props}>
      <ChevronArrowDown className="h-4 w-4 stroke-black stroke-2" />
    </components.DropdownIndicator>
  );
};
