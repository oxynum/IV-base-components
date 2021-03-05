<template>
  <div class="iv-a-input-label">
    <input
      class="iv-a-input"
      :type="type"
      v-model="inputVal"
      :required="req"
    />
    <label
      class="base-label small-text"
      :class="{'float-label': inputVal.length > 0}"
    >
     <span>
       {{ text }}
      </span>
      <span v-if="req" class="input-asterix">
        *
      </span>
    </label>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseInputLabel',
  props: {
    text: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: '',
      required: false
    },
    req: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    inputVal: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../styles/global';

  .iv-a-input-label {
    width: 100%;

    .iv-a-input {
      border: none;
      border-bottom: 1px solid $color-iv-gray-minus-1;
      padding: .5em 0;
      padding-left: .5em;
      margin: 8px 0;
      width: 100%;

      &:focus {
        border-bottom: 1px solid $color-iv-purple-satured;
      }

      & + .float-label {
        transition: .2s ease;
        transform: translate(0, -3.25rem);
        opacity: 1;
      }
    }
    .base-label {
      display: block;
      width: fit-content;
      padding-left: .5em;
      transition: .2s ease;
      transform: translate(0, -2rem);
      opacity: 0.4;
      pointer-events: none;
    }

    .input-asterix {
      color: $color-iv-secondary;
    }
  }
</style>
