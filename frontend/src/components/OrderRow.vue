<template>
  <div class="row">
    <h3>{{ dish.name }}</h3>
    <div class="side">
      <Button small="true" @click.native="addDish(dish)">Meer!</Button>
      <span class="amount">{{ dish.amount }}</span>
      <Button small="true" @click.native="removeDish(dish)">Minder!</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Button from '@/components/Button.vue';
import { Dish } from '@/types';
import { Mutation } from 'vuex-class';

@Component({
  components: {
    Button
  }
})
export default class OrderRow extends Vue {
  @Prop()
  dish!: Dish;

  @Mutation('addDish', { namespace: 'order' })
  addDish!: (dish: Dish) => void;

  @Mutation('removeDish', { namespace: 'order' })
  removeDish!: (dish: Dish) => void;
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray);
  border-image: linear-gradient(to right, var(--primary), var(--secondary));
  border-image-slice: 1;

  h3 {
    margin: none;
    width: 15rem;
  }

  .side {
    width: 15rem;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .amount {
      font-size: 1.3rem;
    }
  }
}
</style>
