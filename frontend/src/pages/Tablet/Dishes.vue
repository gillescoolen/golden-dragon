<template>
  <div class="wrapper">
    <transition name="fade" mode="out-in">
      <OrderModal v-if="show" @close="show = false" />
    </transition>
    <div :class="{ blur: show }">
      <div class="header">
        <h1>Gerechten</h1>
        <div class="buttons">
          <Button @click.native="$router.push({ name: 'history' })"
            >Geschiedenis</Button
          >
          <Button @click.native="show = true">Bestelling</Button>
          <Button @click.native="clear()">Afrekenen</Button>
        </div>
      </div>
      <transition-group name="list" tag="div" class="dishes">
        <DishItem
          mode="tile"
          v-for="dish in dishes"
          :key="dish.id"
          :dish="dish"
          @click.native="
            $router.push({ name: 'dish', params: { id: dish.id } })
          "
        />
      </transition-group>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import { Dish } from '@/types';
import api from '@/utils/api';

import Button from '@/components/UI/Button.vue';
import DishItem from '@/components/UI/DishItem.vue';
import OrderModal from '@/components/Tablet/OrderModal.vue';

@Component({
  components: {
    Button,
    DishItem,
    OrderModal
  }
})
export default class Dishes extends Vue {
  show = false;
  dishes: Dish[] | null = null;

  @Mutation('clearOrder', { namespace: 'tablet' })
  clearOrder!: () => void;

  @Mutation('clearHistory', { namespace: 'tablet' })
  clearHistory!: () => void;

  clear() {
    this.clearOrder();
    this.clearHistory();

    this.$toasted.show('Afgerekend! De tablet is opnieuw ingesteld!', {
      duration: 3000,
      position: 'top-center'
    });
  }

  private async fetchDishes() {
    const { data: dishes } = await api.get('/api/dishes');
    this.dishes = dishes;
  }

  async created() {
    await this.fetchDishes();
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;

  .order {
    h1 {
      margin: 0;
    }

    .ordered-dishes {
      flex-grow: 1;
      overflow-y: scroll;
    }

    .submit {
      margin-top: 1rem;
    }

    .amount {
      text-align: center;
      font-size: 1.3rem;
    }

    button {
      width: 6rem;
    }
  }

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 0.5rem 1rem;
    margin: 1rem;
    border-radius: 1rem;
    background-color: white;

    h1 {
      margin: 0;
    }

    .buttons {
      width: 40%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-end;

      button {
        margin: 0 0.5rem;
      }
    }
  }

  .dishes {
    margin: 0;
    padding: 0;
    min-height: 100vh;
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
</style>
