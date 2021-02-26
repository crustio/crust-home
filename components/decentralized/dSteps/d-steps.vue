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
    <div class="btn-container">
      <button @click="handleExperienceClick" class="btn-custom">
        {{ $t("button.experienceCrustApps") }}
      </button>
      <button @click="handleBuildClick" class="btn-custom">
        {{ $t("button.buildOnCrust") }}
      </button>
    </div>
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
    .btn-container {
      display: flex;
      .btn-custom {
        margin-right: 30px;
      }
    }
</style>
