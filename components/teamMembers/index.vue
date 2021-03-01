<template>
  <div class="team-container">
    <mainTitle :text="$t('teamMembers.title')"> </mainTitle>
    <div class="container swiper-father">
      <swiper class="swiper" :options="swiperOptions">
        <swiper-slide
          v-for="item in 7"
          :key="`member${item}`"
          class="align-items-stretch d-flex"
        >
          <MemberItem class="item" :idx="item" />
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination swiper-pagination-member"></div>
      </swiper>
      <div slot="button-prev" class="swiper-button-prev member-prev"></div>
      <div slot="button-next" class="swiper-button-next member-next"></div>
    </div>
  </div>
</template>
<script>
import MemberItem from "./memberItem"
import title from "~/components/title"

export default {
  name: "TeamMembers",
  components: {
    mainTitle: title,
    MemberItem,
  },
  data() {
    return {
      process: 0,
      timer: null,
      swiperOptions: {
        loop: true,
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        },
        spaceBetween: 24,
        navigation: {
          nextEl: ".member-next",
          prevEl: ".member-prev",
        },
        pagination: {
          el: ".swiper-pagination-member",
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  watch: {},
  mounted() {
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollListener)
  },
}
</script>
<style scoped lang="scss">
.team-container {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(92, 37, 51, 1) 0%,
    rgba(0, 26, 103, 1) 100%
  );
  .item {
    &.show {
      visibility: visible;
      animation: fadeInUp; /* referring directly to the animation's @keyframe declaration */
      animation-duration: 1s; /* don't forget to set a duration! */
    }
  }
}
.swiper-father {
  position: relative;
  .swiper-button-prev {
    outline: none;
    left: -80px;
    top: 100px;
    color: rgba(255, 255, 255, 0.2);
  }
  .swiper-button-next {
    right: -80px;
    top: 100px;
    outline: none;
    color: rgba(255, 255, 255, 0.2);
  }
  .swiper-button-prev:after {
    font-size: 60px;
  }
  .swiper-button-next:after {
    font-size: 60px;
  }
  .swiper-slide {
    height: auto;
  }
  .swiper-container {
    --swiper-theme-color: #999abc;
  }
  .swiper-pagination-bullets {
    bottom: 0;
  }
}
</style>
