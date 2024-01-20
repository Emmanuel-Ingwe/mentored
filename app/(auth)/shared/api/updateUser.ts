import Http from '@/app/shared/helpers/http';

export const updateUser = async (data: Partial<User>, userId: string) => {
  const endpoint = `/users/${userId}`;
  return await Http.patch({
    body: data,
    endpoint: endpoint,
  });
};
