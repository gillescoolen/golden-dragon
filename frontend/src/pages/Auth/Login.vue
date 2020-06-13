<template>
  <div class="wrapper">
    <div class="content">
      <form @submit.prevent="login">
        <div>
          <h1>Inloggen</h1>
          <span class="error">{{ error }}</span>
          <Input
            v-model="id"
            label="Werknemersnummer"
            type="number"
            name="id"
            :required="true"
          />
          <Input
            v-model="password"
            label="Wachtwoord"
            type="password"
            name="password"
            :required="true"
          />
        </div>

        <div>
          <Button type="submit">Inloggen</Button>
        </div>
      </form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Action } from 'vuex-class';
import { AuthenticationPayload } from '@/types';
import Input from '@/components/UI/Input.vue';
import Button from '@/components/UI/Button.vue';

@Component({
  components: {
    Input,
    Button
  }
})
export default class Login extends Vue {
  id = 0;
  password = '';
  error = '';

  @Action('authenticate', { namespace: 'auth' })
  authenticate!: (payload: AuthenticationPayload) => void;

  @Action('fetchRole', { namespace: 'auth' })
  fetchRole!: () => void;

  public async login() {
    try {
      await this.authenticate({ id: this.id, password: this.password });
      await this.fetchRole();
      this.$router.push({ name: 'Register' });
    } catch (error) {
      this.error = 'Er is iets misgegaan.';
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    width: 25rem;
    margin: 1rem;
    padding: 2rem;
    height: 25rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0 0 0.5rem 0 #00000010;

    form {
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .error {
        margin-top: 1rem;
        color: var(--error);
      }

      div {
        display: flex;
        text-align: center;
        flex-direction: column;

        h1 {
          margin: 0;
        }

        a {
          margin-top: 0.3rem;
          color: var(--primary);
          text-decoration: none;
        }
      }
    }
  }
}
</style>
