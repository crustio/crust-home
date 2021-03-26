<template>
  <div class="container-fluid foot">
    <div class="container">
      <div class="foot-left">
        <div class="foot-left-top">
          <template v-for="(icon, idx) in icons">
            <div
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
        <div class="foot-right-title">{{ $t(`footer.Subscrible`) }}</div>
        <div class="foot-right-subtitle">{{ $t(`footer.subtitle`) }}</div>
        <div class="foot-right-email"></div>
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
  </div>
</template>

<script>
import IconGithub from "@/assets/svgs/icon-github.svg?raw"
import IconMedium from "@/assets/svgs/icon-medium.svg?raw"
import IconTelegram from "@/assets/svgs/icon-telegram.svg?raw"
import IconTwitter from "@/assets/svgs/icon-twitter.svg?raw"
import IconWeinxin from "@/assets/svgs/icon-weixin.svg?raw"
import { outerDit } from "@/config/nav-config"
import jumpTo from "~/utils"
export default {
  components: {},
  data() {
    return {
      titles: ["Resourcese", "forum", "JoinUs"],
      items: [
        ["WhitePaper", "EcoWhitePaper", "FAQ"],
        ["Twitter", "Telegram"],
        ["Cooperation", "Github"],
      ],
      iconNames: ["weixin", "telegram", "medium", "twitter", "github"],
      icons: [IconWeinxin, IconTelegram, IconMedium, IconTwitter, IconGithub],
    }
  },
  methods: {
    handleCopy() {
      this.$copyText("CrustNetwork@gmail.com")
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
}

@media screen and (max-width: 1200px) {
  .foot {
    background: url("~/assets/images/foot-back-mobile.png");
    background-size: 100% 100%;
    background-color: $secondary;

    .container {
      padding-bottom: 30px;
      display: flex;
      color: #ffffff;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: flex-start;
      height: 520px;

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

        .foot-right-title {
          font-family: InterV_Semi-Bold;
          font-size: 24px;
          color: #ff6400;
          letter-spacing: 0;
          text-align: left;
          line-height: 30px;
          margin-bottom: 9px;
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
