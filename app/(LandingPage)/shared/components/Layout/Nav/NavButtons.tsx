import Link from 'next/link';
import { shouldShowFeature } from '@/app/(LandingPage)/hooks/featureFlags';
import { Button } from '@/shared/components/ui/button';
import useDeviceType from '@/shared/hooks/useDeviceType';
import { cn } from '@/shared/lib/utils';
import WaitListPopUp from '../../../features/waitlist/WaitListPopUp';

type Props = {
  className?: string;
};

const NavButton = () => {
  return (
    <WaitListPopUp
      trigger={
        <Button className="w-full" hasAnimaion>
          Join the waitlist
        </Button>
      }
    />
  );
};

const NavButtons = ({ className }: Props) => {
  const { isMobile } = useDeviceType();
  const shouldShowWaitlist = shouldShowFeature('shouldShowWaitlist');

  if (!shouldShowWaitlist) {
    return (
      <div className={cn('', className)}>
        <div className="hidden lg:block">
          <NavButton />
        </div>
        <div className="lg:hidden">
          <NavButton />
        </div>
      </div>
    );
  }
  return (
    <div
      className={cn(
        'flex flex-col-reverse items-center justify-start px-4 max-lg:mt-8 max-lg:gap-3 lg:flex-row lg:justify-end lg:px-0',
        className,
        isMobile && 'w-full',
      )}
    >
      <Link
        href="/login"
        className="rounded-lg bg-white px-4 py-2 text-center font-semibold text-gray-600  max-lg:w-full max-lg:border max-lg:border-gray-300 max-lg:py-2.5 lg:text-sm "
      >
        Log In
      </Link>

      <Link
        href="/register"
        className="rounded-lg border border-primaryx bg-primaryx px-4 py-2.5 text-center font-semibold text-white  shadow-sm max-lg:w-full lg:ml-4 lg:py-2 lg:text-sm "
      >
        Sign Up
      </Link>
    </div>
  );
};

export default NavButtons;
