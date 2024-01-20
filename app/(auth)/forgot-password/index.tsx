'use client';

import { KeyFeaturedIcon } from '@/shared/components/Icons/KeyFeaturedIcon';
import { ForgotPasswordForm } from './components/ForgotPasswordForm';
import { AuthHeader } from '../shared/components/AuthHeader';
import { BackToLogin } from '../shared/components/BackToLogin';

export const ForgotPassword = () => {
  return (
    <div>
      <AuthHeader
        Icon={KeyFeaturedIcon}
        h1=" Forgot password?"
        p=" No worries, we’ll send you reset instructions."
      />
      <ForgotPasswordForm />
      <BackToLogin />
    </div>
  );
};
