<template>
  <div class="wrapper">
    <transition name="fade" mode="out-in">
      <OrderModal
        :existingOrder="selected"
        v-if="selected"
        @close="selected = null"
      />
    </transition>
    <div :class="{ blur: selected }" class="history">
      <div class="header">
        <Button :small="true" @click.native="$router.push('/tablet')"
          >Terug</Button
        >
      </div>
      <h1>
        Bestelgeschiedenis
      </h1>
      <div class="orders" v-if="history.length">
        <Row
          class="row"
          :key="index"
          v-for="(order, index) in history"
          :name="`Bestelling ${index + 1}`"
        >
          <Button small="true" @click.native="selected = order"
            >Opnieuw bestellen</Button
          >
        </Row>
      </div>
      <div class="message" v-else>
        <h2>U heeft nog geen gerechten toegevoegd</h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { Dish, Order } from '../../types';

import Row from '@/components/Row.vue';
import Button from '@/components/Button.vue';
import OrderModal from '@/components/OrderModal.vue';

@Component({
  components: {
    Row,
    Button,
    OrderModal
  }
})
export default class History extends Vue {
  selected: Order | null = null;

  @Action('submitOrder', { namespace: 'tablet' })
  submitOrder!: (dishes: Dish[]) => void;

  @Getter('getHistory', { namespace: 'tablet' })
  history!: Order[];

  submit(order: Order) {
    this.$toasted.show('Bestelling is opnieuw besteld!', {
      duration: 1000,
      position: 'top-center'
    });

    this.submitOrder(order.dishes);

    this.$router.push('/tablet');
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;

  display: flex;
  justify-content: top;
  align-items: center;
  flex-direction: column;

  .history {
    width: 90%;
    margin: 5rem 0;
    padding: 2rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0 0 1rem 0 #00000036;

    .header {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
