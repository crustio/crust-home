<template>
  <div class="product" id="product" ref="scroller">
    <main-title :text="$t(`productMatrix.title`)"></main-title>
    <div class="card-container container web">
      <b-card
        class="card-wrapper"
        :class="{ show }"
        v-for="card in 2"
        :img-src="`https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/productBg${card}.png`"
        img-alt="Image"
        :img-left="card === 2 ? true : false"
        :img-right="card === 1 ? true : false"
        :key="'card' + card"
      >
        <div class="text-container container">
          <div class="md-title title">
            {{ $t(`productMatrix.row-${card}-title`) }}
          </div>
          <div class="xl-title">
            {{ $t(`productMatrix.row-${card}-subtitle`) }}
          </div>
          <div class="desc-title">
            {{ $t(`productMatrix.row-${card}-desc`) }}
          </div>
          <b-card
            v-for="i in 3"
            :key="i"
            class="item-desc-container"
            :class="`item-${i}`"
          >
            <div
              class="subtitle xl-title"
              v-html="$t(`productMatrix.${card}-t${i}`)"
            ></div>
            <div
              class="desc normal-text"
              v-html="$t(`productMatrix.${card}-t${i}-intro2`)"
            ></div>
          </b-card>
        </div>
      </b-card>
    </div>
    <div class="phone card-container container">
      <b-card
        class="card-wrapper"
        v-for="card in 2"
        :img-src="`https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/productBg${card}.png`"
        img-alt="Image"
        img-top
        :key="'card' + card"
      >
        <div class="text-container container">
          <div class="md-title title">
            {{ $t(`productMatrix.row-${card}-title`) }}
          </div>
          <div class="desc">
            {{ $t(`productMatrix.row-${card}-subtitle`) }}
          </div>
          <div class="desc">{{ $t(`productMatrix.row-${card}-desc`) }}</div>
          <b-card
            v-for="i in 3"
            :key="i"
            class="item-desc-container"
            :class="`item-${i}`"
          >
            <div
              class="subtitle xl-title"
              v-html="$t(`productMatrix.${card}-t${i}`)"
            ></div>
            <div class="desc normal-text">
              {{ $t(`productMatrix.${card}-t${i}-intro2`) }}
            </div>
          </b-card>
        </div>
      </b-card>
    </div>
    <div class="container text-center">
      <button @click="handleClick" class="btn-custom">
        {{ $t("button.learnMore") }}
      </button>
    </div>
  </div>
</template>

<script>
import mainTitle from "../title"
import { outerDit } from "@/config/nav-config"
export default {
  name: "Product",
  data() {
    return {
      show: false,
    }
  },
  components: {
    mainTitle,
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
    handleClick() {
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
.product {
  width: 100%;
  padding-bottom: 60px;
  background: linear-gradient(
    45deg,
    rgba(92, 37, 51, 1) 0%,
    rgba(0, 26, 103, 1) 100%
  );
  .card-container {
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
  }
}
</style>
