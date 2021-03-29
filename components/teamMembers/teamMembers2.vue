<template>
  <div class="container-fluid">
    <div class="container">
      <div class="title-container">
        <div class="sub-title color-main flex-grow-1">
          {{ $t("teamMembers.title") }}
        </div>
        <button-prev class="team-member-prev" />
        <button-next class="team-member-next" />
      </div>
      <div class="member-container">
        <swiper class="swiper" :options="swiperOptions">
          <swiper-slide
            navigation
            v-for="idx in 7"
            :key="`member${idx}`"
            class="image-wrapper"
          >
            <team-member-item
              :name="$t(`teamMembers.members[${idx - 1}].name`)"
              :title="$t(`teamMembers.members[${idx - 1}].title`)"
              :desc="$t(`teamMembers.members[${idx - 1}].desc`)"
              :index="idx"
            ></team-member-item>
          </swiper-slide>
          <!--        <div slot="pagination" class="swiper-pagination"></div>-->
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import TeamMemberItem from "./teamMemberItem"
import buttonPrev from "~/components/button/buttonPrev"
import buttonNext from "~/components/button/buttonNext"
export default {
  name: "TeamMember",
  components: {
    buttonPrev,
    buttonNext,
    TeamMemberItem,
  },
  data() {
    return {
      process: 0,
      timer: null,
      swiperOptions: {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 80,
        centeredSlides: false,
        centeredSlidesBounds: false,
        navigation: {
          nextEl: ".team-member-next",
          prevEl: ".team-member-prev",
        },
        breakpoints: {
          0: {
            centeredSlides: true,
            centeredSlidesBounds: true,
            spaceBetween: 35,
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
    padding-bottom: 100px;
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
      width: 246px;
    }
  }
}

@media screen and (max-width: 1200px) {
  .container-fluid {
    padding-bottom: 30px;
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
        margin-bottom: 0px;
        .sub-title {
          text-align: center;
        }

        .button-prev,
        .button-next {
          display: none;
        }
      }

      .member-container {
        .member-item {
          transform: scale(0.8);
          transform-origin: 0;
        }
      }
    }
    .swiper-slide {
      width: 200px;
    }
  }
}
</style>
