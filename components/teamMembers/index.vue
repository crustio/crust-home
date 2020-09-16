<template>
  <div class="team-container">
    <mainTitle text="Team Members"> </mainTitle>
    <div class="container">
      <b-row align-h="center">
        <b-col
          xl="3"
          v-for="item in 7"
          :key="`member${item}`"
          class="align-items-stretch  d-flex"
        >
          <MemberItem :idx="item"
        /></b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import title from "~/components/title"
import MemberItem from "./memberItem"

export default {
  name: "TeamMembers",
  components: {
    mainTitle: title,
    MemberItem,
  },
  data() {
    return {}
  },
  mounted() {},
  methods: {},
  computed: {},
  watch: {},
}
</script>
<style scoped lang="scss">
.team-container {
  width: 100%;
  height: 100%;
  background-color: $bgColorTm;
}
</style>
