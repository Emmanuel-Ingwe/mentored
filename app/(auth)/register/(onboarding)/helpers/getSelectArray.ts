type SelectItem = {
  label: string;
  value: string;
};

export const getSelectArray = (
  userData: string[] | undefined,
  data: SelectItem[],
) => {
  return userData
    ?.map((item) => {
      return data.find((stack) => {
        return stack.value === item;
      });
    })
    .filter((item) => {
      return item !== undefined;
    }) as SelectItem[];
};
