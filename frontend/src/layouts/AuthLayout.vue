<template>
  <div class="main">
    <div class="content">
      <transition name="fade" mode="out-in">
        <slot />
      </transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: linear-gradient(124deg, var(--primary), var(--secondary));
  background-repeat: no-repeat;
  background-attachment: fixed;

  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  max-height: 100%;

  .content {
    width: 25rem;
    margin: 1rem;
    padding: 2rem;
    height: 25rem;
    border-radius: 1rem;
    background-color: white;
    box-shadow: 0 0 0.5rem 0 #00000010;
  }
}
</style>
