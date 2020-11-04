<template>
  <div class="timeline-wrapper container-fluid" ref="timeLine">
    <mainTitle :text="$t(`timeline.title`)"></mainTitle>
    <div class="timeline-container-web">
      <div class="line-container" :class="{ show: process > 0 }"></div>
      <div class="container timeline">
        <div
          v-for="(item, key) in items"
          :key="item + 'item'"
          class="timeline-item"
          :class="[{ bottom: key % 2 === 1, show: process >= key }]"
        >
          <div v-if="key % 2 === 0" class="text-wrapper">
            <div class="title xl-title">
              {{ $t(`timeline.${item}.title`) }}
            </div>
            <!-- <iframe src="circle1.svg"></iframe> -->
            <div class="desc" v-html="$t(`timeline.${item}.subtitle`)"></div>
          </div>
          <div class="img-wrapper"></div>
          <div v-if="key % 2 === 1" class="text-wrapper">
            <div class="title xl-title">
              {{ $t(`timeline.${item}.title`) }}
            </div>
            <div class="desc" v-html="$t(`timeline.${item}.subtitle`)"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="timeline-container-m container">
      <div class="line-container"></div>
      <div class="item-row" v-for="(item, n) in items" :key="item">
        <div class="col-wrapper">
          <div v-if="n % 2 === 0" class="text-wrapper">
            <div class="title xl-title">
              {{ $t(`timeline.${item}.title`) }}
            </div>
            <div class="desc" v-html="$t(`timeline.${item}.subtitle`)"></div>
          </div>
        </div>
        <div cols="4" class="col-wrapper">
          <div class="bg-wrapper"></div>
        </div>
        <div cols="4" class="col-wrapper">
          <div v-if="n % 2 === 1" class="text-wrapper">
            <div class="title xl-title">
              {{ $t(`timeline.${item}.title`) }}
            </div>
            <div class="desc" v-html="$t(`timeline.${item}.subtitle`)"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mainTitle from "~/components/title"
export default {
  name: "Timeline",
  components: {
    mainTitle,
  },
  data() {
    return {
      items: ["coreTeam", "prototyping", "alpha", "ark", "mainNet"],
      process: 0,
      timer: null,
    }
  },
  mounted() {
    this.emitScrollListener()
  },
  methods: {
    emitScrollListener() {
      const timeLineWrapper = this.$refs.timeLine
      const timelineWrapperScrollTop = timeLineWrapper.getBoundingClientRect()
        .top
      const clientH =
        window.innerHeight || document.documentElement.clientHeight
      if (timelineWrapperScrollTop - clientH < 0 && this.process < 16) {
        return this.start()
      }
      window.addEventListener(
        "scroll",
        () => {
          this.scrollListener(timeLineWrapper, clientH)
        }
      )
    },
    scrollListener(target, clientH) {
      if (
        target.getBoundingClientRect().top - clientH < 0 &&
        this.process < 16
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
        if (this.process > 15) {
          clearInterval(this.timer)
        }
      }, 100)
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollListener)
    console.log("removeList")
  },
}
</script>

<style lang="scss" scoped>
@include media-breakpoint-up(sm) {
  .timeline-wrapper {
    .timeline-container-m {
      display: none;
    }

    .timeline-container-web {
      padding: 0;
      padding-bottom: 50px;
      position: relative;

      .line-container {
        background: linear-gradient(
          to top,
          rgb(211, 163, 77) 0%,
          rgb(178, 87, 19) 52%,
          rgb(89, 112, 163) 100%
        );
        width: 0;
        height: 1px;
        position: absolute;
        top: 263px;
        z-index: -1;
        &.show {
          width: 100%;
          transition: width 2s linear;
        }
      }

      .timeline {
        margin-top: -130px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .timeline-item {
          visibility: hidden;
          &:nth-child(2n) {
            &.show {
              visibility: visible;
              animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
              animation-duration: 1s; /* don't forget to set a duration! */
            }
          }
          &:nth-child(2n + 1) {
            &.show {
              visibility: visible;
              animation: fadeInDown; /* referring directly to the animation's @keyframe declaration */
              animation-duration: 1s; /* don't forget to set a duration! */
            }
          }

          .text-wrapper {
            height: 60px;
            width: auto;
          }

          .title {
            font-size: 32px;
            line-height: 40px;
            color: $mainColor;
            font-family: "078MKSD_MC";
          }

          .img-wrapper {
            width: 50px;
            height: 109px;
            @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/timeline-active");
          }
          &:nth-child(2n) {
            margin-top: 239px;
            .img-wrapper {
              @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/timeline-bottom-active");
            }
          }
          &:nth-child(4) {
            .img-wrapper {
              background-color: red;
              @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/timeline-bottom");
            }
          }
          &:nth-child(5) {
            .img-wrapper {
              @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/timeline");
            }
          }
        }
      }
    }
  }
}
@include media-breakpoint-down(sm) {
  .timeline-wrapper {
    padding-bottom: 60px;
    .timeline-container-web {
      display: none;
    }
    .timeline-container-m {
      display: flex;
      width: 100%;
      flex-direction: column;
      justify-content: space-around;
      position: relative;
      .line-container {
        position: absolute;
        width: 2px;
        height: 100%;
        z-index: -1;
        background: linear-gradient(
          to top,
          rgb(211, 163, 77) 0%,
          rgb(178, 87, 19) 52%,
          rgb(89, 112, 163) 100%
        );
        left: 50%;
      }
      .item-row {
        height: 8rem;
        display: flex;
        &:nth-child(2n) {
          .bg-wrapper {
            transform-origin: calc(50% + 1px) 50%;
            transform: rotate(180deg);
          }
        }
        .col-wrapper {
          flex: 1;
          display: flex;
          &:nth-child(2) {
            width: 7rem;
            flex: 0 0 7rem;
            .bg-wrapper {
              @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/timeline-active-v");
              background-repeat: no-repeat;
              background-size: 80%;
              width: 100%;
              height: 100%;
            }
          }
          .text-wrapper {
            z-index: 2;
            align-self: center;
            width: 100%;
            .title {
              text-align: center;
              font-family: "078MKSD_MC";
              font-size: 1.5rem;
              color: $mainColor;
            }
            .desc {
              text-align: center;
              font-size: 0.8rem;
            }
          }
        }
        &:nth-child(5),
        &:nth-child(6) {
          .col-wrapper {
            .bg-wrapper {
              @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/timeline-v");
              background-repeat: no-repeat;
              background-size: 80%;
            }
          }
        }
      }
    }
  }
}
</style>
