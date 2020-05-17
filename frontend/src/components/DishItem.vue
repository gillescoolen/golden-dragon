<template>
  <div class="item">
    <div class="image" :style="{ 'background-color': color }"></div>
    <span class="content">
      {{ dish.name }}
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Dish } from '../types';

@Component
export default class DishItem extends Vue {
  @Prop()
  dish!: Dish;

  public get color(): string {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
}
</script>

<style lang="scss" scoped>
.item {
  --size: 10rem;

  margin: 1rem;
  width: var(--size);
  height: var(--size);
  border-radius: 1.1rem;
  background-color: white;
  box-shadow: 0 0 0.5rem 0 #00000010;
  transition: all 0.3s ease-in-out;

  display: flex;
  flex-direction: column;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
    transition: all 0.1s ease-out;
    box-shadow: 0 0.3rem 3rem 0 #00000036;
  }

  &:active {
    cursor: pointer;
    transform: scale(0.95);
    transition: all 0.1s;
    box-shadow: 0 0.1rem 0.3rem 0 #00000027;
  }

  .image {
    height: 5rem;
    background-color: #ec054b;
    border-radius: 1rem 1rem 0 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: top;

    overflow: hidden !important;

    height: 4rem;
    padding: 0.3rem;

    user-select: none;
  }
}
</style>
