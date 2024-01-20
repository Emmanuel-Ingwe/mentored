'use client';
import { useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import Http from '@/app/shared/helpers/http';

export const useSendData = () => {
  const params = useSearchParams();
  const [ref] = params.get('ref')?.split(':') || [];
  const [token] = params.get('token')?.split(':') || [];

  const verifyEmail = useCallback(async () => {
    if (ref && token) {
      const endpoint = `/auth/verifications/${ref}`;
      const response = await Http.patch({
        body: { token },
        endpoint: endpoint,
      });
    }
  }, [ref, token]);

  return { verifyEmail };
};
