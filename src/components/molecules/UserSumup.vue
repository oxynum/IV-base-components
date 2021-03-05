<template>
  <div class="iv-m-user-sumup">
    <div class="logo-initial-wrapper initial-element">
      <span class="highlight-element">{{ getFirstLetter }}</span>
    </div>
    <div class="content">
      <span class="subtitle-1">
        {{ name }}
      </span>
      <span class="small-1">
        {{ info.email }}
      </span>
      <span class="small-2">
        {{ info.flag }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSumup',
  props: {
    name: {
      type: String,
      required: true
    },
    info: {
      type: Object,
      required: true
    }
  },
  computed: {
    getFirstLetter () {
      return this.name[0].toUpperCase()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/global';

  .iv-m-user-sumup {
    position: relative;
    padding: 10px;
    display: flex;
    justify-content: space-around;
    width: 100%;

    .logo-initial-wrapper {
      &.initial-element {
        width: 45px;
        height: 45px;
        background-color: #564BA4;
        border-radius: 50%;
        font-size: 20px;
        padding: 10px;
        display: flex;
        justify-content: center;
        color: white;
      }

      .highlight-element {
        font-family: 'Poppins Medium';
        font-size: 25px;
        font-weight: 700;
        color: white;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-right: 1em;
    }
  }
</style>
