<template>
  <div class="container-fluid foot">
    <div class="container">
      <div class="foot-left">
        <div class="foot-left-top">
          <a class="social weixin" href="javascript:">
            <img
              class="qrcode"
              :src="require('~/assets/images/weixin.png')"
              alt="微信二维码"
            />
            <div class="foot-left-top-icon" v-html="weixin"></div>
          </a>
          <template v-for="(icon, idx) in icons">
            <div
              v-if="idx !== 5 || (idx === 5 && locale === 'zh')"
              :key="`icon-${idx}`"
              class="foot-left-top-icon"
              @click="jump(iconNames[idx])"
              v-html="icon"
            ></div>
          </template>
        </div>
        <div class="foot-left-bottom">
          COPYRIGHT © CRUST 2021 ALL RIGHTS RESERVED.
        </div>
      </div>
      <div class="foot-right">
        <div class="foot-right-title">{{ $t(`footer.title`) }}</div>
        <div class="mail-wrapper">
          <div class="mail-container">hi@crust.network</div>
          <div>
            <b-button class="btn copy" variant="warning" @click="handleCopy">{{
              $t(`footer.Copy`)
            }}</b-button>
          </div>
        </div>

        <div class="foot-right-link">
          <div
            v-for="(item, i) in items"
            :key="'nav' + i"
            class="foot-right-link-item"
          >
            <div class="foot-right-link-item-title">
              {{ $t(`footer.${titles[i]}`) }}
            </div>
            <div
              v-for="nav in item"
              :key="nav"
              class="foot-right-link-item-subtitle"
              href="javascript:void(0)"
              @click="jump(nav)"
            >
              {{ $t(`footer.${nav}`) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <CookieAccept />
  </div>
</template>

<script>
import IconGithub from "@/assets/svgs/icon-github.svg?raw"
import IconMedium from "@/assets/svgs/icon-medium.svg?raw"
import IconTelegram from "@/assets/svgs/icon-telegram.svg?raw"
import IconTwitter from "@/assets/svgs/icon-twitter.svg?raw"
import IconWeinxin from "@/assets/svgs/icon-weixin.svg?raw"
import IconDiscord from "@/assets/svgs/icon-discord.svg?raw"
import IconDotAsk from "@/assets/svgs/icon-dotask.svg?raw"
import { outerDit } from "@/config/nav-config"
import CookieAccept from "../CookieAccept"

import jumpTo from "~/utils"
export default {
  components: {
    CookieAccept,
  },
  data() {
    return {
      titles: ["Resourcese", "forum", "Developers"],
      items: [
        ["WhitePaper", "EcoWhitePaper", "FAQ", "mediamaterials"],
        ["Twitter", "Telegram", "Discord"],
        ["Crust Bounty", "Crust Grants", "Github"],
      ],
      iconNames: [
        "telegram",
        "medium",
        "twitter",
        "github",
        "discord",
        "dotAsk",
      ],
      icons: [
        IconTelegram,
        IconMedium,
        IconTwitter,
        IconGithub,
        IconDiscord,
        IconDotAsk,
      ],
      weixin: IconWeinxin,
    }
  },
  computed: {
    locale() {
      return this.$store.state.locale
    },
  },
  methods: {
    handleCopy() {
      this.$copyText("hi@crust.network")
        .then(() => {
          this.$bvToast.toast(this.$t("footer.Success"), {
            title: false,
            toaster: "b-toaster-top-center",
            solid: true,
            appendToast: false,
            variant: "success",
            autoHideDelay: 2000,
          })
        })
        .catch(() => {
          console.log("error")
        })
    },
    jump(name) {
      if (["FAQ", "/", "Cooperation"].includes(name)) {
        return this.$router.push(name.toLowerCase())
      } else if (name === "WhitePaper" || name === "EcoWhitePaper") {
        name = name.toLowerCase()
        if (this.$store.state.locale === "en") {
          name += "_en"
        }
        return window.open(`${outerDit.pdfBucket}${name}.pdf`, "_blank")
      } else {
        jumpTo(name)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1200px) {
  .foot {
    background: url("~/assets/images/foot-back.png");
    background-size: 100% 100%;
    background-color: $secondary;

    .container {
      height: 710px;
      padding-bottom: 60px;
      display: flex;
      align-items: stretch;
      color: #ffffff;
      @media (min-width: 1270px) {
        max-width: 1270px;
      }
      .foot-left {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: flex-end;
        align-items: center;

        .foot-left-top {
          width: 405px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;

          .foot-left-top-icon {
            cursor: pointer;
          }
        }

        .foot-left-bottom {
          font-family: InterV;
          font-size: 16px;
          color: #ffffff;
          line-height: 20px;
        }
      }

      .foot-right {
        max-width: 514px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .mail-wrapper {
          display: flex;
          flex-wrap: nowrap;
          margin-bottom: 70px;
          .mail-container {
            padding-left: 20px;
            padding-right: 20px;
            margin-right: 15px;
            color: #41485d;
            min-width: 400px;
            font-size: 18px;
            line-height: 42px;
            background-color: #fff;
            border-radius: 4px;
            font-weight: 400;
          }
          .copy {
            width: 100px;
          }
        }

        .foot-right-title {
          font-family: InterV_Semi-Bold;
          font-size: 48px;
          color: #ff6400;
          letter-spacing: 0;
          text-align: left;
          line-height: 60px;
          margin-bottom: 24px;
        }

        .foot-right-subtitle {
          font-family: InterV;
          font-size: 16px;
          color: #ffffff;
          text-align: left;
          line-height: 20px;
          margin-bottom: 30px;
        }

        .foot-right-email {
          width: 367px;
          height: 53px;
          border: 1px solid #ffffff;
          border-radius: 8px;
          margin-bottom: 39px;
        }

        .foot-right-link {
          display: flex;
          justify-content: space-between;

          .foot-right-link-item-title {
            font-family: InterV;
            font-size: 24px;
            color: #ffffff;
            letter-spacing: -0.58px;
            margin-bottom: 13px;
          }

          .foot-right-link-item-subtitle {
            font-family: InterV;
            font-size: 16px;
            color: #ffffff;
            letter-spacing: 0;
            margin-top: 20px;
            cursor: pointer;
          }
        }
      }
    }
  }
  a.weixin {
    position: relative;
  }

  .weixin img.qrcode {
    position: absolute;
    z-index: 99;
    top: -135px;
    right: -28px;
    width: 7.5rem;
    max-width: none;
    height: 7.5rem;
    transform: scale(0);
    transform-origin: top right;
    opacity: 0;
    // border: .3125rem solid #0085ba;
    border-radius: 0.25rem;
    -webkit-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .weixin:hover img.qrcode {
    transform: scale(1);
    opacity: 1;
  }
}

@media screen and (max-width: 1200px) {
  .foot {
    background: url("~/assets/images/foot-back-mobile.png");
    background-size: 100% 100%;
    background-color: $secondary;

    a.weixin {
      position: relative;
    }

    .weixin img.qrcode {
      position: absolute;
      z-index: 99;
      top: -135px;
      right: -28px;
      width: 7.5rem;
      max-width: none;
      height: 7.5rem;
      transform: scale(0);
      transform-origin: top right;
      opacity: 0;
      // border: .3125rem solid #0085ba;
      border-radius: 0.25rem;
      -webkit-transition: all 0.4s ease-in-out;
      -o-transition: all 0.4s ease-in-out;
      transition: all 0.4s ease-in-out;
    }

    .weixin:hover img.qrcode {
      transform: scale(1);
      opacity: 1;
    }

    .container {
      padding-bottom: 30px;
      display: flex;
      color: #ffffff;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: flex-start;
      height: 578px;

      .foot-left {
        display: flex;
        flex-direction: column;
        flex-grow: 0;
        justify-content: flex-end;
        align-items: center;

        .foot-left-top {
          width: 203px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 17px;

          .foot-left-top-icon {
            cursor: pointer;
            transform: scale(0.5);
          }
        }

        .foot-left-bottom {
          font-family: InterV;
          font-size: 8px;
          color: #ffffff;
          text-align: center;
          line-height: 10px;
        }
      }

      .foot-right {
        max-width: 514px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;

        .mail-wrapper {
          display: flex;
          flex-wrap: nowrap;
          margin-bottom: 60px;
          .mail-container {
            padding-left: 10px;
            padding-right: 10px;
            margin-right: 15px;
            color: #41485d;
            min-width: 180px;
            font-size: 14px;
            line-height: 42px;
            background-color: #fff;
            border-radius: 4px;
            font-weight: 400;
          }
          .copy {
            width: 100px;
          }
        }

        .foot-right-title {
          font-family: InterV_Semi-Bold;
          font-size: 24px;
          color: #ff6400;
          letter-spacing: 0;
          text-align: center;
          line-height: 30px;
          margin-bottom: 19px;
        }

        .foot-right-subtitle {
          font-family: InterV;
          font-size: 10px;
          color: #ffffff;
          text-align: left;
          line-height: 14px;
          margin-bottom: 10px;
        }

        .foot-right-email {
          width: 184px;
          height: 27px;
          border: 1px solid #ffffff;
          border-radius: 8px;
          margin-bottom: 26px;
        }

        .foot-right-link {
          display: flex;
          justify-content: space-between;
          margin-bottom: 25px;

          .foot-right-link-item-title {
            font-family: InterV;
            font-size: 12px;
            color: #ffffff;
            letter-spacing: -0.29px;
            margin-bottom: 4px;
          }

          .foot-right-link-item-subtitle {
            font-family: InterV;
            font-size: 10px;
            color: #ffffff;
            letter-spacing: 0;
            margin-top: 8px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
