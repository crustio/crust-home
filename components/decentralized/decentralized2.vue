<template>
  <div>
    <div class="container-fluid dec-connect">
      <div class="container">
        <div class="dec-top">
          <div class="dec-top-left sub-title color-white" :class="getZhcnCss()">
            {{ $t(`decentralized.title`) }}
          </div>
          <!-- <div class="dec-top-right">
            <button class="btn-custom btn-right" @click="handleDemoVideoClick">
              <i class="icon-play" v-html="iconPlay"></i
              >{{ $t("button.demoVideo") }}
            </button>
            <button class="btn-custom btn-right" @click="handleStorageUserClick">
              {{ $t("button.storageUser") }}
            </button>
            <button class="btn-custom btn-right" @click="handleFreeStorageDiscordClick">
              {{ $t("button.freeStorageLink") }}
            </button>
          </div> -->
        </div>
        <div class="dec-bottom">
          <swiper class="swiper" :options="swiperOptions1">
            <swiper-slide>
              <DConnectCard
                :img-src="require('~/assets/images/market.png')"
                :title="$t(`decentralized.step-1-1`)"
                :content1="$t(`decentralized.step-1-content1`)"
                :clickDemoVideo="handleDemoVideoClick"
                :clickGoTo="gotToDSM"
              />
            </swiper-slide>
            <swiper-slide>
              <DConnectCard
                :img-src="require('~/assets/images/crust_files.png')"
                :title="$t(`decentralized.step-2-1`)"
                :content1="$t(`decentralized.step-2-content1`)"
                :content2="$t(`decentralized.createBy`)"
                :clickDemoVideo="handleDemoVideoClick"
                :clickGoTo="goToCrustFiles"
              />
            </swiper-slide>
            <swiper-slide>
              <DConnectCard
                :img-src="require('~/assets/images/swap@3x.png')"
                :title="$t(`decentralized.step-3-1`)"
                :content1="$t(`decentralized.step-3-content1`)"
                :content2="$t(`decentralized.createBy`)"
                :clickDemoVideo="handleSwitchswapVideoClick"
                :clickGoTo="gotToSwitchswap"
              />
            </swiper-slide>
            <div
              slot="pagination"
              class="swiper-pagination swiper-pagination-connnct"
            ></div>
          </swiper>
        </div>
      </div>
    </div>
    <div class="container-fluid dec-cloud">
      <div class="container">
        <div class="dec-cloud-top sub-title color-main">
          <div class="dec-cloud-top-left sub-title color-main">
            {{ $t(`decentralized.title2`) }}
          </div>
          <div class="dec-cloud-top-right">
            <button
              class="btn-custom cloud-grants-btn"
              @click="handleHandbookClick"
            >
              {{ $t("Crust Solutions Handbook") }}
            </button>
            <button
              class="btn-custom cloud-grants-btn"
              @click="handleBuildOnCrust"
            >
              {{ $t("button.buildOnCrust") }}
            </button>
          </div>
        </div>
        <div class="dec-cloud-bottom">
          <swiper class="swiper" :options="swiperOptions2">
            <swiper-slide>
              <d-cloud-card
                :img-src="require('~/assets/images/d-cloud-icon-0.png')"
                :title="$t(`decentralized.serverlessTitle`)"
                :content="$t(`decentralized.serverlessSubTitle`)"
              />
            </swiper-slide>
            <swiper-slide>
              <d-cloud-card
                :img-src="require('~/assets/images/d-cloud-icon-1.png')"
                :title="$t(`decentralized.generalTitle`)"
                :content="$t(`decentralized.generalSubTitle`)"
              />
            </swiper-slide>
            <swiper-slide>
              <d-cloud-card
                :img-src="require('~/assets/images/d-cloud-icon-2.png')"
                :title="$t(`decentralized.AcceleratedTitle`)"
                :content="$t(`decentralized.AcceleratedSubTitle`)"
              />
            </swiper-slide>
            <swiper-slide>
              <d-cloud-card
                :img-src="require('~/assets/images/d-cloud-icon-3.png')"
                :title="$t(`decentralized.SecuredTitle`)"
                :content="$t(`decentralized.SecuredSubTitle`)"
              />
            </swiper-slide>
            <div
              slot="pagination"
              class="swiper-pagination swiper-pagination-cloud"
            ></div>
          </swiper>
        </div>
        <div class="dec-apply-now">
          <button
            class="btn-custom cloud-grants-btn"
            @click="handleHandbookClick"
          >
            {{ $t("Crust Solutions Handbook") }}
          </button>
          <button
            class="btn-custom cloud-grants-btn"
            @click="handleBuildOnCrust"
          >
            {{ $t("button.buildOnCrust") }}
          </button>
        </div>
      </div>
      <!--      <p class="check-more-title-full" v-html="$t('decentralized.checkMore')"></p>-->
    </div>
    <div
      v-if="showVideo"
      class="m-video-container"
      @click="handleCloseDemoVideo"
    >
      <dVideo></dVideo>
    </div>
    <div
      v-if="showSwitchswapVideo"
      class="m-video-container"
      @click="handleCloseSwitchswapVideo"
    >
      <sVideo></sVideo>
    </div>
  </div>
