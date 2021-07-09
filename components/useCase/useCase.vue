<template>
  <div class="container-fluid">
    <div class="container no-padding">
      <div class="title-container">
        <div class="sub-title color-main flex-grow-1">
          {{ $t("usecase.title") }}
        </div>
        <button-prev class="usecase-prev" />
        <button-next class="usecase-next" />
      </div>
      <div class="timeline-container">
        <swiper class="swiper" :options="swiperOptions">
          <swiper-slide
            v-for="(item, i) in items"
            :key="item"
            class="image-wrapper"
          >
            <UsecaseItem :name="item" :index="i" />
          </swiper-slide>
          <!--        <div slot="pagination" class="swiper-pagination"></div>-->
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import UsecaseItem from "./usecaseItem"
import buttonPrev from "~/components/button/buttonPrev"
import buttonNext from "~/components/button/buttonNext"
export default {
  name: "Timeline",
  components: {
    buttonPrev,
    buttonNext,
    UsecaseItem,
  },
  data() {
    return {
      items: [
        "polkadot",
        "uniswap",
        "IPFS",
        "SkyeKiwi",
        "Socbay",
        "Decoo",
        "Realy",
      ],
      process: 0,
      timer: null,
      swiperOptions: {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 10,
        centeredSlides: false,
        centeredSlidesBounds: false,
        navigation: {
          nextEl: ".usecase-next",
          prevEl: ".usecase-prev",
        },
        // breakpoints: {
        //   0: {
        //     slidesPerView: 1,
        //   },
        //   800: {
        //     slidesPerView: 2,
        //   },
        //   1000: {
        //     slidesPerView: 3,
        //   },
        //   1280: {
        //     slidesPerView: 3,
        //   },
        // },
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
    padding-bottom: 60px;
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
        margin-bottom: 50px;

        .button-prev {
          margin-right: 50px;
        }
      }
    }
    .swiper-slide {
      width: 600px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .container-fluid {
    padding-bottom: 50px;
    background: $secondary;
    .container {
      display: flex;
      flex-direction: column;
      &.no-padding {
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      @media (min-width: 1270px) {
        max-width: 1270px;
      }

      .title-container {
        display: flex;
        align-items: center;
        .sub-title {
          text-align: center;
        }

        .button-prev,
        .button-next {
          display: none;
        }
      }

      .timeline-container {
        position: relative;

        .timeline-item {
          transform: scale(0.5);
          transform-origin: 0;
          height: 125px;
        }
      }
    }
    .swiper-slide {
      width: 100%;
    }
  }
}
</style>
