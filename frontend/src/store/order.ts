import { Dish } from '@/types';
import { Module, Mutation, VuexModule } from 'vuex-module-decorators';

@Module({
  namespaced: true
})
export default class Order extends VuexModule {
  order: Dish[] = [];

  @Mutation
  addDish(dish: Dish) {
    this.order.push(dish);
  }

  @Mutation
  removeDish(dish: Dish) {
    const index = this.order.indexOf(dish);
    return index === -1 ? null : this.order.splice(index, 1);
  }
}
