import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-slate-200 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 dark:border-slate-800 dark:focus:ring-slate-300 flex-no-wrap',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'px-2.5 py-0.5',
        sm: 'px-2.5 py-[0.13rem] text-sm',
      },
      variant: {
        blue: 'border-transparent bg-blue-50 text-blue-700 hover:bg-blue-50/80 dark:bg-slate-50 dark:text-blue-50 dark:hover:bg-slate-50/80',
        'blue-gray':
          'border-transparent bg-blue-gray-50 text-blue-gray-700 hover:bg-blue-gray-50/80 dark:bg-slate-50 dark:text-blue-gray-50 dark:hover:bg-slate-50/80',
        default:
          'border-transparent bg-primaryx-50 text-primaryx-700 hover:bg-primaryx-50/80 dark:bg-slate-50 dark:text-primaryx-50 dark:hover:bg-slate-50/80',
        indigo:
          'border-transparent bg-indigo-50 text-indigo-700 hover:bg-indigo-50/80 dark:bg-slate-50 dark:text-indigo-50 dark:hover:bg-slate-50/80',
        outline: 'text-slate-950 dark:text-slate-50',
        pink: 'border-transparent bg-pink-50 text-pink-700 hover:bg-pink-50/80 dark:bg-slate-50 dark:text-pink-50 dark:hover:bg-slate-50/80',
        success:
          'border-transparent bg-success-50 text-success-700 hover:bg-success-50/80 dark:bg-slate-50 dark:text-success-50 dark:hover:bg-slate-50/80',
      },
    },
  },
) as any;

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: string;
  size?: string;
}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
