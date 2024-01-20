import { useEffect, useState } from 'react';
import type { FilterContentType } from '@/app/(LandingPage)/shared/types/type';
import { useFindAMentorContext } from '../../context/useFindAMentorContext';
import { getUpdatedFilteredLabels } from '../../utils';

export const useFilterSection = (
  header: string,
  content: FilterContentType[],
) => {
  const DEFAULT_END_INDEX = 6;
  const { setRoles, isFilterCleared } = useFindAMentorContext();
  const [endIndex, setEndIndex] = useState(DEFAULT_END_INDEX);
  const [query, setQuery] = useState('');
  const [data, setData] = useState(content);

  const handleShowMore = () => {
    const contentLength = content.length;
    if (endIndex > contentLength) {
      setEndIndex(DEFAULT_END_INDEX);
    } else {
      setEndIndex(endIndex + contentLength);
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, id } = e.target;

    const newData = getUpdatedFilteredLabels(id, content, checked);

    if (header === 'Role') {
      setRoles(newData);
      setData(newData);
    }
    // if (header === 'Expertise') {
    //   setExpertise(newData);
    //   setData(newData);
    // }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setQuery(`jobtitle=${value}`);
    const filteredData = content.filter((item) => {
      return item.label.toLowerCase().includes(value.toLowerCase());
    });
    setData(filteredData);
  };

  useEffect(() => {
    if (isFilterCleared) {
      setData(content);
      setQuery('');
      setEndIndex(DEFAULT_END_INDEX);
    }
  }, [isFilterCleared, content]);

  return {
    data,
    endIndex,
    handleCheckboxChange,
    handleSearch,
    handleShowMore,
    query,
  };
};
