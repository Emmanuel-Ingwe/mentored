'use client';

import { GithubIcon } from '@/shared/components/Icons/GithubIcon';
import { GoogleIcon } from '@/shared/components/Icons/GoogleIcon';
import { LinkedIn } from '@/shared/components/Icons/LinkedIn';
import { LoginForm } from './components/LoginForm';
import { AuthLink } from '../shared/components/AuthLink';
import { AuthSocialButton } from '../shared/components/AuthSocialButton';
import { Base } from '../shared/components/Base';

const EmailAndPassword = () => {
  return (
    <Base
      title={'Welcome back'}
      subtitle="Welcome back! Please enter your details."
    >
      <LoginForm />
      <div className="mt-4 space-y-3">
        <AuthSocialButton Icon={GoogleIcon} name="Google" />
        <AuthSocialButton Icon={LinkedIn} name="LinkedIn" />
        <AuthSocialButton Icon={GithubIcon} name="Github" />
      </div>
      <div className="mt-8 text-center">
        <span className="text-sm text-gray-600">
          Don&apos;t have an account?
        </span>{' '}
        <AuthLink href="/register" text="Sign up" />
      </div>
    </Base>
  );
};

export default EmailAndPassword;
