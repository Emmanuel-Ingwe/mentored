'use client';
import { cn } from '@/shared/lib/utils';

type Props = {
  children: React.ReactNode;
  subHeader: string;
  headerClassName?: string;
  wrapperClassName?: string;
};

export const SectionHeader = ({
  children,
  subHeader,
  headerClassName,
  wrapperClassName,
}: Props) => {
  return (
    <div
      className={cn(
        'mx-auto space-y-5 text-center lg:w-[48rem]',
        wrapperClassName,
      )}
    >
      <h1
        className={cn(
          'text-3xl font-semibold leading-[2.375rem] text-gray-900 lg:text-4xl lg:leading-[2.75rem]',
          headerClassName,
        )}
      >
        {children}
      </h1>
      <p className="mx-auto text-lg text-gray-500 lg:text-xl">{subHeader}</p>
    </div>
  );
};
