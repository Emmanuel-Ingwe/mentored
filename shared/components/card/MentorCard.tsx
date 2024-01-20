import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/shared/lib/utils';
import ChatIcon from '../Icons/ChatIcon';
import { OfficeIcon } from '../Icons/OfficeIcon';
import { Button } from '../ui/button';

type Props = {
  _id: string;
  src: string;
  name: string;
  role: string;
  company: string;
  sessions?: number;
  reviews?: number;
  experience?: number | string;
  className?: string;
  imageClassName?: string;
  imageHeight?: number;
  imgageWidth?: number;
  showExperienceField?: boolean;
  href?: string;
  showApplyButton?: boolean;
};

const MentorCard: FC<Props> = ({
  src,
  _id,
  role,
  name,
  company,
  reviews = 0,
  imageHeight = 240,
  sessions = 0,
  experience = 5,
  className,
  showExperienceField = true,
  imgageWidth = 248,
  href = `/mentor/${_id}`,
  imageClassName,
  showApplyButton = false,
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white px-[0.83rem] py-[0.56rem]',
        className,
      )}
    >
      <div className="flex w-[233px] justify-center">
        <Image
          src={src}
          alt={src}
          height={imageHeight}
          width={imgageWidth}
          className={cn('h-[248px] object-cover', imageClassName)}
        />
      </div>
      <div className="mt-6 w-full space-y-2 overflow-hidden px-2">
        <p className="text-left text-base font-bold text-gray-900">{name}</p>
        <div className="flex items-start justify-start gap-2 text-lg">
          <OfficeIcon className="mt-1 h-4 w-4 shrink-0" />
          <p className="text-sm font-normal text-polar-600">
            {role} <span className="font-normal text-gray-500">at</span>{' '}
            {company}
          </p>
        </div>
        <div className="flex flex-row items-start gap-2">
          <ChatIcon />
          <p className="text-sm font-normal text-polar-600">
            {sessions} Sessions{' '}
            <span className="font-normal text-gray-500">{`(${reviews} reviews)`}</span>
          </p>
        </div>
      </div>
      {showExperienceField && (
        <div className="mt-auto flex w-full flex-row items-center justify-between rounded-md bg-polar p-4">
          <div>
            <p className="text-xs text-polar-700">Experience</p>
            <p className="text-sm font-bold text-polar-600">
              {experience} years
            </p>
          </div>
          {showApplyButton && (
            <Button className="h-10 w-16 rounded-lg border-primaryx text-sm  text-white">
              <Link href={href}>Apply</Link>
            </Button>
          )}
        </div>
      )}
    </Link>
  );
};

export default MentorCard;
