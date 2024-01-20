'use client';

import Image from 'next/image';
import avatar from '@/public/images/avater-lady.png';
import { BellIcon } from '@/shared/components/Icons/BellIcon';
import { CloseIcon } from '@/shared/components/Icons/CloseIcon';
import { LogoIcon } from '@/shared/components/Icons/LogoIcon';
import { Button } from '@/shared/components/ui/button';
import { useToggle } from '@/shared/hooks/useToggle';
import { MobileNav } from './MobileNav';
import { Settings } from '../../Icons';
import { Menu as MenuIcon } from '../../Icons/Menu';
import NotificationPopUp from '../../NotificationModal';

export const Navbar = () => {
  const { toggle, onToggle } = useToggle();
  const rejectionContent = (
    <div>
      <div className="text-base font-semibold text-gray-900">
        Application Rejected
      </div>
      <div className="mt-4 w-72 text-sm font-normal text-gray-700">
        Your application to Merab Tary Dorgu was rejected.
      </div>
      <div className="mt-6 flex gap-x-4">
        <button className="text-md font-semibold text-slate-600">
          More info
        </button>
        <button className="text-base font-semibold text-blue-900">
          Apply to other mentors
        </button>
      </div>
    </div>
  );

  return (
    <>
      <nav className="flex items-center justify-between border-b border-gray-200 px-4 py-4 lg:pr-[4.25rem]">
        <div className="ml-auto flex items-center gap-1 max-lg:hidden">
          <Button size={'icon'} variant={'ghost'}>
            <Settings className="stroke-gray-500" />
          </Button>
          <NotificationPopUp
            trigger={
              <Button size={'icon'} variant={'ghost'}>
                <BellIcon className="stroke-gray-500" />
              </Button>
            }
            variant="error"
            content={rejectionContent}
          />

          <button className="ml-3">
            <Image
              src={avatar}
              alt={'avatar image'}
              className="h-10 w-10 rounded-full object-contain"
            />
          </button>
        </div>

        <LogoIcon className="lg:hidden" />

        <Button
          size={'icon'}
          variant={'ghost'}
          className="lg:hidden"
          onClick={onToggle}
        >
          <MenuIcon />
        </Button>
      </nav>
      <MobileNav toggle={toggle} onToggle={onToggle} />
      <div
        className="fixed bottom-0 top-0 z-30 flex w-full translate-x-0 justify-end bg-gray-900/90 backdrop-blur-[8px] transition-all data-[state=closed]:-translate-x-full lg:hidden"
        data-state={toggle ? 'open' : 'closed'}
      >
        <button className="mr-4 mt-5 flex" onClick={onToggle}>
          <CloseIcon className="stroke-white" />
        </button>
      </div>
    </>
  );
};
