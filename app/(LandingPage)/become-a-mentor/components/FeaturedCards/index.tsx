import React from 'react';
import type { FC } from 'react';

type Props = {
  icon: React.ReactNode;
  highlight: string;
  title: string;
};

const FeaturedCards: FC<Props> = ({ icon, highlight, title }) => {
  return (
    <div className="flex max-h-[17.625rem] max-w-[24rem] flex-col items-center justify-center rounded-4xl border border-light-gray px-[3.188rem] py-[3.25rem] shadow-primary">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primaryx-50">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primaryx-100 text-primaryx">
          {icon}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <h4 className="text-center text-xl font-semibold text-gray-900">
          {title}
        </h4>
        <p className="text-center text-[16px] text-gray-600">{highlight}</p>
      </div>
    </div>
  );
};

export default FeaturedCards;
