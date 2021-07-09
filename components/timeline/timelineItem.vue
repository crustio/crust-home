<template>
  <div class="timeline-item">
    <TimelineIcon class="timeline-item-icon" :class="`icon-index-${index}`">
    </TimelineIcon>
    <div class="timeline-item-date">
      <div class="timeline-item-date-year">{{ year }}</div>
      <div class="timeline-item-date-season">{{ season }}</div>
    </div>
    <div class="timeline-item-text-wrapper">
      <div class="sub-title">{{ subtitle }}</div>
      <div class="timeline-item-line"></div>
      <div class="timeline-item-desc">
        <div class="item" v-for="item in descs" :key="item">
          <span><span class="circle" />&nbsp;{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TimelineIcon from "@/assets/svgs/timeline-icon.svg?inline"
export default {
  name: "TimelineItem",
  components: {
    TimelineIcon,
  },
  props: {
    index: {
      type: Number,
      default: 0,
    },
    year: {
      type: String,
      default: "",
    },
    season: {
      type: String,
      default: "",
    },
    subtitle: {
      type: String,
      default: "",
    },
    descs: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
<style lang="scss" scoped>
.timeline-item {
  width: 240px;
  height: 450px;
  position: relative;
  cursor: default;
  overflow: visible;

  .timeline-item-icon {
    position: absolute;
    top: 0;
    left: 41px;
  }

  .icon-index-0 {
    transform: rotate(-55deg);
  }

  .icon-index-1 {
    transform: rotate(30deg);
  }

  .icon-index-2 {
    transform: rotate(-60deg);
  }

  .icon-index-3 {
    transform: rotate(55deg);
  }

  .icon-index-4 {
    transform: rotate(-14deg);
  }

  .icon-index-5 {
    transform: rotate(-55deg);
  }

  .timeline-item-date {
    position: absolute;
    top: 36px;
    display: flex;
    align-items: flex-end;
    color: #1f1f1f;

    .timeline-item-date-year {
      font-family: Orbitron-Regular_Black;
      font-size: 100px;
      letter-spacing: 0;
      text-align: center;
      line-height: 83px;
      border: 0 solid #1f1f1f;
      margin-right: 4px;
      -webkit-text-fill-color: #efedea;
      -webkit-text-stroke: 1.5px #1f1f1f;
    }

    .timeline-item-date-season {
      font-family: Orbitron-Regular;
      font-size: 24px;

      letter-spacing: 0;
      text-align: center;
      line-height: 24px;
    }
  }

  .timeline-item-text-wrapper {
    font-family: InterV_Semi-Bold;
    color: rgba(31, 31, 31, 0.75);
    letter-spacing: 0;
    text-align: left;
    position: absolute;
    top: 144px;
    left: 19px;
    overflow: visible;
    .timeline-item-desc {
      overflow: visible;
      padding-top: 15px;
      @media (max-width: 1200px) {
        font-size: 16px;
      }
    }
    .sub-title {
      display: flex;
      align-items: center;
      padding: 15px 0;
      height: 80px;
      font-size: 24px;
      line-height: 1.2em;
    }
    .item {
      margin-bottom: 5px;
      .circle {
        border-color: rgba(31, 31, 31, 0.75);
        margin-left: -15px;
      }
    }
  }

  .timeline-item-line {
    width: 100px;
    height: 8px;
    background: #ff6400;
    //position: absolute;
    //top: 160px;
    //left: 19px;
  }

  &:hover {
    .timeline-item-date {
      color: #ff6400;
      .timeline-item-date-year {
        -webkit-text-fill-color: unset;
        -webkit-text-stroke: unset;
      }
    }

    .timeline-item-icon {
      path {
        stroke: none;
        fill: rgba(255, 100, 0, 0.25);
      }
    }

    .timeline-item-text-wrapper {
      color: $mainColor;
      .circle {
        border-color: $mainColor;
      }
    }
  }
}
</style>
