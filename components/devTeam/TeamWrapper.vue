<template>
  <div class="wrapper">
    <TeamItem v-for="team in teamList" :key="team.name" :team="team" />
  </div>
</template>
<script>
import TeamItem from "./TeamItem"
export default {
  name: "TeamWrapper",
  components: {
    TeamItem,
  },
  data() {
    return {
      teamList: [
        {
          name: "Sediment-tech",
          link:
            "https://www.linkedin.com/company/sediment-tech/?viewAsMember=true",
        },
        {
          name: "Socbay.io",
          link: "https://socbay.io/",
        },
        {
          name: "Clouderium",
          link: "https://www.linkedin.com/company/clouderium",
        },
        {
          name: "SkyeKiwi",
          link: "https://skye.kiwi/",
        },
      ],
      repoList: [
        {
          name: "Crust Network",
          link: "",
          desc: "a decentralized storage network of Web3.0 ecosystem",
        },
        {
          name: "Encrypted IPFS",
          link: "",
          desc:
            "an encrypted storage layer of IPFS that supports customized encryptor",
        },
      ],
    }
  },
  computed: {},
  watch: {},
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: 400px;
  display: flex;
  justify-content: space-around;
}
</style>
