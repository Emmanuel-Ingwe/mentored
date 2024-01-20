import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';

type Props = {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  classStyle?: string | Record<string, boolean> | undefined;
};

export const Modal = ({ children, trigger, classStyle }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className={` sm:max-w-[25.5rem] ${classStyle}`}>
        {children}
      </DialogContent>
    </Dialog>
  );
};
