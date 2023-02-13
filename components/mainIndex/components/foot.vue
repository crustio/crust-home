<template>
  <div>
    <div class="foot-crust">
      <div class="foot-crust-block">
        <div class="foot-nav">
          <div class="foot-nav-logo">
            <img src="../../../assets/img/main/logo-B@3x.png" alt="" />
          </div>
          <div
            class="foot-nav-item"
            v-for="(item, index) in navData"
            :key="index"
          >
            <div class="foot-nav-item-title">
              {{ $t(`foot.${item.title}`) }}
            </div>
            <div class="foot-nav-item-list">
              <div
                class="foot-nav-item-lis-item"
                v-for="(item1, index1) in item.children"
                :key="index1"
                @click="routeTo(item1)"
              >
                {{ $t(`foot.${item1.title}`) }}
              </div>
            </div>
          </div>
        </div>

        <div class="foot-mobile">
          </div>

        <div class="foot-copy">
          <div class="foot-copy-txt foot-pc">
            {{
              `Copyright © Decentralized Cloud Foundation ${new Date().getFullYear()} All Rights Reserved`
            }}
          </div>
          <div class="foot-copy-txt foot-copy-txt-top foot-mobile">
            Copyright © Decentralized Cloud Foundation<br />
            {{ `${new Date().getFullYear()} All Rights Reserved` }}
          </div>
          <div class="foot-copy-img">
            <!-- <div v-html="item" v-for="item in icons" :key="item"></div> -->

            <div
              class="foot-copy-img-logo"
              v-for="item in $store.state.locale === 'zh' ? 6 : 5"
              :key="item"
              @click="routeLogo(item - 1)"
            ></div>
          </div>
          <div class="foot-copy-txt foot-pc">{{ $t(`foot.privacy`) }}</div>
          <div class="foot-copy-txt foot-pc">{{ $t(`foot.Terms`) }}</div>

          <div class="foot-mobile">
            <div class="footmobile-text">{{ $t(`foot.privacy`) }}</div>
            <div class="foot-point"></div>
            <div class="footmobile-text">{{ $t(`foot.Terms`) }}</div>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import discord from "@/assets/img/8-foot/discord.svg?raw"
import github from "@/assets/img/8-foot/github.svg?raw"
import subscribe from "@/assets/img/8-foot/subscribe.svg?raw"
import telegram from "@/assets/img/8-foot/telegram.svg?raw"
import twitter from "@/assets/img/8-foot/twitter.svg?raw"
import WeChat from "@/assets/img/8-foot/WeChat.svg?raw"
export default {
  data() {
    return {
      icons: [discord, github, subscribe, telegram, twitter, WeChat],
      listImg: [{}],
      urls: [
        "https://t.me/CrustNetwork",
        "https://medium.com/@CrustNetwork",
        "https://twitter.com/CrustNetwork",
        "https://github.com/crustio",
        "https://discord.gg/Jbw2PAUSCR",
        "https://www.coinask.io/n/crust",
      ],

      navData: [
        {
          title: "title1",
          children: [
            {
              title: "list1",
              down: true,
              url: "https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/whitepapers/whitepaper_en.pdf",
              zh_url:
                "https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/whitepapers/whitepaper.pdf",
            },
            {
              title: "list2",
              down: true,
              url: "https://crustipfs.live/ipfs/QmXUhqUgZGVJsWmV4TCDePwWtpJvEAx7rvNCjuNKaEUHzk",
              zh_url:
                "https://crustipfs.live/ipfs/QmPWKagEqZxkspDK6KPebWQdpG55TDyiNQi5EJ1bRgo4Z7",
            },
            {
              title: "list3",
              FAQ: true,
              name: "FAQ",
            },
            {
              title: "list4",
              url: "https://crustipfs.live/ipfs/QmcFxwu2mocMN6Vvqfxf1KWZ7gWASrj2mMxwedz1VurVxY",
            },
          ],
        },
        {
          title: "title2",
          children: [
            {
              title: "community1",
              url: "https://twitter.com/CrustNetwork",
            },
            {
              title: "community2",
              url: "https://t.me/CrustNetwork",
            },
            {
              title: "community3",
              url: "https://discord.gg/Jbw2PAUSCR",
            },
          ],
        },
        {
          title: "title3",
          children: [
            {
              title: "dev1",
              url: "https://gitcoin.co/crustio",
            },
            {
              title: "dev2",
              url: "https://github.com/crustio/Crust-Grants-Program",
            },
            {
              title: "dev3",
              url: "https://github.com/crustio",
            },
          ],
        },
        {
          title: "title4",
          children: [
            {
              title: "email",
              copy: true,
            }
          ],
        },
      ],
    }
  },
  methods: {
    routeLogo(index) {
      window.open(this.urls[index], "_blank")
    },
    routeTo(e) {
      if (e.down) {
        let url = this.$store.state.locale === "en" ? e.url : e.zh_url
        window.open(url)
      } else if (e.copy) {
        this.handleCopy()
      } else {
        if (e.FAQ) {
          return this.$router.push("faq")
        }

        window.open(e.url, "_blank")
      }
    },
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
  },
}
</script>

