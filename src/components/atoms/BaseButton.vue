<template>
  <button class="iv-a-button text-button"
    :class="[getColor, {'--shape-empty': isEmptyShape}, {'--size-normal': isFixedSize}]"
    :disabled="disabled"
    @click="emitClick()"
  >
    {{ text }}
    <slot />
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    text: {
      type: String,
      required: false
    },
    colorClass: {
      type: String,
      default: 'primary',
      required: false,
      validator: (val) => {
        return ['primary', 'secondary'].indexOf(val) > -1
      }
    },
    isEmptyShape: {
      type: Boolean,
      default: false
    },
    isFixedSize: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    iconName: {
      type: String,
      default: null
    }
  },
  computed: {
    getColor () {
      return `--color-${this.colorClass}`
    }
  },
  methods: {
    emitClick () {
      this.$emit('baseButtonClicked')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../styles/global';

  .iv-a-button {
    padding: 12px;
    border: 0;
    border-radius: 4px;
    margin: 4px;
    width: 100%;
    cursor: pointer;

    &.--size-normal {
      width: 160px;
    }

    &.--color-primary {
      background-color: $color-iv-purple;
      color: $color-iv-white;
      box-shadow: 0px 4px 10px 0px #C2B9FF;

      &:hover {
          background-color: $color-iv-light-primary;
          transition: .2s;
      }
      &:active {
        background-color: $color-iv-light-primary;
        transition: .7s;
        box-shadow: inset 0px 0em 20px 1px $color-iv-primary;
      }

      &:disabled {
        background-color: $color-iv-purple-satured-2;
        cursor: not-allowed;
      }

      &.--shape-empty {
        background-color: transparent;
        color: $color-iv-purple;
        box-shadow: 0px 4px 10px 0px #C2B9FF;
        border: 1px solid $color-iv-purple;

        &:hover {

        }
      }
    }

    &.--color-secondary {
      background-color: $color-iv-secondary;
      color: $color-iv-white;

      &:hover {
        background-color: $color-iv-light-secondary;
      }

      &:active {
        background-color: $color-iv-light-secondary;
        box-shadow: inset 0px 0em 20px 7px $color-iv-secondary;
      }

      &.--shape-empty {
        background-color: transparent;
        color: $color-iv-secondary;
        box-shadow: 0px 4px 10px 0px #fff6f8;
        border: 1px solid $color-iv-secondary;

        &:hover {
          border: 1px solid $color-iv-light-secondary;
          color: $color-iv-light-secondary;
        }
      }
    }
  }
</style>
