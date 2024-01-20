import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { usePathname } from 'next/navigation';
import { getMentors } from '../../../../../shared/helpers/getMentors';
import { getRoleTitles } from '../../../../../shared/helpers/getRoleTitles';
import { useFindAMentorContext } from '../../context/useFindAMentorContext';
import { getCheckedLabelsOrAll, getUpdatedFilteredLabels } from '../../utils';

export const useFilterLabelsGroup = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { setRoles, roles, mentorsData, setFilteredData, setMentorsData } =
    useFindAMentorContext();

  const clearMentorsAndRoles = useCallback(async () => {
    const res = await getMentors('');
    const filters = getRoleTitles({ res });
    setFilteredData(res);
    setMentorsData(res);
    setRoles(filters);
  }, [setFilteredData, setMentorsData, setRoles]);

  const path = usePathname();
  useEffect(() => {
    clearMentorsAndRoles();
  }, [path, clearMentorsAndRoles]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleLabelGroupToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = e.currentTarget;
    const updatedFilteredLabels = getUpdatedFilteredLabels(id, roles);

    const rolesLabelsToFilter = getCheckedLabelsOrAll(updatedFilteredLabels);
    const filteredData = mentorsData.filter((mentor) => {
      return rolesLabelsToFilter.includes(mentor.jobTitle ?? '');
    });

    setRoles(updatedFilteredLabels);
    setFilteredData(filteredData);
  };

  return {
    clearMentorsAndRoles,
    emblaRef,
    handleLabelGroupToggle,
    scrollNext,
  };
};
