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
        <div class="foot-copy">
          <div class="foot-copy-txt">
            Copyright © Decentralized Cloud Foundation 2021 All Rights Reserved
          </div>
          <div class="foot-copy-img">
            <!-- <div v-html="item" v-for="item in icons" :key="item"></div> -->
            <div
              class="foot-copy-img-logo"
              v-for="item in $store.state.locale === 'zh' ? 6 : 5"
              :key="item"
              @click="routeLogo(item-1)"
            ></div>
          </div>
          <div class="foot-copy-txt">{{ $t(`foot.privacy`) }}</div>
          <div class="foot-copy-txt">{{ $t(`foot.Terms`) }}</div>
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
      urls:[
        'https://t.me/CrustNetwork','https://medium.com/@CrustNetwork','https://twitter.com/CrustNetwork','https://github.com/crustio','https://discord.gg/Jbw2PAUSCR','https://www.coinask.io/n/crust'
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
              url: "https://gw.crustapps.net/ipfs/QmRYJN6V5BzwnXp7A2Avcp5WXkgzyunQwqP3Es2Q789phF?filename=Crust_economy1.30.pdf",
              zh_url:
                "https://gw.crustapps.net/ipfs/Qmdy2Hqdxoq2PuAkvoDZ5SqYjAKym58Gh39Lm5gPChyHwL?filename=Crust经济白皮书1.30(1).pdf",
            },
            {
              title: "list3",
              FAQ:true,
              name:"FAQ"
            },
            {
              title: "list4",
              url:"https://ipfs-hk.decoo.io/ipfs/Qme9uUpunio7heGDnnfsptYWzjLJgvD2hkbLGcvehPz5EK?filename=CrustLogo.zip"
            },
          ],
        },
        {
          title: "title2",
          children: [
            {
              title: "community1",
              url:"https://twitter.com/CrustNetwork"
            },
            {
              title: "community2",
              url:'https://t.me/CrustNetwork'
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
              url:"https://decloudf.com/"
            },
            {
              title: "dev2",
              url:"https://decloudf.com/"
            },
            {
              title: "dev3",
              url:"https://github.com/crustio"
            },
          ],
        },
        {
          title: "title4",
          children: [
            {
              title: "email",
              copy:true
            },
          ],
        },
      ],
    }
  },
  methods: {
    routeLogo(index){
 window.open(this.urls[index], "_blank")
    },
    routeTo(e) {
      if (e.down) {
        let url = this.$store.state.locale === "en" ? e.url : e.zh_url
        window.open(url)
      } else if(e.copy){
        this.handleCopy()
      } else{
        if(e.FAQ){
          return this.$router.push('faq')
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
            background: url("../../../assets/img/main/telegram@3x.png")
              no-repeat;
            opacity: 0.7;
            background-size: 100% 100%;
            &:hover {
              opacity: 1;
            }
          }
          &:nth-child(2) {
            background: url("../../../assets/img/main/medium@3x.png") no-repeat;
            opacity: 0.7;
            background-size: 100% 100%;
            &:hover {
              opacity: 1;
            }
          }
          &:nth-child(3) {
            background: url("../../../assets/img/main/twitter@3x.png") no-repeat;
            opacity: 0.7;
            background-size: 100% 100%;
            &:hover {
              opacity: 1;
            }
          }
          &:nth-child(4) {
            background: url("../../../assets/img/main/github@3x.png") no-repeat;
            opacity: 0.7;
            background-size: 100% 100%;
            &:hover {
              opacity: 1;
            }
          }
          &:nth-child(5) {
            background: url("../../../assets/img/main/discord@3x.png") no-repeat;
            opacity: 0.7;
            background-size: 100% 100%;
            &:hover {
              opacity: 1;
            }
          }
          &:nth-child(6) {
            background: url("../../../assets/img/main/coinask@3x.png") no-repeat;
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
</style>