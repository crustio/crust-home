<template>
  <div class="container-fluid main-index">
    <div class="container main">
      <div class="main-logo">
        <p class="logo">{{ $t("indexBanner.sub") }}</p>
        <p class="test-net-title">{{ $t("button.networkTitle") }}</p>
        <div class="buttons">
          <button @click="handleClick('join preview network')" class="btn-custom button-width">
            {{ $t("button.joinPreviewNetwork") }}
          </button>
          <button @click="handleClick('csmToken')" class="btn-custom margin-left-25 button-width">
            {{ $t("button.csmToken") }}
          </button>
        </div>
      </div>
      <div id="global"></div>
    </div>
    <div class="back">
      <div class="container description">
        <div class="description-left">
          <p class="sub-title color-main">{{ $t("crust.sub") }}</p>
          <p class="content color-main">
            {{ $t("crust.title") + $t(`crust.content.text1`) }}
          </p>
          <button @click="handleClick" class="btn-custom">
            {{ $t("button.checkOnGithub") }}
          </button>
        </div>
        <div class="description-right">
          <div class="description-right-left">
            <DescCard :idx="1" />
          </div>
          <div class="description-right-right">
            <DescCard :idx="2" />
            <DescCard :idx="0" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jumpTo from "../../utils"
import DescCard from "./descCard"
export default {
  components: {
    DescCard,
  },
  methods: {
    handleClick(name) {
      if (name === 'join preview network' && this.$store.state.locale === "en") {
        name += "_en"
      }
      jumpTo(name)
    },
  },
  head: {
    script: [{ src: "/script/three.js" }, { src: "/script/global.js" }, { src: "/script/TrackballControls.js"} ],
  },
}
</script>

<style lang="scss" scoped>
.main-index {
  margin-top: -60px;
  width: 100%;
  height: 1520px;
  background-color: black;
  position: relative;
  overflow: hidden;
  .main {
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    .main-logo {
      width: 50%;
      animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 0.5s; /* don't forget to set a duration! */
      .logo {
        font-family: InterV_Semi-Bold;
        font-size: 64px;
        color: #ffffff;
        letter-spacing: 0;
        text-align: left;
        line-height: 70px;
        margin-bottom: 2rem;
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
        opacity: 0.53;
        font-family: Inter-Regular;
        font-size: 20px;
        color: #ffcba9;
        letter-spacing: 0;
        text-align: left;
        margin-bottom: 60px;
      }
      .buttons {
        display: flex;
        justify-content: flex-start;
      }
    }
    #global {
      margin-left: 80px;
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
  .back {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc((1520px - 100vh) * 1.6);
    background-color: $secondary;
    clip-path: polygon(0 37.5%, 100% 0%, 100% 100%, 0 100%);
    .description {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      .description-left {
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .sub-title {
          margin-bottom: 56px;
        }
        .content {
          margin-bottom: 40px;
          max-width: 474px;
        }
        .btn-custom {
          width: 200px;
          margin-bottom: 137px;
        }
      }
      .description-right {
        display: flex;
        align-items: center;

        .description-right-right {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}

.container {
  @media (min-width: 1270px) {
    max-width: 1270px;
  }
}
</style>
