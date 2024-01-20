import GenericFormInputs from '@/shared/components/GenericFormInputs';
import { Button } from '@/shared/components/ui/button';
import { Form } from '@/shared/components/ui/form';
import { useResetPassword } from '../../hooks/useResetPassword';

export const ResetPasswordForm = () => {
  const { form, onSubmit, isLoading } = useResetPassword();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <GenericFormInputs
          key={'password'}
          label="Password"
          name="password"
          type="PASSWORD"
          form={form}
        />

        <GenericFormInputs
          key={'confirmPassword'}
          label="Confirm Password"
          name="confirmPassword"
          type="PASSWORD"
          form={form}
        />

        <Button type="submit" size={'auth'} disabled={isLoading}>
          Reset Password
        </Button>
      </form>
    </Form>
  );
};
