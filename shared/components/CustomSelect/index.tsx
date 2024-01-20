/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-handler-names */

import type { ControllerRenderProps } from 'react-hook-form';
import { cn } from '@/shared/lib/utils';
import { FormControl } from '../ui/form';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../ui/select';

type OptionsType = {
  label: string;
  value: string;
};

type Props = {
  field: ControllerRenderProps<any, string>;
  options: OptionsType[];
  placeholder?: string;
  className?: string;
};

export const CustomSelect = ({
  field,
  options,
  placeholder,
  className,
}: Props) => {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <FormControl>
        <SelectTrigger className={cn('h-11 text-gray-900', className)}>
          <SelectValue className="text-gray-500" placeholder={placeholder} />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        {options.map(({ label, value }, i) => {
          return (
            <SelectItem key={i} value={value}>
              {label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};
