import Http from '@/app/shared/helpers/http';
import endpoints from './endpoints';

class AuthServices {
  async register<T>(data: T): Promise<User> {
    return await Http.post({
      body: data,
      endpoint: endpoints.register,
    });
  }

  async updateUser<T>(userId: string, data: T, config?: RequestInit) {
    return await Http.patch({
      body: data,
      config,
      endpoint: `${endpoints.users}/${userId}`,
    });
  }

  async login<T>(data: T): Promise<LoginResponse> {
    return await Http.post({
      body: data,
      endpoint: endpoints.login,
    });
  }
}

export default new AuthServices();
