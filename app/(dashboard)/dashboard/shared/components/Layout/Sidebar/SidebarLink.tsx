'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/shared/lib/utils';
import type { MenuData } from '../../../types';

type Props = {
  onToggle?: () => void;
};

export const SidebarLink = ({
  Icon,
  title,
  link,
  childlinks,
  onToggle,
}: Props & MenuData) => {
  const pathname = usePathname();

  const isActive = childlinks?.some((childlink) => {
    return pathname.includes(childlink);
  });

  return (
    <Link
      href={link}
      className={cn(
        'flex gap-3 rounded-lg px-4 py-2.5 text-gray-300 hover:bg-gray-600/80',
        (pathname === link || isActive) && 'bg-primaryx-500 text-white',
      )}
      onClick={onToggle}
    >
      <Icon
        className={
          pathname === link || isActive ? 'stroke-white' : 'stroke-gray-300'
        }
      />
      <span className="text-sm font-medium">{title}</span>
    </Link>
  );
};
