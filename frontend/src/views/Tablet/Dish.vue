<template>
  <div class="dish" v-if="dish">
    <div class="header">
      <Button :small="true" @click.native="$router.push('/tablet')"
        >Terug</Button
      >
      <Button @click.native="order(dish)" :small="true">Bestellen</Button>
    </div>
    <h1>
      {{ `${dish.prefix}${dish.index}${dish.suffix}. ${dish.name}` }}
    </h1>
    <h2>€ {{ dish.price.toFixed(2) }}</h2>
    <p>{{ dish.description }}</p>
    <div class="spicyness" v-if="dish.spicyness">
      Pittigheid:
      <div v-for="index in dish.spicyness" :key="index" class="spicy"></div>
    </div>
    <div v-else>
      Dit gerecht is niet pittig.
    </div>
    <ul v-if="dish.allergies.length" class="allergies">
      Dit gerecht:
      <li v-for="allergy in dish.allergies" :key="allergy.description">
        - {{ allergy.description }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Mutation } from 'vuex-class';
import { Dish } from '../../types';
import Button from '@/components/Button.vue';
import api from '../../utils/api';

@Component({
  components: {
    Button
  }
})
export default class Single extends Vue {
  dish: Dish | null = null;

  @Mutation('addDish', { namespace: 'tablet' })
  addDish!: (dish: Dish) => void;

  public order(dish: Dish) {
    this.$toasted.show(`${dish.name} is toegevoegd!`, {
      duration: 1000,
      position: 'top-center'
    });
    this.addDish(dish);
    this.$router.push('/tablet');
  }

  async created() {
    const { data: dish } = await api.get(
      `/api/dishes/${this.$route.params.id}`
    );

    this.dish = dish;
  }
}
</script>

<style lang="scss" scoped>
.dish {
  width: 100%;
  padding: 2rem;
  height: 50vh;
  margin: 5rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 0 1rem 0 #00000036;

  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .spicyness {
    display: flex;
    flex-direction: row;
    align-items: center;

    .spicy {
      width: 0.8rem;
      height: 0.8rem;
      margin: 0 0.1rem;
      border-radius: 100%;
      background-color: #e35050;
    }
  }

  .allergies {
    margin: 0;
    padding: 0;
    list-style: none;
  }
}
</style>
