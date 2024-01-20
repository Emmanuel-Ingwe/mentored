import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import useCurrentUser from '@/app/(dashboard)/dashboard/shared/hooks/usecurrentUser';
import { getMentors } from '@/app/shared/helpers/getMentors';

const useTopmatches = () => {
  const { currentUser } = useCurrentUser();
  const [topMatches, setTopMatches] = useState<User[]>([]);
  const [topMatchesShown, setTopMatchesShown] = useState<boolean>(false);
  const jobTitle = encodeURIComponent(currentUser?.jobTitle ?? '');
  const stack = currentUser?.stack;
  const encodedStack = stack
    ?.map((s) => {
      return `"${encodeURIComponent(s)}"`;
    })
    .join(',');
  const query = `&jobTitle="${jobTitle}"`;

  const { isLoading, data } = useQuery(['topMentors', query], async () => {
    const res = await getMentors(query);
    if (res.length) {
      setTopMatches(res.slice(0, 3));
    }
    return res;
  });
  const showAllTopMatches = () => {
    if (!data) {
      return;
    }
    if (topMatchesShown) {
      setTopMatches(data.slice(0, 3));
      setTopMatchesShown(false);
      return;
    }

    setTopMatches(data.slice(0, 12));
    setTopMatchesShown(true);
  };
  return {
    data: topMatches,
    isLoading,
    showAllTopMatches,
    topMatchesShown,
  };
};

export default useTopmatches;
