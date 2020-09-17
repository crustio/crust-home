<template>
  <div class="container-fluid crust" ref="scroller">
    <main-title :text="$t('crust.sub')"></main-title>
    <div class="container">
      <div class="crust-desc normal-text">
        <span class="font-weight-bold">CRUST</span>{{ $t("crust.content.text1") }}
      </div>
      <b-row class="card-container container">
        <!--        <b-card-group deck>-->
        <!--          -->
        <!--        </b-card-group>-->
        <b-col
          v-for="(item, i) in items"
          :key="item"
          sm="12"
          md="12"
          lg="4"
          xl="4"
        >
          <b-card
            :class="{ show: process > i }"
            :title="$t(`crust.${item}.title`)"
          >
            <template v-slot:header>
              <b-img
                :src="`https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/${item}.png`"
                center
                fluid
                alt=""
              />
            </template>
            <b-card-text>
              {{ $t(`crust.${item}.desc`) }}
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import title from "~/components/title"
export default {
  components: {
    mainTitle: title,
  },
  data() {
    return {
      items: ["TEE", "MPoW", "GPoS"],
      process: 0,
      timer: null,
    }
  },
  mounted() {
    this.emitScrollListener()
  },
  methods: {
    emitScrollListener() {
      const scroller = this.$refs.scroller
      const scrollerWrapperScrollTop = scroller.getBoundingClientRect().top
      const clientH =
        window.innerHeight || document.documentElement.clientHeight
      if (scrollerWrapperScrollTop - clientH < 0 && this.process < 16) {
        return this.start()
      }
      window.addEventListener("scroll", () => {
        this.scrollListener(scroller, clientH)
      })
    },
    scrollListener(target, clientH) {
      if (
        target.getBoundingClientRect().top - clientH < 0 &&
        this.process < 5
      ) {
        this.start()
      }
    },
    start() {
      if (this.timer !== null) {
        return
      }
      this.timer = setInterval(() => {
        this.process++
        if (this.process > 5) {
          clearInterval(this.timer)
        }
      }, 100)
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollListener)
  },
}
</script>

<style lang="scss" scoped>
.crust {
  width: 100%;
  margin-bottom: 30px;
  @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/descBg");
  background-position: left 50px;
  background-size: contain;
  @include media-breakpoint-down(lg) {
    background: none;
  }
  .container {
    .card-container {
      margin-top: 30px;
      padding-right: 0;
    }
    .card {
      border: none;
      background-color: rgba(255, 255, 255, 0);
      visibility: hidden;
      &.show {
        visibility: visible;
        animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
        animation-duration: 1s; /* don't forget to set a duration! */
      }
      .card-header {
        background-color: rgba(255, 255, 255, 0);
        border: none;
      }
      .card-title {
        text-align: center;
        font-size: 20px;
        line-height: 28px;
        font-weight: 600;
        min-height: 56px;
      }
      .card-text {
        text-align: left;
        color: rgba(65, 72, 93, 1);
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
}
</style>
