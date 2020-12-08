<template>
  <div class="container-fluid main-index">
    <div class="container">
      <div class="main-logo">
        <div class="logo"></div>
        <div class="desc" :class="{ 'desc-zh': $store.state.locale === 'zh' }">
          <p v-html="$t('indexBanner.desc')"></p>
        </div>
        <p class="test-net-title">{{ $t("button.arkTitle") }}</p>
        <div class="container text-center">
          <div>
            <button @click="handleClick('join profit ark')" class="btn-custom button-width">
              {{ $t("button.joinArk") }}
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
        width: 507px;
        height: 120px;
        @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/mainLogo");
        background-size: cover;
      }
      .desc {
        margin: 0 auto;
        width: 507px;
        height: 50px;
        @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/desc");
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
      .test-net-title {
        color: #ffffff;
        text-align: center;
        font-size: 30px;
        margin-top: 30px;
        &::before {
          content: "";
          height: 1px;
          width: 30px;
          background: #eb761c;
          clear: both;
          display: inline-block;
          position: relative;
          top: -10px;
          right: 30px;
        }
        &::after {
          content: "";
          height: 1px;
          width: 30px;
          background: #eb761c;
          clear: both;
          display: inline-block;
          position: relative;
          top: -10px;
          left: 30px;
        }
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
          font-size: 1.2rem;
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
