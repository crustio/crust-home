<template>
  <div class="container-fluid main-index">
    <div class="container">
      <div class="main-logo">
        <div class="logo" :class="{ 'desc-zh': $store.state.locale === 'zh' }"></div>
        <p class="test-net-title">{{ $t("button.networkTitle") }}</p>
        <div class="container text-center">
          <div>
            <button @click="handleClick('join preview network')" class="btn-custom button-width">
              {{ $t("button.joinPreviewNetwork") }}
            </button>
            <button @click="handleClick('csmToken')" class="btn-custom margin-left-25 button-width">
              {{ $t("button.csmToken") }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jumpTo from "../../utils"
export default {
  methods: {
    handleClick(name) {
      if (name === 'join preview network' && this.$store.state.locale === "en") {
        name += "_en"
      }
      jumpTo(name)
    }
  }
}
</script>

<style lang="scss" scoped>
.main-index {
  margin-top: -60px;
  width: 100%;
  height: 100vh;
  background-image: url("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/mainBg.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  .container {
    width: 100%;
    height: 500px;
    position: relative;
    .main-logo {
      position: absolute;
      top: 100px;
      width: 100%;
      animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 0.5s; /* don't forget to set a duration! */
      .logo {
        margin: 0 auto;
        width: 508px;
        height: 132px;
        // line-height: 120px;
        background-image: url('~/assets/main_logo_en.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        // @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/mainLogo");
        font-family: nasalization;
        font-size: 120px;
        color: #ffffff;
        text-align: center;
        span{
          color: #eb761c;
        }
        &.desc-zh {
          background-image: url('~/assets/main_logo_zh.png');
        }
      }
      .desc {
        margin: 0 auto;
        width: 681px;
        color: #ffffff;
        font-size: 28px;
        letter-spacing: 7px;
        text-indent: 7px;
        font-family: nasalization;
        line-height: 60px;
        text-align: center;
        &.desc-zh {
          letter-spacing: 50px !important;
          text-indent: 50px;
        }

      }
      .test-net-title {
        color: #ffffff;
        text-align: center;
        font-size: 24px;
        margin-top: 90px;
      }
    }
    .margin-left-25 {
      margin-left: 25px;
    }
    .button-width {
      width: 200px;
      padding: 0.5rem 0;
    }
    @include media-breakpoint-down(xs) {
      position: relative;
      background-size: contain;

      .margin-left-25 {
        margin-left: 0px;
        margin-top: 15px;
      }

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
            font-size: 1.2rem;
            text-align: center;
          }
        }
        .test-net-title {
          color: #ffffff;
          text-align: center;
          font-size: 0.95rem;
          &::before{
            content: "";
            display: none;
          }
          &::after {
            content: "";
            display: none;
          }
        }
      }
    }
  }
}
</style>
