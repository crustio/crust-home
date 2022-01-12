<template>
  <b-navbar fixed="true" toggleable="lg" type="dark" variant="dark">
    <div class="container navBar-pc">
      <!-- <div class="auction-tool-bar">
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" @click="jump('CRU Token')">{{
              $t(`header["CRU Token"]`)
            }}</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </div> -->
      <b-navbar-brand href="#" @click="jump('home')">
        <img
          style="margin-top: -6px"
          src="../assets/images/logo.svg"
          width="90"
          alt=""
        />
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"> </b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <template v-for="item in navList">
            <!-- <img v-if="item.name === 'lang'&&$store.state.locale ==='zh'" class="contryImg" src="../assets/images/china-48.png" alt="" :key="item.name">
            <img v-if="item.name === 'lang'&&$store.state.locale ==='en'" class="contryImg" src="../assets/images/great-britain-48.png" alt="" :key="item.name"> -->
            <b-nav-item-dropdown
              v-if="item.hasChild"
              :key="item.name"
              :text="item.name === 'lang' ? locale : $t(`header.${item.name}`)"
              :class="{
                active:
                  item.children
                    .map((name) => name.toLowerCase())
                    .indexOf(activeNav) > -1,
              }"
              menu-class="drop"
              right
              :style="{
                'padding-left': item.name === 'lang' ? '57px' : '64px',
              }"
            >
              <template v-for="child in item.children">
                <b-dropdown-item :key="child" href="#" @click="jump(child)">
                  <!-- <span v-if="child ==='EN'&&item.name === 'lang'" class="en"></span>
            <span v-if="child ==='ZH'&&item.name === 'lang'" class="zh"></span> -->
                  {{ $t(`header.${child}`) }}</b-dropdown-item
                >
              </template>
            </b-nav-item-dropdown>
            <b-nav-item
              v-else
              :key="item.name"
              :active="item.name.toLowerCase() === activeNav"
              @click="jump(item.name)"
              >{{ $t(`header.${item.name}`) }}</b-nav-item
            >
          </template>
          <!-- <b-nav-item-dropdown
              key="zh"
              :html="locale"
              menu-class="drop"
              right
              :style="{'padding-left':'64px'}"
            >


                <b-dropdown-item  href="#" @click="jump(child)">

            <span class="zh"></span>中文</b-dropdown-item>
            <span class="en"></span>EN</b-dropdown-item>
            </b-nav-item-dropdown> -->
        </b-navbar-nav>
      </b-collapse>
    </div>
    <div class="navBar-mobile">
      <div class="logoFlex">
        <b-navbar-brand href="#" @click="jump('home')">
          <img
            style="margin-top: -6px;width: 4.67rem;height: 1.08rem;"
            src="../assets/images/logo.svg"
            alt=""
          />
        </b-navbar-brand>
        <b-nav-item-dropdown :text="locale">
          <b-dropdown-item v-for="item in langArr.children" :key="item" @click="hadleLang(item)">
            {{ $t(`header.${item}`) }}
         </b-dropdown-item>
        </b-nav-item-dropdown>
      </div>
      <div class="navContent">
        <div class="navItem" @click="hadleNav(index)" v-for="(item, index) in navList_mobile" :key="index">{{ $t(`header.${item.name}`) }}</div>
      </div>
       <b-modal modal-class="navModal" :static="true" :hide-footer="true" centered style="z-index:99999999!important" v-model="modalShow">
          <template v-slot:modal-title="">
     {{$t(`header.${navList_mobile[activeIndex].name}`)}}
    </template>
    <div class="navLink_item_jump" @click="jump(item)" v-for="(item,index) in navList_mobile[activeIndex].children" :key="index"> {{ $t(`header.${item}`) }}</div>
      <template v-slot:modal-footer="{}">
    </template>
       </b-modal>
    </div>

  </b-navbar>
</template>

<script>
import { outerList, outerDit } from "@/config/nav-config"
import jumpTo from "../utils"

