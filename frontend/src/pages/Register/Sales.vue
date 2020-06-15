<template>
  <div class="overview">
    <h1>Verkoop Overzicht</h1>
    <div class="controls">
      <Input v-model="begin" label="Begindatum" type="date" />
      <Input v-model="end" label="Einddatum" type="date" />
      <Button @click.native="submit" :disabled="disabled">Submit</Button>
    </div>

    <div class="sales" v-for="dish in dishes" :key="dish.id">
      {{ dish.name }}
    </div>
    <Sitting />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { OrderResponse, DishResponse } from '@/types';
import api from '../../utils/api';

import Input from '@/components/UI/Input.vue';
import Button from '@/components/UI/Button.vue';

@Component({
  components: {
    Button,
    Input
  }
})
export default class Sales extends Vue {
  dishes: DishResponse[] = [];
  loading = false;
  begin = '';
  end = '';

  async submit() {
    this.dishes = [];

    const res = await api.post('/api/orders/history', {
      begin: this.begin,
      end: this.end
    });

    const orders: OrderResponse[] = res.data;

    const dishes = orders.flatMap(order => order.dishes);

    dishes.forEach(dish => {
      const existing = this.dishes.find(existing => existing.id === dish.id);
      existing ? existing.pivot.amount++ : this.dishes.push(dish);
    });
  }

  public get disabled() {
    if (this.begin === '' || this.end === '') return true;

    if (new Date(this.begin) >= new Date(this.end)) return true;

    return false;
  }
}
</script>

<style lang="scss" scoped>
.overview {
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 2rem;
  height: calc(100vh - 7.5rem);

  border-radius: 15px;
  background-color: #ffffff;
  box-shadow: 0px 0px 4px 0px #7a7a7a10;

  .controls {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    padding: 1rem;

    border-bottom: 2px solid var(--gray);
    border-image: linear-gradient(to right, var(--primary), var(--secondary));
    border-image-slice: 1;

    > * {
      width: 20%;
    }
  }
}
</style>
