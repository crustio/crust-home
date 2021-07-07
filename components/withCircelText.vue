<template>
  <div class="con">
    <span class="circle" />
    <span>
      {{ text }}
    </span>
  </div>
</template>
<script>
export default {
  name: "WithCercleText",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
}
</script>

<style lang="scss" scoped>
.con {

}
</style>
