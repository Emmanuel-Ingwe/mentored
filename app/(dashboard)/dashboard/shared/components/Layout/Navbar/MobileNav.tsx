import Image from 'next/image';
import Link from 'next/link';
import { LogoIcon } from '@/shared/components/Icons/LogoIcon';
import { Entrance } from '../../Icons/Entrance';
import { menuData } from '../menuData';
import { SidebarLink } from '../Sidebar/SidebarLink';
import { ImgComp } from '@/shared/components/ImgComp';

type Props = {
  toggle: boolean;
  onToggle?: () => void;
};

export const MobileNav = ({ toggle, onToggle }: Props) => {
  return (
    <nav
      className="fixed bottom-0 top-0 z-50 flex w-4/5 translate-x-0 flex-col bg-gray-900 pt-6 transition-all delay-75 data-[state=closed]:-translate-x-full lg:hidden"
      data-state={toggle ? 'open' : 'closed'}
    >
      <LogoIcon className="mx-8" />

      <div className="mt-8 flex flex-col gap-2.5 px-4">
        {menuData.map(({ Icon, link, title }) => {
          return (
            <SidebarLink
              key={title}
              Icon={Icon}
              title={title}
              link={link}
              onToggle={onToggle}
            />
          );
        })}
      </div>

      <div className="mt-auto flex items-center justify-between gap-2 bg-white/5 p-5">
        <ImgComp src="/images" alt="avatar" className="h-10 w-10" />
        <div>
          <h2 className="text-sm text-white/90">Richard</h2>
          <p className="text-xs text-white/30">9394lay@gmail.com</p>
        </div>
        <Link href={'/logout'}>
          <Entrance />
        </Link>
      </div>
    </nav>
  );
};
