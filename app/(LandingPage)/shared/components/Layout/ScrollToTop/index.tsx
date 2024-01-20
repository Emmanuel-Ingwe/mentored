'use client';

import React from 'react';
import Image from 'next/image';
import ArrowUp from '@/public/images/arrow-up.svg';
import useScrollToTopButton from '../../../hooks/useScrollToTopButton';

const ScrollToTopButton: React.FC = () => {
  const isVisible = useScrollToTopButton();

  const scrollToTop = () => {
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  return (
    <button
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-4 right-4 z-10 transform rounded-full bg-indigo-600 px-2 py-2 text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-indigo-600 hover:opacity-100`}
      onClick={scrollToTop}
    >
      <Image src={ArrowUp} alt="become a mentor" className="" />
    </button>
  );
};

export default ScrollToTopButton;
