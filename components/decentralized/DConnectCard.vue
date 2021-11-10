<template>
  <div class="d-connect-card">
    <div class="title" v-html="title" :class="getZhcnCss()"></div>
    <div class="content">
      <!-- <div class="content-top">
        <img :src="require('~/assets/images/icon-content-top.png')" />
      </div> -->
      <img class="img-content" :src="imgSrc" />
      <div>
        <div class="content-font">{{ content1 }}</div>
        <!-- <div class="content-font">{{ content2 }}</div> -->
      </div>
    </div>
    <div class="content-bottom">
      <div class="dec-top-right">
        <button class="btn-custom btn-center" @click="click">
          <i class="icon-play" v-html="iconPlay"></i>{{ $t("button.learnMore") }}
        </button>
      </div>
      <div class="content-font-footer">{{ content2 }}</div>
    </div>
  </div>
</template>
<script>
import IconPlay from "@/assets/svgs/icon-play.svg?raw"

export default {
  name: "DConnectCard",
  data() {
    return {
      iconPlay: IconPlay,
    }
  },
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
    click: {
      type: Function,
      default: () => {
        console.log('haha')
      }
    }
  },
  methods: {
    getZhcnCss() {
      if (this.$store.state.locale === "en") {
        return 'en'
      } else {
        return 'zh-cn'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.d-connect-card {
  height: 100%;
  color: #1f1f1f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 20px;
  background: $secondary;
  border: 1px solid #ff6400;
  border-radius: 10px;
  cursor: default;
  @media screen and (max-width: 1200px) {
    padding: 12px 20px;
  }
  .title {
    font-family: InterV_Semi-Bold;
    font-size: 20px;
    // letter-spacing: -1px;
    text-align: center;
    margin-bottom: 6px;
    // height: 72px;
    &.en {
      white-space: nowrap;
    }
    // @media screen and (max-width: 1200px) {
    //   font-size: 18px;
    //   letter-spacing: -0.75px;
    //   margin-bottom: 11px;
    //   height: auto;
    // }
  }
  .content {
    display: flex;
    flex-direction: column;
    font-family: Courier;
    font-size: 16px;
    letter-spacing: 0;
    text-align: center;
    word-break: break-all;
    background: transparent;
    flex-grow: 1;
    height: 250px;

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
  .img-content{
    // position: relative;
    // left: -26px;
    // width: calc(100% + 52px);
    // max-width: calc(100% + 52px);
    // width: 120px;
    height: 120px;
    margin: 20px auto;
    @media screen and (max-width: 1200px) {
      left: -20px;
      width: calc(100% + 40px);
      max-width: calc(100% + 52px);
    }
  }

  .btn-custom {
    border: 2px solid $secondary;
    padding-left: 20px;
    padding-right: 20px;
    &.btn-right {
      width: 200px;
      padding: 0.5rem 0;
      margin-bottom: 1rem;
    }
    &:hover {
      color: #afafaf !important;
      /deep/ svg {
        fill: #afafaf !important;
      }
    }
  }

  .dec-top-right {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    max-width: 600px;
    position: relative;
  }

  .icon-play {
    /deep/ svg {
      margin-right: 8px;
      margin-bottom: 2px;
      width: 16px;
      height: 16px;
      fill: white;
    }
  }

  .content-font-footer {
    text-align: right;
    display: block;
    height: 10px;
  }
}
</style>