</template>

<script>
import IconPlay from "@/assets/svgs/icon-play.svg?raw"
import { outerDit } from "@/config/nav-config"
import DConnectCard from "./DConnectCard"
import DCloudCard from "./DCloudCard"
import dVideo from "./dVideo"
import sVideo from "./sVideo"

export default {
  name: "Decentralized2",
  components: { DConnectCard, DCloudCard, dVideo, sVideo },
  data() {
    return {
      showVideo: false,
      showSwitchswapVideo: false,
      iconPlay: IconPlay,
      swiperOptions1: {
        loop: false,
        slidesPerView: 3,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination-connnct",
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
      swiperOptions2: {
        loop: false,
        slidesPerView: 4,
        spaceBetween: 12,
        pagination: {
          el: ".swiper-pagination-cloud",
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
            slidesPerView: 4,
          },
        },
      },
    }
  },
  destroyed() {},
  methods: {
    handleStorageUserClick() {
      const address =
        "https://apps.crust.network/?rpc=wss%3A%2F%2Frpc.crust.network#/storage_files"
      window.open(address, "_blank")
    },
    handleFreeStorageDiscordClick() {
      const address =
        "https://discord.gg/WQQHnyKCmn"
      window.open(address, "_blank")
    },
    handleBuildOnCrust() {
      const location =
        this.$store.state.locale === "en"
          ? "https://wiki.crust.network/docs/en/buildGettingStarted"
          : "https://wiki.crust.network/docs/zh-CN/buildGettingStarted"
      window.open(location, "_blank")
    },
    handleHandbookClick() {
      const pdfName =
        this.$store.state.locale === "en"
          ? "crust_solutions_handbook-en.pdf"
          : "crust_solutions_handbook-ch.pdf"
      window.open(`${outerDit.download}${pdfName}`, "_blank")
    },
    getZhcnCss() {
      if (this.$store.state.locale === "en") {
        return ""
      } else {
        return "zh-cn"
      }
    },
    handleFreeStorageClick() {
      window.open(outerDit["free storage"], "_blank")
    },
    handleCrustGrantsClick() {
      window.open(outerDit["crust grants"], "_blank")
    },
    handleBuildClick() {
      window.open(
        outerDit[this.$store.state.locale === "en" ? "wiki_en" : "wiki_zh"],
        "_blank"
      )
    },
    handleDemoVideoClick() {
      this.showVideo = true
    },
    gotToDSM() {
      window.open(
        "https://apps.crust.network/#/storage",
        "_blank"
      )
    },
    goToCrustFiles() {
      window.open(
        "https://files.crustapps.net",
        "_blank"
      )
    },
    gotToSwitchswap() {
      window.open(
        "https://switchswap.io",
        "_blank"
      )
    },
    handleSwitchswapVideoClick() {
      this.showSwitchswapVideo = true
    },
    handleCloseDemoVideo() {
      this.showVideo = false
    },
    handleCloseSwitchswapVideo() {
      this.showSwitchswapVideo = false
    },
    handleApplyNow() {
      window.open(
        outerDit[
          this.$store.state.locale === "en" ? "dcf grants" : "dcf grants"
        ],
        "_blank"
      )
    },
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

@media screen and (min-width: 1200px) {
  .dec-cloud {
    padding: 100px 0;
    background: $secondary;
    .container {
      display: flex;
      flex-direction: column;
      @media (min-width: 1270px) {
        max-width: 1270px;
      }

      .dec-cloud-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 26px;
        .dec-cloud-top-left {
          max-width: 500px;
        }

        .dec-cloud-top-right {
          display: flex;
          align-items: flex-end;
          flex-direction: column;
          font-size: 16px;
          font-family: InterV_Semi-Bold, InterV_Semi;
          font-weight: bold;
          color: #6f6f6f;
          line-height: 19px;
          text-align: right;
          .cloud-grants-btn {
            margin-top: 19px;
          }
        }
      }

      .dec-cloud-bottom {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
      }

      .dec-apply-now {
        display: none;
        justify-content: center;
        margin-top: 30px;
        .prefix-text {
          font-size: 16px;
          font-family: InterV_Semi-Bold, InterV_Semi;
          font-weight: bold;
          color: #0f0f0f;
          line-height: 40px;
          margin-right: 40px;
        }
        .cloud-grants-btn {
          width: 200px;
          align-self: center;
        }
      }
    }
    .check-more-title-full {
      padding-top: 40px;
      width: 100%;
      font-family: Inter-Regular;
      font-size: 20px;
      color: #ff6400;
      letter-spacing: 0;
      text-align: center;
    }
  }

  .dec-connect {
    padding: 70px 0 42px 0;
    background: $mainColor;
    .container {
      display: flex;
      flex-direction: column;
      @media (min-width: 1270px) {
        max-width: 1270px;
      }
      .dec-top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 70px;
        .dec-top-left {
          max-width: 660px;
        }
        .dec-top-right {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          max-width: 600px;
        }
      }
    }
    .swiper-slide {
      height: auto;
      
    }
  }

  .swiper-pagination-connnct,
  .swiper-pagination-cloud {
    display: none;
  }
  .btn-custom {
    border: 2px solid $secondary;
    padding-left: 20px;
    padding-right: 20px;
    &.btn-right {
      width: 200px;
      padding: 0.5rem 0;
      margin-bottom: 1rem;
    }
    &:hover {
      color: #afafaf !important;
      /deep/ svg {
        fill: #afafaf !important;
      }
    }
  }
}

