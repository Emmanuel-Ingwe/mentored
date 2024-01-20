import { createContext } from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { FilterContentType } from '@/app/(LandingPage)/shared/types/type';

type FindAMentorContextProps = {
  roles: FilterContentType[];
  setRoles: Dispatch<SetStateAction<FilterContentType[]>>;
  expertise: FilterContentType[];
  setExpertise: Dispatch<SetStateAction<FilterContentType[]>>;
  sortValues: FilterContentType[];
  setSortValues: Dispatch<SetStateAction<FilterContentType[]>>;
  isFilterCleared: boolean;
  setIsFilterCleared: Dispatch<SetStateAction<boolean>>;
  mentorsData: User[];
  setMentorsData: Dispatch<SetStateAction<User[]>>;
  filteredData: User[];
  setFilteredData: Dispatch<SetStateAction<User[]>>;
  NoResultFound: boolean;
  setNoResultFound: Dispatch<SetStateAction<boolean>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  ref: React.MutableRefObject<HTMLDivElement> | null;
  isLoading: boolean;
};

const FindAMentorContext = createContext<FindAMentorContextProps>({
  NoResultFound: false,
  expertise: [],
  filteredData: [],
  isFilterCleared: false,
  isLoading: false,
  mentorsData: [],
  query: '',
  ref: null,
  roles: [],
  setExpertise: (_) => {
    return null;
  },
  setFilteredData: (_) => {
    return null;
  },
  setIsFilterCleared: (_) => {
    return null;
  },
  setMentorsData: (_) => {
    return null;
  },
  setNoResultFound: (_) => {
    return null;
  },
  setQuery: (_) => {
    return null;
  },
  setRoles: (_) => {
    return null;
  },
  setSortValues: (_) => {
    return null;
  },
  sortValues: [],
});

export default FindAMentorContext;
