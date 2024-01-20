import { StepIcon } from '@/shared/components/Icons/StepIcon';
import { cn } from '@/shared/lib/utils';

type Props = {
  text: string;
  description: string;
};

export const StepBase = ({
  className,
  text,
  description,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & Props) => {
  return (
    <div
      className={cn(
        'group z-10 flex flex-col items-center text-center',
        className,
      )}
      {...props}
    >
      <StepIcon />
      <div className="mt-[0.84rem]  w-[11.5rem]">
        <h3 className="text-xs font-semibold text-gray-700 group-data-[active=true]:text-primaryx-600 group-data-[complete=true]:text-gray-700">
          {text}
        </h3>
        <p className="text-[0.625rem] text-gray-600 group-data-[active=true]:text-primaryx-500 group-data-[complete=true]:text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};
