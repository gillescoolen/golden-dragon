<template>
  <button :class="{ small: small }">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Button extends Vue {
  @Prop({ default: false })
  small!: boolean;
}
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

  &:disabled {
    cursor: default;
    background: var(--gray);
  }
}

.small {
  padding: 0.3rem 1rem;
}
</style>
