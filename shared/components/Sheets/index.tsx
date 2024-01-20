'use client';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const;

type SheetModal = (typeof SHEET_SIDES)[number];
type Props = {
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  classStyle?: string | Record<string, boolean> | undefined;
};

function SheetModal({ children, trigger }: Props) {
  return (
    <div className="">
      {/* {SHEET_SIDES.map((side) => ( */}
      <Sheet>
        <SheetTrigger asChild>{trigger}</SheetTrigger>
        <SheetContent side={'bottom'}>{children}</SheetContent>
      </Sheet>
    </div>
  );
}
export default SheetModal;
