<template>
  <div class="overview">
    <div class="controls">
      <Input v-model="begin" label="Begindatum" type="date" />
      <Input v-model="end" label="Einddatum" type="date" />
      <Button @click.native="submit" :disabled="disabled">Submit</Button>
    </div>

    <div v-if="dishes.length" class="sales">
      <div class="heading">
        <span>Naam</span>
        <span>Hoeveelheid</span>
        <span>Prijs</span>
        <span>Totaal</span>
      </div>
      <div v-for="dish in dishes" :key="dish.id">
        <span>
          {{ dish.name }}
        </span>

        <span>
          {{ dish.pivot.amount }}
        </span>
        <span>€{{ dish.price }}</span>
        <span>€{{ (dish.price * dish.pivot.amount).toFixed(2) }}</span>
      </div>
    </div>

    <div
      v-else
      class="placeholder"
      :style="loading && 'filter: grayscale(100%);'"
    >
      <img src="@/assets/svg/sitting.svg" />
      <h1>
        {{
          empty ? 'Geen gerechten besteld in deze periode' : 'Kies een periode'
        }}
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { OrderResponse, DishResponse } from '@/types';
import api from '../../utils/api';

import Input from '@/components/UI/Input.vue';
import Button from '@/components/UI/Button.vue';
import Spinner from '@/components/UI/Spinner.vue';

@Component({
  components: {
    Spinner,
    Button,
    Input
  }
})
export default class Sales extends Vue {
  dishes: DishResponse[] = [];
  loading = false;
  empty = false;
  begin = '';
  end = '';

  async submit() {
    this.loading = true;
    this.dishes = [];

    const res = await api.post('/api/orders/history', {
      begin: this.begin,
      end: this.end
    });
    await new Promise(resolve => setTimeout(resolve, 200));

    const orders: OrderResponse[] = res.data;

    const dishes = orders.flatMap(order => order.dishes);

    dishes.forEach(dish => {
      const existing = this.dishes.find(existing => existing.id === dish.id);
      existing ? existing.pivot.amount++ : this.dishes.push(dish);
    });

    this.empty = !this.dishes.length;
    this.loading = false;
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
  display: flex;
  flex-direction: column;

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

    margin-top: -1rem;
    padding-bottom: 2rem;

    > * {
      width: 20%;
    }
  }

  .sales {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;

    .heading {
      > * {
        font-weight: 700;
      }
    }

    div {
      display: flex;
      flex-direction: row;

      opacity: 0.7;
      user-select: none;
      transition: 0.1s all;
      border-bottom: 1px solid #dadada;

      &:hover {
        opacity: 1;
        cursor: default;
        transition: 0.05s all;
        border-bottom: 1px solid #b6b6b6;
      }

      span {
        width: 100%;
      }
    }
  }

  .placeholder {
    height: 75vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      height: 20rem;
      margin-bottom: -3.5rem;
    }

    h1 {
      opacity: 0.5;
      text-align: center;
    }
  }
}
</style>
