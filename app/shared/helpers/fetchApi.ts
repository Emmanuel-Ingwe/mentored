import { getCookie } from 'cookies-next';

const fetchApi = async (url: string, config?: RequestInit) => {
  const token = getCookie('token');
  const authorization = token
    ? { Authorization: `Bearer ${token}` }
    : { Authorization: '' };

  config = {
    ...config,
    headers: {
      ...authorization,
      'Content-Type': 'application/json',
      ...config?.headers,
    },
  };
  return await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`, config);
};

export default fetchApi;
