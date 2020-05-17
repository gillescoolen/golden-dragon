<template>
  <div class="dishes">
    <Item v-for="dish in dishes" :key="dish.id" :dish="dish" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import { Dish } from '../../types';
import api from '../../utils/api';

import Item from '@/components/Item.vue';

@Component({
  components: {
    Item
  }
})
export default class Login extends Vue {
  dishes: Dish[] = [];

  @Mutation('addDish', { namespace: 'order' })
  addDish!: (dish: Dish) => void;

  /**
   * Adds a dish to the order.
   */
  public add(dish: Dish) {
    console.log(dish);
    this.addDish(dish);
  }

  /**
   * Fetch all dishes from the API.
   */
  public async fetchDishes() {
    const { data: dishes } = await api.get('/api/dishes');
    this.dishes = dishes;
  }

  async mounted() {
    await this.fetchDishes();
  }
}
</script>

<style lang="scss" scoped>
.dishes {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
