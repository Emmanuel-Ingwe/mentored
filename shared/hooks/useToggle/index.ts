import { useState } from 'react';

export const useToggle = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle((prev: boolean) => {
      return !prev;
    });
  };

  return { onToggle, toggle };
};
