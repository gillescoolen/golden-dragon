<template>
  <div class="row">
    <div>
      <h3>{{ name }}</h3>
      <i v-if="description">{{ description }}</i>
    </div>
    <div class="side">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Button from '@/components/UI/Button.vue';

@Component({
  components: {
    Button
  }
})
export default class Row extends Vue {
  @Prop()
  name!: string;

  @Prop()
  description!: string;
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  border-bottom: 1px solid var(--gray);
  border-image: linear-gradient(to right, var(--primary), var(--secondary));
  border-image-slice: 1;

  min-height: 3rem;

  h3 {
    margin: 0;
  }

  .side {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  &:last-child {
    border: none;
  }
}
</style>
