<template>
  <div class="overview">
    <h1>Gebruikers Overzicht</h1>
    <transition-group name="fade" mode="out-in">
      <div class="user" v-for="user in users" :key="user.id">
        <h3>Gebruiker #{{ user.id }}</h3>
        <select
          @change="updateRole(user.id, $event.target.value)"
          name="role"
          id="role"
        >
          <option
            v-for="role in roles"
            :key="role"
            :value="role"
            :selected="user.role === role"
          >
            {{ role.charAt(0).toUpperCase() + role.slice(1) }}
          </option>
        </select>
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Role, User } from '../../types';
import api from '@/utils/api';
import { Getter } from 'vuex-class';

@Component
export default class Users extends Vue {
  users: User[] = [];

  @Getter('getRole', { namespace: 'auth' })
  role!: Role;

  public async updateRole(id: number, role: Role) {
    try {
      await api.post(`/api/user/${id}`, {
        role
      });

      this.$toasted.show(`${id} is nu een ${role}!`, {
        duration: 1000,
        position: 'top-center'
      });
    } catch (error) {
      this.$toasted.show('Wissel niet te snel!', {
        duration: 1000,
        position: 'top-center'
      });
    }
  }

  public get roles(): string[] {
    return Object.values(Role);
  }

  private async fetchUsers() {
    const { data: users } = await api.get('/api/users');
    this.users = users;
  }

  created() {
    if (this.role !== Role.Admin) this.$router.push('/register');

    this.fetchUsers();
  }
}
</script>

<style lang="scss" scoped>
.overview {
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2rem;
  border-radius: 15px;
  background-color: #ffffff;
  height: calc(100vh - 7.5rem);
  box-shadow: 0px 0px 4px 0px #7a7a7a10;

  .user {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    select {
      margin: 1rem 0;
    }
  }
}
</style>
