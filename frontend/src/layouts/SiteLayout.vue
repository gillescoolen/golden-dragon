<template>
  <div class="main">
    <div class="wrapper">
      <div class="content">
        <transition name="fade" mode="out-in">
          <slot />
        </transition>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: row;
  background-color: #dde3ee;

  width: 100vw;
  height: 100vh;
  max-width: 100%;
  max-height: 100%;

  .wrapper {
    width: 100%;
    height: 100vh;

    .content {
      margin: 4rem;
      padding: 2rem;
      min-height: 50vh;
      border-radius: 15px;
      background-color: #ffffff;
      box-shadow: 0px 0px 4px 0px #7a7a7a10;
    }
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
