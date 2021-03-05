<template>
  <footer class="iv-o-the-footer col-sm-12 row">
    <div class="col-sm-4">
      <span class="subtitle-2">2021 © ImVitro 2021. All rights reserved</span>
    </div>
    <div class="col-sm-8">
      <div class="row end-sm end-footer">
        <base-link
          :text="$tc('termsOfService')"
        />
        <span class="bullets">
          &bull;
        </span>
        <base-link
          :text="$tc('privacyPolicy')"
        />
        <span class="bullets">
          &bull;
        </span>
        <base-link
          :text="$tc('GDPR')"
        />
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  @import '../../styles/global';

  .iv-o-the-footer {
    position: absolute;
    bottom: 0;

    .bullets {
      padding-top: 2px;
      margin: 0 20px;
      vertical-align: center;
    }
  }
</style>
