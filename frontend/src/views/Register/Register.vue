<template>
  <div>
    <DishItem v-for="dish in dishes" :key="dish.id" :dish="dish" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Dish } from '@/types';
import DishItem from '@/components/DishItem.vue';
import api from '@/utils/api';

@Component({
  components: {
    DishItem
  }
})
export default class Register extends Vue {
  dishes: Dish[] | null = null;

  private async fetchDishes() {
    const { data: dishes } = await api.get('/api/dishes');
    this.dishes = dishes;
  }

  async created() {
    await this.fetchDishes();
  }
}
</script>
