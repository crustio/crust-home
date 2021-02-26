<template>
  <b-row>
    <b-col cols="2" class="order-container">
      <div class="order-1">{{order}}</div>
    </b-col>
    <b-col >
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
  }
  .step {
    height: 68px;
    padding-top: 20px;
    font-size: 20px;
    font-family: nasalization;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 28px;
  }
  .step-tip {
    height: 40px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 20px;
  }
</style>
