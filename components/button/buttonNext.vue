<template>
  <div class="button-next" @click="onClick">
    <img :src="require('~/assets/images/button-next.png')" />
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
.button-next {
  outline: none;
  img {
    width: 43px;
  }
}

</style>
