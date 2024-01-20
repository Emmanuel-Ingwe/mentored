import fetchApi from './fetch';

export class ServerHttpMethods {
  private static async handleResponse(response: Response) {
    if (response.ok) {
      const data = await response.json();
      return Promise.resolve(data);
    }
    throw new Error(await response.text());
  }

  private static handleError(error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error.message);
    }
    return Promise.reject(error);
  }

  static async get<T>(url: string): Promise<T> {
    try {
      const respones = await fetchApi(url, {
        method: 'GET',
      });
      return await ServerHttpMethods.handleResponse(respones);
    } catch (error) {
      return ServerHttpMethods.handleError(error);
    }
  }

  static post = async (url: string, config?: RequestInit) => {
    return await fetchApi(url, {
      ...config,
      method: 'POST',
    });
  };

  static put = async (url: string, config?: RequestInit) => {
    return await fetchApi(url, {
      ...config,
      method: 'PUT',
    });
  };

  static patch = async (url: string, config?: RequestInit) => {
    return await fetchApi(url, {
      ...config,
      method: 'PATCH',
    });
  };

  static delete = async (url: string, config?: RequestInit) => {
    return await fetchApi(url, {
      ...config,
      method: 'DELETE',
    });
  };
}
