<template>
  <div>
    <mainIndex />
    <description />
    <product />
    <timeline />
    <partners />
  </div>
</template>
<script>
import mainIndex from "~/components/mainIndex"
import description from "~/components/description"
import product from "~/components/product"
import timeline from "~/components/timeline"
import partners from "~/components/partners"
export default {
  components: { mainIndex, description, product, timeline, partners },
}
</script>

<style lang="scss" scoped></style>
