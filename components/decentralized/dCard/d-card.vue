<template>
  <div class="d-card-container">
    <img :src="imgSrc" class="image">
    <div class="title">{{ title }}</div>
    <div class="subTitle" v-html="subTitle"></div>
  </div>
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },
  },
}
</script>
<style lang="scss" scoped>
.d-card-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  .image {
    margin-bottom: 30px;
    height: 73px;
    object-fit: scale-down;
  }
  .title {
    font-size: 20px;
    font-weight: 500;
    color: #FFFFFF;
    text-align: center;
    margin-bottom: 20px;
  }
  .subTitle {
    font-size: 14px;
    @media (max-width: 500px) {
      width: 330px;
    }
    font-weight: 400;
    color: #FFFFFF;
  }
}
</style>
