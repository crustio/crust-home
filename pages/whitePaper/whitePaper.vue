<template>
  <div class="whitePaper container-fluid">
    <client-only placeholder="Loading...">
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
    </client-only>
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
  mounted() {},
  methods: {
    handleLoaded() {
      this.progress++
      if (this.progress === this.pdfPageCount - 1) {
        this.loading = false
      }
    },
  },
  computed: {
    pdfSrc() {
      let name = this.$route.name.toLowerCase()
      if (this.$store.state.locale === "en") {
        name += "_en"
      }
      return require(`../../assets/pdfs/${name}.pdf`)
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
