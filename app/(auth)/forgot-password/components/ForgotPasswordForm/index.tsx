import GenericFormInputs from '@/shared/components/GenericFormInputs';
import { Button } from '@/shared/components/ui/button';
import { Form } from '@/shared/components/ui/form';
import { useForgotPassword } from '../../hooks/useForgotPassword';

export const ForgotPasswordForm = () => {
  const { form, onSubmit, isLoading } = useForgotPassword();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <GenericFormInputs
          key={'email'}
          label="Email"
          placeholder="Enter your email address"
          name="email"
          type="TEXT"
          form={form}
        />

        <Button type="submit" className="h-11 w-full" disabled={isLoading}>
          Reset Password
        </Button>
      </form>
    </Form>
  );
};
