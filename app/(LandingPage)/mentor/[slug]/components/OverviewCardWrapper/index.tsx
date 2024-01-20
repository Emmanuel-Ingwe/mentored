import { cn } from '@/shared/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
  title: string;
};

export const OverviewCardWrapper = ({ children, className, title }: Props) => {
  return (
    <div className={cn('rounded-lg border border-gray-200', className)}>
      <h1 className="border-b border-gray-200 p-4 font-semibold text-gray-700">
        {title}
      </h1>
      <div className="p-4">{children}</div>
    </div>
  );
};
