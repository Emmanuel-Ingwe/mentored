import { Hamburger } from '@/shared/components/Icons/Hamburger';
import { Button } from '@/shared/components/ui/button';

type Props = {
  toggleMobileMode: () => void;
};

const HambuggerButton = ({ toggleMobileMode }: Props) => {
  return (
    <Button
      variant={'ghost'}
      size={'icon'}
      onClick={toggleMobileMode}
      className="lg:hidden "
    >
      <Hamburger />
    </Button>
  );
};
export default HambuggerButton;
