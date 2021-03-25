<template>
  <div class="button-prev" @click="onClick">
    <img :src="require('~/assets/images/button-pre.png')" />
  </div>
</template>
<script>
export default {
  props: {
    onClick: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
<style lang="scss" scoped>
.button-prev {
  outline: none;
  img {
    width: 43px;
  }
}
</style>
