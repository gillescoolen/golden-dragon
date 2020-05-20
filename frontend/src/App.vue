<template>
  <div>
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import api from './utils/api';

@Component
export default class App extends Vue {
  layout = null;

  created() {
    /**
     * Assign the layout in created() because
     * the route params don't exist when
     * constructing this component.
     */
    this.layout = this.$route.meta.layout;

    /**
     * Request the laravel CSRF token.
     * We don't have it by default because
     * we're not injecting it using blade.
     */
    api.get('/sanctum/csrf-cookie');
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Jost';
  src: url('assets/fonts/jost.ttf');
}
:root {
  --primary: #dd4d4d;
  --secondary: #dd7748;
  --error: #c70000;
  --gray: #979797;
}

* {
  font-weight: normal;
  box-sizing: border-box;
  font-family: 'Jost', Arial, Helvetica, sans-serif;
}

body {
  margin: 0;
  padding: 0;
}

.blur {
  filter: blur(0.3rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease-out;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(2rem);
}
</style>
