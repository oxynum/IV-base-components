import BaseButton from '@/components/atoms/BaseButton'
import BaseInput from '@/components/atoms/BaseInput'
import BaseLink from '@/components/atoms/BaseLink'
import BaseInputLabel from '@/components/atoms/BaseInputLabel'
import BaseAlert from '@/components/atoms/BaseAlert'
import BaseIcon from '@/components/atoms/BaseIcon'
import BaseTextCta from '@/components/atoms/BaseTextCta'
import BaseUpload from '@/components/atoms/BaseUpload'
import BaseLoading from '@/components/atoms/BaseLoading'
import TheFooter from '@/components/organisms/TheFooter'
import TheHeader from '@/components/organisms/TheHeader'
import TheSidebar from '@/components/organisms/TheSidebar'

export default {
  install (Vue) {
    // Register global components
    Vue.component('base-button', BaseButton)
    Vue.component('base-input', BaseInput)
    Vue.component('base-link', BaseLink)
    Vue.component('base-alert', BaseAlert)
    Vue.component('base-input-label', BaseInputLabel)
    Vue.component('base-icon', BaseIcon)
    Vue.component('base-text-cta', BaseTextCta)
    Vue.component('base-upload', BaseUpload)
    Vue.component('base-loading', BaseLoading)
    Vue.component('the-footer', TheFooter)
    Vue.component('the-sidebar', TheSidebar)
    Vue.component('the-header', TheHeader)
  }
}
