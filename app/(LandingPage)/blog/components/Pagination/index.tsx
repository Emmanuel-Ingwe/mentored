'use client';

import Link from 'next/link';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';
import { usePagination } from '@/shared/hooks/usePagination';
import { cn } from '@/shared/lib/utils';

type Props = {
  category?: string;
  totalCount: number;
  currentPage?: number;
};

const pageSize = parseInt(process.env.NEXT_PUBLIC_PAGE_SIZE || '2');

export const Pagination = ({
  category,
  totalCount,
  currentPage = 1,
}: Props) => {
  const { paginationRange } = usePagination({
    currentPage,
    totalCount,
  });

  return (
    <div className="mb-20">
      <div className="hidden h-[1px] w-full bg-gray-400 md:my-5 lg:block" />

      <div className="flex w-full items-center justify-between sm:px-6 lg:px-0">
        <div className="flex w-full flex-col items-center justify-between gap-y-5 border-gray-200 lg:flex-row">
          <Link
            href={
              category
                ? `/blog/category/${category}/page/${currentPage - 1}`
                : `/blog/page/${currentPage - 1}`
            }
            className={cn(
              'group flex items-center text-gray-600 opacity-75',
              currentPage === 1 && 'pointer-events-none',
            )}
          >
            <RiArrowLeftLine className="h-5 w-5 group-hover:fill-primaryx-500" />
            <span className="ml-3 text-sm font-medium leading-none text-gray-600 group-hover:text-primaryx-500">
              Previous
            </span>
          </Link>
          <div className="flex">
            {paginationRange &&
              paginationRange.map((elem, index) => {
                if (typeof elem === 'number') {
                  return (
                    <Link
                      data-state={currentPage === elem ? 'active' : 'inactive'}
                      href={
                        category
                          ? `/blog/category/${category}/page/${elem}`
                          : `/blog/page/${elem}`
                      }
                      key={index}
                      className="group rounded-md px-4 py-3 text-sm font-medium leading-none text-gray-600 hover:bg-gray-200 hover:text-primaryx-500 data-[state=active]:rounded-t-none data-[state=active]:border-t-2 data-[state=active]:border-primaryx-500 data-[state=active]:text-primaryx-500"
                    >
                      {elem}
                    </Link>
                  );
                }
                return (
                  <p
                    className="flex items-center justify-center px-4 py-2.5 text-sm font-medium leading-none"
                    key={index}
                  >
                    ...
                  </p>
                );
              })}
          </div>

          <Link
            className={cn(
              'group flex items-center text-gray-600',
              currentPage === Math.ceil(totalCount / pageSize) &&
                'pointer-events-none opacity-75',
            )}
            href={
              category
                ? `/blog/category/${category}/page/${currentPage + 1}`
                : `/blog/page/${currentPage + 1}`
            }
          >
            <span className="mr-3 text-sm font-medium leading-none text-gray-600 group-hover:text-primaryx-500">
              Next
            </span>
            <RiArrowRightLine className="h-5 w-5 group-hover:fill-primaryx-500" />
          </Link>
        </div>
      </div>
    </div>
  );
};
