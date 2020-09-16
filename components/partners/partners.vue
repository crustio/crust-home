<template>
  <div class="container-fluid partners-wrapper" ref="scroller">
    <mainTitle :text="$t(`Partnerships.title`)"></mainTitle>
    <div class="container partners-container">
      <b-row
        align-h="start"
        cols="2"
        cols-xl="5"
        cols-lg="5"
        cols-md="4"
        cols-sm="2"
      >
        <b-col
          v-for="i in 24"
          :key="`part${i}`"
          class="image-wrapper"
          :class="{ show: process >= i }"
        >
          <div class="container-fluid bg-white img-box">
            <b-img
              fluid
              class="image"
              :src="`https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/partners/img${i}.png`"
              alt="Responsive image"
            ></b-img>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import mainTitle from "~/components/title"
export default {
  name: "Partner",
  data() {
    return {
      process: 0,
      timer: null,
    }
  },
  components: {
    mainTitle,
  },
  computed: {
    locale() {
      return this.$store.state.locale
    },
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
    scrollListener(scroller, clientH) {
      if (
        scroller.getBoundingClientRect().top - clientH < 0 &&
        this.process < 23
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
        if (this.process > 23) {
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
$bgColor: #f9fafb;
.partners-wrapper {
  background-color: $bgColor;
  .image-wrapper {
    visibility: hidden;
    padding: 20px 30px;

    .img-box {
      height: 125px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: all 0.2s ease;

      &:hover {
        box-shadow: 13px 11px 28px -8px rgba(0, 0, 0, 0.75);
      }
    }
    &.show {
      visibility: visible;
      animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s; /* don't forget to set a duration! */
    }
  }
}
</style>
