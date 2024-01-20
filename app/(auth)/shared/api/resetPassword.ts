import Http from '@/app/shared/helpers/http';

export const resetPassword = async (data: {
  password: string;
  confirmPassword: string;
}) => {
  const endpoint = '/auth/password-reset/reference';
  return await Http.patch({
    body: data,
    endpoint: endpoint,
  });
};
