/* eslint-disable @typescript-eslint/no-explicit-any */

import { AuthLink } from '@/app/(auth)/shared/components/AuthLink';
import GenericFormInputs from '@/shared/components/GenericFormInputs';
import { Button } from '@/shared/components/ui/button';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { Form } from '@/shared/components/ui/form';
import { inputs } from './inputs';
import { useLogin } from '../../hooks/useLogin';

export const LoginForm = () => {
  const { form, onSubmit, loading } = useLogin();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-5">
          {inputs.map((input) => {
            return (
              <GenericFormInputs key={input.name} {...input} form={form} />
            );
          })}
        </div>
        <div className="my-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Checkbox id="remember-me" />
            <label
              htmlFor="remember-me"
              className="text-sm leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Remember me
            </label>
          </div>
          <AuthLink href="/forgot-password" text="Forgot password?" />
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          Sign in
        </Button>
      </form>
    </Form>
  );
};
