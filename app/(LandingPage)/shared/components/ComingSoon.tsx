import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { Modal } from '@/shared/components/Modal';
import { Button } from '@/shared/components/ui/button';

type Props = {
  trigger: React.ReactNode;
};

const WaitListPopUp = dynamic(
  () => {
    return import('../features/waitlist/WaitListPopUp');
  },
  {
    ssr: false,
  },
);

const ComingSoon = ({ trigger }: Props) => {
  return (
    <div>
      <Modal classStyle={'md:max-w-[496px]'} trigger={trigger}>
        <div className="flex flex-col items-center justify-center gap-y-5">
          <Image
            src="/images/ComingSoonImg.png"
            width={500}
            height={500}
            alt="coming soon"
            className="w-[300px]"
          />
          <h3 className="mb-4 text-center text-[30px] font-semibold text-gray-900">
            Coming Soon!
          </h3>
          <p className="mb-3 text-center text-sm font-normal text-gray-600">
            Hey! We are cooking it up. Join the wait list to get notified when
            we are done!
          </p>

          <WaitListPopUp
            trigger={<Button className="w-full">Join the waitlist now</Button>}
          />
        </div>
      </Modal>
    </div>
  );
};

export default ComingSoon;
