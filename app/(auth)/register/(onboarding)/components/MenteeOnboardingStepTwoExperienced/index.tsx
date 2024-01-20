'use client';

import { Base } from '@/app/(auth)/shared/components/Base';
import { FormNavButtons } from '@/app/(auth)/shared/components/FormNavButtons';
import GenericFormInputs from '@/shared/components/GenericFormInputs';
import { Form } from '@/shared/components/ui/form';
import { inputs } from './inputs';
import { useMenteeOnboardingStepTwoExperienced } from '../../hooks/useMenteeOnboardingStepTwoExperienced';

const MenteeOnboardingStepTwoExperienced = () => {
  const { form, onSubmit, isLoading } = useMenteeOnboardingStepTwoExperienced();

  return (
    <Base title="Complete your profile">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-5">
            {inputs.map((input) => {
              return (
                <GenericFormInputs key={input.name} {...input} form={form} />
              );
            })}
          </div>
          <FormNavButtons disableButton={isLoading} />
        </form>
      </Form>
    </Base>
  );
};

export default MenteeOnboardingStepTwoExperienced;
