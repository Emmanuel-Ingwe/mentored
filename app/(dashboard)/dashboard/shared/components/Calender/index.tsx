/* eslint-disable camelcase */
'use client';

import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { DayPicker } from 'react-day-picker';

import { cn } from '@/shared/lib/utils';
// import { buttonVariants } from '@/registry/default/ui/button';

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn('p-4', className)}
      classNames={{
        caption: 'flex justify-center mb-8 pt-1 relative items-center',
        caption_label: 'text-base text-slate-700 font-semibold',
        cell: cn(
          'relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent',
          props.mode === 'range'
            ? '[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md'
            : '[&:has([aria-selected])]:rounded-md',
        ),
        day: cn(
          // buttonVariants({ variant: 'ghost' }),
          'h-8 w-8 p-0 text-sm text-slate-700 font-normal aria-selected:opacity-100 rounded-full transition-all hover:bg-indigo-600 hover:text-white',
        ),
        day_disabled: 'text-muted-foreground opacity-50',
        day_hidden: 'invisible',
        day_outside: 'text-muted-foreground opacity-50',
        day_range_end: 'day-range-end',
        day_range_middle:
          'aria-selected:bg-accent aria-selected:text-accent-foreground',
        day_range_start: 'day-range-start',
        day_selected:
          'bg-indigo-600 !text-white rounded-full transition-all hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
        day_today: 'bg-accent text-accent-foreground',
        head_cell:
          'text-muted-foreground rounded-md w-8 text-sm text-slate-700 font-medium',
        head_row: 'flex justify-between',
        month: 'space-y-4 ',
        months: 'sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0',
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          // buttonVariants({ variant: 'outline' }),
          'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        ),
        nav_button_next: 'absolute right-1',
        nav_button_previous: 'absolute left-1',
        row: 'flex justify-between w-full mt-4',
        table: 'w-full border-collapse space-y-1',
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => {
          return <ChevronLeftIcon className="h-5 w-5" />;
        },
        IconRight: ({ ...props }) => {
          return <ChevronRightIcon className="h-5 w-5" />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = 'Calendar';

export { Calendar };
