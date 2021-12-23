<template>
  <div>
    <div class="time-crust">
      <div class="time-crust-block">
        <div class="time-title-map" v-html="$t(`time.title`)"></div>
        <div class="time-line">
          <div class="time-line-top time-pc">
            <div class="time-line-fixed"></div>
            <div class="time-line-top-trun">
              <div v-html="icons[0]" @click="reduce"></div>
            </div>
            <div class="time-line-top-content" ref="time-line-top-content">
              <div
                @click="setActive(index)"
                :class="{
                  'time-line-content-item': true,
                  'time-line-content-item-active': active == index,
                }"
                v-for="(item, index) in timeLines"
                :key="index"
              >
                <div class="time-line-content-item-icon">
                  <div class="time-line-content-item-icon-icon"></div>
                </div>
                <div class="time-line-content-item-info">
                  {{ $t(`time.${item.time}`) }}
                </div>
              </div>
            </div>
            <div class="time-line-top-trun">
              <img src="../../../assets/img/arrow@3x.png" alt="" @click="add" />
            </div>
          </div>
          <div class="time-mobile">
            <swiper class="experience-swiper" :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in timeLines"
          :key="index"
          class="image-wrapper"
        >
          <div
          class="time-item-block"
        >
         {{$t(`time.${item.time}`)}}
        </div>
        </swiper-slide>
               <div slot="pagination" class="swiper-pagination"></div>
      </swiper>
          </div>
          <div class="time-line-bottom">
            <div
              class="time-line-bottom-title"
              v-html="$t(`time.${timeLines[active].title}`)"
            ></div>
            <div class="time-line-bottom-info">
              <div v-for="(item, index) in timeLines[active].list" :key="index">
                <div>•</div><div>{{ $t(`time.${item}`) }}</div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import arrow from "@/assets/img/arrow.svg?raw"
export default {
  data() {
    return {
       swiperOptions: {
       loop: true,
        slidesPerView: "auto",
        // autoplay:true,
        // spaceBetween: 10,
        centeredSlides: false,
        centeredSlidesBounds: false,
        pagination: {
    el: '.swiper-pagination',
  }},
      icons: [arrow],
      active: 5,
      timeLines: [
        {
          time: "time1",
          title: "title1",
          list: ["list11", "list12"],
        },
        {
          time: "time2",
          title: "title2",
          list: ["list21", "list22"],
        },
        {
          time: "time3",
          title: "title3",
          list: ["list31", "list32", "list33"],
        },
        {
          time: "time4",
          title: "title4",
          list: ["list41", "list42"],
        },
        {
          time: "time5",
          title: "title5",
          list: ["list51", "list52"],
        },
        {
          time: "time6",
          title: "title6",
          list: ["list61", "list62"],
        },
        {
          time: "time7",
          title: "title7",
          list: ["list71", "list72"],
        },
        {
          time: "time8",
          title: "title8",
          list: ["list81", "list82"],
        },
        {
          time: "time9",
          title: "title9",
          list: ["list91", "list92"],
        },
        {
          time: "time10",
          title: "title10",
          list: ["list101", "list102"],
        },
      ],
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.$refs["time-line-top-content"].scrollLeft = (this.active - 1) * 240
      console.log(this.$refs["time-line-top-content"].scrollLeft)
    })
  },
  methods: {
    setActive(index) {
      this.active = index
      let num = 0

      let status =
        this.$refs["time-line-top-content"].scrollLeft > (this.active - 3) * 240
    let distance=Math.abs(this.$refs["time-line-top-content"].scrollLeft-(this.active - 3) * 240)
        var timer = setInterval(() => {
          num += 10
          if (distance < num) {
            clearInterval(timer)
          }
        if (status) {
          this.$refs["time-line-top-content"].scrollLeft -= 10
        } else {
          this.$refs["time-line-top-content"].scrollLeft += 10
        }
      }, 10)
      // this.$refs["time-line-top-content"].scrollLeft = (this.active - 3) * 220
    },
    add() {
      if (this.active != this.timeLines.length - 1) {
        this.active += 1
        let num = 0
        if(this.active<3){
          return
        }
        let distance=Math.abs(this.$refs["time-line-top-content"].scrollLeft-(this.active - 3) * 240)
        console.log(distance)
        var timer = setInterval(() => {
          num += 10
          if (distance < num) {
            clearInterval(timer)
          }
          this.$refs["time-line-top-content"].scrollLeft +=10
        }, 10)
      }
    },
    reduce() {
      if (this.active != 0) {
        this.active -= 1
        let num = 0
        let distance=Math.abs(this.$refs["time-line-top-content"].scrollLeft-(this.active - 3) * 240)
        var timer = setInterval(() => {
          num += 10
          if (distance < num) {
            clearInterval(timer)
          }
          this.$refs["time-line-top-content"].scrollLeft -=10
        }, 10)
      }
    },
  },
}
</script>

