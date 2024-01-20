'use client';
import React from 'react';
import Link from 'next/link';
import Lazyload from '@/app/shared/Hydrate/Lazyload';
import GoBackButton from './GoBackButton';
import { ImgComp } from '../ImgComp';
import { Button } from '../ui/button';

const NotFoundComp = () => {
  return (
    <Lazyload>
      <div className="mx-auto mb-10 flex h-screen max-w-[85%] flex-wrap-reverse items-center justify-center lg:justify-between">
        <div className="flex flex-col justify-center gap-y-4 lg:w-1/2">
          <p className="text-md font-semibold text-[#383cb3]">404 error</p>

          <h1 className='tracking-widest" text-[36px] font-semibold leading-[44px] text-black lg:text-[60px] lg:leading-[72px]'>
            Page not found.
          </h1>
          <p className="text-[14px] text-[#475467] lg:w-[480px] lg:text-[20px]">
            The page you are looking does not exist. It might have been moved or
            deleted.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <GoBackButton />
            <Link href="/" className="w-full lg:w-auto">
              <Button className="w-full">Take me home</Button>
            </Link>
          </div>
        </div>
        <div>
          <ImgComp
            src={'/images/NotFoundImg.svg'}
            width={500}
            height={500}
            alt={'Not found Image'}
            className={'w-full'}
          />
        </div>
      </div>
    </Lazyload>
  );
};

export default NotFoundComp;
