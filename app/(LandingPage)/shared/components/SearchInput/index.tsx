import React from 'react';
import { SearchIcon } from '@/shared/components/Icons/SearchIcon';
import type { InputProps } from '@/shared/components/ui/input';
import { Input } from '@/shared/components/ui/input';
import { cn } from '@/shared/lib/utils';

type Props = {
  wrapperClassName?: string;
};

export const SearchInput = React.forwardRef<
  HTMLInputElement,
  InputProps & Props
>(({ className, wrapperClassName, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'relative flex h-12 w-full items-center lg:h-[3.75rem] lg:w-[25rem]',
        wrapperClassName,
      )}
    >
      <SearchIcon className="absolute left-[0.5rem] top-2/4 h-5 w-5 -translate-y-2/4 focus-visible:hidden lg:right-[0.88rem]" />
      <Input
        {...props}
        className={cn(
          'h-full w-full pl-10 text-gray-500 placeholder:text-gray-500 focus-visible:ring-0 focus-visible:ring-offset-0',
          className,
        )}
      />
    </div>
  );
});
SearchInput.displayName = 'SearchInput';
