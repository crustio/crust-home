<template>
  <div class="video-container">
    <video
        ref="dmedia"
        autoplay
        controls
        class="video-js d-video"
        @click="handleTogglePlay"
        preload="auto">
      <source
          :src="videoLink"
          type="video/mp4"
      >
    </video>
    <!--    <img class="img-ele" :src="require('~/assets/images/tech.png')" v-if="!this.isPlaying">-->
  </div>
</template>
<script>
import Vue from "vue"
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video
export default {
  name: "autoVideo",
  data() {
    return {
      isPlaying: false
    }
  },
  mounted() {
    this.$refs.dmedia.addEventListener('play', this.handlePlay);
    this.$refs.dmedia.addEventListener('pause', this.handlePause);
  },
  computed: {
    videoLink() {
      return this.$store.state.locale === "en" ?
          "https://ipfs-hk.decoo.io/ipfs/QmS99gVeX5RyXThjMyp7NtXDQ4JUT6iDEsniF1S6sQuVPX" :
          "https://ipfs-hk.decoo.io/ipfs/QmTCcWgLFAU9Y8uK7oMonWBEh9nvscpS6rfAtKaRheZVmG"
    }
  },
  methods: {
    handlePlay() {
      this.isPlaying = true
    },
    handlePause() {
      this.isPlaying = false
    },
    handleTogglePlay(e){
      this.isPlaying = !this.isPlaying
      e.stopPropagation()
    }
  },
  watch: {
    "$store.state.locale" () {
        this.$refs["dmedia"].load()
    }
  }
}
</script>
<style lang="scss" scoped>
  .d-video {
    width: 90%;
    //max-width: 520px;
    height: auto;
    margin: auto;
    margin-left: 0;
    @media (max-width: 500px) {
      width: 100%
    }
  }
  .video-container {
    position: relative;
    align-self: center;
  }
  .img-ele {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    height: auto;
    transform: translate(-30%, -50%);
    @media (max-width: 500px) {
      transform: translate(-50%, -50%);
    }
  }
</style>
