<template>
  <div>
    <div class="backed-crust">
      <div class="backed-crust-block">
        <div class="backed-title">{{ $t(`backed`) }}</div>
        <div class="backed-item">
          <div class="backed-item-img" v-for="item in 15" :key="item">
            <div class="backed-item-bg"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
}
</script>

<style lang="scss">
.backed-crust {
  background: #fdf7f3;
  .backed-crust-block {
    padding-top: 72px;
    margin: 0 auto;
    width: 1140px;
    .backed-title {
      text-align: center;
      margin: 0px 0 74px;
      height: 44px;
      font-size: 48px;
      font-family: "Montserrat-blod", "Source Han Sans CN-blod";
      font-weight: bold;
      color: #1f1f1f;
      line-height: 50px;
    }
    .backed-item {
      display: flex;
      flex-wrap: wrap;
      .backed-item-img {
        width: 200px;
        height: 100px;
        border-radius: 15px;
        margin-bottom: 25px;
        border: 1px solid #e2e2e2;
        margin-right: 34px;
        &:nth-child(5n) {
          margin-right: 0;
        }
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        &:nth-child(1) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/W3.png")
              no-repeat center;
            background-size: 146px 50px;
          }
        }
        &:nth-child(2) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/substrate.png")
              no-repeat center;
            background-size: 184px 40px;
          }
        }
        &:nth-child(3) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/DFG@3x.png")
              no-repeat center;
            background-size: 139px 51px;
          }
        }
        &:nth-child(4) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/NGC@3x.png")
              no-repeat center;
            background-size: 127px 41px;
          }
        }
        &:nth-child(5) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/HASH@3x.png")
              no-repeat center;
            background-size: 154px 16px;
          }
        }
        &:nth-child(6) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/SevenX@3x.png")
              no-repeat center;
            background-size: 148px 40px;
          }
        }
        &:nth-child(7) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/IOSG@3x.png")
              no-repeat center;
            background-size: 110px 51px;
          }
        }
        &:nth-child(8) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/Bitcoin.png")
              no-repeat center;
            background-size: 170px 24px;
          }
        }
        &:nth-child(9) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/比升资本.png")
              no-repeat center;
            background-size: 77px 55px;
          }
        }
        &:nth-child(10) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/共识实验室.png")
              no-repeat center;
            background-size: 168px 44px;
          }
        }
        &:nth-child(11) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/CHAIN.png")
              no-repeat center;
            background-size: 93px 80px;
          }
        }
        &:nth-child(12) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/buidler.png")
              no-repeat center;
            background-size: 170px 51px;
          }
        }
        &:nth-child(13) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/orgin.png")
              no-repeat center;
            background-size: 107px 85px;
          }
        }
        &:nth-child(14) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/太和资本.png")
              no-repeat center;
            background-size: 145px 43px;
          }
        }
        &:nth-child(15) {
          .backed-item-bg {
            background: url("../../../assets/img/7-Strong investor backing/水滴资本.png")
              no-repeat center;
            background-size: 49px 90px;
          }
        }
        .backed-item-bg {
          width: 184px;
          height: 86px;
        }
      }
    }
  }
}
</style>