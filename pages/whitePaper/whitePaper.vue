<template>
  <div class="whitePaper container-fluid">
    <client-only>
      <div>
        <div v-for="(pageNum, index) in pdfPageCount" :key="index">
          <pdf
            class="container"
            :src="pdfSrc"
            :page="pageNum"
            @loaded="handleLoaded"
          ></pdf>
        </div>
      </div>
    </client-only>.
    
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      pdfPageCount: 16,
      loading: true,
      progress: 0,
    }
  },
  computed: {
    pdfSrc() {
      let name = this.$route.name.toLowerCase()
      if (this.$store.state.locale === "en") {
        name += "_en"
      }
      return `/pdfs/${name}.pdf`
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
    })

  },
  methods: {
    handleLoaded() {
      this.progress++
      if (this.progress === this.pdfPageCount - 1) {
        this.$nuxt.$loading.finish()
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.whitePaper {
  .loading {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    position: absolute;
    z-index: 100;
  }
}
</style>
