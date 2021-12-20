<template>
  <div class="what-crust">
    <div
      v-if="showVideo"
      class="m-video-container"
      @click="handleCloseDemoVideo"
    >
      <dVideo :source="videoLink" />
    </div>
    <div class="what-block">
      <div class="what-title" v-html="$t('crustInfo.title')"></div>
      <div class="what-subTitle" v-html="$t('crustInfo.subTitle')"></div>
      <div class="what-button" @click="handleDemoVideoClick">
        {{ $t("crustInfo.button") }}<span>▶</span>
      </div>
      <div class="what-info">
        <div class="what-item" v-for="(item, index) in infoData" :key="index">
          <div class="what-item-icon">
            <!-- <div v-html="item.icon"></div> -->
            <div class="what-item-icon-bg">
              <img :src="item.icon" alt="" />
            </div>
          </div>
          <div class="what-item-subTitle">
            {{ $t(`crustInfo.${item.subTitle}`) }}
          </div>
          <div class="what-item-title">{{ $t(`crustInfo.${item.title}`) }}</div>
          <div
            class="what-item-info"
            v-html="$t(`crustInfo.${item.info}`)"
          ></div>
        </div>
      </div>
      <div class="what-bg">
        <div class="what-bg-button-yellow" @click="routeTo('github')">
          <img src="../../../assets/img/main/github-w.png" alt="" />
          {{ $t("crustInfo.github") }}
        </div>
        <div class="what-bg-button-black" @click="routerUrl()">
          {{ $t("crustInfo.tech") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jumpTo from "../../../utils"
import github from "@/assets/img/8-foot/github.svg?raw"
import dVideo from "../../decentralized/dVideo"
export default {
  computed: {
    videoLink() {
      return this.$store.state.locale === "en"
        ? "https://ipfs-hk.decoo.io/ipfs/QmdVYW9Dpa26bjZowJQJb5YVtTyodianLn9TCcXeNeixf4?filename=English new.MP4"
        : "https://ipfs-hk.decoo.io/ipfs/QmTCcWgLFAU9Y8uK7oMonWBEh9nvscpS6rfAtKaRheZVmG"
    },
  },
  components: { dVideo },
  data() {
    return {
      github: github,
      showVideo: false,
      infoData: [
        {
          icon: require(`../../../assets/img/2-What is Crust-icon/Privacy.svg`),
          title: "title1",
          subTitle: "subTitle1",
          info: "subInfo1",
        },
        {
          icon: require(`../../../assets/img/2-What is Crust-icon/Decentralization.svg`),
          title: "title2",
          subTitle: "subTitle2",
          info: "subInfo2",
        },
        {
          icon: require(`../../../assets/img/2-What is Crust-icon/Assurance.svg`),
          title: "title3",
          subTitle: "subTitle3",
          info: "subInfo3",
        },
      ],
    }
  },
  methods: {
    handleDemoVideoClick() {
      this.showVideo = true
    },
    handleCloseDemoVideo() {
      this.showVideo = false
    },
    routeTo(url) {
      jumpTo(url)
    },
    routerUrl() {
      let url =
        this.$store.state.locale === "en"
          ? "https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/whitepapers/whitepaper_en.pdf"
          : "https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/whitepapers/whitepaper.pdf"
      window.open(url)
    },
  },
}
</script>

<style lang="scss">
@media screen and (max-width: 1200px) {
  .what-crust {
    background: #fdf7f3;
    .what-block {
      padding-top: 72px;
      margin: 0 auto;
      // width: 1240px;
      // height: 1247px;
      width: 100%;
      .what-title {
        margin: 0px auto 30px;
        font-size: 60px;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #1f1f1f;
        text-align: center;
      }
      .what-subTitle {
        margin: 0 auto;
        width: 100%;
        padding: 0 20px;
        font-size: 18px;
        font-family: Montserrat, "Source Han Sans CN";
        font-weight: 400;
        color: #1f1f1f;
        line-height: 3em;
        text-align: center;
      }
      .what-button {
        margin: 54px auto 132px;
        width: 90%;
        height: 100px;
        line-height: 100px;
        background: #fc7823;
        border-radius: 8px;
        text-align: center;
        font-size: 18px;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #ffffff;
        span {
          margin-left: 15px;
          font-size: 10px;
        }
      }
      .what-info {
        // display: flex;
        // justify-content: space-between;
        .what-item {
          // width:100%;
          // height: 550px;
          background: #ffffff;
          box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.05);
          border-radius: 10px;
          &:hover {
            .what-item-icon-bg {
              background: radial-gradient(
                circle,
                rgba(255, 255, 255, 0.2),
                rgba(255, 255, 255, 0.2),
                rgba(252, 120, 35, 0.2)
              );
              border: 1px solid rgba(252, 120, 35, 0.2);
              box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.1);
              border-radius: 50%;
            }
            .what-item-title {
              color: #fc7823;
              &::after {
                background: #fc7823;
              }
            }
          }
          .what-item-icon {
            .what-item-icon-bg {
              width: 120px;
              height: 120px;
              background: #ffffff;
              box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.1);
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            margin: -60px auto 40px;
            width: 120px;
            height: 120px;
            background: #ffffff;
            box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.1);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            img {
              width: 50px;
              height: 50px;
            }
            svg {
              width: 50px;
              height: 50px;
            }
          }
          .what-item-subTitle {
            margin: 0 auto;
            text-align: center;
            height: 16px;
            font-size: 16px;
            font-family: Montserrat, "Source Han Sans CN";
            font-weight: 400;
            color: #1f1f1f;
            line-height: 16px;
          }
          .what-item-title {
            margin: 16px auto 82px;
            width: 343px;
            height: 88px;
            font-size: 40px;
            font-family: "Montserrat-blod", "Source Han Sans CN-blod";
            font-weight: bold;
            color: #1f1f1f;
            line-height: 48px;
            position: relative;
            &::after {
              position: absolute;
              width: 56px;
              height: 3px;
              background: #cccccc;
              border-radius: 2px;
              bottom: -22px;
              left: 50%;
              margin-left: -28px;
              content: "";
            }
          }
          .what-item-info {
            margin: 0 auto;
            height: 205px;
            font-size: 13px;
            font-family: Montserrat, "Source Han Sans CN";
            font-weight: 400;
            color: #666666;
            line-height: 20px;
            text-align: center;
          }
        }
      }
      .what-bg {
        margin-top: 72px;
        width: 1240px;
        height: 120px;
        // background: url("../../../assets/img/12/bg.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .what-bg-button-yellow {
          text-align: center;
          margin: 0 20px;
          width: 280px;
          height: 50px;
          line-height: 50px;
          background: #fc7823;
          border-radius: 8px;
          font-size: 18px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #ffffff;
          img {
            width: 21px;
            height: 21px;
            margin-right: 10px;
          }
          &:hover {
            background: #ff6400;
          }
        }
        .what-bg-button-black {
          text-align: center;
          margin: 0 20px;
          width: 282px;
          height: 52px;
          line-height: 50px;
          border: 2px solid #ffffff;
          border-radius: 8px;
          font-size: 18px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #ffffff;
          &:hover {
            background: #ff6400;
            color: #fff;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1200px) {
  .what-crust {
    background: #fdf7f3;
    .what-block {
      padding-top: 82px;
      margin: 0 auto;
      width: 1140px;
      // height: 1247px;
      .what-title {
        margin: 0px auto 30px;
        line-height: 38px;
        height: 38px;
        font-size: 48px;
        font-family: "Montserrat-blod", "Source Han Sans CN-blod";
        font-weight: bold;
        color: #1f1f1f;
        text-align: center;
      }
      .what-subTitle {
        margin: 0 auto;
        width: 1130px;
        height: 78px;
        text-align: center;
        font-family: Montserrat, "Source Han Sans CN";
        font-size: 16px;
        font-weight: 400;
        color: #666666;
        line-height: 24px;
      }
      .what-button {
        cursor: pointer;
        margin: 39px auto 120px;
        width: 180px;
        height: 50px;
        background: #fc7823;
        border-radius: 8px;
        line-height: 50px;
        background: #fc7823;
        border-radius: 8px;
        text-align: center;
        color: #ffffff;
        font-size: 18px;
        font-family: Montserrat, "Source Han Sans CN";
        font-weight: 400;
        span {
          margin-left: 10px;
          font-size: 23px;
        }
        &:hover {
          background: #ff6400;
        }
      }
      .what-info {
        display: flex;
        justify-content: center;
        .what-item {
          &:nth-child(2) {
            margin: 0 20px;
          }
          cursor: pointer;
          width: 360px;
          height: 360px;
          background: #ffffff;
          box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.05);
          border-radius: 10px;
          &:hover {
            .what-item-icon {
              .what-item-icon-bg {
                background: radial-gradient(
                  circle,
                  rgba(255, 255, 255, 0.2),
                  rgba(255, 255, 255, 0.2),
                  rgba(252, 120, 35, 0.2)
                );
                border: 1px solid rgba(252, 120, 35, 0.2);
                box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.1);
                border-radius: 50%;
              }
            }

            .what-item-title {
              color: #fc7823;
              &::after {
                background: #fc7823;
              }
            }
          }
          .what-item-icon {
            .what-item-icon-bg {
              width: 80px;
              height: 80px;
              background: #ffffff;
              box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.1);
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            margin: -40px auto 32px;
            width: 80px;
            height: 80px;
            background: #ffffff;
            box-shadow: 0px 4px 9px 1px rgba(252, 120, 35, 0.1);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            svg,
            img {
              width: 30px;
              height: 30px;
              // background-color: #fff;
            }
          }
          .what-item-subTitle {
            margin: 0 auto;
            text-align: center;
            height: 12px;
            font-size: 12px;
            font-family: Montserrat, "Source Han Sans CN";
            font-family: Source Han Sans CN;
            font-weight: 400;
            color: #999999;
            line-height: 12px;
          }
          .what-item-title {
            margin: 16px auto 59px;

            height: 21px;
            font-size: 22px;
            font-family: Montserrat-blod, "Source Han Sans CN-blod";
            font-weight: bold;
            color: #1f1f1f;
            line-height: 21px;

            width: 343px;
            position: relative;
            text-align: center;
            &::after {
              position: absolute;
              width: 56px;
              height: 3px;
              background: #cccccc;
              border-radius: 2px;
              bottom: -25px;
              left: 50%;
              margin-left: -28px;
              content: "";
            }
          }
          .what-item-info {
            margin: 0 auto;
            width: 344px;
            font-size: 13px;
            font-family: Montserrat, "Source Han Sans CN";
            font-weight: 400;
            color: #666666;
            line-height: 20px;
            text-align: center;
          }
        }
      }
      .what-bg {
        margin-top: 88px;
        width: 1140px;
        height: 120px;
        // background: url("../../../assets/img/12/bg.png") no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        .what-bg-button-yellow {
          cursor: pointer;
          text-align: center;
          margin: 0 20px;
          width: 280px;
          height: 50px;
          line-height: 50px;
          background: #fc7823;
          border-radius: 8px;
          font-size: 18px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          div {
            display: inline-block;
            width: 21px;
            height: 21px;
          }
          img {
            width: 21px;
            height: 21px;
            margin-right: 10px;
          }
          &:hover {
            background: #ff6400;
          }
        }
        .what-bg-button-black {
          cursor: pointer;
          text-align: center;
          margin: 0 20px;
          width: 280px;
          height: 50px;
          line-height: 50px;
          border: 2px solid #fc7823;
          border-radius: 8px;
          font-size: 18px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #fc7823;
          &:hover {
            &:hover {
              background: #fc7823;
              border: 2px solid #fc7823;
              color: #fff;
            }
          }
        }
      }
    }
  }
}
.m-video-container {
  position: fixed;
  z-index: 99999999;
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
</style>