import { useCallback } from 'react';
import { getMentors } from '../../../shared/helpers/getMentors';
import { useFindAMentorContext } from '../../find-a-mentor/[slug]/context/useFindAMentorContext';

export const useTopMentors = () => {
  const {
    mentorsData,
    roles,
    setQuery,
    setRoles,
    isLoading,
    setMentorsData,
    setFilteredData,
  } = useFindAMentorContext();

  const handleLabelToggled = useCallback(
    async (jobTitle: string, id: string) => {
      if (!jobTitle && !id) {
        return;
      }
      // setQuery(`jobTitle=${jobTitle}`);
      async function toggleMentorsFunct(query: string) {
        const res = await getMentors(query);
        if (id === 'allMentors') {
          setFilteredData(res);
        } else if (id === 'topMember') {
          setMentorsData(res);
        } else {
          setFilteredData(res);
          setMentorsData(res);
        }
      }
      toggleMentorsFunct(`jobTitle=${jobTitle}`);

      const updatedFilterLabels = roles?.map((filterLabel) => {
        if (filterLabel.jobTitle) {
          if (filterLabel?.jobTitle.toLowerCase() === jobTitle.toLowerCase()) {
            if (filterLabel.checked) {
              toggleMentorsFunct('');
              setQuery('');

              return { ...filterLabel, checked: false };
            }
            return { ...filterLabel, checked: true };
          }
          return filterLabel;
        }
        return filterLabel;
      });

      const checkedFilterLabels = updatedFilterLabels?.filter((filterLabel) => {
        return (
          filterLabel.checked &&
          filterLabel.jobTitle?.toLowerCase() !== jobTitle.toLowerCase()
        );
      });
      const updatedCheckedFilterLabels = checkedFilterLabels?.map(
        (filterLabel) => {
          return {
            ...filterLabel,
            checked: false,
          };
        },
      );

      const mergedFilterLabels = updatedFilterLabels?.map((filterLabel) => {
        const updatedFilterLabel = updatedCheckedFilterLabels?.find(
          (checkedFilterLabel) => {
            return (
              checkedFilterLabel.jobTitle?.toLowerCase() ===
              filterLabel.jobTitle?.toLowerCase()
            );
          },
        );
        if (updatedFilterLabel) {
          return updatedFilterLabel;
        }
        return filterLabel;
      });
      setRoles(mergedFilterLabels);
    },
    [roles, setQuery, setRoles, setFilteredData, setMentorsData],
  );

  return {
    filterLabels: roles,
    handleLabelToggled,
    isLoading,
    setRoles,
    topMentors: mentorsData,
  };
};
