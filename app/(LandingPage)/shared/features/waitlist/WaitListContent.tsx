import GenericFormInputs from '@/shared/components/GenericFormInputs';
import { Button } from '@/shared/components/ui/button';
import { Form } from '@/shared/components/ui/form';
import useWaitlist from './useWaitlist';

const WaitListContent = () => {
  const { form, onSubmit, inputs, error, content, loading } = useWaitlist();
  if (content.length) {
    return (
      <div>
        <h3 className="mb-4 text-center text-[30px] font-semibold text-gray-900">
          Welcome to the waitlist!
        </h3>
        <p className="mb-3 text-center text-sm font-normal text-gray-600">
          {content}
        </p>
      </div>
    );
  }
  return (
    <div>
      <div>
        <h3 className="mb-4 text-center text-[30px] font-semibold text-gray-900">
          Join the waitlist!
        </h3>
        <p className="mb-3 text-center text-sm font-normal text-gray-600">
          Get early access by joining our waitlist. Join Pius, Temi, Wura, and
          256 others on the waitlist!
        </p>
        <Form {...form}>
          <form
            className="mt-3 space-y-6"
            action="#"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            {inputs.map((input) => {
              return (
                <GenericFormInputs key={input.name} {...input} form={form} />
              );
            })}
            {error.length && (
              <p className="mb-3 text-center text-sm font-normal text-error-600">
                {error}
              </p>
            )}
            <Button hasAnimaion disabled={loading} className="w-full">
              Join the waitlist now
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default WaitListContent;
