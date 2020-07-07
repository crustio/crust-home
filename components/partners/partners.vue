<template>
  <div class="container-fluid partners-wrapper" ref="scroller">
    <mainTitle :text="$t(`Partnerships.title`)"></mainTitle>
    <div class="container partners-container">
      <b-row>
        <b-col
          v-for="i in 8"
          :key="`part${i}`"
          class="image-wrapper"
          :class="{ show: process >= i }"
          cols="6"
          lg="3"
          md="3"
          xl="3"
          sm="6"
        >
          <div class="container-fluid">
            <b-img
              class="image"
              :src="
                require(`../../assets/images/Partner0${i}${
                  locale === 'en' && i === 5 ? 'en' : ''
                }.png`)
              "
              fluid
              fluid-grow
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
  },
}
</script>

<style lang="scss" scoped>
$bgColor: #f9fafb;
.partners-wrapper {
  background-color: $bgColor;
  padding-bottom: 100px;
  .image-wrapper {
    padding: 10px;
    visibility: hidden;
    &.show {
      visibility: visible;
      animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s; /* don't forget to set a duration! */
    }
    .image {
      border: 2px solid #fff;
      background: #fff;
      cursor: pointer;
      transition: all 0.2s ease;
      &:hover {
        border-color: #f3f4f7;
      }
    }
  }
}
</style>
