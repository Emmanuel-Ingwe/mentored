'use client';
import { useEffect, useState } from 'react';
import { Logo } from '@/shared/components/Logo';
import { MobileLogo } from '@/shared/components/MobileLogo';
import HambuggerButton from './HambuggerButton';
import useHambuggerButton from './HambuggerButton/useHambuggerButton';
import { MainNavbar } from '../Nav/MainNavbar';
import MobileNav from '../Nav/MobileNav';
import NavButtons from '../Nav/NavButtons';

const MainHeader = () => {
  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const toggleMobileMode = () => {
    setToggle(!toggle);
  };

  const { scope: ref } = useHambuggerButton(toggle);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const shouldShowFloatingNav = currentScrollY > prevScrollY;

      if (!shouldShowFloatingNav) {
        setIsSticky(false);
        setPrevScrollY(currentScrollY);
        return;
      }
      setIsSticky(true);
      setPrevScrollY(currentScrollY);
    };
    setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 1000);
    return () => {
      return window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY, isSticky]);

  const headerClasses = `mx-4 mt-5 flex h-16 items-center justify-between z-10 sticky lg:bg-gray-200 top-0 rounded-xl  bg-gray-200 bg-gradient-to-t shadow-2xl shadow-gradient-gray px-4 md:h-20 lg:mx-0 lg:bg-current lg:shadow-none lg:px-28 transition-all duration-300 ${
    isSticky
      ? 'lg:sticky !m-0 top-0 z-[100] !rounded-none'
      : '!static lg:bg-transparent lg:!shadow-none'
  }`;
  const deskLogoClasses = `hidden lg:block lg-28 xl:w-fit ${
    isSticky ? 'lg:hidden' : ''
  }`;

  const mobLogoClasses = `lg:hidden ${isSticky ? 'lg:!block' : ''}`;

  return (
    <header className={headerClasses}>
      <div className={deskLogoClasses}>
        <Logo />
      </div>

      <div className={mobLogoClasses}>
        <MobileLogo />
      </div>

      <MainNavbar />

      <NavButtons className="max-lg:hidden" />
      <div ref={ref} className="lg:hidden">
        <HambuggerButton toggleMobileMode={toggleMobileMode} />

        {toggle && <MobileNav toggleMobileMode={toggleMobileMode} />}
      </div>
    </header>
  );
};
export default MainHeader;
