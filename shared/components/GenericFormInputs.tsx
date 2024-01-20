import type { FC } from 'react';
import _ from 'lodash';
import type { UseFormReturn } from 'react-hook-form';
import type * as z from 'zod';
import { ErrorAlertCircle } from './Icons/ErrorAlertCircle';
import { StyledSelect } from './StyledSelect';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Uploader } from './Uploader';
import { InputEnum } from '../../app/(auth)/shared/types/enums';

type Option = {
  label: string;
  value: string;
};
type Props = {
  form: UseFormReturn<z.infer<z.ZodType>, any, undefined>;
  type: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  description?: string;
  name: string;
  options?: Option[];
  defaultValue?: Option | string;
  isMulti?: boolean;
  isClearable?: boolean;
};

const GenericFormInputs: FC<Props> = ({
  form,
  type,
  label,
  required = false,
  placeholder,
  description,
  name,
  options,
  defaultValue,
  isMulti = false,
  isClearable = false,
}) => {
  switch (type) {
    case InputEnum.EMAIL:
    case InputEnum.PASSWORD:
    case InputEnum.TEXT:
    case InputEnum.URL:
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-slate-50">
                  {_.capitalize(label)}
                  {required && <sup className="">*</sup>}
                </FormLabel>
                <FormControl>
                  <div className="!w-ful group relative">
                    <Input
                      {...field}
                      placeholder={placeholder}
                      type={_.lowerCase(type)}
                      className="!active:w-full !focus:w-full h-11 !w-full rounded-lg group-aria-[invalid='true']:border-red-500"
                    />
                    <ErrorAlertCircle className="invisible absolute right-3 top-2/4 -translate-y-2/4 group-aria-[invalid='true']:visible" />
                  </div>
                </FormControl>
                {description && (
                  <FormDescription>{description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    case InputEnum.SELECT:
      if (options) {
        return (
          <FormField
            control={form.control}
            name={name}
            render={({ field }) => {
              const handleOnChange = field.onChange;

              return (
                <FormItem>
                  <FormLabel>{_.capitalize(label)}</FormLabel>
                  <StyledSelect
                    isClearable={isClearable}
                    defaultValue={defaultValue ?? field.value}
                    {...field}
                    options={options}
                    isMulti={isMulti}
                    onChange={(value) => {
                      handleOnChange(value);
                    }}
                  />
                  {description && (
                    <FormDescription>{description}</FormDescription>
                  )}
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        );
      }
      break;
    case InputEnum.IMAGE:
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-slate-50">
                  {_.capitalize(label)}
                  {required && <sup className="text-red-500">*</sup>}
                </FormLabel>
                <FormControl>
                  <Uploader />
                </FormControl>
                {description && (
                  <FormDescription>{description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    case InputEnum.TEXTAREA:
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-gray-700 dark:text-slate-50">
                  {_.capitalize(label)}
                  {required && <sup className="text-red-500">*</sup>}
                </FormLabel>
                <FormControl>
                  <Textarea {...field} placeholder={placeholder} />
                </FormControl>
                {description && (
                  <FormDescription>{description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            );
          }}
        />
      );
    default:
      return null;
  }
};

export default GenericFormInputs;
//       />
//     );
//   } else if (type === InputEnum.IMAGE) {
//     return (
//       <FormField
//         control={form.control}
//         name={name}
//         render={({ field }) => {
//           return (
//             <FormItem>
//               <FormLabel className="text-gray-700 dark:text-slate-50">
//                 {_.capitalize(label)}
//                 {required && <sup className="text-red-500">*</sup>}
//               </FormLabel>
//               <FormControl>
//                 <Uploader />
//               </FormControl>
//               {description && <FormDescription>{description}</FormDescription>}
//               <FormMessage />
//             </FormItem>
//           );
//         }}
//       />
//     );
//   } else if (type === InputEnum.TEXTAREA) {
//     return (
//       <FormField
//         control={form.control}
//         name={name}
//         render={({ field }) => {
//           return (
//             <FormItem>
//               <FormLabel className="text-gray-700 dark:text-slate-50">
//                 {_.capitalize(label)}
//                 {required && <sup className="text-red-500">*</sup>}
//               </FormLabel>
//               <FormControl>
//                 <Textarea {...field} placeholder={placeholder} />
//               </FormControl>

//               {description && <FormDescription>{description}</FormDescription>}
//               <FormMessage />
//             </FormItem>
//           );
//         }}
//       />
//     );
//   }
//   return null;
// };

// export default GenericFormInputs;
