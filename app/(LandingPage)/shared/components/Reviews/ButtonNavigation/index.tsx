import { ArrowL } from '@/shared/components/Icons/ArrowL';
import { ArrowR } from '@/shared/components/Icons/ArrowR';

type Props = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
};

export const ButtonNavigation = ({
  nextBtnDisabled,
  prevBtnDisabled,
  scrollNext,
  scrollPrev,
}: Props) => {
  return (
    <div className="mt-12 flex items-center justify-center">
      <button
        className=" -left-28 top-2/4 lg:absolute lg:-translate-y-2/4"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        <ArrowL />
      </button>

      <button
        className="-right-28 top-2/4 lg:absolute lg:-translate-y-2/4"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        <ArrowR />
      </button>
    </div>
  );
};
