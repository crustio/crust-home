<template>
  <div id="content" class="main">
    <mainIndex class="item" />
    <decentralized class="item" />
    <Usecase class="item" />
    <Blogs class="item" />
    <timeline class="item" />
    <DevTeam class="item" />
    <partners class="item" />
  </div>
</template>
<script>
import mainIndex from "~/components/mainIndex"
import timeline from "~/components/timeline"
import partners from "~/components/partners"
import decentralized from "~/components/decentralized"
import Usecase from "~/components/useCase"
import Blogs from "~/components/blogs"
export default {
  components: {
    mainIndex,
    decentralized,
    timeline,
    partners,
    Usecase,
    Blogs,
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
