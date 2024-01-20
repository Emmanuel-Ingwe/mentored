'use client';

import Link from 'next/link';
import { SearchInput } from '@/app/(LandingPage)/shared/components/SearchInput';
import { Skeleton } from '@/shared/components/ui/skeleton';
import { useSearch } from '../../hooks/useSearch';

export const SearchMenu = () => {
  const { data, handleChange, isError, isLoading, isOpen, searchTerm } =
    useSearch();

  return (
    <div className="relative">
      <SearchInput
        placeholder="Search the blog"
        onChange={handleChange}
        value={searchTerm}
      />

      <div
        className="absolute -left-12 -right-12 mt-3 max-h-64 space-y-2 overflow-y-auto rounded-md border border-gray-400 bg-white p-2 
          text-gray-600 transition-opacity duration-300 data-[state=open]:z-[100] data-[state=closed]:opacity-0 data-[state=open]:opacity-100"
        data-state={isOpen ? 'open' : 'closed'}
      >
        {isLoading && (
          <div className="space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-2/3" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-5 w-full" />
              <Skeleton className="h-5 w-2/3" />
            </div>
          </div>
        )}
        {isError && <div>Error...</div>}
        {data &&
          data?.length > 0 &&
          data.map((item) => {
            return (
              <Link
                key={item._id}
                href={`/blog/${item.slug}`}
                className="group"
              >
                <div className="rounded-md p-2 group-hover:bg-gray-50">
                  <h1 className="text-lg font-semibold leading-5 text-gray-800">
                    {item.title}
                  </h1>
                  <p className="line-clamp-1 font-medium">{item.excerpt}</p>
                </div>
              </Link>
            );
          })}
        {data && data?.length === 0 && (
          <div className="py-6 text-center text-lg font-medium">
            No results found
          </div>
        )}
      </div>
    </div>
  );
};
