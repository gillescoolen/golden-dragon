<template>
  <div v-if="categories.length" class="overview">
    <h1>Gerechten</h1>
    <div class="category" v-for="category in categories" :key="category.name">
      <h2>{{ category.name }}</h2>
      <div class="dishes">
        <Row
          class="row"
          v-for="dish in category.dishes"
          :key="dish.id"
          :name="getDishName(dish)"
          :description="dish.description"
        >
          <span class="price">€ {{ dish.price.toFixed(2) }}</span>
        </Row>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Dish, Category } from '@/types';
import api from '@/utils/api';

import Row from '@/components/UI/Row.vue';

@Component({
  components: {
    Row
  }
})
export default class Overview extends Vue {
  categories: Category[] = [];

  private async fetchCategories() {
    const { data: categories } = await api.get('/api/categories');
    this.categories = categories;
  }

  getDishName(dish: Dish) {
    return `${dish.prefix}${dish.index}${dish.suffix}. ${dish.name}`;
  }

  async created() {
    await this.fetchCategories();
  }
}
</script>

<style lang="scss" scoped>
.overview {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  padding: 2rem;
  overflow-y: auto;
  border-radius: 15px;
  background-color: #ffffff;
  height: calc(100vh - 7.5rem);
  box-shadow: 0px 0px 4px 0px #7a7a7a10;

  .dishes {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
  }
}
</style>
