import Link from 'next/link';
import { MobileLogo } from '@/shared/components/MobileLogo';
import NavButtons from './NavButtons';
import { navItems } from './navItems';
import HambuggerButton from '../MainHeader/HambuggerButton';

const mobileNavSecondaryItems = [
  {
    name: 'About us',
    path: '/about-us',
  },
  {
    name: 'Contact us',
    path: '/contact',
  },
  {
    name: 'Careers',
    path: '/#',
  },
  {
    name: 'Legal',
    path: '/#',
  },
  {
    name: 'Pricing',
    path: '/#',
  },
  {
    name: 'Support',
    path: '/#',
  },
  {
    name: 'Newsletters',
    path: '/#',
  },
  {
    name: 'Help Center',
    path: '/#',
  },
];

type MobileNavProps = {
  toggleMobileMode: () => void;
};

const MobileNav = ({ toggleMobileMode }: MobileNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 top-0 z-[100] w-full bg-white">
      <div className="px-4 md:px-0">
        <div className="mt-4 flex h-16 items-center justify-between border-b border-gray-200 px-4">
          <MobileLogo />
          <HambuggerButton toggleMobileMode={toggleMobileMode} />
        </div>
        <nav className="flex flex-col border-b border-gray-200 px-4 py-5">
          {navItems.map((item) => {
            return (
              <Link
                onClick={toggleMobileMode}
                href={item.path}
                key={item.name}
                className="flex items-center py-3 font-semibold text-gray-600 hover:text-primaryx dark:text-slate-50 dark:hover:text-slate-200"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <nav className="grid grid-cols-2 gap-3 px-4 py-5">
          {mobileNavSecondaryItems.map((item) => {
            return (
              <Link
                onClick={toggleMobileMode}
                href={item.path}
                key={item.name}
                className="flex items-center font-semibold text-gray-600 hover:text-primaryx dark:text-slate-50 dark:hover:text-slate-200"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* <div onClick={toggleMobileMode}> */}
        <NavButtons />
        {/* </div> */}
      </div>
    </nav>
  );
};
export default MobileNav;
