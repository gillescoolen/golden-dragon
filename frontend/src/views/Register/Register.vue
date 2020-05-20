<template>
  <div class="register">
    <div class="categories">
      <div class="category" v-for="category in categories" :key="category.name">
        <h1>{{ category.name }}</h1>
        <div class="dishes">
          <DishItem
            v-for="dish in category.dishes"
            :key="dish.id"
            :dish="dish"
            @click.native="addDish(dish)"
          />
        </div>
      </div>
    </div>
    <div class="order">
      Orders
      <Row class="row" v-for="dish in order" :key="dish.id" :name="dish.name">
        <Button small="true" @click.native="removeDish(dish)">Minder!</Button>
        <span class="amount">{{ dish.amount }}</span>
        <Button small="true" @click.native="addDish(dish)">Meer!</Button>
      </Row>
      Totaal € {{ price.toFixed(2) }}
      <Button :disabled="!order.length" @click.native="submit()"
        >Afrekenen
      </Button>
      <Button :disabled="!order.length" @click.native="clear()"
        >Verwijderen
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Category, Dish } from '@/types';

import Row from '@/components/Row.vue';
import DishItem from '@/components/DishItem.vue';
import Button from '@/components/Button.vue';
import api from '@/utils/api';

@Component({
  components: {
    DishItem,
    Button,
    Row
  }
})
export default class Register extends Vue {
  categories: Category[] | null = null;
  order: Dish[] = [];

  addDish(dish: Dish) {
    const index = this.order.findIndex(item => item.id === dish.id);

    index != -1
      ? this.order[index].amount++
      : this.order.push({ ...dish, amount: 1 });
  }

  clear() {
    this.order = [];
  }

  removeDish(dish: Dish) {
    const index = this.order.findIndex(item => item.id === dish.id);
    const item = this.order[index];

    item.amount > 1 ? this.order[index].amount-- : this.order.splice(index, 1);
  }

  private async fetchCategories() {
    const { data: categories } = await api.get('/api/categories');
    this.categories = categories;
  }

  async submit() {
    await api.post('/api/orders', { order: this.order });

    this.clear();

    this.$toasted.show('Bestelling is geplaast!', {
      duration: 1000,
      position: 'top-center'
    });

    this.$emit('close');
  }

  get price(): number {
    return this.order.reduce((a, b) => a + b.price * b.amount, 0);
  }

  async created() {
    await this.fetchCategories();
  }
}
</script>

<style lang="scss" scoped>
.register {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .categories {
    width: 49%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .dishes {
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      justify-content: space-between;

      &:after {
        content: '';
        flex: auto;
      }
    }
  }

  .order {
    width: 49%;

    .amount {
      text-align: center;
      width: 4rem;
      font-size: 1.3rem;
    }

    button {
      width: 6rem;
    }
  }
}
</style>
