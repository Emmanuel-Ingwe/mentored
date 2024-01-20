import { Dot } from '@/shared/components/Icons/Dot';
import { cn } from '@/shared/lib/utils';

type Props = {
  scrollSnaps: number[];
  selectedIndex: number;
  scrollTo: (index: number) => void;
};

export const DotNavigation = ({
  scrollSnaps,
  scrollTo,
  selectedIndex,
}: Props) => {
  return (
    <div className="mt-8 flex items-center gap-4">
      {scrollSnaps.map((_, index) => {
        return (
          <Dot
            key={index}
            onClick={() => {
              return scrollTo(index);
            }}
            className={cn(
              'fill-grizzly-700',
              index === selectedIndex && 'fill-white',
            )}
          />
        );
      })}
    </div>
  );
};
