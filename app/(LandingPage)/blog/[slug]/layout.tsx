import Link from 'next/link';
import { RiArrowGoBackLine } from 'react-icons/ri';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-4 lg:px-28 lg:py-5">
      <Link href={'/blog'}>
        <button className="hidden w-full items-center justify-center gap-x-2 rounded-lg border bg-white px-5 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800 sm:w-auto md:flex">
          <RiArrowGoBackLine />
          <span>Go back</span>
        </button>
      </Link>
      {children}
    </div>
  );
}
