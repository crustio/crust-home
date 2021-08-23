<template>
  <div class="wrapper" @mouseover="onImageHover" @mouseleave="onImageLeave">
    <div class="logo">
      <img
        :src="imgSrc || `/image/usecases/${name}.png`"
        :alt="name"
        width="100"
        @click="handleClick($t(`usecase.${name}.link`))"
      />
    </div>
    <div class="desc">{{ $t(`usecase.${name}.desc`) }}</div>
    <button
      class="btn-custom"
      @click="handleClick($t(`usecase.${name}.learnMore`))"
    >
      {{
        ["polkadot", "IPFS", "Realy", "Decoo"].indexOf(name) === -1
          ? $t("button.learnMore")
          : $t("button.visitMore")
      }}
    </button>
  </div>
</template>
<script>
export default {
  name: "UsecaseItem",
  components: {},
  props: {
    name: {
      type: String,
      default: "",
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
      this.imgSrc = `/image/usecases/${this.name}_active.png`
    },
    onImageLeave() {
      this.imgSrc = `/image/usecases/${this.name}.png`
    },
    handleClick(link) {
      window.open(link, "_blank")
    },
  },
}
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 210px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 68px;
  background: #efedea;
  box-shadow: 4px 4px 15px 0px #d8d9d9;
  border-radius: 10px;
  margin: 10px;
  @media (max-width: 1200px) {
    width: 90%;
    padding: 0 20px;
    margin: 20px;
  }
  .logo {
    cursor: pointer;
  }
  .desc {
    font-size: 16px;
    color: #6f6f6f;
    line-height: 19px;
    text-align: center;
  }
  .btn-custom {
    background-color: #afafaf;
    color: #fff;
    width: 200px;
  }
  &:hover {
    box-shadow: 4px 4px 15px 0px rgba(255, 100, 0, 0.5);
    .btn-custom {
      background-color: $mainColor;
      color: #fff;
    }
  }
}
</style>
