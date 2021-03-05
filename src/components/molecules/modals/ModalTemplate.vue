<template>
  <div class="iv-m-modal">
    <div class="iv-m-modal-card">
      <header class="iv-m-modal-card__header">
        <slot name="header">
          <h1 class="title-1">
            {{ title }}
          </h1>
        </slot>
        <div @click="closeModal()">
          <base-icon
            :icon-name="'iv-icon-close-pop-up'"
          />
        </div>
      </header>
      <section class="iv-m-modal-card__body">
        <slot name="body">
          <p class="body-1">
          {{ contentBody }}
        </p>
        </slot>
      </section>
      <footer class="iv-m-modal-card__footer">
        <slot name="footer">
          <base-button
            v-for="cta in ctaList"
            :key="cta.text"
            :text="cta.text"
            :color-class="cta.colorClass"
            :is-empty-shape="cta.isEmptyShape"
            @baseButtonClicked="applyCallbackAndClose(cta.callback)"
          />
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalTemplate',
  props: {
    title: {
      type: String,
      reuqired: true
    },
    contentBody: {
      type: String,
      required: true
    },
    /**
     * The list should retrieve object of this followinf type:
     * {
     *  text: String,
     *  callback: Function,
     *  colorName: String,
     *  isEmptyShape: Boolean
     * }
     */
    ctaList: {
      type: Array,
      required: true
    }
  },
  methods: {
    applyCallbackAndClose (callback) {
      if (callback) callback()
      this.closeModal()
    },
    closeModal () {
      this.$store.dispatch('app/closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../../styles/global';

.iv-m-modal {
  position: fixed;
  overflow: hidden;
  background: rgba(56, 56, 56, 0.288);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;

  &-card {
    width: 435px;
    background: white;
    box-shadow: 0px 8px 32px rgba(0, 0, 0, 0.12);
    border-radius: 4px;

    &__header {
      padding: 20px;
      border-bottom: 1px solid $color-iv-gray-light-2;
      display: flex;
      justify-content: space-between;
      align-items: center;

      i {
        font-size: 25px;
        cursor: pointer;

        &:hover {
          -webkit-text-fill-color: $color-iv-light-primary;
        }
      }
    }

    &__body {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 60px;
      padding-left: 60px;
      padding-top: 25px;
      padding-bottom: 15px;
      text-align: center;

      .body-1 {
        color: $color-iv-font-secondary;
      }
    }

    &__footer {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 25px 50px 25px;
    }
  }
}
</style>
