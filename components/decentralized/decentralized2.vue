<template>
  <div>
    <div class="container-fluid dec-connect">
      <div class="container">
        <div class="dec-top">
          <div class="dec-top-left sub-title color-white" :class="getZhcnCss()">
            {{ $t(`decentralized.title`) }}
          </div>
          <div class="dec-top-right">
            <button
              class="btn-custom"
              style="margin-bottom: 20px"
              @click="handleExperienceClick"
            >
              {{ $t("button.experienceCrustApps") }}
            </button>
            <button class="btn-custom" @click="handleBuildClick">
              {{ $t("button.buildOnCrust") }}
            </button>
          </div>
        </div>
        <div class="dec-bottom">
          <swiper class="swiper" :options="swiperOptions1">
            <swiper-slide>
              <DConnectCard
                :img-src="require('~/assets/images/ipfs-add.png')"
                :title="$t(`decentralized.step-1-1`)"
                content1="added"
                content2="QmQttmFtnV2NT91MkHti2a8iW8hCRH61TE44nR6XhfNv3v"
              />
            </swiper-slide>
            <swiper-slide>
              <DConnectCard
                :img-src="require('~/assets/images/ipfs-place.png')"
                :title="$t(`decentralized.step-2-1`)"
                content2="QmQttmFtnV2NT91MkHti2a8iW8hCRH61TE44nR6XhfNv3v"
              />
            </swiper-slide>
            <swiper-slide>
              <DConnectCard
                :img-src="require('~/assets/images/ipfs-get.png')"
                :title="$t(`decentralized.step-3-1`)"
                content1="ipfs get"
                content2="QmQttmFtnV2NT91MkHti2a8iW8hCRH61TE44nR6XhfNv3v"
              />
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination swiper-pagination-connnct"></div>
          </swiper>
        </div>
      </div>
    </div>
    <div class="container-fluid dec-cloud">
      <div class="container">
        <div class="dec-cloud-top sub-title color-main">
          {{ $t(`decentralized.title2`) }}
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
            <div slot="pagination" class="swiper-pagination swiper-pagination-cloud"></div>
          </swiper>
        </div>
        <div class="dec-apply-now">
          <span class="prefix-text">{{ $t(`decentralized.apply-now-prefix`)}}</span>
          <button class="btn-custom cloud-grants-btn" @click="handleBuildClick">
            {{ $t("button.applyNow") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DConnectCard from "./DConnectCard"
import DCloudCard from "./DCloudCard"
import { outerDit } from "@/config/nav-config"
export default {
  name: "Decentralized2",
  components: { DConnectCard, DCloudCard },
  data() {
    return {
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
    getZhcnCss() {
      if (this.$store.state.locale === "en") {
        return ''
      } else {
        return 'zh-cn'
      }
    },
    handleExperienceClick() {
      window.open(
        outerDit["crust apps"],
        "_blank"
      )
    },
    handleCrustGrantsClick() {
      window.open(
        outerDit["crust grants"],
        "_blank"
      )
    },
    handleBuildClick() {
      window.open(
        outerDit[this.$store.state.locale === "en" ? "wiki_en" : "wiki_zh"],
        "_blank"
      )
    },
  },
}
</script>

<style lang="scss" scoped>
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
        max-width: 500px;
        margin-bottom: 26px;
      }

      .dec-cloud-bottom {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
      }

      .dec-apply-now {
        display: flex;
        justify-content: center;
        margin-top: 30px;
        .prefix-text {
          font-size: 16px;
          font-family: InterV_Semi-Bold, InterV_Semi;
          font-weight: bold;
          color: #0F0F0F;
          line-height: 40px;
          margin-right: 40px;
        }
        .cloud-grants-btn {
          width: 200px;
          align-self: center;
        }
      }

    }
  }

  .dec-connect {
    padding: 70px 0;
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
          .btn-custom {
            border: 2px solid $secondary;
            width: 200px;
          }
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
        margin-bottom: 26px;
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
          font-size: 16px;
          font-family: InterV_Semi-Bold, InterV_Semi;
          font-weight: bold;
          color: #0F0F0F;
          line-height: 1.3;
          padding-left: 10px;
          padding-right: 10px;
        }
        .cloud-grants-btn {
          width: 200px;
          margin-top: 20px;
          align-self: center;
        }
      }
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
          .btn-custom {
            border: 2px solid $secondary;
            width: 160px;
          }
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


}


</style>
