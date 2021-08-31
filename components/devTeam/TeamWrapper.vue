<template>
  <div class="wrapper">
    <div class="team-wrapper">
      <TeamItem v-for="team in teamList" :key="team.name" :team="team" />
    </div>
    <div class="repo-wrapper">
      <div>
        <a href="">Crust Network</a>
        <p>
          {{ $t("A decentralized storage network of Web3.0 ecosystem") }}
        </p>
      </div>
      <div>
        <a href="">Encrypted IPFS</a>
        <p>
          {{
            $t(
              "An encrypted storage layer of IPFS that supports customized encryptor"
            )
          }}
        </p>
      </div>
    </div>
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
  width: 450px;

  .team-wrapper {
    display: flex;
    justify-content: space-around;
    @media screen and (max-width: 1200px) {
      justify-content: space-between;
    }
  }

  .repo-wrapper {
    padding-top: 32px;
    color: #fff;
    font-family: InterV_Semi-Bold, InterV_Semi;

    a {
      font-style: italic;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      text-decoration: underline;
    }

    p {
      line-height: 17px;
    }
    @media screen and (max-width: 1200px) {
      a {
        font-size: 14px;
      }
      p {
        font-size: 12px;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
}
</style>
