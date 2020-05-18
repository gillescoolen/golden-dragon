<template>
  <div class="wrapper">
    <transition name="fade" mode="out-in">
      <OrderModal v-if="show" @close="show = false" />
    </transition>
    <div :class="{ blur: show }">
      <div class="header">
        <h1>Gerechten</h1>
        <div class="buttons">
          <Button @click.native="$router.push('/tablet/history')"
            >Geschiedenis</Button
          >
          <Button @click.native="show = true">Bestelling</Button>
        </div>
      </div>
      <transition-group name="list" tag="div" class="dishes">
        <DishItem
          v-for="dish in dishes"
          :key="dish.id"
          :dish="dish"
          @click.native="$router.push(`/tablet/${dish.id}`)"
        />
      </transition-group>
    </div>
    <div class="footer">
      <Button @click.native="clear()">Reset Tablet</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import { Dish } from '@/types';
import api from '@/utils/api';

import Button from '@/components/Button.vue';
import DishItem from '@/components/DishItem.vue';
import OrderModal from '@/components/OrderModal.vue';

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

  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    padding: 1rem;
    background-color: white;

    button {
      width: 100%;
    }
  }
}

.blur {
  filter: blur(0.3rem);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.2s ease-out;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateY(2rem);
}
</style>
