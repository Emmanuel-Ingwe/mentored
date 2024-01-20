'use client';

import type { ComponentType } from 'react';
import React from 'react';
import _ from 'lodash';
import { ArrowRight } from '@/shared/components/Icons/ArrowRight';

type Props = {
  onClick?: () => void;
  userType: string;
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  note: string;
};

export const UserTypeButton = ({ onClick, userType, Icon, note }: Props) => {
  return (
    <button
      onClick={onClick}
      className="user-type-button-box-shadow group flex w-full items-center justify-between rounded-2xl border-[0.805px] border-gray-200 px-6 py-[0.94rem] text-left outline-0 transition-all hover:border-primaryx hover:bg-primaryx-25 focus:border-primaryx md:px-7 md:py-[1.44rem]"
    >
      <Icon className="shrink-0 transition-all max-lg:h-[2.7rem] max-lg:w-[2.6rem]" />

      <div className="ml-6 md:ml-7 md:w-[70%]">
        <h5 className="text-sm font-medium capitalize text-black lg:text-base">
          {_.capitalize(userType)}
        </h5>
        <p className="text-xs text-gray-600 md:text-sm">{note}</p>
      </div>

      <ArrowRight className="invisible shrink-0 transition-all group-hover:visible" />
    </button>
  );
};
