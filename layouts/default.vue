<template>
  <div>
    <div class="simple-banner">
      <div class="simple-banner-text">
        <span><a href="https://baidu.com" target="_blank">MEET THE CRUST TEAM AT EVENTS</a></span>
      </div>
    </div>
    <nav-bar></nav-bar>
    <Nuxt />
    <!-- <footer-bar v-show="showFooter"></footer-bar> -->
  </div>
</template>
<script>
import NavBar from "~/components/NavBar"
import footerBar from "~/components/footerBar"

export default {
  components: {
    NavBar,
    footerBar,
  },
  head() {
    return {
      title:
        this.$store.state.locale === "en"
          ? "Crust Network, Web3.0 Storage for Metaverse"
          : "Crust Network, Web3.0去中心化存储为元宇宙构建",
    }
  },
  computed: {
    showFooter() {
      return this.$route.name === "index"
    },
  },
}
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system,Montserrat, "Source Han Sans CN", BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  
-webkit-text-size-adjust:none;
  /* -webkit-text-size-adjust: 100%; */
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.simple-banner {
  width: 100%;
  height: 46px;
  position: fixed;
  top: 0;
  display: block;
  background: #Ef5A28;
  z-index: 9999999;
  text-align: center;
}

.simple-banner-text {
  padding: 10px 20px;
}

.simple-banner-text a {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
}

.simple-banner-text a:hover, a:focus {
  color: #ffffff;
  text-decoration: none;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
