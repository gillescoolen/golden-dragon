<template>
  <div class="spinner"></div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Spinner extends Vue {}
</script>

<style lang="scss" scoped>
.spinner {
  background: linear-gradient(yellow, #e90b5a);
  /* Show only 10px from the border */
  -webkit-mask: radial-gradient(
    farthest-side,
    transparent calc(100% - 10px),
    #fff 0
  );
  mask: radial-gradient(farthest-side, transparent calc(100% - 10px), #fff 0);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: fixed;
  top: calc(50% - 50px);
  left: calc(50% - 50px);
  animation: rot 2s linear infinite;
}

@keyframes rot {
  100% {
    transform: rotate(360deg);
  }
}

body {
  background: linear-gradient(to right, grey, white);
}
</style>
