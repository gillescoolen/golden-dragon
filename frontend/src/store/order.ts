import { Dish } from '@/types';
import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  namespaced: true
})
export default class Order extends VuexModule {
  dish: Dish | null = null;
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

    index
      ? this.order[index].amount + 1
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

    item && item.amount > 1
      ? this.order[index].amount - 1
      : this.order.splice(index, 1);
  }

  /**
   * Set the dish so the single dish page
   * can show dish info.
   * @param dish The selected dish.
   */
  @Mutation
  setDish(dish: Dish) {
    this.dish = dish;
  }
}
