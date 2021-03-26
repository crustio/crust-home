<template>
  <div class="d-cloud-card">
    <img :src="imgSrc" />
    <div class="title" v-html="title" :class="getZhcnCss()"></div>
    <div class="content" :class="getZhcnCss()">
      {{ content }}
    </div>
  </div>
</template>
<script>
export default {
  name: "DCloudCard",
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    imgSrc: {
      type: String,
      default: "",
    },
  },
  methods: {
    getZhcnCss() {
      if (this.$store.state.locale === "en") {
        return ''
      } else {
        return 'zh-cn'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.d-cloud-card {
  height: calc(100% - 20px);
  color: #1f1f1f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: $secondary;
  box-shadow: 4px 4px 15px 0 #d8d9d9;
  border-radius: 10px;
  padding: 34px 16px;
  flex-shrink: 1;
  cursor: default;
  margin: 10px 6px 10px 6px;

  &:hover {
    box-shadow: 4px 4px 15px 0 rgba(255, 100, 0, 0.5);
  }

  img {
    width: auto;
    height: auto;
    max-width: 70%;
    max-height: 70%;
    margin-bottom: 28px;
    align-self: center;
  }

  .title {
    font-family: InterV_Semi-Bold;
    font-size: 24px;
    color: #1f1f1f;
    letter-spacing: -1px;
    text-align: left;
    line-height: 29px;
    margin-bottom: 14px;
    &.zh-cn {
      font-size: 22px;
    }
  }

  .content {
    font-family: InterV;
    font-size: 14px;
    color: rgba(31, 31, 31, 0.75);
    letter-spacing: 0;
    text-align: left;
    line-height: 17px;
    flex-grow: 1;
    &.zh-cn {
      line-height: 22px;
    }

    @media screen and (max-width: 1200px) {
      font-size: 12px;
      line-height: 15px;
    }
  }
}
</style>
