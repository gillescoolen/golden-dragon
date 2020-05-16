<template>
  <button>
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
button {
  border: none;
  padding: 1rem;
  color: white;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 1rem;
  background: linear-gradient(124deg, var(--primary), var(--secondary));
}
</style>
