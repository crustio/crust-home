<template>
  <div class="team-container" ref="scroller">
    <mainTitle :text="$t('teamMembers.title')"> </mainTitle>
    <div class="container">
      <b-row
        cols="1"
        cols-xl="4"
        cols-lg="4"
        cols-md="3"
        align-h="center"
      >
        <b-col
          v-for="item in 7"
          :key="`member${item}`"
          class="align-items-stretch d-flex"
        >
          <MemberItem
            class="item"
            :idx="item"
        /></b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import title from "~/components/title"
import MemberItem from "./memberItem"

export default {
  name: "TeamMembers",
  components: {
    mainTitle: title,
    MemberItem,
  },
  data() {
    return {
      process: 0,
      timer: null,
    }
  },
  computed: {},
  watch: {},
  mounted() {
    this.emitScrollListener()
  },
  methods: {
    emitScrollListener() {
      const scroller = this.$refs.scroller
      const scrollerWrapperScrollTop = scroller.getBoundingClientRect().top
      const clientH =
        window.innerHeight || document.documentElement.clientHeight
      if (scrollerWrapperScrollTop - clientH < 0 && this.process < 7) {
        return this.start()
      }
      window.addEventListener("scroll", () => {
        this.scrollListener(scroller, clientH)
      })
    },
    scrollListener(target, clientH) {
      if (
        target.getBoundingClientRect().top - clientH < 0 &&
        this.process < 7
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
        if (this.process > 7) {
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
<style scoped lang="scss">
.team-container {
  width: 100%;
  height: 100%;
  background-color: $bgColorTm;
  .item {
    &.show {
      visibility: visible;
      animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s; /* don't forget to set a duration! */
    }
  }
}
</style>
