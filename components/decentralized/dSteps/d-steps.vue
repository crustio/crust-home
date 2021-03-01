<template>
  <div>
    <b-row class="step-1">
      <b-col sm="2" md="4" lg="2" xl="1">
        <div class="order-1">
          01
        </div>
      </b-col>
      <b-col sm="10" md="8" lg="10" xl="11" class="step-margin-left">
        <div class="step"> {{$t(`decentralized.step-1-1`)}} </div>
        <div class="step-tip step-tip-1-1"> {{$t(`decentralized.step-1-2`)}} </div>
        <div class="step-tip"> {{$t(`decentralized.step-1-3`)}} </div>
      </b-col>
    </b-row>

    <b-row  class="step-2">
      <b-col sm="2" md="4" lg="2" xl="1">
        <div class="order-1 order-2">02</div>
      </b-col>
      <b-col sm="10" md="8" lg="10" xl="11" class="step-margin-left">
        <div class="step step-tip-2-1"> {{$t(`decentralized.step-2-1`)}} </div>
        <div class="step-tip step-tip-2-2"> {{$t(`decentralized.step-2-2`)}} </div>
      </b-col>
    </b-row>

    <b-row  class="step-3">
      <b-col sm="2" md="4" lg="2" xl="1">
        <div class="order-1">03</div>
      </b-col>
      <b-col sm="10" md="8" lg="10" xl="11" class="step-margin-left">
        <div class="step step-tip-3-1"> {{$t(`decentralized.step-3-1`)}} </div>
        <div class="step-tip step-tip-3-2"> {{$t(`decentralized.step-3-2`)}} </div>
      </b-col>
    </b-row>

    <b-row>
      <div class="btn-container">
        <button @click="handleExperienceClick" class="btn-custom btn-l">
          {{ $t("button.experienceCrustApps") }}
        </button>
         <button @click="handleBuildClick" class="btn-custom btn-r">
          {{ $t("button.buildOnCrust") }}
        </button>
      </div>
    </b-row>

  </div>
</template>
<script>
import dStep from '../dStep'
import { outerDit } from "@/config/nav-config"
export default {
  name: "dSteps",
  components: {
    dStep,
  },
  methods: {
    handleExperienceClick() {
      window.open(
        outerDit["crust apps"],
        "_blank"
      )
    },
    handleBuildClick() {
      window.open(
        outerDit[this.$store.state.locale === "en" ? "wiki_en" : "wiki_zh"],
        "_blank"
      )
    },
  }
}
</script>
<style lang="scss" scoped>
  @media screen and (max-width: 500px){
    .btn-container {
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 550px;
      .btn-l {
        margin-top: 30px;
      }
      .btn-r {
        margin-top: 30px;
      }
    }
    .step-btn {
      margin-top: 30px;
      text-align: left;
    }
    .step-margin-left {
      margin-top: 10px;
    }
    .btn-custom {
      width: 235px;
      height: 42px;
      padding: 0.5rem 0;
    }
    .order-1 {
      font-size: 80px;
      font-weight: 500;
      line-height: 70px;
      color: rgba(255, 255, 255, 0.15);
      text-align: center;
      margin-top: 20px;
    }
    .step {
      font-size: 1rem;
      font-family: nasalization;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 28px;
    }
    .step-tip {
      font-size: 14px;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 23px;
      word-break: break-all;
    }
    .step-tip-1-1 {
      margin-top: 7px;
    }
    .step-tip-2-1 {
      margin-bottom: 10px;
    }
    .step-tip-2-2 {
    }
    .step-tip-3-1 {
      margin-bottom: 10px;
    }
    .step-tip-3-2 {

    }
  }

  @media screen and (min-width: 501px) {
    .btn-container {
      display: flex;
      justify-content: left;
      width: 550px;
      margin-left: 15px;
      .btn-l {
        margin-top: 30px;
        margin-right: 20px;
      }
      .btn-r {
        margin-top: 30px;
      }
    }
    .step-1 {
      margin-top: 15px;
    }
    .step-btn {
      margin-top: 30px;
      text-align: left;
    }
    .step-margin-left {
      padding-left: 65px;
    }
    .btn-custom {
      width: 235px;
      height: 42px;
      padding: 0.5rem 0;
    }
    .order-1 {
      font-size: 80px;
      font-weight: 500;
      line-height: 70px;
      color: rgba(255, 255, 255, 0.15);
      text-align: left;
    }
    .order-2 {
      margin-top: 12px;
    }
    .step {
      font-size: 20px;
      font-family: nasalization;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 28px;
    }
    .step-tip {
      font-size: 14px;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 23px;
      word-break: break-all;
    }
    .step-tip-1-1 {
      margin-top: 7px;
    }
    .step-2 {
      margin-top: 15px;
    }
    .step-tip-2-1 {
      line-height: 50px;
    }
    .step-tip-2-2 {
      // line-height: 1px;
    }
    .step-3 {
      margin-top: 15px;
    }
    .step-tip-3-1 {
      line-height: 50px;
    }
    .step-tip-3-2 {
      // line-height: 1px;
    }
  }
</style>
