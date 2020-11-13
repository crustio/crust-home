<template>
  <div class="container-fluid ark-index">
    <div class="container">
      <div class="main-logo">
        <div class="logo">
          <p class="main-text">The First Round Testnet of Crust Network</p>
          <div class="main-sub-text">
            <span>—— 300,000</span>
            <div class="main-sub-text-desc">
              <p>equivalent CRU rewards</p>
              <p>the end of November.</p>
            </div>
          </div>
          <p class="ark-bottom-text">Embark on an exciting new journey together, let's board the Ark and set sail!</p>
        </div>
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
  background-image: url("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/ark.png");
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(100vw * 0.46);
  background-position: center 0;
  position: relative;
  .container {
    @include media-breakpoint-down(xs) {
      @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/ark.png");
      position: relative;
      background-size: contain;
    }
    .logo {
      color: white;
      padding-top: 200px;
      .main-text {
        font-size: 50px;
        font-family: PingFang SC;
        font-weight: bold;
        color: #FFFFFF;
        line-height: 72px;
      }
      .main-sub-text {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        span {
          font-size: 60px;
          margin-top: -10px;
        }
        .main-sub-text-desc {
          font-size: 28px;
          font-family: PingFang SC;
          color: #FFFFFF;
          line-height: 18px;
          margin-left: 10px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
    .ark-bottom-text {
      position: absolute;
      width: 100%;
      bottom: 30px;
      left: 0;
      text-align: center;
      opacity: 0.7;
    }
  }
}
</style>
