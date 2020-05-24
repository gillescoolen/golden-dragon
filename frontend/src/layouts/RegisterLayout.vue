<template>
  <div class="main">
    <transition name="fade" mode="out-in">
      <Navigation v-if="token" />
    </transition>
    <transition name="fade" mode="out-in">
      <slot />
    </transition>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

import Navigation from '@/components/Register/Navigation.vue';

@Component({
  components: {
    Navigation
  }
})
export default class Input extends Vue {
  @Getter('getToken', { namespace: 'auth' })
  token!: string;

  private check() {
    !this.token && this.$router.push({ name: 'Login' });
  }

  created() {
    this.check();
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;

  background: linear-gradient(0deg, var(--primary), var(--secondary));
  background-repeat: no-repeat;
  background-attachment: fixed;

  width: 100vw;
  height: 100%;
  max-width: 100%;
  min-height: 100vh;

  padding: 1rem;
}
</style>
