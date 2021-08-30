<template>
  <countTo :start-val="startVal" :end-val="endVal" :duration="3000" />
</template>
<script>
import countTo from "vue-count-to"
export default {
  name: "",
  components: {
    countTo,
  },
  data() {
    return {
      startVal: 0,
      endVal: 0,
    }
  },
  computed: {},
  watch: {},
  mounted() {
    // this is fake data, need to request api
    setTimeout(() => {
      this.endVal = 2303401205
    }, 1000)
  },
}
</script>
<style></style>
