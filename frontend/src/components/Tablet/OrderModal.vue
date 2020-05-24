<template>
  <Modal class="order" @close="$emit('close')">
    <h1>
      Bestelling
    </h1>
    <div
      class="ordered-dishes"
      v-if="existingOrder && existingOrder.dishes.length"
    >
      <Row
        class="row"
        v-for="dish in existingOrder.dishes"
        :key="dish.id"
        :name="dish.name"
        :description="dish.description"
      >
        <span class="price">€ {{ (dish.price * dish.amount).toFixed(2) }}</span>
        <Button small="true" @click.native="removeDish(dish)">Minder!</Button>
        <span class="amount">{{ dish.amount }}</span>
        <Button small="true" @click.native="addDish(dish)">Meer!</Button>
      </Row>
    </div>
    <div class="ordered-dishes" v-else-if="order.length">
      <Row
        class="row"
        v-for="dish in order"
        :key="dish.id"
        :name="dish.name"
        :description="dish.description"
      >
        <span class="price">€ {{ (dish.price * dish.amount).toFixed(2) }}</span>
        <Button small="true" @click.native="removeDish(dish)">Minder!</Button>
        <span class="amount">{{ dish.amount }}</span>
        <Button small="true" @click.native="addDish(dish)">Meer!</Button>
      </Row>
    </div>
    <div class="message" v-else>
      <h2>U heeft nog geen gerechten toegevoegd</h2>
    </div>
    <Button
      v-if="existingOrder"
      class="submit"
      @click.native="submit(existingOrder.dishes)"
    >
      Bestelling voor € {{ price.toFixed(2) }} plaatsen
    </Button>
    <Button
      v-else
      :disabled="!order.length"
      class="submit"
      @click.native="submit(order)"
      >{{
        order.length
          ? `Bestelling voor € ${price.toFixed(2)} plaatsen`
          : 'Voeg een gerecht toe om te bestellen!'
      }}</Button
    >
  </Modal>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Getter, Action, Mutation } from 'vuex-class';
import { Dish, Order } from '@/types';

import Row from '@/components/UI/Row.vue';
import Modal from '@/components/UI/Modal.vue';
import Button from '@/components/UI/Button.vue';

@Component({
  components: {
    Modal,
    Button,
    Row
  }
})
export default class OrderModal extends Vue {
  @Prop({ default: null })
  existingOrder!: Order;

  @Mutation('addDish', { namespace: 'tablet' })
  addDish!: (dish: Dish) => void;

  @Mutation('removeDish', { namespace: 'tablet' })
  removeDish!: (dish: Dish) => void;

  @Mutation('clearOrder', { namespace: 'tablet' })
  clearOrder!: () => void;

  @Action('submitOrder', { namespace: 'tablet' })
  submitOrder!: (dishes: Dish[]) => void;

  @Getter('getOrder', { namespace: 'tablet' })
  order!: Dish[];

  async submit(dishes: Dish[]) {
    await this.submitOrder(dishes);

    this.existingOrder === null && this.clearOrder();

    this.$toasted.show('Bestelling is geplaast!', {
      duration: 1000,
      position: 'top-center'
    });

    this.$emit('close');
  }

  get price(): number {
    return this.existingOrder
      ? this.existingOrder.dishes.reduce((a, b) => a + b.price * b.amount, 0)
      : this.order.reduce((a, b) => a + b.price * b.amount, 0);
  }
}
</script>

<style lang="scss" scoped>
.order {
  h1 {
    margin: 0;
  }

  .ordered-dishes {
    flex-grow: 1;
    overflow-y: auto;

    .amount {
      text-align: center;
      width: 4rem;
      font-size: 1.3rem;
    }

    .price {
      margin: 0 1rem;
    }

    button {
      width: 6rem;
    }
  }

  .submit {
    margin-top: 1rem;
  }

  .message {
    text-align: center;
    color: var(--gray);
  }
}
</style>
