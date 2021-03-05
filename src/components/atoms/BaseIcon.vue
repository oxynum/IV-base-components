<template>
  <i class="iv-a-icon"
    :class="iconName">
    <slot />
  </i>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    iconName: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      required: false
    },
    height: {
      type: Number,
      required: false
    }
  }
}
</script>

<style lang="scss">
  .iv-a-icon {
    font-size: 18px;
  }
</style>
