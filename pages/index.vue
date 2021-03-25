<template>
  <div class="main" id="content">
    <mainIndex class="item" />
    <decentralized class="item" />
    <timeline class="item" />
    <TeamMembers class="item" />
    <partners class="item" />
  </div>
</template>
<script>
import mainIndex from "~/components/mainIndex"
import timeline from "~/components/timeline"
import partners from "~/components/partners"
import TeamMembers from "~/components/teamMembers"
import decentralized from "~/components/decentralized"
export default {
  components: {
    mainIndex,
    decentralized,
    timeline,
    partners,
    TeamMembers,
  },
}
</script>

<style lang="scss" scoped>
.main {
  .item {
    /*padding: 30px;*/
  }
}
</style>
