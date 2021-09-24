<template>
  <b-navbar fixed="true" toggleable="lg" type="dark" variant="dark">
    <div class="container">
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
            >
              <template v-for="child in item.children">
                <b-dropdown-item :key="child" href="#" @click="jump(child)">{{
                  $t(`header.${child}`)
                }}</b-dropdown-item>
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
            "Token Swap"
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
          name: "lang",
          hasChild: true,
          children: ["EN", "ZH"],
        },
      ],
    }
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
  methods: {
    jump(name) {
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
        let economicPaperurl = 'https://ipfs-hk.decoo.io/ipfs/Qmdy2Hqdxoq2PuAkvoDZ5SqYjAKym58Gh39Lm5gPChyHwL'
        if (!isZh) {
          name += "_en"
          economicPaperurl= 'https://ipfs-hk.decoo.io/ipfs/QmRYJN6V5BzwnXp7A2Avcp5WXkgzyunQwqP3Es2Q789phF'
        }
        return window.open(`${economicPaperurl}`, "_blank")
      }
      if (name === "whitepaper") {
        if (!isZh) {
          name += "_en"
        }
        return window.open(`${outerDit.pdfBucket}${name}.pdf`, "_blank")
      }
      if (name === "crust solutions handbook") {
        const pdfName = !isZh
          ? "crust_solutions_handbook-en.pdf"
          : "crust_solutions_handbook-ch.pdf"
        return window.open(`${outerDit.download}${pdfName}`, "_blank")
      }
      if (name === "csm lightpaper") {
        // https://ipfs-hk.decoo.io/ipfs/QmdPsqY6W1v5KUYH8Q1m8SCJwFLXSwRJeeeft9WS6ct3JA?filename=LT%20paper.(ZH).1_compressed.pdf
        const url = !isZh
          ? outerDit.csm_lightpaper_en
          : outerDit.csm_lightpaper_zh
        return window.open(url, "_blank")
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
        color: #fff !important;
        &:hover {
          color: #ff6400 !important;
          border-bottom: 2px solid #ff6400;
        }
        &:focus {
          color: #ff6400;
          border-bottom: 2px solid #ff6400;
        }
        &.active {
          color: #ff6400;
          border-bottom: 2px solid #ff6400;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.nav-link {
  font-family: InterV_Semi-Bold;
  font-weight: 500;
}
.dropdown-menu {
  background-color: $navBgColor;
}
</style>
