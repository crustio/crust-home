<template>
  <div class="container-fluid ark-index">
    <div class="container">
      <div class="main-logo">
        <div class="logo"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.ark-index {
  width: 100%;
  // height: 100vh;
  background-image: url("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/ark.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(100vw * 0.46);
  background-position: center 0;
  .container {
    width: 641px;
    height: 400px;
    @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/ark.png");
    position: relative;
    @include media-breakpoint-down(xs) {
      @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/ark.png");
      position: relative;
      background-size: contain;
    }
  }
}
</style>
