<template>
  <div class="container-fluid">
    <div class="container no-padding">
      <div class="title-container">
        <div class="sub-title color-main flex-grow-1">
          {{ $t("timeline.title") }}
        </div>
        <button-prev class="timeline-prev" />
        <button-next class="timeline-next" />
      </div>
      <div class="timeline-container">
        <div class="timeline-container-line"></div>
        <swiper class="swiper" :options="swiperOptions">
          <swiper-slide
            v-for="(item, i) in items"
            :key="item + 'item'"
            class="image-wrapper"
          >
            <timeline-item
              :year="$t(`timeline.${item}.year`)"
              :season="$t(`timeline.${item}.season`)"
              :subtitle="$t(`timeline.${item}.subtitle`)"
              :index="i"
              :descs="$t(`timeline.${item}.descs`)"
            ></timeline-item>
          </swiper-slide>
          <!--        <div slot="pagination" class="swiper-pagination"></div>-->
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import timelineItem from "./timelineItem"
import buttonPrev from "~/components/button/buttonPrev"
import buttonNext from "~/components/button/buttonNext"
export default {
  name: "Timeline",
  components: {
    buttonPrev,
    buttonNext,
    timelineItem,
  },
  data() {
    return {
      items: [
        "coreTeam",
        "prototyping",
        "alpha",
        "ark",
        "previewNetwork",
        "mainNet",
        "Edge Network",
        "ParaChain Unique STF Upgrades",
        "MPoW Storage Proof V2",
        "Scaled Network",
        "Data Computing",
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
          nextEl: ".timeline-next",
          prevEl: ".timeline-prev",
        },
        breakpoints: {
          0: {
            centeredSlides: true,
            centeredSlidesBounds: true,
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
.container-fluid {
  padding-top: 50px;
}
@media screen and (min-width: 1200px) {
  .container-fluid {
    background: $secondary;
    padding-top: 50px;
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

      .timeline-container {
        position: relative;

        .timeline-container-line {
          background: #ff6400;
          width: calc(100% - 19px);
          height: 1px;
          position: absolute;
          top: 224px;
          left: 19px;
        }
      }
    }
    .swiper-slide {
      width: 240px;
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

        .timeline-container-line {
          background: #ff6400;
          width: 100%;
          height: 1px;
          position: absolute;
          top: 174px;
          left: 0px;
        }

        .timeline-item {
          transform: scale(0.5);
          transform-origin: 0;
          height: 250px;
        }
      }
    }
    .swiper-slide {
      width: 120px;
    }
  }
}
</style>
