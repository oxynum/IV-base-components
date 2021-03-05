<template>
  <input
    class="iv-a-input subtitle-1"
    :type="type"
    :placeholder="placeholder"
    v-model="inputVal"
    :required="required"
  >
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false
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

  .iv-a-input {
    border: none;
    border-bottom: 1px solid $color-iv-gray-minus-1;
    padding: 10px 0;
    margin: 20px;
    width: 100%;

    &:focus {
      border-bottom: 1px solid $color-iv-purple-satured;
    }

    &[type=password] {
      -webkit-text-security: square;
    }
  }
</style>
