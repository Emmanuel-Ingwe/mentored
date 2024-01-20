'use client';

import GenericFormInputs from '@/shared/components/GenericFormInputs';
import { Button } from '@/shared/components/ui/button';
import { Form } from '@/shared/components/ui/form';
import { useContactForm } from '../../useContactForm';

const FormSection = () => {
  const { form, onSubmit, inputs, loading, nameInputs, formRef } =
    useContactForm();

  return (
    <div className="mx-auto my-16 max-w-[480px]">
      <Form {...form}>
        <form ref={formRef} onSubmit={form.handleSubmit(onSubmit)}>
          <div className="contactInputs mb-6 flex flex-col justify-between gap-6 md:flex-row">
            {nameInputs.map((nameInput) => {
              return (
                <GenericFormInputs
                  key={nameInput.name}
                  {...nameInput}
                  form={form}
                  required={false}
                />
              );
            })}
          </div>

          <div className="mb-8 flex flex-col gap-6">
            {inputs.map((input) => {
              return (
                <GenericFormInputs
                  key={input.name}
                  {...input}
                  form={form}
                  required={false}
                />
              );
            })}
          </div>

          <Button disabled={loading} type="submit" className="w-full">
            {loading ? 'Sending' : 'Send message'}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormSection;
