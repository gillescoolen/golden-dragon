import api from '@/utils/api';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  namespaced: true
})
export default class Auth extends VuexModule {
  token = '';

  @Mutation
  setToken(token: string) {
    this.token = token;

    /**
     * Modify the Authorization header to
     * use our freshly gained token.
     */
    api.defaults.headers = {
      Authorization: `Bearer ${this.token}`
    };
  }

  /**
   * Authenticate the user.
   * @param payload The user ID and password.
   */
  @Action({ commit: 'setToken' })
  async authenticate(payload: { id: number; password: string }) {
    const { data: response } = await api.post('/api/login', payload);

    return response;
  }

  /**
   * Log the user out of the application.
   * Revokes all tokens in the backend.
   */
  @Action({ commit: 'setToken' })
  async logout() {
    await api.post('/api/logout');
    return '';
  }

  get getToken(): string {
    return this.token;
  }
}
