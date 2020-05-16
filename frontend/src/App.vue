<template>
  <div>
    <component :is="layout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

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
  }
}
</script>

<style lang="scss">
@font-face {
  font-family: 'Jost';
  src: url('assets/fonts/jost.ttf');
}
:root {
  --primary: #d45555;
  --secondary: #cf774e;
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
</style>
