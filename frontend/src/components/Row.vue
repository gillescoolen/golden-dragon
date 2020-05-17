<template>
  <div class="row">
    <h3>{{ name }}</h3>
    <div class="side">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Button from '@/components/Button.vue';

@Component({
  components: {
    Button
  }
})
export default class Row extends Vue {
  @Prop()
  name!: string;
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

  h3 {
    margin: none;
    width: 15rem;
  }

  .side {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
