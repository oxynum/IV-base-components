<template>
  <div class="iv-o-the-header col-sm-12">
    <div class="iv-o-the-header-links row">
      <base-text-cta
        v-for="cta in ctaList"
        :key="cta.label"
        :label="cta.label"
        :is-active="cta.isActive"
        :action="cta.action"
        @baseTextCtaClicked="doAction"
      >
        <base-icon
          class="icon-header"
          :icon-name="cta.icon"
        />
      </base-text-cta>
    </div>
  </div>
</template>

<script>
import { AuthService } from '@/services/auth.service'
import { mapActions } from 'vuex'

export default {
  name: 'TheHeader',
  data () {
    return {
      ctaList: [{
        isActive: false,
        label: this.$tc('myProfile'),
        icon: 'iv-icon-my-profile',
        action: () => {
          this.$router.push('/profile')
        }
      }, {
        isActive: false,
        label: this.$tc('logOut'),
        icon: 'iv-icon-log-out',
        action: async () => {
          this.$store.dispatch('app/openModal', {
            title: this.$tc('logOut'),
            contentBody: this.$tc('confirmLogout'),
            ctaList: [{
              text: this.$tc('logOut'),
              callback: () => {
                this.applyLogout()
              }
            }, {
              text: this.$tc('cancel'),
              isEmptyShape: true,
              colorClass: 'secondary'
            }]
          })
        }
      }],
      modal: false
    }
  },
  methods: {
    ...mapActions('app', ['openModal']),
    doAction (actionToExecute) {
      if (actionToExecute !== null) actionToExecute()
    },
    applyLogout () {
      AuthService.makeLogout()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/global';

  .iv-o-the-header {
    background-color: $color-iv-white;
    height: 57px;

    & &-links {
      justify-content: flex-end;
    }

    .icon-header {
      font-size: 20px;
    }
  }
</style>
