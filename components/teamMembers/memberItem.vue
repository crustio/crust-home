<template>
  <b-card align="center" class="member-item">
    <div class="top">
      <b-img
        :src="`https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/members/member${idx}.png`"
        width="60px"
        height="60px"
        :rounded="true"
      ></b-img>
      <div class="top-right">
        <b-card-title class="title">
          {{ $t(`teamMembers.members[${idx - 1}].name`) }}</b-card-title
        >
        <b-card-sub-title class="subtitle">
          {{ $t(`teamMembers.members[${idx - 1}].title`) }}</b-card-sub-title
        >
      </div>
    </div>
    <b-card-text class="text">
      {{ $t(`teamMembers.members[${idx - 1}].desc`) }}
    </b-card-text>
  </b-card>
</template>
<script>
export default {
  name: "MemberItem",
  props: {
    idx: "",
  },
  components: {},
  data() {
    return {}
  },
  computed: {
    imagePath() {
      return this.name + ".png"
    },
  },
  mounted() {},
  watch: {},
}
</script>
<style lang="scss" scoped>
.member-item {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-radius: 4px;
  margin-bottom: 25px;
  max-width: 100%;
  overflow: hidden;
  .title {
    color: $mainColor;
  }
  .subtitle {
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 300;
    color: $mainColor !important;
  }
  .text {
    color: #fefefe;
    text-align: left;
  }
  .card-text {
    word-wrap: break-word;
  }
  .top {
    display: flex;
    flex-direction: row;
    margin-bottom: 12px;
  }
  .top-right {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  }
}
</style>
