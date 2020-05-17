<template>
  <div class="item">
    <h4>{{ dish.name }}</h4>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Dish } from '../types';

@Component
export default class Item extends Vue {
  @Prop()
  dish!: Dish;
}
</script>

<style lang="scss" scoped>
.item {
  --size: 10rem;

  margin: 1rem;
  padding: 0.3rem;
  width: var(--size);
  height: var(--size);
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 0 0.5rem 0 #00000010;

  display: flex;
  flex-direction: column-reverse;
}
</style>
