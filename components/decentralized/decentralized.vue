<template>
  <div class="decentralized" id="decentralized" ref="scroller">
    <main-title class="title-d" :text="$t(`decentralized.title`)"></main-title>
    <b-container class="clear-padding">
      <div class="top-container">
        <div class="video-c">
          <dVideo></dVideo>
        </div>
        <div class="steps-c">
          <dSteps></dSteps>
        </div>
      </div>

      <b-row class="title-row">
        <main-title class="title-d" :text="$t(`decentralized.title2`)"></main-title>
      </b-row>
      <b-row class="text-row text-row-container">
        <b-col sm="12" md="12" lg="12" xl="6">
          <dCard
          :imgSrc="require('~/assets/images/serverless.png')"
          :title="$t(`decentralized.serverlessTitle`)"
          :subTitle="$t(`decentralized.serverlessSubTitle`)" ></dCard>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="6">
          <dCard
          :imgSrc="require('~/assets/images/data.png')"
          :title="$t(`decentralized.generalTitle`)"
          :subTitle="$t(`decentralized.generalSubTitle`)"></dCard>
        </b-col>
      </b-row>
      <b-row class="text-row text-row-container">
        <b-col sm="12" md="12" lg="12" xl="6">
          <dCard
          :imgSrc="require('~/assets/images/accelerate.png')"
          :title="$t(`decentralized.AcceleratedTitle`)"
          :subTitle="$t(`decentralized.AcceleratedSubTitle`)"></dCard>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="6">
          <dCard
          :imgSrc="require('~/assets/images/secured.png')"
          :title="$t(`decentralized.SecuredTitle`)"
          :subTitle="$t(`decentralized.SecuredSubTitle`)"></dCard>
        </b-col>
      </b-row>

    </b-container>

  </div>
</template>

<script>
import mainTitle from "../title"
import dVideo from './dVideo'
import dCard from './dCard'
import dSteps from './dSteps'
import { outerDit } from "@/config/nav-config"
export default {
  name: "Decentralized",
  data() {
    return {
      show: false,
    }
  },
  components: {
    mainTitle,
    dVideo,
    dSteps,
    dCard,
  },
  mounted() {
    this.emitScrollListener()
  },
  filters: {
    removeBr(str) {
      return str.replace("<br/>", "")
    },
  },
  methods: {
    handleExperienceClick() {
      window.open(
        outerDit[this.$store.state.locale === "en" ? "clouden" : "cloud"],
        "_blank"
      )
    },
    handleBuildClick() {
      window.open(
        outerDit[this.$store.state.locale === "en" ? "clouden" : "cloud"],
        "_blank"
      )
    },
    emitScrollListener() {
      const scroller = this.$refs.scroller
      const scrollerWrapperScrollTop = scroller.getBoundingClientRect().top
      const clientH =
        window.innerHeight || document.documentElement.clientHeight
      if (scrollerWrapperScrollTop - clientH < 0) {
        return this.start()
      }
      window.addEventListener("scroll", () => {
        this.scrollListener(scroller, clientH)
      })
    },
    scrollListener(scroller, clientH) {
      if (scroller.getBoundingClientRect().top - clientH < 0) {
        this.start()
      }
    },
    start() {
      this.timer = setTimeout(() => {
        this.show = true
      }, 100)
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollListener)
  },
}
</script>

<style lang="scss" scoped>

@media screen and (max-width: 500px) {
  .top-container {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    justify-content: center;
    .video-c {
      margin-bottom: 10px;
      align-self: center;
    }
    .steps-c {
      margin-top: 10px;
    }
  }
  .title-row {
    margin-top: 40px;
  }
  .title-d {
    font-size: 1.6rem;
  }
}

@media (min-width: 501px) and (max-width: 1240px) {
  .top-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 43px;
    .video-c {
      margin-bottom: 10px;
      align-self: center;
    }
    .steps-c {
      margin-top: 10px;
    }
  }
  .title-row {
    margin-top: 49px;
  }
}

@media screen and (min-width: 1241px) {
  .top-container {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    .video-c {
      margin-right: 20px;
      align-self: center;
    }
    .steps-c {
      margin-left: 10px;
    }
  }
  .title-row {
    margin-top: 49px;
  }
}


.decentralized {
  width: 100%;
  padding-bottom: 60px !important;
  background: linear-gradient(
    45deg,
    rgba(92, 37, 51, 1) 0%,
    rgba(0, 26, 103, 1) 100%
  );
  .clear-padding {
    padding-right: 0px;
    padding-left: 0px;
  }
}
</style>
