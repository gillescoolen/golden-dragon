<template>
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
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Input from '@/components/UI/Input.vue';
import Button from '@/components/UI/Button.vue';
import { Action } from 'vuex-class';

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
  authenticate!: (payload: { id: number; password: string }) => void;

  /**
   * Calls the store to authenticate the user.
   */
  public async login() {
    try {
      await this.authenticate({ id: this.id, password: this.password });
      this.error = 'Je bent ingelogd!';
      // todo: send the user to the registry page.
    } catch (error) {
      this.error = 'Er is iets misgegaan.';
    }
  }
}
</script>
<style lang="scss" scoped>
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
</style>
