import { Dish } from '@/types';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import api from '../utils/api';

@Module({
  namespaced: true
})
export default class Site extends VuexModule {
  order: Dish[] = [];

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
      : this.order.push({ ...dish, amount: 1, comment: '' });
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

  @Action({ rawError: true })
  async submitOrder(dishes: Dish[]) {
    return await api.post('/api/orders', {
      order: dishes,
      comment: 'Bestelling via de site.'
    });
  }

  get getOrder(): Dish[] {
    return this.order;
  }
}
