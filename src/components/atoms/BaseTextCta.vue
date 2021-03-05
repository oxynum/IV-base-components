<template>
  <div class="iv-a-text-cta" @click="sendElementClicked" :class="{'--active': isActive}">
    <slot class="slot-set"/>
    <span class="iv-a-text-cta--label subtitle-1" :class="{'--active': isActive}">
      {{ label }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'BaseTextCta',
  props: {
    label: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      required: false
    },
    action: {
      type: Function,
      default: null
    }
  },
  methods: {
    sendElementClicked () {
      this.$emit('baseTextCtaClicked', this.action)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/global';

  .iv-a-text-cta {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
    cursor: pointer;

    & .--active {
      -webkit-text-fill-color: $color-iv-light-primary;
      color: $color-iv-light-primary;
    }

    &:hover {
      -webkit-text-fill-color: $color-iv-light-primary;
    }

    &--label {
      padding-left: 10px;
      font-size: 12px;

      &:hover {
        color: $color-iv-light-primary;
      }
    }

  }
</style>
