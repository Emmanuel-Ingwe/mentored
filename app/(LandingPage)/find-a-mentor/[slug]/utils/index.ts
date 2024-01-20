import type { FilterContentType } from '@/app/(LandingPage)/shared/types/type';

export const getMentorsSearchResult = (data: User[], value: string) => {
  const searchResults = data.filter((item) => {
    return (
      item.firstName.toLowerCase().includes(value.toLowerCase()) ||
      item.industry?.toLowerCase().includes(value.toLowerCase()) ||
      item?.jobTitle?.toLowerCase().includes(value.toLowerCase())
    );
  });

  return searchResults;
};

export const getUpdatedFilteredLabels = (
  id: string,
  data: FilterContentType[],
  checked?: boolean,
) => {
  const newData = data.map((item) => {
    if (item.id === id) {
      if (typeof checked === 'boolean') {
        return { ...item, checked };
      }
      return { ...item, checked: !item.checked };
    }
    return item;
  });

  return newData;
};

export const getCheckedLabels = (items: FilterContentType[]) => {
  return items
    .filter((item) => {
      return item.checked === true;
    })
    .map((item) => {
      return item.label;
    });
};

export const getCheckedLabelsOrAll = (items: FilterContentType[]) => {
  const allLabels = items.map((item) => {
    return item.label;
  });

  const isAllNotChecked = items.every((item) => {
    return item.checked === false;
  });

  const labels = isAllNotChecked ? allLabels : getCheckedLabels(items);

  return labels;
};
