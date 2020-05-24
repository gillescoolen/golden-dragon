<template>
  <div class="overview">
    <h1>Verkoop Overzicht</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Register extends Vue {}
</script>

<style lang="scss" scoped>
.overview {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;
  padding: 2rem;
  border-radius: 15px;
  background-color: #ffffff;
  height: calc(100vh - 7.5rem);
  box-shadow: 0px 0px 4px 0px #7a7a7a10;
}
</style>
