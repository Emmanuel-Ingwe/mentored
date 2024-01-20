import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import featuredIcon from '@/public/images/featured-icon.jpg';
import { Button } from '@/shared/components/ui/button';
import { cn } from '@/shared/lib/utils';

type Props = {
  title: string;
  body: { __html: string };
  hasBorder?: boolean;
};
const SummaryCard: FC<Props> = ({ title, hasBorder, body }) => {
  return (
    <div
      className={cn(
        'mt-6 flex flex-col items-center gap-2  bg-white py-10 text-center md:py-8',
        hasBorder && 'rounded-md border',
      )}
    >
      <Image src={featuredIcon} alt="featured-icon" />
      <p className="text-base font-semibold text-gray-900">{title}</p>
      <span
        className="text-xs text-slate-600 md:text-sm"
        dangerouslySetInnerHTML={body}
      />
      <Link href="/dashboard/find-a-mentor">
        <Button
          size={'sm'}
          className="mx-auto mt-4 w-fit text-sm font-semibold"
        >
          Find mentors
        </Button>
      </Link>
    </div>
  );
};
export default SummaryCard;
