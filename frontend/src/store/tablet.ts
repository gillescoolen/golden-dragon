import { Dish, Order } from '@/types';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import api from '../utils/api';

@Module({
  namespaced: true
})
export default class Tablet extends VuexModule {
  order: Dish[] = [];
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
    const index = this.order.findIndex(item => item.id === dish.id);

    index != -1
      ? this.order[index].amount++
      : this.order.push({ ...dish, amount: 1 });
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
    const index = this.order.findIndex(item => item.id === dish.id);
    const item = this.order[index];

    item.amount > 1 ? this.order[index].amount-- : this.order.splice(index, 1);
  }

  @Mutation
  clearOrder() {
    this.order = [];
  }

  @Mutation
  clearHistory() {
    this.orders = [];
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
    return this.order;
  }

  get getHistory(): Order[] {
    return this.orders;
  }
}
