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
  padding-top: 3rem;
  width: 100%;
  height: 100%;
  z-index: 100;
  position: absolute;
  min-width: 30rem;

  .content {
    margin: 3rem;
    height: 70vh;
    z-index: 200;
    padding: 3rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0 0 1rem 0 #00000036;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
