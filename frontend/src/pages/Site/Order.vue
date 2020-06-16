<template>
  <div v-if="ordered">
    <h1>Bestelling Geplaatst!</h1>
    <img :src="code" />
  </div>
  <div v-else>
    <h1>Bestellen</h1>
    <div>
      <label for="name">Naam</label>
      <input v-model="name" type="text" name="name" required />
      <button :disabled="!order.length || !name" @click="submit(order)">
        Bestellen
      </button>
    </div>
    <h3>Bestelling: € {{ price.toFixed(2) }}</h3>
    <div class="order">
      <div class="dish" v-for="dish in order" :key="dish.id">
        <div>
          {{
            `${dish.prefix}${dish.index}${dish.suffix}. ${
              dish.name
            } ... € ${dish.price.toFixed(2)}`
          }}
        </div>
        <div class="amount">
          <button @click="removeDish(dish)">-</button>
          <span> {{ dish.amount }}</span>
          <button @click="addDish(dish)">+</button>
        </div>
      </div>
    </div>

    <h3>Bestellijst</h3>
    <div class="dishes">
      <template v-for="category in categories">
        <div class="category" :key="category.name">{{ category.name }}</div>
        <div class="dish" v-for="dish in category.dishes" :key="dish.id">
          <div>
            {{
              `${dish.prefix}${dish.index}${dish.suffix}. 
              ${dish.name} ... € ${dish.price.toFixed(2)}`
            }}
          </div>
          <button @click="addDish(dish)">+</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Mutation, Getter } from 'vuex-class';
import { Dish } from '@/types';
import api from '@/utils/api';
import { AxiosResponse } from 'axios';
import QRCode from 'qrcode';

@Component
export default class Menu extends Vue {
  name = '';
  code = '';
  ordered = false;
  categories: Dish[] = [];

  @Mutation('addDish', { namespace: 'site' })
  addDish!: (dish: Dish) => void;

  @Mutation('removeDish', { namespace: 'site' })
  removeDish!: (dish: Dish) => void;

  @Mutation('clearOrder', { namespace: 'site' })
  clearOrder!: () => void;

  @Action('submitOrder', { namespace: 'site' })
  submitOrder!: (dishes: Dish[]) => AxiosResponse;

  @Getter('getOrder', { namespace: 'site' })
  order!: Dish[];

  async submit(dishes: Dish[]) {
    const { data: order } = await this.submitOrder(dishes);

    this.clearOrder();

    try {
      this.code = await QRCode.toDataURL(JSON.stringify({ ...order, name }));
    } catch (error) {
      this.code = await QRCode.toDataURL(
        JSON.stringify({ order: order.id, name })
      );
    }

    this.ordered = true;
  }

  private async fetchCategories() {
    const { data: categories } = await api.get('/api/categories');
    this.categories = categories;
  }

  async created() {
    await this.fetchCategories();
  }

  get price(): number {
    return this.order.reduce((a, b) => a + b.price * b.amount, 0);
  }
}
</script>

<style lang="scss" scoped>
.dishes {
  width: 90%;
  margin: 1rem;
  height: 30rem;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .category {
    display: flex;
    flex-direction: row;
    font-weight: 700;
  }

  .dish {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.order {
  width: 90%;
  margin: 1rem;
  max-height: 20rem;

  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .dish {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .amount {
    width: 12rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
