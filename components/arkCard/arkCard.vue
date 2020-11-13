<template>
    <div>
        <b-card
            overlay
            :title= cardTitle
            title-tag="h1"
            text-variant="white"
            :img-src= imgSrc
            img-alt="Image"
            sub-title-text-variant="white"
            style="border: none;"
        >
            <b-card-text style="font-size: 30px;font-weight:normal;">{{ text }}</b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        props: {
            cardTitle: {
                type: String,
                default: '300'
            },
            subTitle: {
                type: String,
                default: ''
            },
            imgSrc: {
                type: String,
                default: 'https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/ark-left.png'
            },
            text: {
                type: String,
                default: 'Total Storage'
            }
        },
        data() {
            return {

            }
        }
    }
</script>

<style lang="scss">
</style>