<style lang="scss">
@media screen and (max-width: 1140px) {
  .foot-pc {
    display: none !important;
  }
  .foot-crust {
    background: #fdede2;
    .foot-crust-block {
      padding-top: 2.67rem;
      margin: 0 auto;
      .foot-nav {
        width: 23.33rem;
        margin: 0 auto;
        border-bottom: 0.17rem solid #dfd9d9;
        padding-bottom: 3rem;
        .foot-nav-logo {
          display: none;
          width: 327px;
          padding-left: 26px;
          img {
            width: 187px;
            height: 46px;
          }
        }
        .foot-nav-item {
          margin-bottom: 1.17rem;
          .foot-nav-item-title {
            font-size: 1rem;
            font-family: "Montserrat-blod", "Source Han Sans CN-blod";
            font-weight: bold;
            color: #1f1f1f;
            line-height: 1rem;
            margin-bottom: 1.42rem;
          }
          .foot-nav-item-list {
            .foot-nav-item-lis-item {
              cursor: pointer;
              height: 0.83rem;
              font-size: 0.83rem;
              font-family: Montserrat, "Source Han Sans CN";
              font-weight: 400;
              color: #1f1f1f;
              line-height: 0.83rem;
              margin-bottom: 0.83rem;
              &:active {
                text-decoration: underline;
              }
            }
          }
        }
      }
      .foot-copy {
        padding: 1.17rem 0 17.42rem;
        .foot-copy-txt {
          // width: 17rem;
          font-size: 0.75rem;
          font-size: 12px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #666666;
          line-height: 1rem;
          // margin: 0 auto;
          text-align: center;
        }
        .foot-copy-txt-top {
          justify-content: center !important;
        }
        .foot-copy-img {
          width: 17rem;
          margin: 1.27rem auto 2rem;
          display: flex;
          justify-content: center;
          .foot-copy-img-logo {
            flex-basis: 2rem;
            flex-shrink: 0;
            height: 1.62rem;
            margin: 0 0.625rem;
            cursor: pointer;
            //  &:nth-child(1) {
            //     background: url("../../../assets/img/main/WeChat@3x.png")

            //     no-repeat;
            //       opacity: 0.7;
            //   background-size: 100% 100%;
            //   &:hover {
            //      opacity: 1;
            //   }
            // }
            &:nth-child(1) {
              background: url("../../../assets/img/8-foot/telegram.svg")
                no-repeat;
              opacity: 0.7;
              background-size: 100% 100%;
              &:active {
                opacity: 1;
              }
            }
            &:nth-child(2) {
              background: url("../../../assets/img/8-foot/medium.svg") no-repeat;
              opacity: 0.7;
              background-size: 100% 100%;
              &:active {
                opacity: 1;
              }
            }
            &:nth-child(3) {
              background: url("../../../assets/img/8-foot/twitter.svg")
                no-repeat;
              opacity: 0.7;
              background-size: 100% 100%;
              &:active {
                opacity: 1;
              }
            }
            &:nth-child(4) {
              background: url("../../../assets/img/8-foot/github.svg") no-repeat;
              opacity: 0.7;
              background-size: 100% 100%;
              &:active {
                opacity: 1;
              }
            }
            &:nth-child(5) {
              background: url("../../../assets/img/8-foot/discord.svg")
                no-repeat;
              opacity: 0.7;
              background-size: 100% 100%;
              &:active {
                opacity: 1;
              }
            }
            &:nth-child(6) {
              background: url("../../../assets/img/8-foot/coinask.svg")
                no-repeat;
              opacity: 0.7;
              background-size: 100% 100%;
              &:active {
                opacity: 1;
              }
            }
          }
          img {
            width: 30px;
            height: 26px;
            margin: 0 20px;
          }
          svg {
            width: 30px;
            height: 26px;
            margin: 0 20px;
          }
        }
        .foot-mobile {
          width: 23.33rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 auto;
          .foot-point {
            width: 0.17rem;
            height: 0.17rem;
            background: #666666;
            border-radius: 50%;
          }
          .footmobile-text {
            font-size: 0.75rem;
            font-size: 12px;
            font-family: Montserrat, "Source Han Sans CN";
            font-weight: 400;
            color: #666666;
            line-height: 1rem;
            margin: 0 auto;
          }
        }
      }
    }
  }
}
@media screen and (min-width: 1140px) {
  .foot-mobile {
    display: none !important;
  }
  .foot-crust {
    background: #fdede2;
    .foot-crust-block {
      padding-top: 72px;
      margin: 0 auto;
      width: 1240px;
      .foot-nav {
        display: flex;
        padding-top: 90px;
        height: 454px;
        border-bottom: 2px solid #dfd9d9;
        .foot-nav-logo {
          width: 327px;
          padding-left: 26px;
          img {
            width: 187px;
            height: 46px;
          }
        }
        .foot-nav-item {
          &:nth-child(2) {
            flex-basis: 284px;
            flex-shrink: 0;
          }
          &:nth-child(3) {
            flex-basis: 236px;
            flex-shrink: 0;
          }
          &:nth-child(4) {
            flex-basis: 227px;
            flex-shrink: 0;
          }
          &:nth-child(5) {
            flex-basis: 167px;
            flex-shrink: 0;
          }
          margin-top: -7px;
          .foot-nav-item-title {
            height: 30px;
            font-size: 24px;
            font-family: "Montserrat-blod", "Source Han Sans CN-blod";
            font-weight: bold;
            color: #1f1f1f;
            line-height: 30px;
            margin-bottom: 45px;
          }
          .foot-nav-item-list {
            .foot-nav-item-lis-item {
              cursor: pointer;
              height: 16px;
              font-size: 16px;
              font-family: Montserrat, "Source Han Sans CN";
              font-weight: 400;
              color: #1f1f1f;
              line-height: 16px;
              margin-bottom: 24px;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
      .foot-copy {
        display: flex;
        justify-content: space-between;
        height: 100px;
        align-items: center;
        .foot-copy-txt {
          height: 13px;
          font-size: 12px;
          font-family: Montserrat, "Source Han Sans CN";
          font-weight: 400;
          color: #666666;
          line-height: 13px;
        }
        .foot-copy-img {
          width: 575px;
          // padding: 0 78px;
          display: flex;
          justify-content: center;
          .foot-copy-img-logo {
            flex-basis: 30px;
            flex-shrink: 0;
            height: 26px;
            margin: 0 20px;
            cursor: pointer;
            //  &:nth-child(1) {
            //     background: url("../../../assets/img/main/WeChat@3x.png")

            //     no-repeat;
            //       opacity: 0.7;
            //   background-size: 100% 100%;
            //   &:hover {
            //      opacity: 1;
            //   }
            // }
            &:nth-child(1) {
              background: url("../../../assets/img/8-foot/telegram.svg")
                no-repeat;
              opacity: 0.7;
              background-size: 100% 100%;
              &:hover {
                opacity: 1;
              }
            }
            &:nth-child(2) {
              background: url("../../../assets/img/8-foot/medium.svg") no-repeat;
              opacity: 0.7;
              background-size: 100% 100%;
              &:hover {
                opacity: 1;
              }
            }
            &:nth-child(3) {
              background: url("../../../assets/img/8-foot/twitter.svg")
                no-repeat;
              opacity: 0.7;
              background-size: 100% 100%;
              &:hover {
                opacity: 1;
              }
            }
            &:nth-child(4) {
              background: url("../../../assets/img/8-foot/github.svg") no-repeat;
              opacity: 0.7;
              background-size: 100% 100%;
              &:hover {
                opacity: 1;
              }
            }
            &:nth-child(5) {
              background: url("../../../assets/img/8-foot/discord.svg")
                no-repeat;
              opacity: 0.7;
              background-size: 100% 100%;
              &:hover {
                opacity: 1;
              }
            }
            &:nth-child(6) {
              background: url("../../../assets/img/8-foot/coinask.svg")
                no-repeat;
              opacity: 0.7;
              background-size: 100% 100%;
              &:hover {
                opacity: 1;
              }
            }
          }
          img {
            width: 30px;
            height: 26px;
            margin: 0 20px;
          }
          svg {
            width: 30px;
            height: 26px;
            margin: 0 20px;
          }
        }
      }
    }
  }
}
</style>
