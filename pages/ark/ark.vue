<template>
  <div class="ark">
    <div class="main" id="content">
        <arkIndex class="item" />
    </div>
    <div class="container">
        <div class="statistics">
            <arkCard />
            <arkCard />
        </div>
        <arkTable />
    </div>
  </div>
</template>

<script>
    import arkIndex from "~/components/arkIndex"
    import arkCard from "~/components/arkCard"
    import arkTable from "~/components/arkTable"
    export default {
    components: {
        arkIndex,
        arkCard,
        arkTable
    },
}
</script>

<style lang="scss" scoped>
    .container {
        padding: 0 10%;
        margin-top: 50px;
        .statistics {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
    }
</style>
