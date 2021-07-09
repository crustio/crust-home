<template>
  <b-navbar fixed="true" toggleable="lg" type="dark" variant="dark">
    <div class="container">
      <div class="auction-tool-bar">
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="#" @click="openLink('Profit Data')">{{
              $t(`header["Profit Data"]`)
            }}</b-nav-item>
          </b-navbar-nav>
        </b-navbar-nav>
      </div>
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
            <b-nav-item-dropdown
              v-if="item.hasChild"
              :text="item.name === 'lang' ? locale : $t(`header.${item.name}`)"
              :class="{
                active:
                  item.children
                    .map((name) => name.toLowerCase())
                    .indexOf(activeNav) > -1,
              }"
              menu-class="drop"
              right
              :key="item.name"
            >
              <template v-for="child in item.children">
                <b-dropdown-item :key="child" @click="jump(child)" href="#">{{
                  $t(`header.${child}`)
                }}</b-dropdown-item>
              </template>
            </b-nav-item-dropdown>
            <b-nav-item
              :active="item.name.toLowerCase() === activeNav"
              @click="jump(item.name)"
              :key="item.name"
              v-else
              >{{ $t(`header.${item.name}`) }}</b-nav-item
            >
          </template>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
import { outerList, outerDit } from "@/config/nav-config"
import jumpTo from "../utils"

export default {
  data() {
    return {
      activeNav: "home",
      slot_auction: [
        {
          name: "polkadot_apps",
          location: "https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fkusama-rpc.polkadot.io#/parachains/crowdloan"
        },
        {
          name: "nutbox",
          location: "https://polkadot.nutbox.io/#/crowdloan/kusama/parachain/2012"
        },
        {
          name: "okex",
          location: "https://www.ouyi.cc/earn/slotauction"
        },
        {
          name: "kraken",
          location: "https://www.kraken.com/sign-in?redirect=%252Fu%252Ffunding%252Fparachains"
        },
        {
          name: "math_wallet",
          location: "https://cloud.mathwallet.xyz/#/auction"
        },
        {
          name: "hotbit",
          location: "https://www.hotbit.io/slotauction/detail/2",
        },
        {
          name: "atoken",
          location: "",
          disabled: true
        },
      ],
      navList: [
        {
          name: "Home",
          hasChild: false,
        },
        {
          name: "TestNet",
          hasChild: true,
          children: [
            "Join Preview Network",
            "Blockchain Explorer",
            "Storage Explorer",
            "Crust Apps",
            "Crust Wallet",
          ],
        },
        {
          name: "Documents",
          hasChild: true,
          children: [
            "WhitePaper",
            "EcoWhitePaper",
            "Wiki",
            "Crust Solutions Handbook",
            "CSM Lightpaper",
          ],
        },
        {
          name: "FAQ",
        },
        {
          name: "lang",
          hasChild: true,
          children: ["EN", "ZH"],
        },
      ],
    }
  },
  methods: {
    openLink(location) {
      if (location === "Profit Data") {
        location = "https://apps.crust.network/#/csmStaking"
      }
      window.open(location, "_blank")
    },
    jump(name) {
      name = name.toLowerCase()
      const isEn = this.$store.state.locale === "en"
      if (name === "join preview network" || name === "wiki") {
        if (isEn) {
          name += "_en"
        }
      }
      if (name === "ecowhitepaper" || name === "whitepaper") {
        if (isEn) {
          name += "_en"
        }
        return window.open(`${outerDit.pdfBucket}${name}.pdf`, "_blank")
      }
      if (name === "crust solutions handbook") {
        const pdfName = isEn ? "crust_solutions_handbook-en.pdf" : "crust_solutions_handbook-ch.pdf"
        return window.open(`${outerDit.download}${pdfName}`, "_blank")
      }
      if (name === 'csm lightpaper'){
        // https://ipfs.decoo.io/ipfs/QmdPsqY6W1v5KUYH8Q1m8SCJwFLXSwRJeeeft9WS6ct3JA?filename=LT%20paper.(ZH).1_compressed.pdf
        const url = isEn ? outerDit.csm_lightpaper_en : outerDit.csm_lightpaper_zh
        return window.open(url, '_blank')
      }

      if (name === "zh" || name === "en") {
        // 切换语言
        this.$i18n.locale = name
        // 将当前语言保存到cookie 中，
        document.cookie = "locale=" + name
        return this.$store.commit("SET_LANG", name)
      }
      if (name === "crust grants") {
        return jumpTo('dcf grants')
      }

      if (name === "crust cloud") {
        if (this.$route.name !== "home") {
          this.$router.push("/#product")
        }
        return this.$scrollTo(document.querySelector("#product"))
      }
      if (name === "crust wallet") {
        return window.open(outerDit[this.$store.state.locale === "en" ? "wallet_wiki_en" : "wallet_wiki_zh"], "_blank")
      }
      this.activeNav = name
      if (outerList.indexOf(name) > -1) {
        return jumpTo(name)
      }
      if (name === "home") {
        return this.$router.push("/")
      }
      this.$router.push(name)
    },
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
    },
  },
  watch: {
    routerName() {
      this.activeNav = this.routerName
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.auction-tool-bar {
  position: absolute;
  left: 150px;
  top: 0;
  width: auto;
  max-height: 100%;
  .nav-item {
    padding-left: 10px!important;
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
  z-index: 10;
  .navbar-nav {
    font-family: InterV;
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
            }
          }
        }
      }
      .nav-link {
        color: #fff!important;
        &:hover {
          color: #ff6400!important;
          border-bottom: 2px solid #ff6400;
        }
        &:focus {
          color: #ff6400;
          border-bottom: 2px solid #ff6400;
        }
        &.active {
          font-family: InterV_Extra-Bold;
          color: #ff6400;
          border-bottom: 2px solid #ff6400;
        }
      }
    }
    .dropdown-menu {
      background-color: $navBgColor;
    }
  }
}
</style>
