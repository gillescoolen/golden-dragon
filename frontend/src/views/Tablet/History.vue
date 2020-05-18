<template>
  <div class="history">
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
        v-for="(order, index) in history"
        :key="index"
        :name="`Bestelling ${index + 1}`"
      >
        <Button small="true" @click.native="submit(order)"
          >Opnieuw bestellen</Button
        >
      </Row>
    </div>
    <div class="message" v-else>
      <h2>U heeft nog geen gerechten toegevoegd</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Getter, Action } from 'vuex-class';
import { Dish, Order } from '../../types';
import Row from '@/components/Row.vue';
import Button from '@/components/Button.vue';

@Component({
  components: {
    Row,
    Button
  }
})
export default class History extends Vue {
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
.history {
  width: 100%;
  padding: 2rem;
  margin: 3rem;
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
</style>
