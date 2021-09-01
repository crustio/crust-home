<template>
  <div class="container-fluid all-c no-padding">
    <div class="container" style="height: 100%; position: relative">
      <div class="left-c full-width">
        <span class="dev-team">{{ $t("decentralized.dev-team") }}</span>
        <span
          class="dev-team-intro"
          :class="getZhcnCss()"
          v-html="$t('decentralized.dev-team-intro')"
        ></span>
        <TeamWrapper />
      </div>
      <div class="right-c full-width">
        <div>
          <p class="dev-team" :class="getZhcnCss()">
            {{ $t("decentralized.foundation") }}
          </p>
          <p class="dev-team-intro" :class="getZhcnCss()">
            {{ $t("decentralized.foundation-intro1") }}(&nbsp;<a
              href="https://decloudf.com/"
              class="link"
              target="_blank"
              >Decentralized Cloud Foundation</a
            >&nbsp;){{ $t("decentralized.foundation-intro2") }}
          </p>
          <button
            class="btn-custom apply-now"
            @click="handleApplyFoundationClick"
          >
            {{ $t("button.applyForGrants") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { outerDit } from "@/config/nav-config"
import TeamWrapper from "./TeamWrapper"
export default {
  name: "DevTeam",
  components: {
    TeamWrapper,
  },
  data() {
    return {}
  },
  methods: {
    handleApplyDevTeamClick() {
      window.open(outerDit.github, "_blank")
    },
    handleApplyFoundationClick() {
      window.open("https://decloudf.com/#growth", "_blank")
    },
    getZhcnCss() {
      if (this.$store.state.locale === "en") {
        return ""
      } else {
        return "zh-cn"
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.link {
  color: #fc7823;
  &:hover {
    color: #ff6b00;
  }
}
@media screen and (min-width: 1200px) {
  .all-c {
    background-image: url("~/assets/images/back-devteam.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    position: relative;
    height: 540px;

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
        color: #ffffff;
        line-height: 56px;
        margin-bottom: 24px;
      }
      .dev-team-intro {
        font-size: 16px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        color: #ffffff;
        line-height: 22px;
        max-width: 642px;
        margin-bottom: 50px;
        &.zh-cn {
          line-height: 24px;
        }
      }
      .apply-now {
        width: 300px;
        height: 40px;
        border-radius: 26px;
        border: 2px solid #ffffff;
        font-size: 16px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        line-height: 19px;
        background: #fc7823;
        &:hover {
          background-color: white;
        }
      }
      position: absolute;
      clip-path: polygon(0 0, 60% 0, 40% 100%, 0% 100%);
      background-color: rgb(252, 120, 35);
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
        width: 300px;
        height: 40px;
        border-radius: 26px;
        border: 2px solid #ffffff;
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
        color: #ffffff;
        line-height: 22px;
        max-width: 50%;
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
        color: #ffffff;
        line-height: 56px;
        margin-bottom: 24px;
        position: absolute;
        right: 15px;
        top: 410px;
      }
      position: absolute;
      clip-path: polygon(100% 0, 60% 0, 40% 100%, 100% 100%);
      background-color: #1f1f1f;
    }
  }
}
@media screen and (max-width: 1200px) {
  .all-c {
    position: relative;
    height: 660px;
    background-image: url("~/assets/images/back-devteam-mobile.png");
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
        color: #ffffff;
        line-height: 56px;
        margin-top: 10px;
      }
      .dev-team-intro {
        height: 115px;
        font-size: 12px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        color: #ffffff;
        line-height: 15px;
        margin-bottom: 5px;
      }
      .apply-now {
        width: 128px;
        height: 34px;
        border-radius: 26px;
        border: 2px solid #fffff0;
        font-size: 12px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        color: #ffffff;
        line-height: 15px;
        background: #fc7823;
        &:hover {
          background-color: white;
          color: black;
        }
      }
      position: absolute;
    }
    .right-c {
      display: flex;
      flex-direction: column-reverse;
      text-align: right;
      &.full-width {
        height: 640px;
      }
      .apply-now {
        padding: 0 20px;
        height: 34px;
        border-radius: 26px;
        border: 2px solid #fffff0;
        font-size: 12px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        color: #ffffff;
        line-height: 15px;
        background: #1f1f1f;
        &:hover {
          background-color: white;
          color: black;
        }
      }
      .dev-team-intro {
        font-size: 12px;
        font-family: InterV;
        color: #ffffff;
        line-height: 15px;
      }
      .dev-team {
        font-size: 14px;
        font-family: InterV_Semi-Bold, InterV_Semi;
        font-weight: bold;
        color: #ffffff;
      }
    }
  }
}
</style>
