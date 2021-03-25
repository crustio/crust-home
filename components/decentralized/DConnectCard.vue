<template>
  <div class="d-connect-card">
    <div class="title" v-html="title"></div>
    <div class="content">
      <div class="content-top">
        <img :src="require('~/assets/images/icon-content-top.png')" />
      </div>
      <div class="content-bottom">
        <img :src="require('~/assets/images/icon-content-bottom.png')" />
        <div>
          <div>{{ content1 }}</div>
          <div>{{ content2 }}</div>
        </div>
      </div>
    </div>
    <img :src="imgSrc" />
  </div>
</template>
<script>
export default {
  name: "DConnectCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    content1: {
      type: String,
      default: "",
    },
    content2: {
      type: String,
      default: "",
    },
    imgSrc: {
      type: String,
      default: "",
    },
  },
}
</script>
<style lang="scss" scoped>
.d-connect-card {
  height: 100%;
  color: #1f1f1f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 26px;
  background: $secondary;
  border: 1px solid #ff6400;
  border-radius: 10px;
  cursor: default;
  @media screen and (max-width: 1200px) {
    padding: 12px 20px;
  }
  .title {
    font-family: InterV_Semi-Bold;
    font-size: 24px;
    letter-spacing: -1px;
    text-align: left;
    margin-bottom: 6px;
    @media screen and (max-width: 1200px) {
      font-size: 18px;
      letter-spacing: -0.75px;
      margin-bottom: 11px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    font-family: Courier;
    font-size: 16px;
    letter-spacing: 0;
    text-align: left;
    word-break: break-all;
    background: transparent;
    flex-grow: 1;

    @media screen and (max-width: 1200px) {
      font-size: 12px;
      letter-spacing: 0;
      line-height: 14px;
    }

    .content-top {
      padding: 0 8px;
      box-shadow: 4px 4px 15px 0 #d8d9d9;
      background: #d8d8d8;
      border-radius: 10px 10px 0 0;
      img {
        width: 24px;
      }
    }

    .content-bottom {
      box-shadow: 4px 4px 15px 0 #d8d9d9;
      background: $secondary;
      border-radius: 0 0 10px 10px;
      display: flex;
      padding: 8px;
      flex-grow: 1;
      cursor: auto;
      img {
        width: 5px;
        height: 14px;
        margin-right: 2px;
      }
    }
  }
  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
