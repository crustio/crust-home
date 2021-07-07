<template>
  <div id="content" class="main">
    <mainIndex class="item" />
    <decentralized class="item" />
    <timeline class="item" />
    <usecase class="item" />
    <DevTeam class="item" />
    <partners class="item" />
    <Usecase class="item" />
  </div>
</template>
<script>
import mainIndex from "~/components/mainIndex"
import timeline from "~/components/timeline"
import partners from "~/components/partners"
import decentralized from "~/components/decentralized"
import Usecase from "~/components/useCase"
export default {
  components: {
    mainIndex,
    decentralized,
    timeline,
    partners,
    Usecase,
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
