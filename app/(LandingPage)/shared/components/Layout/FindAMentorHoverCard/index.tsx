import Link from 'next/link';
import { ArrowRight } from '@/shared/components/Icons/ArrowRight';
import { ChevronArrowDown } from '@/shared/components/Icons/ChevronArrowDown';
import { Button } from '@/shared/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/shared/components/ui/hover-card';

import { findAMentorSubMenus } from '../Nav/navItems';

export const FindAMentorHoverCard = () => {
  return (
    <HoverCard openDelay={300}>
      <HoverCardTrigger asChild className="group">
        <Button variant="ghost" className="hover:bg-transparent ">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[0.85rem] font-semibold text-gray-600 hover:text-primaryx xl:text-base">
              Find a mentor
            </span>
            <ChevronArrowDown className="transition-all group-data-[state=open]:rotate-180" />
          </div>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-fit rounded-xl pt-8 ">
        <div className="e grid grid-cols-[repeat(3,_minmax(12.7rem,auto))] gap-x-12 gap-y-8 px-8">
          {findAMentorSubMenus.map((item, index) => {
            return (
              <div key={index}>
                <h3 className="mb-3 text-sm font-semibold text-primaryx">
                  {item.header}
                </h3>
                <div className="flex flex-col gap-3">
                  {item.links.map((link, index) => {
                    return (
                      <Link
                        href={`/find-a-mentor/${link.path}`}
                        key={index}
                        as={`/find-a-mentor/${link.path}`}
                        className="font-semibold text-gray-600 hover:text-primaryx dark:text-slate-50 dark:hover:text-slate-200"
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center rounded-b-xl bg-gray-50 py-7">
          <Link href="/find-a-mentor" className="group flex items-center gap-2">
            <span className="font-semibold text-primaryx transition-all group-hover:scale-105">
              All Mentors
            </span>
            <ArrowRight className="scale-105 transition-all group-hover:translate-x-[2px]" />
          </Link>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
