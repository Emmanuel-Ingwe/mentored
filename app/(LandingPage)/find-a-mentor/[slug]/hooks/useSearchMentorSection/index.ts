'use client';

import { useEffect } from 'react';
import { sortValues as defaultSortValues } from '@/app/(LandingPage)/shared/contents';
import { useFindAMentorContext } from '../../context/useFindAMentorContext';
import { useFilterActions } from '../useFilterActions';

export const useSearchMentorSection = () => {
  const {
    setRoles,
    mentorsData,
    setSortValues,
    isFilterCleared,
    filteredData,
    setFilteredData,
    query,
    setQuery,
    roles,
    NoResultFound,
    setNoResultFound,
    isLoading,
  } = useFindAMentorContext();
  const { getSortedData } = useFilterActions();

  const sorted = getSortedData();
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const searchPhrase = value.toLowerCase().trimStart();

    if (searchPhrase === '') {
      setFilteredData(sorted);
    } else {
      const filteredResults = sorted.filter((item: User) => {
        const values = Object.values(item).join(' ').toLowerCase();
        return values.includes(searchPhrase);
      });

      setFilteredData(filteredResults);
      setNoResultFound(filteredResults.length === 0);
    }
  };

  useEffect(() => {
    // setExpertise(filterContentExpertise);
    setRoles(roles);
    setSortValues(defaultSortValues);
    setFilteredData(filteredData);
  }, [filteredData, setFilteredData, setRoles, setSortValues, roles]);

  useEffect(() => {
    if (isFilterCleared) {
      setFilteredData(mentorsData);
      setQuery('');
    }
  }, [isFilterCleared, mentorsData, setFilteredData, setQuery]);

  return {
    NoResultFound,
    filteredData,
    handleSearch,
    isLoading,
    query,
    roles,
  };
};
