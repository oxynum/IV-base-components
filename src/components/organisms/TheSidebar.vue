<template>
  <div class="iv-o-the-sidebar">
    <section class="iv-o-the-sidebar-header row">
      <div class="--logo-wrapper col-sm-12">
        <img src="/img/brand/imvitro-logo.png" alt="" width="100px" height="21px">
      </div>
    </section>
    <br>
    <section class="iv-o-the-sidebar-content">
      <div class="iv-o-the-sidebar-content__group-list">
        <user-sumup
          :name="currentUser.name"
          :info="info"
        />
      </div>
      <br>
      <div class="iv-o-the-sidebar-content__group-list">
        <base-text-cta
          :label="'New Egg Retrieval'"
          :is-active="isActive('newscore')"
          @baseTextCtaClicked="doAction('newscore', '/new-score')"
          class="sidebar-link"
        >
        <base-icon
          class="icon-header"
          :class="{'--active': isActive('newscore')}"
          :icon-name="'iv-icon-new-egg-retrieval'"
        />
      </base-text-cta>
      <base-text-cta
        :label="'My Database'"
        :is-active="isActive('mydb')"
        @baseTextCtaClicked="doAction('mydb', '/my-database')"
        class="sidebar-link"
      >
        <base-icon
          class="icon-header"
          :class="{'--active': isActive('mydb')}"
          :icon-name="'iv-icon-my-database'"
        />
      </base-text-cta>
      <base-text-cta
        :label="'Model Performance'"
        :is-active="isActive('modelperf')"
        @baseTextCtaClicked="doAction('modelperf','/model-performance')"
        class="sidebar-link"
      >
        <base-icon
          class="icon-header"
          :class="{'--active': isActive('modelperf')}"
          :icon-name="'iv-icon-model-performance'"
        />
      </base-text-cta>
      </div>
      <hr>
      <div class="iv-o-the-sidebar-content__group-list">
        <base-text-cta
        :label="'Help'"
        :is-active="isActive('help')"
        @baseTextCtaClicked="doAction('help','/help')"
        class="sidebar-link"
      >
        <base-icon
          class="icon-header"
          :class="{'--active': isActive('help')}"
          :icon-name="'iv-icon-help'"
        />
      </base-text-cta>
      <base-text-cta
        :label="'Legal'"
        :is-active="isActive('legal')"
        @baseTextCtaClicked="doAction('legal', '/legal')"
        class="sidebar-link"
      >
        <base-icon
          class="icon-header"
          :class="{'--active': isActive('legal')}"
          :icon-name="'iv-icon-settings'"
        />
      </base-text-cta>
      </div>
    </section>
    <section class="iv-o-the-sidebar-footer" @click="updateSize">
      <div class="iv-o-the-sidebar-content__group-list">
        <base-text-cta
          :label="'Collapse'"
          :is-active="false"
          class="sidebar-link"
        >
        <base-icon
          class="icon-header"
          :icon-name="'iv-icon-toggle'"
        >
          <span class="path1"></span>
          <span class="path2"></span>
        </base-icon>
      </base-text-cta>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import UserSumup from '@/components/molecules/UserSumup'

export default {
  name: 'TheSidebar',
  components: {
    UserSumup
  },
  computed: {
    ...mapState({
      currentUser: state => state.user.currentUser,
      sidebarLinksActive: state => state.app.sidebar.activeLink
    }),
    info () {
      return {
        email: this.currentUser.email,
        flag: 'FR'
      }
    }
  },
  methods: {
    ...mapActions('app', ['toggleSidebar', 'updateActiveElement']),
    updateSize () {
      this.toggleSidebar()
    },
    doAction (activateEl, path) {
      if (this.$route.path !== path) {
        this.updateActiveElement(activateEl)
        this.$router.push(path)
      }
    },
    isActive (linkValue) {
      return this.sidebarLinksActive === linkValue
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/global';

  .iv-o-the-sidebar {
    position: relative;
    z-index: 10;
    height: 100%;
    background: white;
    box-shadow: 6px 0px 18px rgba(0, 0, 0, 0.06);
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .sidebar-link {
      font-size: 20px;
      padding: .5em;
    }

    &-header {
      .--logo-wrapper {
        border-bottom: 1px solid $color-iv-gray-light-2;
      }
    }

    &-content {
      flex: 12;
      width: 100%;

      &__group-list {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    }

    &-footer {
      flex: 1;
      width: 100%;

    }
  }
</style>
