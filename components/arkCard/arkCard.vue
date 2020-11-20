<template>
    <div>
        <b-card
            overlay
            :title= cardData
            title-tag="h1"
            text-variant="white"
            :img-src= imgSrc
            img-alt="Image"
            sub-title-text-variant="white"
            style="border: none;min-height: 100px;"
        >
            <b-card-text style="font-weight:normal;">{{ text }}</b-card-text>
        </b-card>
    </div>
</template>

<script>
    export default {
        props: {
            cardData: {
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

<style lang="scss" scoped>
    .card-img {
        min-height: 100px; 
        max-height: 140px;
    }
    .card-text {
        font-size: 30px;
    }
    @include media-breakpoint-down(xs) {
        .card-title {
            font-size: 24px;
            margin-bottom: 0.2rem;
        }
        .card-text {
            font-size: 18px;
        }
    }
    @include media-breakpoint-down(sm) {
        .card-img {
            min-height: 110px; 
        }
        .card-title {
            font-size: 28px;
            margin-bottom: 0.2rem;
        }
        .card-text {
            font-size: 20px;
        }
    }
    @include media-breakpoint-down(md) {
        .card-title {
            font-size: 30px;
            margin-bottom: 0.2rem;
        }
        .card-text {
            font-size: 24px;
        }
    }
    @media (max-width: 420px) {
        .card-title {
            font-size: 24px;
            margin-bottom: 0.2rem;
        }
        .card-text {
            font-size: 20px;
        }
    }
    
</style>