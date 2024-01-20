import Http from '@/app/shared/helpers/http';

export const forgotPassword = async (data: { email: string }) => {
  const endpoint = '/auth/password-reset';
  return await Http.post({
    body: data,
    endpoint: endpoint,
  });
};
