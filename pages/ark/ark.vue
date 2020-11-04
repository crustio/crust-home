<template>
  <div class="ark">
    <div class="main" id="content">
        <arkIndex class="item" />
    </div>
    <arkCard />
  </div>
</template>

<script>
    import arkIndex from "~/components/arkIndex"
    import arkCard from "~/components/arkCard"
    export default {
    components: {
        arkIndex,
        arkCard
    },
}
</script>

<style lang="scss" scoped>

</style>
