<template>
  <a
    :href="team.link"
    class="image-wrapper"
    target="_blank"
    @mouseenter="onImageHover"
    @mouseleave="onImageLeave"
  >
    <img :src="imgSrc || `/image/devteam/${team.name}.png`" :alt="team.name" />
  </a>
</template>
<script>
export default {
  name: "TeamItem",
  components: {},
  props: {
    team: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      imgSrc: "",
    }
  },
  computed: {},
  watch: {},
  methods: {
    onImageHover() {
      this.imgSrc = `/image/devteam/${this.team.name}_active.png`
    },
    onImageLeave() {
      this.imgSrc = `/image/devteam/${this.team.name}.png`
    },
  },
}
</script>
<style lang="scss" scoped>
.image-wrapper {
  width: 80px;
  display: inline-block;
}
</style>
