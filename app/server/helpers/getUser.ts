import { ServerHttpMethods } from '../api/actions';

export const getUserData = async (): Promise<User> => {
  try {
    const endpoint = '/users/profile';
    return await ServerHttpMethods.get(endpoint);
  } catch (error) {
    console.log(error);
  }
  return {} as User;
};
