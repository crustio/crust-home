<template>
  <div class="main">
    <mainIndex class="item" />
    <description class="item" />
    <product class="item" />
    <timeline class="item" />
    <TeamMembers class="item" />
    <partners class="item" />
  </div>
</template>
<script>
import mainIndex from "~/components/mainIndex"
import description from "~/components/description"
import product from "~/components/product"
import timeline from "~/components/timeline"
import partners from "~/components/partners"
import TeamMembers from "~/components/teamMembers"
export default {
  components: {
    mainIndex,
    description,
    product,
    timeline,
    partners,
    TeamMembers,
  },
}
</script>

<style lang="scss" scoped>
.main {
  .item {
    padding: 30px;
  }
}
</style>
