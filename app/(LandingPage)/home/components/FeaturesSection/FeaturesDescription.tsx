'use client';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/shared/lib/utils';
type Props = {
  isActive: boolean;
  featureTitle: string;
  featureDescription: string;
  onHover: (idx: number) => void;
  idx: number;
  onClick?: (idx: number) => void;
};

export const FeaturesDescription: FC<Props> = ({
  isActive,
  featureDescription,
  featureTitle,
  idx,
  onHover,
  onClick,
}) => {
  return (
    <div className="flex flex-col items-start justify-start">
      <motion.div
        animate={{ y: isActive ? 4 : 0 }}
        transition={{ duration: 0.9, type: 'keyframes' }}
        onMouseEnter={() => {
          return onHover(idx);
        }}
        onClick={() => {
          return onClick?.(idx);
        }}
        className={cn(
          'flex w-full cursor-pointer flex-col items-start justify-start border-l-4 pb-4 pl-6 pt-4',
          isActive && 'border-primaryx transition-all',
        )}
      >
        <h3 className="text-lg font-semibold text-gray-900 lg:text-xl">
          {featureTitle}
        </h3>
        <p className="font-normal text-gray-600 lg:text-base xl:text-xl">
          {featureDescription}
        </p>
      </motion.div>
    </div>
  );
};
