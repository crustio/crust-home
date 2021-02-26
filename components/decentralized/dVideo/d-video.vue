<template>
   <video
      controls
      class="video-js d-video"
      preload="auto">
      <source
        src="https://ipfs.io/ipfs/QmdupR3YAC2maPSwB76xzpKBiqDF2jj5nEfTHvEkxZL6d9"
        type="video/mp4"
      >
    </video>
</template>
<script>
import Vue from "vue"
import Video from 'video.js'
import 'video.js/dist/video-js.css'
Vue.prototype.$video = Video
export default {
  name: "dVideo",
}
</script>
<style lang="scss" scoped>
  .d-video {
    width: 100%;
    height: 100%;
  }
</style>
