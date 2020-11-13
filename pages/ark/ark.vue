<template>
  <div class="ark">
    <div class="main" id="content">
        <arkIndex class="item" />
    </div>
    <div class="container">
        <arkDescription />
        <div class="statistics">
            <arkCard 
                cardTitle= '300 PB'
                imgSrc= 'https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/ark-left.png'
                text= 'Total Storage'
                class="card-data" 
            />
            <arkCard 
                cardTitle= '400'
                imgSrc= 'https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/ark-right.png'
                text= 'Total Node'
                class="card-data" 
            />
        </div>
        <arkTable class="mt20" style="border-top: none;" />
    </div>
  </div>
</template>

<script>
    import arkIndex from "~/components/arkIndex"
    import arkCard from "~/components/arkCard"
    import arkTable from "~/components/arkTable"
    import arkDescription from "~/components/arkDescription"
    export default {
    components: {
        arkIndex,
        arkCard,
        arkTable,
        arkDescription
    },
}
</script>

<style lang="scss" scoped>
    .container {
        // padding: 0 10%;
        margin-top: 50px;
        .statistics {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .card-data:nth-of-type(2) {
                margin-left:30px;
            }
        }
        .mt20 {
            margin-top: 20px;
            .table thead th {
                border-top: none !important;
            }
        }
    }
    
</style>