export default {
  data() {
    return {
      modalShow:false,
      activeIndex:0,
      activeNav: "home",
      langArr: {
        name: "lang",
        hasChild: true,
        children: ["EN", "ZH"],
      },
      navList: [
        {
          name: "Home",
          hasChild: false,
        },
        {
          name: "TestNet",
          hasChild: true,
          children: [
            "Crust Network",
            "Crust Wallet",
            "Blockchain Explorer",
            "Storage Explorer",
            "Crust Maxwell",
            // "Token Swap",
          ],
        },
        {
          name: "Build",
          hasChild: true,
          children: [
            "Github",
            "Build on Crust",
            "Crust Grants",
            "Crust Bounty",
          ],
        },
        {
          name: "Documents",
          hasChild: true,
          children: [
            "Wiki",
            "WhitePaper",
            "EcoWhitePaper",
            "CSM Lightpaper",
            "FAQ",
          ],
        },
        {
          name: "Blog",
          hasChild: false,
        },

        {
          name: "lang",
          hasChild: true,
          children: ["EN", "ZH"],
        },
      ],
      navList_mobile: [
        
        {
          name: "TestNet",
          hasChild: true,
          children: [
            "Crust Network",
            "Crust Wallet",
            "Blockchain Explorer",
            "Storage Explorer",
            "Crust Maxwell",
            // "Token Swap",
          ],
        },
        {
          name: "Build",
          hasChild: true,
          children: [
            "Github",
            "Build on Crust",
            "Crust Grants",
            "Crust Bounty",
          ],
        },
        {
          name: "Documents",
          hasChild: true,
          children: [
            "Wiki",
            "WhitePaper",
            "EcoWhitePaper",
            "CSM Lightpaper",
            "FAQ",
          ],
        },
        {
          name: "Blog",
          hasChild: false,
        }
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.local = true
    })
  },
  computed: {
    routerName() {
      let name = this.$route.name
      if (name === "index" || name === "/") {
        name = "home"
      }
      return name
    },
    locale() {
      return this.$store.state.locale === "zh" ? "中文" : "EN"
      // return this.$store.state.locale === "zh" ? `<span class="zh-logo"><span>中文` :`<span class="en-logo"><span>EN`
    },
  },
  watch: {
    routerName() {
      this.activeNav = this.routerName
    },
  },
  methods: {
    hadleNav(index){
      if(!this.navList_mobile[index].hasChild){
        this.jump(this.navList_mobile[index].name)
        return
      }
      this.activeIndex=index
      this.modalShow=true
    },
    hadleLang(name){
       name = name.toLowerCase()
  this.$i18n.locale = name
        document.cookie = "locale=" + name
        return this.$store.commit("SET_LANG", name)
    },
    jump(name) {
     this.modalShow=false
      const isZh = this.$store.state.locale === "zh"
      name = name.toLowerCase()
      if (name === "zh" || name === "en") {
        this.$i18n.locale = name
        document.cookie = "locale=" + name
        return this.$store.commit("SET_LANG", name)
      }
      if (name === "analysis of economic model") {
        if (!isZh) {
          return window.open(outerDit.analysis_of_economic_model_en, "_blank")
        }
        return window.open(outerDit.analysis_of_economic_model_zh, "_blank")
      }
      if (name === "ecowhitepaper") {
        let economicPaperurl =
          "https://gw.crustapps.net/ipfs/Qmdy2Hqdxoq2PuAkvoDZ5SqYjAKym58Gh39Lm5gPChyHwL"
        if (!isZh) {
          name += "_en"
          economicPaperurl =
            "https://gw.crustapps.net/ipfs/QmRYJN6V5BzwnXp7A2Avcp5WXkgzyunQwqP3Es2Q789phF"
        }
        return window.open(`${economicPaperurl}`, "_blank")
      }
      if (name === "whitepaper") {
        const url = !isZh
          ? "https://gw.crustapps.net/ipfs/QmP9WqDYhreSuv5KJWzWVKZXJ4hc7y9fUdwC4u23SmqL6t"
          : "https://gw.crustapps.net/ipfs/QmPrU21TrRtWcrWsNmHfBmSvTKZApKCEZrDGncnheMGKsj"
        return window.open(`${url}`, "_blank")
        }
      if (name === "crust solutions handbook") {
        const pdfName = !isZh
          ? "crust_solutions_handbook-en.pdf"
          : "crust_solutions_handbook-ch.pdf"
        return window.open(`${outerDit.download}${pdfName}`, "_blank")
      }
      if (name === "blog") {
        return window.open("https://medium.com/crustnetwork/", "_blank")
      }
      if (name === "csm lightpaper") {
        // https://gw.crustapps.net/ipfs/QmdPsqY6W1v5KUYH8Q1m8SCJwFLXSwRJeeeft9WS6ct3JA?filename=LT%20paper.(ZH).1_compressed.pdf
        const url = !isZh
          ? outerDit.csm_lightpaper_en
          : outerDit.csm_lightpaper_zh
        return window.open(url, "_blank")
      }
      if (name === "wiki") {
        name = isZh ? name + "_zh" : name + "_en"
        console.log(name)
        return jumpTo(name)
      }
      if (outerList.includes(name)) {
        name = isZh ? name + "_zh" : name
        return jumpTo(name)
      }
      if (name === "home") {
        return this.$router.push("/")
      }
      this.$router.push(name)
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  z-index: 99999;
  position: relative;
}
.auction-tool-bar {
  position: absolute;
  left: 150px;
  top: 0;
  width: auto;
  max-height: 100%;
  .nav-item {
    padding-left: 10px !important;
  }
}
.navbar {
  background: #141414 !important;

  .container {
    @media (min-width: 1270px) {
      max-width: 1270px;
    }
  }
  min-height: 60px;

  .navbar-nav {
    z-index: 99999;
    font-family: Montserrat, "Source Han Sans CN";
    font-size: 16px;
    color: #ffffff;
    letter-spacing: 0;
    .nav-item {
      padding-left: 64px;
      &.b-nav-dropdown {
        &.active {
          .dropdown-toggle {
            span {
              color: red !important;
              font-family: Montserrat, "Source Han Sans CN";
            }
          }
        }
      }
      .nav-link {
        color: #fff !important;
        font-family: Montserrat, "Source Han Sans CN";
        span{
          font-family: Montserrat, "Source Han Sans CN";
        }
        &:hover {
          color: #fc7823 !important;
          border-bottom: 2px solid #fc7823;
        }
        &:focus {
          color: #fc7823;
          border-bottom: 2px solid #fc7823;
        }
        &.active {
          color: #fc7823;
          border-bottom: 2px solid #fc7823;
        }
      }
    }
  }
}
/deep/.contryImg {
  width: 30px;
  height: 15px;
  padding-left: 64px;
}
</style>
<style lang="scss">
.nav-link {
  font-family: InterV_Semi-Bold;
  font-weight: 500;
  span{
    font-family: Montserrat, "Source Han Sans CN";
  }
}
.dropdown-menu {
  background-color: #3b3b3b !important;
}
.en {
  background: url("../assets/images/great-britain-48.png") no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-top: -4px;
  margin-right: 13px;
}
.zh {
  background: url("../assets/images/china-48.png") no-repeat;
  background-size: 100% 100%;
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-top: -4px;
  margin-right: 13px;
}
.zh-logo {
  display: inline-block;
  width: 70px;
  text-align: right;
  position: relative;
  &::after {
    position: absolute;
    width: 30px;
    height: 30px;
    background: url("../assets/images/china-48.png") no-repeat;
    background-size: 100% 100%;
    top: -3px;
    left: 0;
    content: "";
  }
}
.en-logo {
  display: inline-block;
  width: 70px;
  text-align: right;
  position: relative;
  &::after {
    position: absolute;
    width: 30px;
    height: 30px;
    background: url("../assets/images/great-britain-48.png") no-repeat;
    background-size: 100% 100%;
    top: -3px;
    left: 0;
    content: "";
  }
}

.navbar .navbar-nav .nav-item {
  font-size: 14px;
  font-family: Montserrat, "Source Han Sans CN";
}
@media screen and (max-width: 1139px) {
   .navModal{
         z-index: 999999999!important;
       .navLink_item_jump{
           height: 2rem;
            line-height: 2rem;
            &:active{
              background-color: #fff;
            }
         }
    }
      
  .bg-dark{
    background: #1f1f1f !important;
  }
  .navBar-pc {
    display: none !important;
  }
  .navBar-mobile{
   
    background: #1f1f1f;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    padding: 0 1.67rem 1rem  !important;
    flex-basis: 100%;
    z-index: 99999999;
    .logoFlex{
      display: flex;
      justify-content: space-between;
      height: 4.42rem;
      align-items: center;
      .nav-item{
        display: flex;
        align-items: center;
        justify-content: center;
      }
      /deep/.dropdown-menu{
        min-width: 6rem;
      }
    }
    .navContent{
      display: flex;
      justify-content: center;
      .navItem{
        height:0.83rem;
        line-height: 0.83rem;
font-size: 0.83rem;
font-family: Montserrat;
font-weight: 500;
color: #999999;
margin:0 0.71rem;
      }
    }
  }
}
@media screen and (min-width: 1140px) {
  .navBar-mobile {
    display: none!important;
  }
}
</style>
