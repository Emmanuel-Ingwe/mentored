import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getSearchPosts } from '@/sanity/sanity.client';

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const { data, isLoading, isError } = useQuery(
    ['searchPosts', searchTerm],
    () => {
      return getSearchPosts({ searchTerm });
    },
    {
      enabled: searchTerm.length > 3,
    },
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);

    if (e.target.value.length > 3) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return {
    data,
    handleChange,
    isError,
    isLoading,
    isOpen,
    searchTerm,
    setIsOpen,
  };
};
