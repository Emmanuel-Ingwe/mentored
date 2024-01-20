import { Star } from '@/shared/components/Icons/Star';
import { cn } from '@/shared/lib/utils';

type Props = {
  rating: number;
  className?: string;
};

export const Rating = ({ rating, className }: Props) => {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      {new Array(rating).fill(0).map((_, index) => {
        return <Star key={index} />;
      })}
    </div>
  );
};
