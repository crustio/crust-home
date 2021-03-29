<template>
  <div class="member-item" :class="getZhcnCss()">
    <div class="member-item-img">
      <div class="hover-hidden" :class="'member-item-img-' + index"></div>
      <div class="hover-show" :class="'member-item-img-' + index + '-hover'"></div>
    </div>
    <div class="member-item-desc flex-grow-1" :class="getZhcnCss()">{{ desc }}</div>
    <div class="member-item-line"></div>
    <div class="member-item-name">{{ name }}</div>
    <div class="member-item-title">{{ title }}</div>
  </div>
</template>
<script>
export default {
  name: "TeamMemberItem",
  components: {},
  props: {
    name: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    desc: {
      type: String,
      default: "",
    },
    index: {
      type: Number,
      default: 0,
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
.member-item {
  width: 246px;
  height: 476px;
  cursor: default;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  color: #1f1f1f;
  &.zh-cn {
    height: 454px;
  }

  .member-item-img {
    height: 235px;
    margin-bottom: 22px;
    position: relative;
    &:hover {
      .hover-hidden {
        opacity: 0;
        pointer-events: none;
      }
      .hover-show {
        opacity: 1;
      }
    }
  }

  @for $i from 1 through 7 {
    .member-item-img-#{$i} {
      background: url("~assets/images/members-" + $i + ".png");
      background-size: cover;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 1;
      pointer-events: all;
    }
  }

  @for $i from 1 through 7 {
    .member-item-img-#{$i}-hover {
      background: url("~assets/images/members-" + $i + "-hover.png");
      background-size: cover;
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0;
      pointer-events: none;
    }
  }

  .member-item-desc {
    font-family: InterV;
    font-size: 14px;
    color: rgba(31, 31, 31, 0.75);
    letter-spacing: 0;
    line-height: 17px;
    &.zh-cn {
      line-height: 22px;
    }
  }

  .member-item-name {
    font-family: InterV_Semi-Bold;
    font-size: 24px;
    letter-spacing: 0;
    line-height: 29px;
    text-transform: uppercase;
  }

  .member-item-title {
    font-family: InterV;
    font-size: 16px;
    letter-spacing: 0;
    line-height: 20px;
    text-transform: uppercase;
  }

  .member-item-line {
    width: 100%;
    height: 4px;
    background: #1f1f1f;
    margin: 6px 0 6px 0;
  }
}
</style>
