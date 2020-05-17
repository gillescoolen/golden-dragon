import { Dish } from '@/types';
import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  namespaced: true
})
export default class Order extends VuexModule {
  order: Dish[] = [];

  /**
   * Add a dish to the order.
   * If the dish exists within the order,
   * increment the dish amount.
   *
   * @param dish The dish to add.
   */
  @Mutation
  addDish(dish: Dish) {
    const index = this.order.findIndex(item => item.id === dish.id);

    index != -1
      ? this.order[index].amount++
      : this.order.push({ ...dish, amount: 1 });
  }

  /**
   * Remove a dish from the order.
   * If the dish has been order more than once,
   * remove a single point from the amount.
   *
   * @param dish The dish to remove.
   */
  @Mutation
  removeDish(dish: Dish) {
    const index = this.order.findIndex(item => item.id === dish.id);
    const item = this.order[index];

    item.amount > 1 ? this.order[index].amount-- : this.order.splice(index, 1);
  }

  public get getOrder(): Dish[] {
    return this.order;
  }
}
