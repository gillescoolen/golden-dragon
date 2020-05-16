import api from '@/utils/api';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

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
      Authorization: this.token
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
}
