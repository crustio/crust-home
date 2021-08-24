<template>
  <div>
    <div
      v-if="showVideo"
      class="m-video-container"
      @click="handleCloseDemoVideo"
    >
      <dVideo :source="videoLink" />
    </div>
    <div class="container-fluid main-index">
      <div class="container main">
        <div id="global"></div>
        <div class="main-logo">
          <p class="logo" v-html="$t('indexBanner.sub')"></p>
          <div class="buttons">
            <button class="btn-custom button-width" @click="crustMainnet">
              {{ $t("Crust Mainnet") }}
            </button>
            &nbsp;&nbsp;
            <button
              class="btn-custom button-width"
              @click="handleClick('join preview network')"
            >
              {{ $t("Crust Maxwell") }}
            </button>
          </div>
          <div class="desc">
            <div class="capacity">
              <Capacity class="number" />
              <span class="unit">GB</span>
            </div>
            <div class="intro">
              {{ $t("Globally distributed available storage capacity") }}
            </div>
          </div>
        </div>
      </div>
      <div class="back">
        <div class="container description">
          <div class="description-left">
            <p class="sub-title color-main">{{ $t("crust.sub") }}</p>
            <p class="content color-main" :class="getZhcnCss()">
              {{ $t("crust.title") + $t(`crust.content.text1`) }}
            </p>
            <div class="btn-wrapper">
              <button
                class="btn-custom"
                @click="handleClick('Check Our Github')"
              >
                {{ $t("button.checkOnGithub") }}
              </button>
              <button class="btn-custom" @click="handleDemoVideoClick">
                <i class="icon-play" v-html="iconPlay"></i
                >{{ $t("button.introductionVideo") }}
              </button>
            </div>
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
    <div class="container-fluid desc-mobile">
      <div class="description">
        <div class="description-left">
          <p class="sub-title color-main">{{ $t("crust.sub") }}</p>
          <p class="content color-main" :class="getZhcnCss()">
            {{ $t("crust.title") + $t(`crust.content.text1`) }}
          </p>
          <div class="btn-wrapper">
            <button class="btn-custom" @click="handleClick('Check Our Github')">
              {{ $t("button.checkOnGithub") }}
            </button>
            <button class="btn-custom" @click="handleDemoVideoClick">
              <i class="icon-play" v-html="iconPlay"></i
              >{{ $t("button.introductionVideo") }}
            </button>
          </div>
        </div>
      </div>
      <swiper class="swiper" :options="swiperOptions">
        <swiper-slide>
          <DescCard :idx="1" />
        </swiper-slide>
        <swiper-slide>
          <DescCard :idx="2" />
        </swiper-slide>
        <swiper-slide>
          <DescCard :idx="0" />
        </swiper-slide>
        <div
          slot="pagination"
          class="swiper-pagination swiper-pagination-desc"
        ></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import { outerDit } from "@/config/nav-config"
import IconPlay from "@/assets/svgs/icon-play.svg?raw"
import jumpTo from "../../utils"
import * as THREE from "../../static/script/three"
import * as globalScript from "../../static/script/global"
import * as TrackballControls from "../../static/script/TrackballControls"
import dVideo from "../decentralized/dVideo"
import DescCard from "./descCard"
import Capacity from "./Capacity"
export default {
  components: {
    DescCard,
    dVideo,
    Capacity,
  },
  data() {
    return {
      showVideo: false,
      iconPlay: IconPlay,
      swiperOptions: {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination-desc",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
          },
          1000: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        },
      },
    }
  },
  computed: {
    videoLink() {
      return this.$store.state.locale === "en"
        ? "https://ipfs-hk.decoo.io/ipfs/QmS99gVeX5RyXThjMyp7NtXDQ4JUT6iDEsniF1S6sQuVPX"
        : "https://ipfs-hk.decoo.io/ipfs/QmTCcWgLFAU9Y8uK7oMonWBEh9nvscpS6rfAtKaRheZVmG"
    },
  },
  mounted() {
    TrackballControls.initControl(THREE)
    globalScript.runGlobal(THREE)
  },
  methods: {
    handleDemoVideoClick() {
      this.showVideo = true
    },
    handleCloseDemoVideo() {
      this.showVideo = false
    },
    handleMainnetPlanClick() {
      const linkName =
        this.$store.state.locale === "en"
          ? "mainnet_plan_medium_en"
          : "mainnet_plan_medium_zh"
      jumpTo(linkName)
    },
    getZhcnCss() {
      if (this.$store.state.locale === "en") {
        return ""
      } else {
        return "zh-cn"
      }
    },
    crustMainnet() {
      if (this.$store.state.locale === "en") {
        window.open(outerDit.crust_mainnet, "_blank")
      } else {
        window.open(outerDit.crust_mainnet_zh, "_blank")
      }
    },
    handleClick(name) {
      if (this.$store.state.locale === "en") {
        name += "_en"
      }
      jumpTo(name)
    },
    handleClickCheck() {
      window.open(outerDit.learnMore, "_blank")
    },
  },
  head: {
    script: [
      // { src: "/script/three.js" },
    ],
  },
}
</script>

