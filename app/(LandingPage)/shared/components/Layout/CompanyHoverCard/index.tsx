import Link from 'next/link';
import { ChevronArrowDown } from '@/shared/components/Icons/ChevronArrowDown';
import { Button } from '@/shared/components/ui/button';

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/shared/components/ui/hover-card';

import { companySubMenus } from '../Nav/navItems';

export const CompanyHoverCard = () => {
  return (
    <HoverCard openDelay={300}>
      <HoverCardTrigger asChild className="group">
        <Button variant="ghost" className="hover:bg-transparent">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[0.85rem] font-semibold text-gray-600 hover:text-primaryx xl:text-base">
              Company
            </span>
            <ChevronArrowDown className="transition-all group-data-[state=open]:rotate-180" />
          </div>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-[21rem] rounded-xl p-3">
        <div className="flex flex-col gap-2">
          {companySubMenus.map((item, index) => {
            return (
              <Link
                href={item.path}
                key={index}
                className="p-3 font-semibold text-gray-900 hover:text-primaryx dark:text-slate-50 dark:hover:text-slate-200"
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
