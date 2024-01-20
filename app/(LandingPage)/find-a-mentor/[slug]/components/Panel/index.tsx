'use client';

import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { CloseIcon } from '@/shared/components/Icons/CloseIcon';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';
import { useFilterActions } from '../../hooks/useFilterActions';

const Panel = DialogPrimitive.Root;

const PanelTrigger = DialogPrimitive.Trigger;

const PanelOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => {
  return (
    <DialogPrimitive.Overlay
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 bg-gray-700/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 dark:bg-slate-950/80 lg:hidden',
        className,
      )}
      {...props}
    />
  );
});
PanelOverlay.displayName = DialogPrimitive.Overlay.displayName;

const PanelContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  return (
    <DialogPrimitive.Portal>
      <PanelOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'fixed right-0 top-0 z-50 grid w-[22rem] overflow-auto rounded-none border border-gray-200 bg-white duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right dark:border-gray-800 dark:bg-gray-900 md:w-full lg:top-[8.75rem] lg:w-[25rem]',
          className,
        )}
        {...props}
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
});
PanelContent.displayName = DialogPrimitive.Content.displayName;

type PanelHeaderProps = {
  primaryText: string;
  secondaryText: string;
};

const PanelHeader = ({
  primaryText,
  secondaryText,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & PanelHeaderProps) => {
  return (
    <div {...props}>
      <div className="flex items-center justify-between">
        <DialogPrimitive.Title className="text-xl font-semibold text-gray-900">
          {primaryText}
        </DialogPrimitive.Title>
        <DialogPrimitive.Close asChild>
          <Button variant={'ghost'} size={'icon'}>
            <CloseIcon />
          </Button>
        </DialogPrimitive.Close>
      </div>
      <DialogPrimitive.Description className="text-sm text-gray-600">
        {secondaryText}
      </DialogPrimitive.Description>
    </div>
  );
};
PanelHeader.displayName = 'PanelHeader';

const PanelFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { handleClearFilters, handleApplyFilters } = useFilterActions();

  return (
    <div
      className={cn(
        'flex items-center justify-between border-t px-6 py-4',
        className,
      )}
      {...props}
    >
      <button
        className="text-sm font-semibold text-gray-600"
        onClick={handleClearFilters}
      >
        Clear filters
      </button>
      <div className="flex items-center gap-3">
        <DialogPrimitive.Close asChild>
          <Button
            variant={'outline'}
            className="h-10 rounded-lg text-sm font-semibold"
          >
            Cancel
          </Button>
        </DialogPrimitive.Close>
        <Button
          className="h-10 rounded-lg text-sm font-semibold"
          onClick={handleApplyFilters}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};
PanelFooter.displayName = 'PanelFooter';

export { Panel, PanelContent, PanelFooter, PanelHeader, PanelTrigger };