<style lang="scss" scoped>
.icon-play {
  /deep/ svg {
    margin-right: 8px;
    margin-bottom: 2px;
    width: 16px;
    height: 16px;
    fill: white;
    &:hover {
      fill: #000;
    }
  }
}
.pointer {
  cursor: pointer;
  text-decoration: underline;
}
@media screen and (min-width: 1200px) {
  .main-index {
    margin-top: -60px;
    width: 100%;
    height: calc(100vh + 553px);
    background-color: #141414;
    position: relative;
    overflow: hidden;
    .main {
      width: 100%;
      height: 100vh;
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: row-reverse;
      justify-content: flex-end;
      .main-logo {
        width: 50%;
        animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 0.5s; /* don't forget to set a duration! */
        .logo {
          font-family: InterV_Semi-Bold;
          font-size: 44px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: left;
          line-height: 70px;
          margin-bottom: 2rem;
          width: 635px;
        }
        .desc {
          padding: 22px 0 0 5px;
          font-size: 14px;
          font-family: InterV_Semi-Bold, InterV_Semi;
          font-weight: bold;
          color: #ffffff;
          line-height: 2em;
          margin-top: 20px;
          .capacity {
            font-family: "Orbitron", sans-serif;
            padding-bottom: 10px;
            .number {
              font-size: 48px;
            }
            .unit {
              font-size: 24px;
            }
            .intro {
              font-size: 18px;
            }
          }
        }
        .buttons {
          display: flex;
          justify-content: flex-start;
        }
      }
      #global {
        margin-left: 40px;
      }
      .margin-left-25 {
        margin-left: 25px;
      }
      .button-width {
        width: 200px;
        padding: 0.5rem 0;
      }
    }
    .back {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: calc(553px + 35vh);
      background-color: $secondary;
      clip-path: polygon(0 35vh, 100% 0%, 100% 100%, 0 100%);
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
            &.zh-cn {
              line-height: 26px;
            }
          }
          .btn-wrapper {
            display: flex;
            margin-bottom: 137px;
            justify-content: space-between;
            .btn-custom {
              padding-left: 20px;
              padding-right: 20px;
              min-width: 200px;
            }
          }
        }
        .description-right {
          display: flex;
          align-items: center;
          padding-top: 50px;

          .description-right-right {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
  .desc-mobile {
    display: none;
    .video {
      display: none;
    }
  }
}

@media screen and (max-width: 1200px) {
  .main-index {
    margin-top: -60px;
    width: 100%;
    height: 100vh;
    background-color: #141414;
    position: relative;
    overflow: hidden;
    .main {
      width: 100%;
      height: 100vh;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      padding-bottom: 100px;
      .main-logo {
        width: 100%;
        display: flex;
        flex-direction: column;
        .logo {
          font-family: InterV_Semi-Bold;
          font-size: 24px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: left;
          line-height: 2.25rem;
          margin-bottom: 16px;
          opacity: 0.99;
        }
        .desc {
          padding: 36px 0 0 5px;
          font-size: 14px;
          font-weight: bold;
          color: #fff;
          line-height: 2em;
          z-index: 10;
          .capacity {
            font-family: "Orbitron", sans-serif;
            padding-bottom: 10px;
            .number {
              font-size: 28px;
            }
            .unit {
              font-size: 18px;
            }
            .intro {
              font-size: 18px;
            }
          }
        }

        .test-net-title {
          opacity: 0.53;
          font-family: Inter-Regular;
          font-size: 12px;
          color: #ff6400;
          letter-spacing: 0;
          text-align: left;
          margin-bottom: 20px;
          max-width: 200px;
          margin-top: -40px;
        }
        .buttons {
          display: flex;
          justify-content: flex-start;
          opacity: 0.99;
        }
      }
      #global {
        position: absolute;
        margin-left: 80px;
        top: -70px;
        left: 0px;
      }
      .margin-left-25 {
        margin-left: 25px;
      }
      .button-width {
        width: 121px;
      }
    }
  }

  .desc-mobile {
    background-color: $secondary;
    padding-bottom: 45px;

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
          margin-bottom: 31px;
          margin-top: 45px;
        }
        .content {
          margin-bottom: 34px;
          max-width: 474px;
          font-size: 12px;
          line-height: 16px;
          &.zh-cn {
            line-height: 26px;
          }
        }
        .btn-wrapper {
          margin-bottom: 20px;
          .btn-custom {
            margin-bottom: 10px;
            min-width: 128px;
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      }
      .description-right {
        display: none;
      }
    }

    .swiper-slide {
      height: auto;
    }

    .swiper-container {
      padding-bottom: 45px;
    }
    .swiper-pagination-bullets {
      bottom: 0;
    }

    /deep/ .swiper-pagination-bullet {
      background-color: #efedea;
      border: 1px solid $mainColor;
    }

    /deep/ .swiper-pagination-bullet-active {
      background-color: $mainColor;
    }
  }
}
.m-video-container {
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vh;
  padding: 0 10vw;
  background: rgba(33, 33, 33, 0.2);
  left: 0;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.container {
  @media (min-width: 1270px) {
    max-width: 1270px;
  }
}
</style>
