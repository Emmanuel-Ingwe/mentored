'use client';
import React from 'react';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const GoBackButton = () => {
  const navigate = useRouter();
  function goBack() {
    navigate.back();
  }
  return (
    <Button
      className="flex w-full items-center justify-center gap-x-2 rounded border bg-white text-black shadow hover:bg-slate-100 lg:w-auto"
      onClick={goBack}
    >
      <ArrowLeftIcon />
      <span> Go back</span>
    </Button>
  );
};

export default GoBackButton;
