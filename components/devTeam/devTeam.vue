<template>
  <div class="container-fluid all-c no-padding">
    <div class="container" style="height: 500px; position: relative">
      <div class="left-c full-width">
        <span class="dev-team">{{ $t("decentralized.dev-team") }}</span>
        <span class="dev-team-intro" :class="getZhcnCss()">{{ $t("decentralized.dev-team-intro") }}</span>
        <button class="btn-custom apply-now" @click="handleApplyDevTeamClick">
          {{ $t("button.learnMore") }}
        </button>
      </div>
      <div class="right-c full-width">
        <span class="dev-team" :class="getZhcnCss()">{{ $t("decentralized.foundation") }}</span>
        <span class="dev-team-intro" :class="getZhcnCss()">{{ $t("decentralized.foundation-intro") }}</span>
        <button class="btn-custom apply-now" @click="handleApplyFoundationClick">
          {{ $t("button.learnMore") }}
        </button>
      </div>
    </div>



  </div>
</template>
<script>
import { outerDit } from "@/config/nav-config"
export default {
  name: "DevTeam",
  components: {},
  data() {
    return {}
  },
  methods: {
    handleApplyDevTeamClick() {
      window.open(
        outerDit["dev team"],
        "_blank"
      )
    },
    handleApplyFoundationClick() {
      window.open(
        outerDit["crust grants"],
        "_blank"
      )
    },
    getZhcnCss() {
      if (this.$store.state.locale === "en") {
        return ''
      } else {
        return 'zh-cn'
      }
    },
  }
}
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1200px) {

  .all-c {
    background-image: url("~/assets/images/back-devteam.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    height: 500px;

    .container {
      @media (min-width: 1270px) {
        max-width: 1270px;
      }
    }

    &.no-padding {
      padding-left: 0;
      padding-right: 0;
    }
    .left-c {
      display: flex;
      flex-direction: column;
      &.full-width {
        width: 100%;
        height: 100%;
      }
      .dev-team {
        margin-top: 42px;
        font-size: 36px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 56px;
        margin-bottom: 24px;
      }
      .dev-team-intro {
        font-size: 16px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 22px;
        max-width: 642px;
        margin-bottom: 50px;
        &.zh-cn {
          line-height: 24px;
        }
      }
      .apply-now {
        width: 200px;
        height: 40px;
        border-radius: 26px;
        border: 2px solid #FFFFFF;
        font-size: 16px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        line-height: 19px;
        background: #FC7823;
        &:hover {
          background-color: white;
        }
      }
      position: absolute;
      clip-path: polygon(0 0, 90% 0, 10% 100%, 0 99%);
    }
    .right-c {
      display: flex;
      flex-direction: column;
      text-align: right;
      &.full-width {
        width: 100%;
        height: 100%;
      }
      .apply-now {
        width: 200px;
        height: 40px;
        border-radius: 26px;
        border: 2px solid #FFFFFF;
        font-size: 16px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        line-height: 19px;
        position: absolute;
        right: 15px;
        top: 195px;
        background: #1f1f1f;
        &:hover {
          background-color: white;
        }
      }
      .dev-team-intro {
        font-size: 16px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 22px;
        max-width: 47%;
        margin-bottom: 24px;
        position: absolute;
        top: 288px;
        right: 15px;
        white-space: break-spaces;
        &.zh-cn {
          line-height: 24px;
        }
      }
      .dev-team {
        font-size: 36px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 56px;
        margin-bottom: 24px;
        position: absolute;
        right: 15px;
        top: 410px;
      }
      position: absolute;
      clip-path: polygon(90% 0, 100% 0%, 100% 99%, 10% 100%);
    }
  }
}
@media screen and (max-width: 1200px) {
  .all-c {
    position: relative;
    height: 506px;
    background-image: url("~/assets/images/back-devteam-mobile.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    &.no-padding {
      padding-left: 0;
      padding-right: 0;
    }
    .left-c {
      display: flex;
      flex-direction: column;
      &.full-width {
        width: calc(100% - 30px);
        height: 100%;
      }
      .dev-team {
        width: 100%;
        height: 56px;
        font-size: 14px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 56px;
        margin-top: 10px;
      }
      .dev-team-intro {
        width: 270px;
        height: 75px;
        font-size: 12px;
        font-family: InterV;
        color: #FFFFFF;
        line-height: 15px;
        margin-bottom: 32px;
        &.zh-cn {
          width: 219px;
          margin-bottom: -3px;
          margin-top: 10px;
          line-height: 18px;
        }
      }
      .apply-now {
        width: 128px;
        height: 34px;
        border-radius: 26px;
        border: 2px solid #FFFFF0;
        font-size: 12px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 15px;
        background: #FC7823;
        &:hover {
          background-color: white;
          color: black;
        }
      }
      position: absolute;
    }
    .right-c {
      display: flex;
      flex-direction: column;
      text-align: right;
      &.full-width {
        width: calc(100% - 30px);
        height: 100%;
      }
      .apply-now {
        width: 128px;
        height: 34px;
        border-radius: 26px;
        border: 2px solid #FFFFF0;
        font-size: 12px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 15px;
        position: absolute;
        right: 0;
        top: 449px;
        background: #1f1f1f;
        &:hover {
          background-color: white;
          color: black;
        }
      }
      .dev-team-intro {
        font-size: 12px;
        font-family: InterV;
        color: #FFFFFF;
        line-height: 15px;
        max-width: 270px;
        position: absolute;
        top: 321px;
        right: 0;
        &.zh-cn {
          max-width: 236px;
          top: 362px;
          line-height: 18px;
        }
      }
      .dev-team {
        font-size: 14px;
        height: 56px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 56px;
        margin-bottom: 24px;
        position: absolute;
        right: 0;
        top: 257px;
        &.zh-cn {
          top: 293px;
        }
      }
      position: absolute;
    }
  }
}
</style>
