<template>
  <div class="container-fluid ark-index">
    <div class="container">
      <div class="main-bg">
        <div class="bg">
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
    .bg {
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
    @include media-breakpoint-down(xl) {
      .bg {
        padding-top: 250px;
        .main-text {
          font-size: 54px;
          line-height: 24px;
        }
        .main-sub-text {
          span {
            font-size: 60px;
            margin-top: 25px;
          }
          .main-sub-text-desc {
            font-size: 36px;
            line-height: 24px;
            margin-left: 6px;
            margin-top: 35px;
          }
        }
      }
      .ark-bottom-text {
        bottom: 35px;
        line-height: 18px;
        font-size: 18px;
      }
    }
    @include media-breakpoint-down(lg) {
      .bg {
        padding-top: 200px;
        .main-text {
          font-size: 40px;
          line-height: 24px;
        }
        .main-sub-text {
          span {
            font-size: 40px;
            margin-top: 25px;
          }
          .main-sub-text-desc {
            font-size: 28px;
            line-height: 10px;
            margin-left: 6px;
            margin-top: 35px;
          }
        }
      }
      .ark-bottom-text {
        bottom: 25px;
        line-height: 18px;
        font-size: 18px;
      }
    }
    @include media-breakpoint-down(md) {
      .bg {
        padding-top: 150px;
        .main-text {
          font-size: 34px;
          line-height: 24px;
        }
        .main-sub-text {
          span {
            font-size: 34px;
            margin-top: 25px;
          }
          .main-sub-text-desc {
            font-size: 26px;
            line-height: 14px;
            margin-left: 6px;
            margin-top: 25px;
          }
        }
      }
      .ark-bottom-text {
        bottom: 18px;
        line-height: 18px;
        font-size: 16px;
      }
    }
    @include media-breakpoint-down(sm) {
      .bg {
        padding-top: 110px;
        .main-text {
          font-size: 25px;
          line-height: 24px;
        }
        .main-sub-text {
          span {
            font-size: 25px;
            margin-top: 20px;
          }
          .main-sub-text-desc {
            font-size: 20px;
            line-height: 5px;
            margin-left: 6px;
            margin-top: 24px;
          }
        }
      }
      .ark-bottom-text {
        bottom: 15px;
        line-height: 18px;
        font-size: 16px;
      }
    }
    @include media-breakpoint-down(xs) {
      @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/ark.png");
      min-height: calc(100vw * 0.6);
      .bg {
        padding-top: 110px;
        .main-text {
          font-size: 25px;
          line-height: 24px;
        }
        .main-sub-text {
          span {
            font-size: 25px;
            margin-top: 10px;
          }
          .main-sub-text-desc {
            font-size: 20px;
            line-height: 5px;
            margin-left: 6px;
            margin-top: 15px;
          }
        }
      }
      .ark-bottom-text {
        bottom: 15px;
        line-height: 18px;
        font-size: 14px;
      }
    }
    @media (max-width: 420px) {
      @include bgImage("https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/ark.png");
      min-height: calc(100vw * 0.86);
      .bg {
        padding-top: 90px;
        .main-text {
          font-size: 22px;
          line-height: 24px;
        }
        .main-sub-text {
          span {
            font-size: 21px;
            margin-top: 10px;
          }
          .main-sub-text-desc {
            font-size: 15px;
            line-height: 5px;
            margin-left: 6px;
            margin-top: 15px;
          }
        }
      }
      .ark-bottom-text {
        bottom: 5px;
        line-height: 14px;
        font-size: 12px;
        text-align: center;
        padding: 0 5%;
      }
    }
    
  }
}
</style>
