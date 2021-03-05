<template>
  <div class="iv-a-link subtitle-1" >
    <a class="iv-a-link-redirect-cta"
      @click="emitBaseLink()"
    >
      {{ text }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'BaseLink',
  props: {
    text: {
      type: String,
      required: true
    },
    underline: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    emitBaseLink () {
      this.$emit('baseLinkClicked')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/global';

  .iv-a-link {
    cursor: pointer;

    &.-redirect-cta {
      padding-left: 1em;
    }

    &:hover {
      text-decoration: underline;
    }
  }
</style>
