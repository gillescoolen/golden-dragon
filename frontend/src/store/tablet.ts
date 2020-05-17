import { Dish, Order } from '@/types';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import api from '../utils/api';

@Module({
  namespaced: true
})
export default class Tablet extends VuexModule {
  dishes: Dish[] = [];
  orders: Order[] = [];

  /**
   * Add a dish to the current order.
   * If the dish exists within the current
   * order, increment the dish amount.
   *
   * @param {Dish} dish The dish to add.
   */
  @Mutation
  addDish(dish: Dish) {
    const index = this.dishes.findIndex(item => item.id === dish.id);

    index != -1
      ? this.dishes[index].amount++
      : this.dishes.push({ ...dish, amount: 1 });
  }

  /**
   * Remove a dish from the current order.
   * If the dish has been ordered more than
   * once, decrement the dish amount.
   *
   * @param {Dish} dish The dish to remove.
   */
  @Mutation
  removeDish(dish: Dish) {
    const index = this.dishes.findIndex(item => item.id === dish.id);
    const item = this.dishes[index];

    item.amount > 1
      ? this.dishes[index].amount--
      : this.dishes.splice(index, 1);
  }

  @Mutation
  clearOrder() {
    this.dishes = [];
  }

  /**
   * Add the submitted dishes to the store.
   *
   * @param {Order} dishes The dish to add.
   */
  @Mutation
  addOrder(dishes: Dish[]) {
    this.orders.push({ dishes });
  }

  @Action({ commit: 'addOrder', rawError: true })
  async submitOrder(dishes: Dish[]) {
    await api.post('/api/orders', { order: dishes });

    return dishes;
  }

  get getOrder(): Dish[] {
    return this.dishes;
  }

  get getHistory(): Order[] {
    return this.orders;
  }
}
