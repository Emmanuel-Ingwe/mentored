import Link from 'next/link';
import { LockColored } from '@/shared/components/Icons/LockColored';
import { Modal } from '@/shared/components/Modal';
import { Button } from '@/shared/components/ui/button';

type Props = {
  trigger: React.ReactNode;
};

export const ApplyConfirmDialog = ({ trigger }: Props) => {
  return (
    <Modal trigger={trigger}>
      <div className="flex flex-col items-center justify-center text-center">
        <LockColored />
        <h1 className="mt-5 text-lg font-semibold text-gray-900">
          Sign up to apply to be Mentored
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Connect with experienced mentors to achieve your career goals in tech.
        </p>
        <Link href={'/login'} className="w-full">
          <Button className="mt-8 h-11 w-full">Continue</Button>
        </Link>
      </div>
    </Modal>
  );
};
