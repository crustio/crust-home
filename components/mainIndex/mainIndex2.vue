<template>
  <div>
    <div class="container-fluid main-index">
      <div class="container main">
        <div id="global"></div>
        <div class="main-logo">
          <p class="logo">{{ $t("indexBanner.sub") }}</p>
          <p class="test-net-title">{{ $t("button.networkTitle") }}</p>
          <div class="buttons">
            <button
              class="btn-custom button-width"
              @click="handleClick('join preview network')"
            >
              {{ $t("button.joinPreviewNetwork") }}
            </button>
            <button
              class="btn-custom margin-left-25 button-width"
              @click="handleClick('csmToken')"
            >
              {{ $t("button.csmToken") }}
            </button>
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
            <button class="btn-custom" @click="handleClick">
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
    <div class="container-fluid desc-mobile">
      <div class="description">
        <div class="description-left">
          <p class="sub-title color-main">{{ $t("crust.sub") }}</p>
          <p class="content color-main" :class="getZhcnCss()">
            {{ $t("crust.title") + $t(`crust.content.text1`) }}
          </p>
          <button class="btn-custom" @click="handleClickCheck()">
            {{ $t("button.checkOnGithub") }}
          </button>
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
import jumpTo from "../../utils"
import DescCard from "./descCard"
import { outerDit } from "@/config/nav-config"
export default {
  components: {
    DescCard,
  },
  data() {
    return {
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
  methods: {
    getZhcnCss() {
      if (this.$store.state.locale === "en") {
        return ''
      } else {
        return 'zh-cn'
      }
    },
    handleClick(name) {
      if (
        name === "join preview network" &&
        this.$store.state.locale === "en"
      ) {
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
      { src: "/script/three.js" },
      { src: "/script/global.js" },
      { src: "/script/TrackballControls.js" },
    ],
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1200px) {
  .main-index {
    margin-top: -60px;
    width: 100%;
    height: calc(100vh + 553px);
    background-color: black;
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
          font-size: 64px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: left;
          line-height: 70px;
          margin-bottom: 2rem;
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
          .btn-custom {
            width: 200px;
            margin-bottom: 137px;
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
  }
}

@media screen and (max-width: 1200px) {
  .main-index {
    margin-top: -60px;
    width: 100%;
    height: 100vh;
    background-color: black;
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
      .main-logo {
        width: 100%;
        display: flex;
        flex-direction: column;
        .logo {
          font-family: InterV_Semi-Bold;
          font-size: 32px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: left;
          line-height: 2.25rem;
          margin-bottom: 16px;
          opacity: 0.99;
        }

        .test-net-title {
          opacity: 0.53;
          font-family: Inter-Regular;
          font-size: 12px;
          color: #ffcba9;
          letter-spacing: 0;
          text-align: left;
          margin-bottom: 20px;
        }
        .buttons {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 87px;
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
        .btn-custom {
          width: 128px;
          margin-bottom: 20px;
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

.container {
  @media (min-width: 1270px) {
    max-width: 1270px;
  }
}
</style>
