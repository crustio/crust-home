<template>
  <div class="decentralized" id="decentralized" ref="scroller">
    <main-title class="title" :text="$t(`decentralized.title`)"></main-title>
    <b-container fluid>
      <b-row align-v="center" class="video-step">
        <b-col sm="12" md="12" lg="12" xl="6">
          <dVideo></dVideo>
        </b-col>
        <b-col sm="12" md="12" lg="12" xl="6" class="steps-container">
          <dSteps></dSteps>
        </b-col>
      </b-row>
      <b-row class="title-row">
        <main-title :text="$t(`decentralized.title2`)"></main-title>
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
.decentralized {
  width: 100%;
  padding-bottom: 60px !important;
  background: linear-gradient(
    45deg,
    rgba(92, 37, 51, 1) 0%,
    rgba(0, 26, 103, 1) 100%
  );
  .text-row-container {
    margin-left: 100px;
    margin-right: 100px;
  }

  @media screen and (max-width: 500px) {
    .video-step {
      margin-top: 30px;
    }
    .title-row {
      margin-top: 40px;
    }
  }

  @media screen and (min-width: 501px) {
    .video-step {
      margin-top: 30px;
    }
    .title-row {
      margin-top: 49px;
    }
    .text-row {
      padding-left: 30px;
      padding-right: 30px;
    }
    .steps-container {
      height: 100%;
    }
  }
  @media screen and (min-width: 1200px) {
    .video-step {
      height: 375px;
      margin-top: 30px;
    }
  }
  .steps-container {
    height: 100%;
  }
  .card-container {
    margin-top: 60px;
    &.phone {
      display: none;
    }
    &.web {
      display: block;
      .card-wrapper {
        .card-body {
          visibility: hidden;
        }
        .card-img-left {
          visibility: hidden;
        }
        .card-img-right {
          visibility: hidden;
        }
        &.show {
          .card-img-right {
            animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
            animation-duration: 1s; /* don't forget to set a duration! */
            visibility: visible;
          }
          .card-img-left {
            animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
            animation-duration: 1s; /* don't forget to set a duration! */
            visibility: visible;
          }
          .card-body {
            animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
            animation-duration: 1s; /* don't forget to set a duration! */
            visibility: visible;
          }
        }
        &:nth-child(2) {
          .card-body {
            animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
            animation-duration: 1s; /* don't forget to set a duration! */
            visibility: visible;
          }
        }
      }
      @mixin iconBg($n) {
        background: url("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/product-$n.png")
          no-repeat left center;
      }
      .card-wrapper {
        padding-bottom: 50px;
      }
      .card {
        border: none;
        color: #ffffff;
        background-color: rgba(255, 255, 255, 0);
      }
      .title {
        font-family: nasalization;
        padding-bottom: 1rem;
      }
      .text-container {
        .xl-title {
          font-size: 20px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 36px;
        }
        .desc-title {
          font-size: 18px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 24px;
        }
      }

      .card-header {
        background-color: rgba(255, 255, 255, 0);
        border: none;
      }
      .item-desc-container {
        box-sizing: border-box;
        padding-left: 45px;
        .subtitle {
          color: $mainColor;
          font-family: nasalization;
        }
        .desc {
          line-height: 20px;
        }
        &.item-1 {
          background: url("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/product-1.png")
            no-repeat left center;
        }
        &.item-2 {
          background: url("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/product-2.png")
            no-repeat left center;
        }
        &.item-3 {
          background: url("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/product-3.png")
            no-repeat left center;
        }
      }
      .text-container {
        .card-img-left {
          display: inline-block;
          vertical-align: middle;
          align-items: center;
        }
      }
    }
    @include media-breakpoint-down(md) {
      &.web {
        display: none;
      }
      &.phone {
        display: block;
      }
      .card {
        border: none;
        color: #ffffff;
        background-color: rgba(255, 255, 255, 0);
        .title {
          font-family: nasalization;
          font-size: 1.8rem;
          padding-bottom: 1rem;
        }
        .text-container {
          .xl-title {
            font-size: 1.3rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 2rem;
          }
          & > .desc {
            font-size: 1.1rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 1.5rem;
          }
        }

        .card-header {
          background-color: rgba(255, 255, 255, 0);
          border: none;
        }
        .item-desc-container {
          box-sizing: border-box;
          padding-left: 2.5rem;
          .desc {
            line-height: 1.3rem;
          }
          .subtitle {
            color: $mainColor;
            font-family: nasalization;
          }
          &.item-1 {
            background: url("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/product-1.png")
              no-repeat left center;
          }
          &.item-2 {
            background: url("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/product-2.png")
              no-repeat left center;
          }
          &.item-3 {
            background: url("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/product-3.png")
              no-repeat left center;
          }
          background-size: 60%;
        }
        .text-container {
          .card-img-left {
            display: inline-block;
            vertical-align: middle;
            align-items: center;
          }
        }
      }
    }

    .btn-container {
      display: flex;
      .btn-custom {
        margin-right: 30px;
      }
    }
  }
}
</style>
