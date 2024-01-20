import { getCookie } from 'cookies-next';
import fetchApi from './fetchApi';

class Http {
  private static get token() {
    return getCookie('token');
  }

  private static handleError(error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(JSON.parse(error.message));
    }
    return Promise.reject(error);
  }

  private static async handleResponse(response: Response) {
    if (response.ok) {
      const data = await response.json();
      return Promise.resolve(data);
    }
    throw new Error(await response.text());
  }

  static async post<T>({ endpoint, body }: { endpoint: string; body: T }) {
    try {
      const response = await fetchApi(endpoint, {
        body: JSON.stringify(body),
        method: 'POST',
      });

      return Http.handleResponse(response);
    } catch (error: unknown) {
      return error;
    }
  }

  static async patch<T>({
    endpoint,
    body,
    config,
  }: {
    endpoint: string;
    body: T;
    config?: RequestInit;
  }) {
    try {
      const response = await fetchApi(endpoint, {
        body: JSON.stringify(body),
        method: 'PATCH',
        ...config,
      });
      return Http.handleResponse(response);
    } catch (error: unknown) {
      return Http.handleError(error);
    }
  }

  static async patchMultipart({
    endpoint,
    body,
  }: {
    endpoint: string;
    body: FormData;
  }) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}${endpoint}`,
        {
          body: body,
          headers: {
            Authorization: `Bearer ${Http.token}`,
          },
          method: 'PATCH',
        },
      );

      return Http.handleResponse(response);
    } catch (error: unknown) {
      return Http.handleError(error);
    }
  }

  static async delete<T>({ endpoint, body }: { endpoint: string; body?: T }) {
    try {
      const response = await fetchApi(endpoint, {
        body: JSON.stringify(body),
        method: 'DELETE',
      });
      return Http.handleResponse(response);
    } catch (error: unknown) {
      return Http.handleError(error);
    }
  }

  static async get<T>({ endpoint }: { endpoint: string }): Promise<T> {
    try {
      const response = await fetchApi(endpoint, {
        method: 'GET',
      });
      return Http.handleResponse(response);
    } catch (error: unknown) {
      return Http.handleError(error);
    }
  }
}

export default Http;
