import Http from '@/app/shared/helpers/http';

export const getUserData = async (): Promise<User> => {
  const endpoint = '/users/profile';
  return await Http.get({
    endpoint: endpoint,
  });
};
