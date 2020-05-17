<template>
  <div v-if="dishes" class="dishes">
    <DishItem
      v-for="dish in dishes"
      :key="dish.id"
      :dish="dish"
      @click.native="$router.push(`/tablet/${dish.id}`)"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import { Dish } from '../../types';
import api from '../../utils/api';

import Modal from '@/components/Modal.vue';
import DishItem from '@/components/DishItem.vue';

@Component({
  components: {
    Modal,
    DishItem
  }
})
export default class Dishes extends Vue {
  dishes: Dish[] | null = null;

  @Mutation('setDish', { namespace: 'order' })
  setDish!: (dish: Dish) => void;

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
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
</style>
