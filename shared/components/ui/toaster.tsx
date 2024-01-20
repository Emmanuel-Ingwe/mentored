'use client';

import Lazyload from '@/app/shared/Hydrate/Lazyload';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/shared/components/ui/toast';
import { useToast } from '@/shared/hooks/useToast';

const Toaster = () => {
  const { toasts } = useToast();
  if (!toasts) return null;

  return (
    <Lazyload>
      <ToastProvider>
        {toasts.map(function ({ id, title, description, action, ...props }) {
          return (
            <Toast key={id} {...props}>
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                {description && (
                  <ToastDescription>{description}</ToastDescription>
                )}
              </div>
              {action}
              <ToastClose />
            </Toast>
          );
        })}
        <ToastViewport />
      </ToastProvider>
    </Lazyload>
  );
};
export default Toaster;
