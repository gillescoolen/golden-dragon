<template>
  <div class="main">
    <transition name="fade" mode="out-in">
      <slot />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: row;

  background: linear-gradient(124deg, var(--primary), var(--secondary));
  background-repeat: no-repeat;
  background-attachment: fixed;

  width: 100vw;
  min-height: 100vh;
  max-width: 100%;
  max-height: 100%;
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
