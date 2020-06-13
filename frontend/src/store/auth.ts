import api from '@/utils/api';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  namespaced: true
})
export default class Auth extends VuexModule {
  token = '';
  role = '';

  @Mutation
  clear() {
    this.token = '';
    this.role = '';

    api.defaults.headers = {
      Authorization: `Bearer ${this.token}`
    };
  }

  @Mutation
  setToken(token: string) {
    this.token = token;

    api.defaults.headers = {
      Authorization: `Bearer ${this.token}`
    };
  }

  @Mutation
  setRole(role: string) {
    this.role = role;
  }

  @Action({ commit: 'setToken' })
  async authenticate(payload: { id: number; password: string }) {
    const { data: response } = await api.post('/api/login', payload);

    return response;
  }

  @Action({ commit: 'setRole' })
  async fetchRole() {
    const { data: response } = await api.get('/api/user/role');

    return response;
  }

  @Action({ commit: 'clear' })
  async logout() {
    try {
      await api.post('/api/logout');
    } catch (error) {
      return;
    }

    return;
  }

  get getToken(): string {
    return this.token;
  }

  get getRole(): string {
    return this.role;
  }
}
