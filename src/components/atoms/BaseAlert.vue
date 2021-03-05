<template>
  <div class="iv-a-alert">
    <div class="iv-a-alert-content"
      :class="`--type-${type}`"
    >
      <base-icon
          :icon-name="'iv-icon-alert-reverse'"
      />
      <span class="iv-a-alert-text body-1">
        {{ text }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseAlert',
  props: {
    type: {
      type: String,
      required: true,
      validator: (val) => {
        return ['error', 'success', 'warning'].indexOf(val) > -1
      }
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '../../styles/global';

  .iv-a-alert {
    width: 100%;
    margin-bottom: 2em;

    &-content {
      display: flex;
      justify-content: flex-start;
      padding: 16px;
      align-items: center;

      &.--type {
        &-error {
          box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.06);
          background-color: $color-iv-secondary;
          border-radius: 4px;
        }
      }
    }

    &-text {
      color: $color-iv-white;
      padding-left: 10px;
    }
  }
</style>
