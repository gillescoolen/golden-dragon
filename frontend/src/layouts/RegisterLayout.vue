<template>
  <div class="main">
    <div class="content">
      <transition name="fade" mode="out-in">
        <slot />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
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
  flex-direction: row;

  background: linear-gradient(124deg, var(--primary), var(--secondary));
  background-repeat: no-repeat;
  background-attachment: fixed;

  width: 100vw;
  height: 100%;
  max-width: 100%;
  min-height: 100vh;

  .content {
    margin: 4rem;
    padding: 2rem;
    min-height: 50vh;
    border-radius: 15px;
    background-color: #ffffff;
    box-shadow: 0px 0px 4px 0px #7a7a7a10;
  }
}
</style>
