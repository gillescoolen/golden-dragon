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

  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;
  background: linear-gradient(124deg, var(--primary), var(--secondary));

  .content {
    width: 25rem;
    margin: 1rem;
    padding: 2rem;
    height: 25rem;
    border-radius: 1rem;
    background-color: #ffffff;
    box-shadow: 0 0 0.5rem 0 #00000010;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
