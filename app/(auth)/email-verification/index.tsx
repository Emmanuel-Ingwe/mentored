'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MessageFeaturedIcon } from '@/shared/components/Icons/MessageFeaturedIcon';
import { Button } from '@/shared/components/ui/button';
import { useSendData } from './useVerifyEmail';
import { AuthHeader } from '../shared/components/AuthHeader';
import { BackToLogin } from '../shared/components/BackToLogin';

export const VerifyEmail = ({ email }: { email: string }) => {
  const { verifyEmail } = useSendData();
  const { push } = useRouter();

  React.useEffect(() => {
    verifyEmail();
    push('/dashboard');
  }, [push, verifyEmail]);

  return (
    <div className="text-center">
      <AuthHeader
        Icon={MessageFeaturedIcon}
        h1="Congratulations"
        p={
          <>
            Your email has been successfully verified{' '}
            <span className="font-medium">{email || ''}</span> <br />
            The page will redirect to the dashboard after a few seconds.
          </>
        }
      />

      <Button type="submit" size={'auth'} className="mb-8">
        <Link href="/dashboard">Go to dashboard</Link>
      </Button>

      <p className="text-sm text-gray-600">
        Didn’t receive the email?{' '}
        <button className="font-semibold text-primaryx-600">
          Click to resend
        </button>
      </p>

      <BackToLogin />
    </div>
  );
};
