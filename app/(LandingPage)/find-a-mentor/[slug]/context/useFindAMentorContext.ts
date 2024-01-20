import { useContext } from 'react';
import FindAMentorContext from './FindAMentorContext';

export const useFindAMentorContext = () => {
  return useContext(FindAMentorContext);
};