<style lang="scss">
@media screen and (max-width: 1140px) {
  .swiper-slide {
				-webkit-transition: transform 1.0s;
				-moz-transition: transform 1.0s;
				-ms-transition: transform 1.0s;
				-o-transition: transform 1.0s;
				-webkit-transform: scale(0.7);
				transform: scale(0.7);
			}
			.swiper-slide-active,.swiper-slide-duplicate-active {
				-webkit-transform: scale(1);
				transform: scale(1);
			}
        .image-wrapper{
          width: 33.3%;
      height: 28.6rem;
      padding-top: 4.5rem;
      }
  .time-pc{
    display: none!important;
  }
.time-crust {
  background: #fdf7f3;
  .time-crust-block {
    padding-top: 72px;
    margin: 0 auto;

    .time-title-map {
      text-align: center;
      font-family: "Montserrat-blod","Source Han Sans CN-blod";
      font-weight: bold;
      color: #1f1f1f;
      line-height:1.58rem;
      height: 1.58rem;
font-size: 2rem;
color: #1F1F1F;
    }
    .time-line {
     width: 23.33rem;
height: 21.42rem;
background: #FFFFFF;
box-shadow: 0rem 0rem 1rem 0rem rgba(252, 120, 35, 0.05);
border-radius: 1rem;
.time-item-block{
  width: 6.67rem;
height: 6.67rem;
background: #FC7823;
border-radius: 1rem;
}
      .time-line-bottom {
        margin-top: 51px;
        .time-line-bottom-title {
          height: 1rem;
          font-size: 1.33rem;
          color: #FC7823;
          line-height: 1rem;
          font-family: "Montserrat-blod","Source Han Sans CN-blod";
          font-weight: bold;
          text-align: center;
        }
        .time-line-bottom-info {
          >div {
            display: flex;
            font-family: Montserrat,"Source Han Sans CN";
            font-weight: 400;
font-size: 0.83rem;
color: #000000;
line-height: 1.7rem;
            // margin-bottom: 16px;
            div {
&:first-child{
  margin-right: 5px;
}

            }
          }
        }
      }
    }
  }
}
}
@media screen and (min-width: 1140px) {
  .time-mobile{
    display: none!important;
  }
.time-crust {
  background: #fdf7f3;
  .time-crust-block {
    padding-top: 72px;
    margin: 0 auto;
    width: 1240px;

    .time-title-map {
      margin: 72px auto 64px;
      text-align: center;
      height: 37px;
      font-size: 48px !important;
      font-family: "Montserrat-blod","Source Han Sans CN-blod";
      font-weight: bold;
      color: #1f1f1f;
      line-height: 7px;
    }
    .time-line {
      width: 1240px;
      height: 440px;
      background: #ffffff;
      box-shadow: 0px 5px 5px 0px rgba(4, 0, 0, 0.02);
      border-radius: 10px;
      // margin-bottom: 40px;
      .time-line-top {
        display: flex;
        position: relative;
        .time-line-top-trun {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 48px;
          height: 48px;
          background: #fdf7f3;
          border-radius: 50%;
          margin: 64px 36px 0;
          &:hover {
            border: 1px solid #fc7823;
          }
          div,
          img {
            cursor: pointer;
            width: 28px;
            height: 31px;
          }
        }
        .time-line-fixed {
          position: absolute;
          top: 87px;
          left: 50%;
          margin-left: -500px;
          width: 1000px;
          height: 2px;
          background: #fc7823;
          content: "";
        }
        .time-line-top-content {
          width: 1000px;
          overflow-x: scroll;
          &::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 0px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 10px;
          }
          display: flex;
          // justify-content: space-around;
          padding-top: 50px;
          .time-line-content-item {
            z-index: 999;
            flex-basis: 146px;
            flex-shrink: 0;
            height: 125px;
            cursor: pointer;
            border-radius: 10px;
            margin: 0 47px;
            .time-line-content-item-icon {
              margin: 24px auto 32px;
              width: 28px;
              height: 28px;
              background: #fdede2;
              border-radius: 50%;
              display: flex;
              justify-content: center;
              align-items: center;
              .time-line-content-item-icon-icon {
                width: 16px;
                height: 16px;
                background: #fc7823;
                border-radius: 50%;
                margin: auto auto;
              }
            }
            .time-line-content-item-info {
              margin: 0 auto;
              text-align: center;
              height: 17px;
              font-size: 20px;
              font-family: Montserrat,"Source Han Sans CN";
              font-weight: 500;
              color: #1f1f1f;
              line-height: 7px;
            }
          }
        }
        .time-line-content-item-active {
          background: #fc7823;
          .time-line-content-item-info {
            color: #ffffff !important;
          }
        }
      }
      .time-line-bottom {
        margin-top: 51px;
        display: flex;
        padding-left: 116px;
        .time-line-bottom-title {
          width: 474px;
          height: 93px;
          font-size: 48px;
          font-family: "Montserrat-blod","Source Han Sans CN-blod";
          font-weight: bold;
          color: #fc7823;
          line-height: 60px;
          margin-right: 20px;
        }
        .time-line-bottom-info {
          margin-top: 16px;
          >div {
            display: flex;
            // height: 18px;
            font-size: 18px;
            font-family: Montserrat,"Source Han Sans CN";
            font-weight: 400;
            color: #000000;
            line-height: 34px;
            // margin-bottom: 16px;
            div {
&:first-child{
  margin-right: 5px;
}

            }
          }
        }
      }
    }
  }
}
}
</style>