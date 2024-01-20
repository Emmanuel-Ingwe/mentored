import {
  sortValues as defaultSortValues,
  filterContentExpertise,
} from '@/app/(LandingPage)/shared/contents';
import { useFindAMentorContext } from '../../context/useFindAMentorContext';
import { getCheckedLabelsOrAll, getMentorsSearchResult } from '../../utils';

export const useFilterActions = () => {
  const {
    setExpertise,
    setRoles,
    setSortValues,
    setIsFilterCleared,
    roles,
    mentorsData,
    setFilteredData,
    sortValues,
    query,
    setQuery,
    setNoResultFound,
  } = useFindAMentorContext();

  const handleClearFilters = () => {
    setExpertise(filterContentExpertise);
    setRoles(roles);
    setSortValues(defaultSortValues);
    setFilteredData(mentorsData);
    setIsFilterCleared(true);
    setQuery('');
  };

  const getSortedData = () => {
    const checkedSortValue = sortValues.filter((item) => {
      return item.checked === true;
    });
    setIsFilterCleared(false);
    const searchFiltered = getMentorsSearchResult(mentorsData, query);

    if (checkedSortValue.length > 0) {
      if (checkedSortValue[0].id === 'all') {
        return searchFiltered.sort((a, b) => {
          const aName = `${a.firstName} ${a.lastName}`;
          const bName = `${b.firstName} ${b.lastName}`;
          return aName.localeCompare(bName);
        });
      }
      // if (checkedSortValue[0].id === 'highest-reviews') {
      //   return searchFiltered.sort((a, b) => {
      //     return b.reviews - a.reviews;
      //   });
      // }
      // if (checkedSortValue[0].id === 'earliest-availability') {
      //   return searchFiltered.sort((a, b) => {
      //     const aAvailability = new Date(a.availability);
      //     const bAvailability = new Date(b.availability);
      //     return bAvailability.getTime() - aAvailability.getTime();
      //   });
      // }
    }

    return searchFiltered;
  };

  const handleApplyFilters = () => {
    const sortedData = getSortedData();
    const rolesLabelsToFilter = getCheckedLabelsOrAll(roles);

    const filteredData = sortedData.filter((mentor) => {
      return rolesLabelsToFilter.some((label) => {
        return (mentor.jobTitle ?? '')
          .toLowerCase()
          .includes(label.toLowerCase());
      });
    });

    filteredData.length == 0 ? setNoResultFound(true) : setNoResultFound(false);
    setFilteredData(filteredData);

    setIsFilterCleared(false);
  };

  return { getSortedData, handleApplyFilters, handleClearFilters };
};
