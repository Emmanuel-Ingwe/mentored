import Link from 'next/link';
import { SuccessFeaturedIcon } from '@/shared/components/Icons/SuccessFeaturedIcon';
import { Button } from '@/shared/components/ui/button';
import { AuthHeader } from '../shared/components/AuthHeader';

export const ResetPasswordSuccess = () => {
  return (
    <div>
      <AuthHeader
        Icon={SuccessFeaturedIcon}
        h1="Password Reset"
        p="Your password has been successfully reset. Click below to log in."
      />

      <Link href="/login">
        <Button type="submit" className="mb-8" size={'auth'}>
          Continue to login{' '}
        </Button>
      </Link>
    </div>
  );
};
