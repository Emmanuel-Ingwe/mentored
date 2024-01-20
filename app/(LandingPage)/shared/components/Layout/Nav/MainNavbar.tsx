import Link from 'next/link';
import { cn } from '@/shared/lib/utils';
import { navItems } from './navItems';
import { CompanyHoverCard } from '../CompanyHoverCard';
import { FindAMentorHoverCard } from '../FindAMentorHoverCard';

export const MainNavbar = () => {
  return (
    <nav
      className={cn(
        'hidden items-center justify-between gap-6 lg:flex xl:gap-8',
      )}
    >
      {navItems.map((item) => {
        if (item.name === 'Find a Mentor') {
          return <FindAMentorHoverCard key={item.name} />;
        }
        if (item.name === 'Company') {
          return <CompanyHoverCard key={item.name} />;
        }
        return (
          <Link
            href={item.path}
            key={item.name}
            className="text-[0.85rem] font-semibold text-gray-600 hover:text-primaryx dark:text-slate-50 dark:hover:text-slate-200 xl:text-base"
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};
