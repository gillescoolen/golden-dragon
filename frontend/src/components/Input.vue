<template>
  <div class="wrapper">
    <input
      class="input"
      @input="input"
      :type="type"
      :name="name"
      :placeholder="label"
      :required="required"
      min="0"
    />
    <label :for="label" class="label">{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class Input extends Vue {
  @Prop({ default: 'ID' })
  label!: string;

  @Prop({ default: 'name' })
  name!: string;

  @Prop({ default: 'text' })
  type!: string;

  @Prop({ default: false })
  required!: boolean;

  /**
   * Reflect the typed input back to
   * the page where we use this
   * component.
   */
  input(event: { target: { value: string } }) {
    this.$emit('input', event.target.value);
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  margin-top: 1rem;
  padding: 1rem 0 0;
  position: relative;
}

.input {
  border: 0;
  outline: 0;
  width: 100%;
  color: black;
  padding: 7px 0;
  font-size: 1rem;
  transition: 0.2s;
  user-select: none;
  background: transparent;
  border-bottom: 2px solid var(--gray);

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .label {
    cursor: text;
    top: 20px;
  }
}

.label {
  position: absolute;
  top: -3px;
  display: block;
  transition: 0.2s;
  user-select: none;
  color: var(--gray);
  pointer-events: none;
}

.input:focus {
  ~ .label {
    top: -3px;
    display: block;
    font-size: 1rem;
    transition: 0.2s;
    font-weight: 700;
    position: absolute;
    color: var(--primary);
  }

  font-weight: normal;
  border-image: linear-gradient(to right, var(--primary), var(--secondary));
  border-image-slice: 1;
}

.input {
  &:required,
  &:invalid {
    box-shadow: none;
  }
}
</style>
