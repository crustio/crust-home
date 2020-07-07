<template>
  <div class="container-fluid main-index">
    <div class="container">
      <div class="main-logo">
        <div class="logo"></div>
        <div class="desc" :class="{ 'desc-zh': $store.state.locale === 'zh' }">
          <p v-html="$t('indexBanner.desc')"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main-index {
  margin-top: -60px;
  width: 100%;
  height: 100vh;
  background-image: url("~assets/images/mainBg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  .container {
    width: 641px;
    height: 400px;
    @include bgImage("~assets/images/mainCrustBg");
    position: relative;
    .main-logo {
      position: absolute;
      top: 162px;
      width: 100%;
      animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 0.5s; /* don't forget to set a duration! */
      .logo {
        margin: 0 auto;
        width: 507px;
        height: 120px;
        @include bgImage("~assets/images/mainLogo");
        background-size: cover;
      }
      .desc {
        margin: 0 auto;
        width: 507px;
        height: 50px;
        @include bgImage("~assets/images/desc");
        background-size: contain;
        &.desc-zh {
          background: none;
          & > p {
            width: 100%;
            display: block;
            color: #eee;
            font-size: 30px;
            text-align: center;
            letter-spacing: 50px;
            text-indent: 25px;
          }
        }
        & > p {
          display: none;
        }
      }
    }
    @include media-breakpoint-down(xs) {
      @include bgImage("~assets/images/mainCrustBg");
      position: relative;
      background-size: contain;

      .main-logo {
        position: absolute;
        width: 100%;
        .logo {
          width: 300px;
          height: 100px;
          background-size: contain;
        }
        .desc {
          width: 100%;
          height: 100px;
          color: #eee;
          background: none;
          &.desc-zh {
            p {
              text-align: center;
              letter-spacing: 1rem;
              text-indent: 0.5rem;
            }
          }
          p {
            display: block;
            font-family: nasalization;
            font-size: 1.5rem;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
