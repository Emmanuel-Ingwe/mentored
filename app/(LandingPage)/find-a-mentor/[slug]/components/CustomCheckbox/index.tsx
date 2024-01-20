import { Check } from '@/shared/components/Icons/Check';

export const CustomCheckbox = ({
  ...props
}: React.ComponentPropsWithoutRef<'input'>) => {
  return (
    <>
      <input
        type="checkbox"
        name=""
        id=""
        {...props}
        className="peer relative h-4 w-4 appearance-none rounded-[0.25rem] border border-gray-300 checked:border-none checked:bg-primaryx-500"
      />
      <Check
        className="pointer-events-none absolute ml-0.5 hidden h-2.5 w-2.5 peer-checked:block"
        pathClassName="stroke-white stroke-[3px]"
      />
    </>
  );
};
