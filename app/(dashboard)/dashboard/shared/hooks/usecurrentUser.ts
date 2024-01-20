'use client';
import { useQuery } from '@tanstack/react-query';
import { getUserData } from '@/app/shared/helpers/getUserData';

const useCurrentUser = () => {
  const { data, isError, isLoading } = useQuery(['getUserData'], getUserData);
  const isMentee = data?.accountType === 'mentee';
  const isMentor = data?.accountType === 'mentor';
  const session = 0;

  return {
    currentUser: data,
    isError,
    isLoading,
    isMentee,
    isMentor,
    session,
  };
};
export default useCurrentUser;
