'use client';
import React from 'react';
import type { VisitorType } from '@/app/(LandingPage)/shared/types/type';
import { Tabs, TabsList, TabsTrigger } from '@/shared/components/ui/tabs';

type Props = {
  defaultValue: VisitorType;
  children: React.ReactNode;
};

const UserTypeSwitch = ({ defaultValue = 'MENTEE', children }: Props) => {
  return (
    <Tabs
      defaultValue={defaultValue}
      className="flex w-full flex-col items-center justify-center"
    >
      <TabsList className="rounded-3xl bg-primaryx-100">
        <TabsTrigger className="text-primaryx" value="MENTEE">
          Mentee
        </TabsTrigger>
        <TabsTrigger className="text-primaryx" value="MENTOR">
          Mentor
        </TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
};

export default UserTypeSwitch;
