import { useAuthContext } from '@/app/(auth)/shared/context/useAuthContext';
import { Button } from '@/shared/components/ui/button';

type Props = {
  buttonText?: string;
  disableBack?: boolean;
  disableButton?: boolean;
};

export const FormNavButtons = ({
  buttonText,
  disableBack,
  disableButton,
}: Props) => {
  const { goToPrevStep } = useAuthContext();

  return (
    <div className="mt-6 flex gap-4">
      <Button
        variant="outline"
        onClick={goToPrevStep}
        className="h-11 w-full rounded-lg"
        disabled={disableBack}
      >
        Back
      </Button>
      <Button
        disabled={disableButton}
        className="h-11 w-full rounded-lg"
        type="submit"
      >
        {disableButton ? 'Submitting...' : buttonText ?? 'Next'}
      </Button>
    </div>
  );
};
