<template>
  <div>
    <dStep
      :order="(`01`)"
      :step1="$t(`decentralized.step-1-1`)"
      :step2="$t(`decentralized.step-1-2`)"
      :step3="$t(`decentralized.step-1-3`)">
    </dStep>
    <dStep
      :order="(`02`)"
      :step1="$t(`decentralized.step-2-1`)"
      :step2="$t(`decentralized.step-2-2`)">
    </dStep>
    <dStep
      :order="(`03`)"
      :step1="$t(`decentralized.step-3-1`)"
      :step2="$t(`decentralized.step-3-2`)">
    </dStep>
    <b-row>
      <b-col cols="12" sm="6" md="6" lg="6" xl="6" class="step-btn">
        <button @click="handleExperienceClick" class="btn-custom">
          {{ $t("button.experienceCrustApps") }}
        </button>
      </b-col>
      <b-col cols="12"  sm="6" md="6" lg="6" xl="6" class="step-btn">
        <button @click="handleBuildClick" class="btn-custom">
          {{ $t("button.buildOnCrust") }}
        </button>
      </b-col>
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
  .step-btn {
    margin-top: 10px;
    text-align: center;
  }
</style>
