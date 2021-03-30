<template>
  <b-navbar fixed="true" toggleable="lg" type="dark" variant="dark">
    <div class="container">
      <b-navbar-brand href="#" @click="jump('home')">
        <img
          src="https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/logo.png"
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
import jumpTo from "../utils"
import { outerList, outerDit } from "@/config/nav-config"
import VueScrollTo from "vue-scrollto"

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
            "Join Preview Network",
            "Blockchain Explorer",
            "Storage Explorer",
            "Crust Apps",
            "Crust Cloud",
            "Crust Wallet",
          ],
        },
        {
          name: "Documents",
          hasChild: true,
          children: ["WhitePaper", "EcoWhitePaper", "Github", "Wiki", "Crust Grants"],
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
    jump(name) {
      name = name.toLowerCase()
      if (name === "join preview network" || name === "wiki") {
        if (this.$store.state.locale === "en") {
          name += "_en"
        }
      }
      if (name === "ecowhitepaper" || name === "whitepaper") {
        if (this.$store.state.locale === "en") {
          name += "_en"
        }
        return window.open(`${outerDit.pdfBucket}${name}.pdf`, "_blank")
      }
      if (name === "zh" || name === "en") {
        // 切换语言
        this.$i18n.locale = name
        // 将当前语言保存到cookie 中，
        document.cookie = "locale=" + name
        return this.$store.commit("SET_LANG", name)
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
    opacity: 0.6;
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
        &.active {
          font-family: InterV_Extra-Bold;
        }
      }
    }
    .dropdown-menu {
      background-color: $navBgColor;
    }
  }
}
</style>
