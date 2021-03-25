<template>
  <div class="container-fluid">
    <div class="container">
      <div class="title-container">
        <div class="sub-title color-main flex-grow-1">
          {{ $t("Partnerships.title") }}
        </div>
        <button-prev class="partner-prev" />
        <button-next class="partner-next" />
      </div>
      <div class="partner-container">
        <swiper class="swiper" :options="swiperOptions">
          <swiper-slide
            v-for="idx in 24"
            :key="`partner${idx}`"
            class="image-wrapper"
          >
            <div class="partner-container-img">
              <img
                :src="`https://crust-data.oss-cn-shanghai.aliyuncs.com/crust-home/assets/images/partners/img${idx}.png`"
                alt="Responsive image"
              />
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import buttonPrev from "~/components/button/buttonPrev"
import buttonNext from "~/components/button/buttonNext"
export default {
  name: "Partners",
  components: {
    buttonPrev,
    buttonNext,
  },
  data() {
    return {
      process: 0,
      timer: null,
      swiperOptions: {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 55,
        centeredSlides: false,
        centeredSlidesBounds: false,
        navigation: {
          nextEl: ".partner-next",
          prevEl: ".partner-prev",
        },
        breakpoints: {
          0: {
            centeredSlides: true,
            centeredSlidesBounds: true,
            spaceBetween: 20,
          },
          600: {
            slidesPerView: "auto",
            centeredSlides: false,
            centeredSlidesBounds: false,
          },
        },
      },
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>

@media screen and (min-width: 1200px) {
  .container-fluid {
    padding-bottom: 40px;
    background: $secondary;
    .container {
      display: flex;
      flex-direction: column;
      @media (min-width: 1270px) {
        max-width: 1270px;
      }

      .title-container {
        display: flex;
        align-items: center;
        margin-bottom: 25px;

        .button-prev {
          margin-right: 50px;
        }
      }

      .partner-container {
        .swiper {
          .swiper-slide {
            height: auto;
            display: flex;
            flex-grow: 0;
          }
        }

        .partner-container-img {
          width: 180px;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #efedea;
          border-radius: 10px;
          margin: 15px 4px 15px 4px;
          padding: 5px;

          &:hover {
            box-shadow: 4px 4px 15px 0 rgba(255, 100, 0, 0.5);
          }

          img {
            max-width: 150px;
            max-height: 60px;
          }
        }
      }
    }
    .swiper-slide {
      width: 150px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .container-fluid {
    padding-bottom: 0px;
    background: $secondary;
    .container {
      display: flex;
      flex-direction: column;
      @media (min-width: 1270px) {
        max-width: 1270px;
      }

      .title-container {
        display: flex;
        align-items: center;
        margin-bottom: 25px;

        .sub-title {
          text-align: center;
        }

        .button-prev,
        .button-next {
          display: none;
        }
      }

      .partner-container {
        .swiper {
          .swiper-slide {
            height: auto;
            display: flex;
            flex-grow: 0;
          }
        }

        .partner-container-img {
          width: 135px;
          height: 52px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #efedea;
          border-radius: 10px;
          margin: 15px 4px 15px 4px;
          padding: 5px;

          &:hover {
            box-shadow: 4px 4px 15px 0 rgba(255, 100, 0, 0.5);
          }

          img {
            max-width: 108px;
            max-height: 45px;
          }
        }
      }
    }
    .swiper-slide {
      width: 150px;
    }
  }
}

</style>
