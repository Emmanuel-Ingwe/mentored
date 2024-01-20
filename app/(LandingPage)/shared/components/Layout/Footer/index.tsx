'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { footerNavigationData } from '@/app/(LandingPage)/home/contents';
import Lazyload from '@/app/shared/Hydrate/Lazyload';
import { Facebook } from '@/shared/components/Icons/Facebook';
import { LinkedIn } from '@/shared/components/Icons/LinkedIn';
import { Twitter } from '@/shared/components/Icons/Twitter';
import { LogoNeutral } from '@/shared/components/LogoNeutral';
import { Button } from '@/shared/components/ui/button';

const WaitListPopUp = dynamic(
  () => {
    return import('../../../features/waitlist/WaitListPopUp');
  },
  {
    ssr: false,
  },
);
const Footer = () => {
  return (
    <Lazyload>
      <footer className="bg-gray-800 px-4 py-12 lg:px-16 xl:px-28">
        <div className="mx-auto flex w-full flex-col items-center justify-between gap-8 px-5 md:px-0 lg:flex-row lg:items-start">
          <div>
            <h1 className="text-[24px] font-semibold text-white lg:text-3xl">
              Get notified when we launch
            </h1>
            <p className="font-normal text-[#EAECF0] lg:mt-4 lg:text-[20px]">
              Stay up to date with the latest news and announcements from
              MentorsHub.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <WaitListPopUp
              trigger={
                <Button className="w-full lg:w-auto" hasAnimaion>
                  Join the waitlist
                </Button>
              }
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-x-16 gap-y-12 py-12 text-gray-200 max-lg:border-t max-lg:border-gray-600 lg:mt-12 lg:grid-cols-3 lg:py-16 xl:grid-cols-[20rem_repeat(5,auto)]">
          <div className="max-lg:col-span-2">
            <LogoNeutral />
            <p className="mt-6 text-white lg:mt-8">
              Empowering Your Tech Journey with Personalized Mentorship and
              More.
            </p>
          </div>

          {footerNavigationData.map((item) => {
            return (
              <div key={item.section}>
                <h1 className="text-gray-2000 text-sm font-semibold uppercase">
                  {item.section}
                </h1>
                <div className="mt-4 flex flex-col gap-3">
                  {item.links.map((link) => {
                    return (
                      <Link
                        key={link.text}
                        href={link.href}
                        className="font-semibold"
                      >
                        {link.text}
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col-reverse justify-between gap-6 border-t border-gray-600 pt-8 lg:flex-row lg:items-center">
          <p className="text-gray-2000">
            © 2023 MentorsHub ÖU. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://x.com/mentoredapp">
              <Twitter />
            </Link>
            <Link href="https://linkedin.com/mentoredapp">
              <LinkedIn />
            </Link>
            <Link href="https://facebook.com/mentoredapp">
              <Facebook />
            </Link>
          </div>
        </div>
      </footer>
    </Lazyload>
  );
};
export default Footer;
