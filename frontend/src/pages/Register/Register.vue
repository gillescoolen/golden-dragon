<template>
  <div class="wrapper">
    <transition name="fade" mode="out-in">
      <Modal v-if="show" @close="show = false">
        <h1>{{ selectedDish.name }}</h1>
        <div class="extra">
          <Input v-model="comment" label="Gerechtnotitie" type="text" />
          <select v-model="extra">
            <option key="null" :value="null" selected>
              Witte Rijst (Standaard)
            </option>
            <option v-for="extra in extras" :key="extra.id" :value="extra">
              {{ extra.name }}
            </option>
          </select>
        </div>
        <Button @click.native="closeModal(selectedDish)">
          Toevoegen!
        </Button>
      </Modal>
    </transition>
    <div class="register" :class="{ blur: show }">
      <div class="container categories">
        <transition name="fade" mode="out-in">
          <div v-if="categories.length">
            <div
              class="category"
              v-for="category in categories"
              :key="category.name"
            >
              <h1>{{ category.name }}</h1>
              <div class="dishes">
                <Row
                  class="row"
                  v-for="dish in category.dishes"
                  :key="dish.id"
                  :name="getDishName(dish)"
                  :description="dish.description"
                >
                  <span class="price">€ {{ dish.price.toFixed(2) }}</span>
                  <Button small="true" @click.native="openModal(dish)"
                    >Toevoegen!</Button
                  >
                </Row>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <div class="container order">
        <h1>Bestelling</h1>
        <transition-group name="list-complete" tag="div" class="dishes">
          <Row
            class="row list-complete-item"
            v-for="dish in order"
            :key="`${dish.id}-${dish.comment}`"
            :name="getDishName(dish)"
            :description="dish.comment"
          >
            <span class="price"
              >€ {{ (dish.price * dish.amount).toFixed(2) }}</span
            >
            <Button small="true" @click.native="removeDish(dish)"
              >Minder!</Button
            >
            <span class="amount">{{ dish.amount }}</span>
            <Button small="true" @click.native="addDish(dish)">Meer!</Button>
          </Row>
        </transition-group>
        <div class="footer">
          <Button :disabled="!order.length" @click.native="clear()"
            >Verwijderen</Button
          >
          <h2>Totaal € {{ price.toFixed(2) }}</h2>
          <Button :disabled="!order.length" @click.native="submit()"
            >Afrekenen</Button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Category, Dish } from '@/types';
import api from '@/utils/api';

import Row from '@/components/UI/Row.vue';
import Input from '@/components/UI/Input.vue';
import Modal from '@/components/UI/Modal.vue';
import Button from '@/components/UI/Button.vue';
import DishItem from '@/components/UI/DishItem.vue';

@Component({
  components: {
    DishItem,
    Button,
    Modal,
    Input,
    Row
  }
})
export default class Register extends Vue {
  categories: Category[] = [];
  order: Dish[] = [];
  extras: Dish[] = [];
  extra: Dish | null = null;
  selectedDish: Dish | null = null;
  comment = '';
  show = false;

  addDish(dish: Dish) {
    const index = this.order.findIndex(item => item.id === dish.id);

    index != -1 && this.order[index].comment == this.comment
      ? this.order[index].amount++
      : this.order.push({
          ...dish,
          amount: 1,
          comment: this.comment
        });

    if (this.extra === null) return;

    const extra = this.extra;
    this.extra = null;
    this.addDish(extra);
  }

  openModal(dish: Dish) {
    this.show = true;
    this.selectedDish = dish;
  }

  closeModal(dish: Dish) {
    this.addDish(dish);
    this.show = false;
    this.comment = '';
    this.selectedDish = null;
  }

  clear() {
    this.order = [];
  }

  removeDish(dish: Dish) {
    const index = this.order.findIndex(
      item => item.id === dish.id && item.comment === dish.comment
    );
    const item = this.order[index];

    item.amount > 1 ? this.order[index].amount-- : this.order.splice(index, 1);
  }

  getDishName(dish: Dish) {
    return `${dish.prefix}${dish.index}${dish.suffix}. ${dish.name}`;
  }

  async fetchCategories() {
    const { data: categories } = await api.get('/api/categories');
    this.categories = categories;
  }

  async fetchExtras() {
    const { data: extras } = await api.get('/api/dishes/extras');
    this.extras = extras;
  }

  async submit() {
    await api.post('/api/orders', { order: this.order, comment: this.comment });

    this.clear();

    this.$toasted.show('Bestelling is geplaast!', {
      duration: 1000,
      position: 'top-center'
    });
  }

  get price(): number {
    return this.order.reduce((a, b) => a + b.price * b.amount, 0);
  }

  created() {
    this.fetchCategories();
    this.fetchExtras();
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: hidden;

  .extra {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

.register {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .container {
    width: 100%;
    padding: 2rem;
    border-radius: 15px;
    background-color: #ffffff;
    height: calc(100vh - 7.5rem);
    box-shadow: 0px 0px 4px 0px #7a7a7a10;
  }

  .categories {
    overflow-y: scroll;
    margin-right: 0.5rem;

    .dishes {
      margin: 0;
      padding: 0;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
    }
  }

  .order {
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;

    margin-left: 0.5rem;

    h1 {
      margin-top: 0;
    }

    .dishes {
      width: 100%;
      flex-grow: 1;
      overflow-y: auto;

      .amount {
        width: 4rem;
        text-align: center;
        font-size: 1.3rem;
      }

      button {
        width: 6rem;
      }
    }

    .footer {
      width: 100%;
      display: flex;
      margin-top: 1rem;
      align-items: center;
      flex-direction: row;
      justify-content: space-between;

      h2 {
        margin: none;
      }
    }
  }
}

.row {
  transition: all 0.2s;

  .price {
    width: 5rem;
  }
}
.list-complete-enter,
.list-complete-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.list-complete-leave-active {
  display: none;
}
</style>
