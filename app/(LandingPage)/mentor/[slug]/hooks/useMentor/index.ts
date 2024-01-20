'use client';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import { getMentorById } from '@/app/shared/helpers/getMentors';

export const useMentor = () => {
  const { slug } = useParams();
  const { data, isLoading, isError } = useQuery({
    queryFn: async () => {
      const res = await getMentorById(slug as string);
      return res;
    },
    queryKey: ['fetchMentors'],
  });
  if (!data) {
    return {
      isError,
      isLoading,
      mentor: {} as User,
    };
  }

  return {
    isError,
    isLoading,
    mentor: data,
  };
};
