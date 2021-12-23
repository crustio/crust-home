<template>
  <div id="content" class="main">
    <mainIndex class="item" />
   <!-- <decentralized class="item" />
     <Usecase class="item" />
    <Blogs class="item" />
    <timeline class="item" />
    <DevTeam class="item" />
    <partners class="item" /> -->
    <mainPage class="mainpage"></mainPage>
  </div>
</template>
<script>
import mainIndex from "~/components/mainIndex"
import timeline from "~/components/timeline"
import partners from "~/components/partners"
import decentralized from "~/components/decentralized"
import Usecase from "~/components/useCase"
import Blogs from "~/components/blogs"
import mainPage from "~/components/mainIndex/components/view.vue"
export default {
  components: {
    mainIndex,
    decentralized,
    timeline,
    partners,
    Usecase,
    Blogs,
    mainPage
  },
}
</script>

<style lang="scss" scoped>
.main {
  .item {
    /*padding: 30px;*/
  }
  @media screen and (min-width: 1140px){
    html{
      font-size: 12px;
    }
     .mainpage{
        position: absolute;
    width: 100%;
    top: 900px;
  }
  }
 
}
</style>
