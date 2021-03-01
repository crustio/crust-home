<template>
  <b-row align-h="center">
    <b-col sm="2" md="4" lg="2" xl="3">
      <div class="order-1">{{order}}</div>
    </b-col>
    <b-col class="step-container" sm="10" md="7" lg="7" xl="9">
      <div class="step"> {{step1}} </div>
      <div class="step-tip"> {{step2}} </div>
      <div class="step-tip"> {{step3}} </div>
    </b-col>
  </b-row>
</template>
<script>
export default {
  props: {
    order: {
      type: String,
      default: "",
    },
    step1: {
      type: String,
      default: "",
    },
    step2: {
      type: String,
      default: "",
    },
    step3: {
      type: String,
      default: "",
    },
  },
}
</script>
<style lang="scss" scoped>
  .order-container {
    margin-right: 25px;
    min-width: 130px;
  }
  .order-1 {
    padding-left: 10px;
    font-size: 80px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.15);
    text-align: center;
  }
  .step-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .step {
    margin-bottom: 10px;
    font-size: 20px;
    font-family: nasalization;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 28px;
  }
  .step-tip {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 23px;
    word-break: break-all;
  }
</style>
