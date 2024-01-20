'use client';

import * as React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import { cva } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { cn } from '@/shared/lib/utils';

const toggleVariants = cva(
  'inline-flex items-center justify-center rounded-2xl text-sm font-medium ring-offset-white transition-colors hover:bg-primaryx hover:text-primaryx focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primaryx focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primaryx data-[state=on]:text-white dark:ring-offset-primaryx dark:hover:bg-slate-800 dark:hover:text-slate-400 dark:focus-visible:ring-slate-300 dark:data-[state=on]:bg-slate-800 dark:data-[state=on]:text-slate-50',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        default: 'h-10 px-3',
        lg: 'h-11 px-5',
        sm: 'h-9 px-2.5',
      },
      variant: {
        'blue-700':
          'border border-blue-700 bg-transparent text-blue-700 hover:bg-blue-700 hover:text-white dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50 data-[state=on]:bg-blue-700 ',
        'blue-900':
          'border border-blue-900 bg-transparent text-blue-900 hover:bg-blue-900 hover:text-white dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50 data-[state=on]:bg-blue-900 ',
        default: 'bg-transparent',
        'green-700':
          'border border-green-700 bg-transparent text-green-700 hover:bg-green-700 hover:text-white dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50 data-[state=on]:bg-green-700 ',
        outline:
          'border border-primaryx-500 bg-transparent text-primaryx-500 hover:bg-primaryx-500 hover:text-white dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50',
        'pink-800':
          'border border-pink-800 bg-transparent text-pink-800 hover:bg-pink-800 hover:text-white dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50 data-[state=on]:bg-pink-800 ',
        'purple-800':
          'border border-purple-800 bg-transparent text-purple-800 hover:bg-purple-800 hover:text-white dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50 data-[state=on]:bg-purple-800 ',
        'red-500':
          'border border-red-500 bg-transparent text-red-500 hover:bg-red-500 hover:text-white dark:border-slate-800 dark:hover:bg-slate-800 dark:hover:text-slate-50 data-[state=on]:bg-red-500 ',
      },
    },
  },
) as any;

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> & {
    variant?: string;
    size?: string;
  }
>(({ className, variant, size, ...props }, ref) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <TogglePrimitive.Root
        ref={ref}
        className={cn(toggleVariants({ className, size, variant }))}
        {...props}
      />
    </motion.div>
  );
});

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
