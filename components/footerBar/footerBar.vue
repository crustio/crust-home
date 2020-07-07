<template>
  <div class="container-fluid footer">
    <mainTitle :text="$t('footer.title')" />
    <div class="footer-wrapper container">
      <b-row class="mail-wrapper">
        <b-col class="mail-container" cols="8" sm="7" md="9" xl="9" lg="9">
          Crustcommunity@gmail
        </b-col>
        <b-col cols="4" sm="5" md="3" xl="3" lg="3">
          <b-button class="btn" variant="warning" @click="handleCopy">{{
            $t(`footer.Copy`)
          }}</b-button>
        </b-col>
      </b-row>
      <b-row class="nav-container container">
        <b-col
          cols="6"
          xs="6"
          md="3"
          xl="3"
          lg="3"
          v-for="(item, i) in items"
          :key="'nav' + i"
        >
          <div class="title">{{ $t(`footer.${titles[i]}`) }}</div>
          <template v-for="nav in item">
            <a
              class="nav list-text"
              href="javascript:void(0)"
              @click="jump(nav)"
              :key="nav"
              >{{ $t(`footer.${nav}`) }}</a
            >
          </template>
        </b-col>
        <b-col cols="6" xs="6" sm="3" md="3" xl="3" lg="3">
          <b-img src="~assets/images/code.png" right width="100"></b-img>
        </b-col>
      </b-row>
      <div class="icon-wrapper container">
        <a
          href="javascript:void(0)"
          v-for="icon in iconList"
          :key="icon"
          @click="jump(icon)"
        >
          <i class="iconfont" :class="`icon-${icon}-icon`"></i>
        </a>
      </div>
      <div class="bg-wrapper container">
        Copyright ©
        <a href="javascript:void(0)" @click="jump('/')">Crust 2020</a>
      </div>
    </div>
  </div>
</template>

<script>
import mainTitle from "../title"
import jumpTo from "~/utils"
export default {
  components: {
    mainTitle,
  },
  data() {
    return {
      titles: ["Crust", "forum", "JoinUs"],
      items: [
        ["WhitePaper", "EcoWhitePaper", "FAQ"],
        ["Twitter", "Telegram"],
        ["Cooperation", "Github"],
      ],
      iconList: ["telegram", "github", "medium", "twitter"],
    }
  },
  methods: {
    handleCopy() {
      this.$copyText("Crustcommunity@gmail.com")
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
      if (
        ["WhitePaper", "FAQ", "/", "Cooperation", "EcoWhitePaper"].indexOf(
          name
        ) > -1
      ) {
        return this.$router.push(name)
      } else {
        jumpTo(name)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.footer {
  background: linear-gradient(
    90deg,
    rgba(32, 47, 84, 1) 0%,
    rgba(17, 26, 52, 1) 100%
  );
  .footer-wrapper {
    margin: 0 auto;
    a {
      text-decoration: none;
    }
    .mail-wrapper {
      @include media-breakpoint-up(md) {
        width: 700px;
        margin: 0 auto 50px;
      }
      margin-bottom: 50px;
      .mail-container {
        padding-left: 20px;
        color: #41485d;
        font-size: 18px;
        line-height: 42px;
        background-color: #fff;
        border-radius: 4px;
        font-weight: 400;
      }
      .btn {
        width: 100px;
        cursor: pointer;
      }
    }
    .nav-container {
      .title {
        color: #fff;
        font-size: 18px;
        padding: 10px 0;
      }
      .nav {
        color: #c5cad5;
        transition: all 0.2s ease;
        &:hover {
          color: #fff;
        }
      }
      @include media-breakpoint-down(sm) {
        text-align: center;
        margin-bottom: 1rem;
        .nav {
          display: block;
          text-align: center;
          justify-self: center;
        }
      }
    }
    .icon-wrapper {
      display: flex;
      max-width: 300px;
      margin: 0 auto;
      justify-content: space-between;
      .iconfont {
        font-size: 24px;
        color: #c5cad5;
        transition: all 0.2s ease;
        &:hover {
          color: #fff;
        }
      }
    }
    .bg-wrapper {
      text-align: center;
      @include bgImage("~assets/images/footerBg");
      font-size: 14px;
      line-height: 100px;
      margin: 0 auto;
      color: #c5cad5;
      height: 86px;
      overflow: hidden;
      @include media-breakpoint-up(sm) {
        width: 500px;
        height: 86px;
      }
      a {
        color: #c5cad5;
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>
