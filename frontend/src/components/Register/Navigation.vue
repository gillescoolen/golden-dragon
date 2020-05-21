<template>
  <div class="navigation">
    <router-link to="/register">Kassa</router-link>
    <router-link to="/overview">Gerechten</router-link>
    <router-link to="/sales">Verkoop Overzicht</router-link>
    <Button @click.native="logout">Log uit</Button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import Button from '@/components/UI/Button.vue';
import { Action } from 'vuex-class';

@Component({
  components: {
    Button
  }
})
export default class Navigation extends Vue {
  @Action('logout', { namespace: 'auth' })
  logoutAction!: () => void;

  async logout() {
    this.logoutAction();

    this.$router.push({ name: 'Login' });
  }
}
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  margin: 0 0 1rem 0;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  background-color: white;

  a {
    background: linear-gradient(124deg, var(--primary), var(--secondary));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    font-weight: 700;
    font-size: 1.4rem;
    text-decoration: none;
  }
}
</style>
