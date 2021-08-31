<template>
  <div>
    <a
      v-b-tooltip.hover
      :href="team.link"
      class="image-wrapper"
      target="_blank"
      :title="`${team.name} Team`"
      @mouseenter="onImageHover"
      @mouseleave="onImageLeave"
    >
      <img
        :src="imgSrc || `/image/devteam/${team.name}.png`"
        :alt="team.name"
      />
    </a>
  </div>
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
  display: inline-block;
  img {
    width: 80px;
    @media screen and (max-width: 1200px) {
      width: 48px;
    }
  }
}
</style>
