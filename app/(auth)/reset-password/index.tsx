'use client';

import { KeyFeaturedIcon } from '@/shared/components/Icons/KeyFeaturedIcon';
import { ResetPasswordForm } from './components/ResetPasswordForm';
import { AuthHeader } from '../shared/components/AuthHeader';
import { BackToLogin } from '../shared/components/BackToLogin';

export const ResetPassword = () => {
  return (
    <div>
      <AuthHeader
        Icon={KeyFeaturedIcon}
        h1="Set new password"
        p="Your new password must be different from previously used passwords."
      />
      <ResetPasswordForm />
      <BackToLogin />
    </div>
  );
};
