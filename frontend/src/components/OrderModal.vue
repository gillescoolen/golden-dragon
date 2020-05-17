<template>
  <Modal class="order" @close="$emit('close')">
    <h1>Huidige bestelling</h1>
    <div class="ordered-dishes" v-if="order.length">
      <Row class="row" v-for="dish in order" :key="dish.id" :name="dish.name">
        <Button small="true" @click.native="removeDish(dish)">Minder!</Button>
        <span class="amount">{{ dish.amount }}</span>
        <Button small="true" @click.native="addDish(dish)">Meer!</Button>
      </Row>
    </div>
    <div class="message" v-else>
      <h2>U heeft nog geen gerechten toegevoegd</h2>
    </div>
    <Button :disabled="order.length" class="submit" @click.native="submit()"
      >Bestelling plaatsen</Button
    >
  </Modal>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action, Mutation } from 'vuex-class';
import { Dish } from '@/types';

import Row from '@/components/Row.vue';
import Modal from '@/components/Modal.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {
    Modal,
    Button,
    Row
  }
})
export default class Dishes extends Vue {
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

  async submit() {
    await this.submitOrder(this.order);

    this.clearOrder();

    this.$toasted.show('Bestelling is geplaast!', {
      duration: 1000,
      position: 'top-center'
    });

    this.$emit('close');
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
    overflow-y: scroll;

    .amount {
      text-align: center;
      width: 4rem;
      font-size: 1.3rem;
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
