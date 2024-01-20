'use client';
import type { FC } from 'react';

type Props = {
  icon: React.ReactNode;
  text: string;
};
export const IconTextContainer: FC<Props> = ({ icon, text }) => {
  return (
    <div className="flex items-center pl-2 lg:space-y-1 lg:pl-4">
      <div className="h-6 w-6 rounded-full">{icon}</div>
      <div className="ml-4 text-sm font-normal text-gray-600 lg:text-lg">
        {text}
      </div>
    </div>
  );
};
