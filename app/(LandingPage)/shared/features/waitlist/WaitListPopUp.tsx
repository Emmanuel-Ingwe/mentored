import React from 'react';
import { Modal } from '@/shared/components/Modal';
import SheetModal from '@/shared/components/Sheets';
import WaitListContent from './WaitListContent';

type Props = {
  trigger: React.ReactNode;
};

const WaitListPopUp = ({ trigger }: Props) => {
  return (
    <>
      {/* desktop  */}
      <div className="hidden w-full  lg:block">
        <Modal classStyle="md:max-w-[496px]" trigger={trigger}>
          <WaitListContent />
        </Modal>
      </div>
      {/* mobile */}
      <div className=" lg:hidden">
        <SheetModal classStyle="md:max-w-[496px] " trigger={trigger}>
          <WaitListContent />
        </SheetModal>
      </div>
    </>
  );
};

export default WaitListPopUp;