@media screen and (max-width: 1200px) {
  .dec-cloud {
    padding: 45px 0;
    background: $secondary;
    .container {
      display: flex;
      flex-direction: column;
      @media (min-width: 1270px) {
        max-width: 1270px;
      }

      .dec-cloud-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 26px;
        .dec-cloud-top-left {
          max-width: 500px;
        }

        .dec-cloud-top-right {
          display: none;
        }
      }

      .dec-cloud-bottom {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
      }

      .dec-apply-now {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        flex-direction: column;
        align-items: center;
        .prefix-text {
          font-size: 12px;
          font-family: InterV_Semi-Bold, InterV_Semi;
          font-weight: bold;
          color: #0f0f0f;
          line-height: 1.3;
          padding-left: 10px;
          padding-right: 10px;
        }
        .cloud-grants-btn {
          width: auto;
          padding: 0 20px;
          margin-top: 20px;
          align-self: center;
        }
        .check-more-title {
          font-family: Inter-Regular;
          font-size: 12px;
          color: #ff6400;
          letter-spacing: 0;
          text-align: left;
          margin-top: 24px;
          margin-bottom: 10px;
        }
      }
    }
    .check-more-title-full {
      display: none;
    }

    .swiper-container {
      padding-bottom: 30px;
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

  .dec-connect {
    padding: 45px 0 35px 0;
    background: $mainColor;
    .container {
      display: flex;
      flex-direction: column;
      @media (min-width: 1270px) {
        max-width: 1270px;
      }
      .dec-top {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom: 30px;
        .dec-top-left {
          max-width: 240px;
          margin-bottom: 30px;
          &.zh-cn {
            max-width: 300px;
          }
        }
        .dec-top-right {
          display: flex;
          flex-direction: column;
        }
      }
      .dec-bottom {
      }
    }

    .swiper-slide {
      height: auto;
    }

    .swiper-container {
      padding-bottom: 30px;
    }
    .swiper-pagination-bullets {
      bottom: 0;
    }
    /deep/ .swiper-pagination-bullet {
      background-color: $mainColor;
      border: 1px solid #efedea;
    }

    /deep/ .swiper-pagination-bullet-active {
      background-color: #efedea;
    }
  }

  .m-video-container {
    padding: unset;
  }

  .btn-custom {
    border: 2px solid $secondary;
    width: 160px;
    &:hover {
      color: #afafaf !important;
      /deep/ svg {
        fill: #afafaf !important;
      }
    }
  }
}
</style>
