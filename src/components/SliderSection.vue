<script setup lang="ts">
import { useSwiper } from '@/global/swiper/useSwiperScroll.js';
import { computed } from 'vue';
import { useMaineStore } from '@/stores/main.store.ts';
const store = useMaineStore();

interface Props {
  options?: Record<string, unknown>;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});
const { handleProgress, gradientOpacity } = useSwiper();
const pictures = import.meta.glob<{ default: string }>('@/assets/images/dent-life/*', {
  eager: true,
});

const defaultOptions: Record<string, unknown> = {};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mainOptions = computed(() => ({
  ...props.options,
  ...defaultOptions,
}));
</script>

<template>
  <div v-if="Object.values(pictures).length > 0" class="slider">
    <div v-if="store.currentSlider?.title" class="slider__header">
      <div class="slider__header-img">
        <v-img :src="store.userIconsMap['smile-tooth.svg']" alt="smile-tooth" />
      </div>
      <h2 class="slider__header-text">
        {{ store.currentSlider?.title || 'Default Title' }}
      </h2>
    </div>
    <swiper-container
      class="swiper-horizontal"
      ref="swiperEl"
      @swiperprogress="handleProgress"
      direction="horizontal"
      slides-per-view="auto"
      :breakpoints="{
        '1': {
          slidesPerView: 1,
          freeMode: { enabled: false },
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
        },
        '630': {
          slidesPerView: 'auto',
          freeMode: { enabled: true, momentum: false, momentumBounce: false },
          slidesOffsetBefore: 10,
          slidesOffsetAfter: 10,
        },
      }"
      free-mode
      :free-mode-momentum="false"
      :free-mode-momentum-bounce="false"
      :scrollbar="{ draggable: true, dragSize: 150 }"
      :navigation="true"
      :space-between="0"
      observer
      observe-slide-children
      touch-start-force-prevent-default
    >
      <swiper-slide
        v-for="(slide, idx, id) in pictures"
        :key="`slide-key-${idx}`"
        class="slider__slide"
      >
        <v-img
          v-if="slide.default"
          :class="`photo-${id}`"
          :src="slide.default"
          :key="idx"
          absolute
          cover
          :position="Number(id) === 2 ? 'center 10%' : 'center 35%'"
          alt="Dent-Life"
        />
        <!-- <v-img
          v-if="slide.default"
          :class="`photo-${id}`"
          :src="slide.default"
          :key="idx"
          min-width="350"
          width="100%"
          max-width="450"
          max-height="230"
          cover
          :position="Number(id) === 2 ? 'center 10%' : 'center 35%'"
          alt="Dent-Life"
        /> -->
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/settings.scss';
.slider {
  // outline: 1px solid greenyellow;
  &__header {
    padding: 0 24px;
    @include settings.respond-down(sm) {
      padding: 0 12px;
    }
    margin-bottom: 16px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
  &__header-img {
    padding: 8px;
    border-radius: 8px;
    border: 2px solid rgba($dent-icon, 0.5);
    min-width: 64px;
    height: 64px;
    // box-shadow: 0 8px 30px 3px #09c7c772;
    background-color: #fff;
  }
  &__header-text {
    padding: 0 24px;
    color: $white;
    // border-left: 3px solid rgba($secondary, 0.5);
  }
  &__slide {
    height: 350px;
    aspect-ratio: 16/9;
    position: relative;
  }
}
// Gradient overlay
swiper-container.swiper-horizontal::part(scrollbar) {
  margin-top: 24px;
}
$gradient-color-h: $black-lighten3;
swiper-container.swiper-horizontal::part(container) {
  width: 100%;
  &::before {
    opacity: v-bind('gradientOpacity.start');
    background: linear-gradient(90deg, $gradient-color-h 0%, transparent 100%);
  }
  &::after {
    opacity: v-bind('gradientOpacity.end');
    background: linear-gradient(270deg, $gradient-color-h 0%, transparent 100%);
  }
}
// NAV Buttons
swiper-container.swiper-horizontal::part(button-prev) {
  opacity: v-bind('gradientOpacity.start');
}
swiper-container.swiper-horizontal::part(button-next) {
  opacity: v-bind('gradientOpacity.end');
}
swiper-container.swiper-horizontal::part(button-prev),
swiper-container.swiper-horizontal::part(button-next) {
  top: calc(50% - 30px / 2);
}
</style>

<style lang="scss"></style>
