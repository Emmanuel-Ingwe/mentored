import { cookies } from 'next/headers';

const fetchApi = async (url: string, config?: RequestInit) => {
  const token = cookies().get('token')?.value;
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
