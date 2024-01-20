import Http from '@/app/shared/helpers/http';

export interface JoinWaitListData {
  firstName: string;
  lastName?: string;
  email: string;
  accountType: string;
}

export const getMentors = async (searchParams?: string): Promise<User[]> => {
  const endpoint = searchParams ? '/users?' + searchParams : '/users';
  return await Http.get({
    endpoint: endpoint,
  });
};
export const getMentorById = async (mentorId: string): Promise<User> => {
  const endpoint = `/user/${mentorId}`;
  return await Http.get({ endpoint });
};
