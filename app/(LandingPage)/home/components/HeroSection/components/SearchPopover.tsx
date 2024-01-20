'use client';
import React from 'react';
import { useFindAMentorContext } from '@/app/(LandingPage)/find-a-mentor/[slug]/context/useFindAMentorContext';
import { useSearchMentorSection } from '@/app/(LandingPage)/find-a-mentor/[slug]/hooks/useSearchMentorSection';
import { SearchInput } from '@/app/(LandingPage)/shared/components/SearchInput';
import SearchResults from './SearchResults';

const SearchPopover = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { handleSearch, filteredData } = useSearchMentorSection();
  const { mentorsData } = useFindAMentorContext();
  const ref = React.useRef<HTMLInputElement>(null);
  const [results, setResults] = React.useState<User[]>([]);

  const onClick = () => {
    setIsOpen(!isOpen);
    if (ref.current) {
      ref.current.focus();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length > 2) {
      handleSearch(event);
      setTimeout(() => {
        setResults(filteredData);
      }, 1000);
    } else {
      setResults(mentorsData);
      handleSearch(event);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full lg:w-fit">
      <SearchInput
        ref={ref}
        onClick={onClick}
        onChange={onChange}
        placeholder="Search mentors by tech stack or location"
      />
      {isOpen && (
        <div
          className="absolute left-0 top-16 z-[999] w-full rounded-md border border-gray-100 bg-slate-50 px-4 text-gray-900 shadow-md  lg:flex lg:w-[25rem] lg:justify-center"
          ref={ref}
        >
          <SearchResults results={results} />
        </div>
      )}
    </div>
  );
};

export default SearchPopover;
