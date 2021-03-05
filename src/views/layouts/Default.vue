<template>
  <div class="iv-layout row">
    <div class="sidebar-wrapper"
      :class="getSidebarClass"
    >
      <the-sidebar />
    </div>
    <div class="menu-content-wrapper"
      :class="getHeaderClass"
    >
      <the-header/>
      <slot />
    </div>
  </div>
</template>

<script>
import SideBarHeaderSize from '@/mixins/sideBarHeaderSize'

export default {
  name: 'Default',
  mixins: [SideBarHeaderSize]
}
</script>

<style lang="scss" scoped>
  .iv-layout {
    width: 100%;
    height: 100%;
    background-color: #F5F6F8;

    .sidebar-wrapper, .menu-content-wrapper {
      padding: 0;
      transition: 0.5s ease-in-out;
    }
  }
</style>
