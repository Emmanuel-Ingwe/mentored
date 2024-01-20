import { Calendar } from '@/app/(dashboard)/dashboard/shared/components/Calender';
import { Button } from '@/shared/components/ui/button';
import { ApplyConfirmDialog } from '../ApplyConfirmDialog';

export const AvailabilityCard = () => {
  return (
    <div className="rounded-[0.76269rem] border border-polar-200 p-4">
      <h1 className="font-semibold text-grizzly-400">
        Available dates and time
      </h1>
      <p className="mt-1 text-xs text-polar-700">
        Apply to be mentored and have weekly sessions with{' '}
        <span className="font-bold">Pius Linux</span> by this time
      </p>

      <div className="mt-[2.14rem] w-full">
        <Calendar mode="multiple" className="rounded-md border text-black" />
      </div>

      <div className="mt-4 flex justify-center">
        <ApplyConfirmDialog
          trigger={
            <Button size={'sm'} className="h-10 px-4 font-semibold">
              Apply to be mentored
            </Button>
          }
        />
      </div>
    </div>
  );
};
