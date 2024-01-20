'use client';

import Image from 'next/image';
import Link from 'next/link';
import avatar from '@/public/images/avater-lady.png';
import { LogoIcon } from '@/shared/components/Icons/LogoIcon';
import { cn } from '@/shared/lib/utils';
import { SidebarLink } from './SidebarLink';
import { Entrance } from '../../Icons/Entrance';
import { menuData } from '../menuData';

export const Sidebar = () => {
  return (
    <aside
      className={cn(
        'fixed top-0 z-50 flex min-h-screen w-[15rem] flex-col bg-gray-900 pt-6 max-lg:hidden',
      )}
    >
      <LogoIcon className="mx-8" />

      <div className="mt-10 flex flex-col gap-2.5 px-4">
        {menuData.map(({ Icon, link, title, childlinks }) => {
          return (
            <SidebarLink
              key={title}
              Icon={Icon}
              title={title}
              link={link}
              childlinks={childlinks}
            />
          );
        })}
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 bg-white/5 p-5">
        <Image src={avatar} alt="avatar" className="h-10 w-10" />
        <div>
          <h2 className="text-sm text-white/90">Richard</h2>
          <p className="text-xs text-white/30">9394lay@gmail.com</p>
        </div>
        <Link href={'/logout'}>
          <Entrance />
        </Link>
      </div>
    </aside>
  );
};
