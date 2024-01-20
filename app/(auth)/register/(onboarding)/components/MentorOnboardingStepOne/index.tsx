'use client';

import { Base } from '@/app/(auth)/shared/components/Base';
import { FormNavButtons } from '@/app/(auth)/shared/components/FormNavButtons';
import GenericFormInputs from '@/shared/components/GenericFormInputs';
import { Form } from '@/shared/components/ui/form';
import { inputs } from './inputs';
import { useMentorOnboardingStepOne } from '../../hooks/useMentorOnboardingStepOne';

const MentorOnboardingStepOne = () => {
  const { form, onSubmit, isLoading } = useMentorOnboardingStepOne();

  return (
    <Base title="Complete your profile">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-5">
          {inputs.map((input) => {
            return (
              <GenericFormInputs key={input.name} {...input} form={form} />
            );
          })}
          <FormNavButtons disableBack disableButton={isLoading} />
        </form>
      </Form>
    </Base>
  );
};

export default MentorOnboardingStepOne;
