<template>
  <div class="modal" @click="$emit('close')">
    <div class="content" @click.stop>
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Modal extends Vue {}
</script>

<style lang="scss" scoped>
.modal {
  width: 100%;
  height: 100%;
  z-index: 100;
  position: absolute;

  .content {
    margin: 3rem;
    padding: 3rem;
    height: 70vh;
    z-index: 200;
    background-color: white;
  }
}
</style>
