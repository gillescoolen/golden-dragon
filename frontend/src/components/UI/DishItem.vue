<template>
  <div class="item">
    <div class="image" :style="{ 'background-color': color }"></div>
    <span class="content">
      {{ dish.name }}
    </span>
    <span class="price"> € {{ dish.price.toFixed(2) }} </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Dish } from '@/types';

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
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 0.5rem 0 #00000010;

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
    transition: all 0.1s;
    transform: scale(0.95);
    box-shadow: 0 0.1rem 0.3rem 0 #00000027;
  }

  .image {
    height: 6rem;
    background-color: #ec054b;
    border-radius: 1rem 1rem 0 0;
  }

  .content {
    display: flex;
    justify-content: top;
    flex-direction: column;

    width: 154px;
    height: 2rem;
    display: block;
    padding: 0.3rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    user-select: none;
  }

  .price {
    display: flex;
    flex-direction: row-reverse;

    padding: 0 1rem;

    user-select: none;
  }
}
</style>
