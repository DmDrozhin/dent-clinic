<script setup lang="ts">
import { useSwiper } from '@/global/swiper/useSwiperScroll.js';
import { computed } from 'vue';

interface Props {
  options?: Record<string, unknown>;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});
const { handleProgress, gradientOpacity } = useSwiper();

const defaultOptions: Record<string, unknown> = {};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mainOptions = computed(() => ({
  ...props.options,
  ...defaultOptions,
}));
</script>

<template>
  <div class="block">
    <swiper-container
      class="swiper-horizontal"
      ref="swiperEl"
      @swiperprogress="handleProgress"
      direction="horizontal"
      slides-per-view="auto"
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
      <swiper-slide v-for="(slide, idx) in 5" :key="`slide-key-${idx}`" class="slide">
        <div style="width: 450px; height: 250px; background-color: #ccc">dafsljdhfljasdh</div>
      </swiper-slide>
    </swiper-container>
  </div>
</template>

<style lang="scss" scoped>
.block {
  outline: 1px solid greenyellow;
}

swiper-container.swiper-horizontal::part(scrollbar) {
  margin-top: 24px;
}
swiper-container.swiper-horizontal::part(container) {
  width: 100%;
  &::before {
    opacity: v-bind('gradientOpacity.start');
  }
  &::after {
    opacity: v-bind('gradientOpacity.end');
  }
}
swiper-container.swiper-horizontal::part(button-prev) {
  opacity: v-bind('gradientOpacity.start');
}
swiper-container.swiper-horizontal::part(button-next) {
  opacity: v-bind('gradientOpacity.end');
}
// Buttons position
swiper-container.swiper-horizontal::part(button-prev),
swiper-container.swiper-horizontal::part(button-next) {
  top: calc(50% - 30px / 2);
}
</style>

<style lang="scss"></style>
