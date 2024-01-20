'use client';

import type { FC } from 'react';
import { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import type { FilterContentType } from '@/app/(LandingPage)/shared/types/type';
import { getMentors } from '@/app/shared/helpers/getMentors';
import FindAMentorContext from './FindAMentorContext';
import { getRoleTitles } from '../../../../shared/helpers/getRoleTitles';

type Props = {
  children: React.ReactNode;
};

const FindAMentorProvider: FC<Props> = ({ children }, ref) => {
  const [roles, setRoles] = useState<FilterContentType[]>([]);
  const [expertise, setExpertise] = useState<FilterContentType[]>([]);
  const [sortValues, setSortValues] = useState<FilterContentType[]>([]);
  const [isFilterCleared, setIsFilterCleared] = useState<boolean>(false);
  const [mentorsData, setMentorsData] = useState<User[]>([]);
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const [NoResultFound, setNoResultFound] = useState<boolean>(false);
  const [query, setQuery] = useState<string>('');

  if (useContext(FindAMentorContext) === undefined) {
    throw new Error(
      'FindAMentorContext must be used within a FindAMentorProvider',
    );
  }

  const { isLoading } = useQuery(['topMentors', query], async () => {
    const res = await getMentors(query);
    setMentorsData(res);
    setFilteredData(res);

    return res;
  });

  useQuery({
    queryFn: async () => {
      const res = await getMentors();
      const filters = getRoleTitles({ res });
      setRoles(filters);
      return filters;
    },
    queryKey: ['roleTitles'],
  });

  return (
    <FindAMentorContext.Provider
      value={{
        NoResultFound,
        expertise,
        filteredData,
        isFilterCleared,
        isLoading,
        mentorsData,
        query,
        ref,
        roles,
        setExpertise,
        setFilteredData,
        setIsFilterCleared,
        setMentorsData,
        setNoResultFound,
        setQuery,
        setRoles,
        setSortValues,
        sortValues,
      }}
    >
      {children}
    </FindAMentorContext.Provider>
  );
};

export default FindAMentorProvider;
