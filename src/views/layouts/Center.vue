<template>
  <div class="iv-layout-center row">
    <div class="iv-layout-center--wrapper col-sm-4 align-center row center">
      <slot />
    </div>
    <the-footer />
  </div>
</template>

<style lang="scss" scoped>
@import '../../styles/global';

.iv-layout-center {
  background-color: $color-iv-white;
  height: 100%;
  width: 100%;

  & &--wrapper {
    justify-content: center;
  }
}
</style>
