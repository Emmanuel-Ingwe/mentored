import _ from 'lodash';

import { AuthLink } from '@/app/(auth)/shared/components/AuthLink';
import { AuthSocialButton } from '@/app/(auth)/shared/components/AuthSocialButton';
import { Base } from '@/app/(auth)/shared/components/Base';
import GenericFormInputs from '@/shared/components/GenericFormInputs';
import { GithubIcon } from '@/shared/components/Icons/GithubIcon';
import { GoogleIcon } from '@/shared/components/Icons/GoogleIcon';
import { LinkedIn } from '@/shared/components/Icons/LinkedIn';
import { Button } from '@/shared/components/ui/button';
import { Form } from '@/shared/components/ui/form';
import { inputs } from './inputs';
import { useSignup } from '../../hooks/useSignup';

export const Signup = () => {
  const { form, onSubmit, loading, userType } = useSignup();

  return (
    <Base title={`Register as a ${_.lowerCase(userType)}!`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-5">
            {inputs.map((input) => {
              return (
                <GenericFormInputs key={input.name} {...input} form={form} />
              );
            })}
          </div>
          <Button type="submit" className="mt-6 w-full" disabled={loading}>
            {loading ? 'Registering' : 'Get Started'}
          </Button>
        </form>
      </Form>
      <div className="mt-4 space-y-3">
        <AuthSocialButton Icon={GoogleIcon} name="Google" />
        <AuthSocialButton Icon={LinkedIn} name="LinkedIn" />
        <AuthSocialButton Icon={GithubIcon} name="Github" />
      </div>

      <div className="mt-8 text-center">
        <span className="text-sm text-gray-600">Already have an account?</span>{' '}
        <AuthLink href="/login" text="Sign in" />
      </div>
    </Base>
  );
};
