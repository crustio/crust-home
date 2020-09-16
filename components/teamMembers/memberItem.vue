<template>
  <b-card align="center" class="bg-dark member-item">
    <b-img
      :src="`https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/members/member${idx}.png`"
      fluid
      width="150px"
      height="150px"
      :rounded="true"
    ></b-img>
    <b-card-title class="title">
      {{ $t(`teamMembers.members[${idx - 1}].name`) }}</b-card-title
    >
    <b-card-sub-title class="subtitle">
      {{ $t(`teamMembers.members[${idx - 1}].title`) }}</b-card-sub-title
    >
    <b-card-text class="text-white text-sm-center">
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
  margin-bottom: 25px;
  .title {
    color: $mainColor;
  }
  .subtitle {
    padding-bottom: 10px;
    font-size: 14px;
    font-weight: 300;
    color: $mainColor !important;
  }
}
</style>
