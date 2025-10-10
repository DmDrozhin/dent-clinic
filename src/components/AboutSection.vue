<script setup lang="ts">
  import { computed } from 'vue';
  import { useMaineStore } from '@/stores/main.store.ts';
  import { useSwiper } from '@/global/swiper/useSwiperScroll.js';

  const store = useMaineStore();
  const { handleProgress, gradientOpacity } = useSwiper();

  interface Props {
    options?: Record<string, unknown>;
  }

  const props = withDefaults(defineProps<Props>(), {
    options: () => ({})
  });

  const slides = import.meta.glob<{ default: string }>('@/assets/images/interior/*', {
    eager: true
  });

  const defaultOptions: Record<string, unknown> = {};

  const mainOptions = computed(() => ({
    ...props.options,
    ...defaultOptions,
    ...(store.currentAbout || {})
  }));
</script>

<template>
  <div class="section about">
    <div v-if="mainOptions?.title" class="section-header">
      <div class="section-header__icon">
        <v-img :src="store.userIconsMap['technology.svg']" alt="smile-tooth" />
      </div>
      <div class="section-header__wrapper">
        <h2 class="section-header__title">
          {{ mainOptions?.title || 'Про нас' }}
        </h2>
        <h3 class="section-header__sub-title">
          {{
            mainOptions?.subtitle ||
            'Ми працюємо, щоб кожен візит до стоматолога був комфортним, безболісним і результативним.'
          }}
        </h3>
      </div>
    </div>
    <div class="section__wrapper">
      <div class="section__left-side">
        <swiper-container
          v-if="Object.values(slides).length > 0"
          class="swiper-horizontal"
          ref="swiperEl"
          @swiperprogress="handleProgress"
          direction="horizontal"
          slides-per-view="auto"
          :breakpoints="{
            '1': {
              slidesPerView: 1,
              freeMode: { enabled: false }
            },
            '630': {
              slidesPerView: 'auto',
              freeMode: { enabled: true, momentum: false, momentumBounce: false }
            }
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
          :autoplay="{ delay: 5000 }">
          <swiper-slide
            v-for="(slide, idx, id) in slides"
            :key="`slide-key-${idx}`"
            class="swiper-horizontal__slide">
            <v-img
              v-if="slide.default"
              :class="`photo-${id}`"
              :src="slide.default"
              :key="idx"
              absolute
              cover
              position="center"
              alt="Dent-Life" />
          </swiper-slide>
        </swiper-container>
      </div>
      <div class="section__right-side">
        <div v-if="mainOptions.items?.length" class="list">
          <div class="list__item" v-for="(item, index) in mainOptions.items || []" :key="index">
            <div class="list__item-wrapper">
              <v-img
                v-if="item.image_url"
                class="list__item-image"
                :src="item.image_url"
                :width="item.image_size || 56"
                :max-width="item.image_size || 56"
                alt="reliable-team" />
              <h4 class="list__item-title">{{ item.title }}</h4>
              <v-img class="list__item-icon" :src="store.userIconsMap['check-green.svg']" alt="check-icon" />
            </div>
            <!-- <v-divider
              v-if="index < (mainOptions.items?.length || 0) - 1"
              class="my-3" /> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/settings.scss';
  .section-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 24px;
    margin-bottom: 24px;
    background: $primary-lighten5;
    @include settings.respond-down(sm) {
      padding: 24px 12px 32px 12px;
    }
    &__icon {
      padding: 8px;
      border-radius: 8px;
      border: 2px solid rgba($dent-icon, 0.5);
      min-width: 64px;
      height: 64px;
      background-color: $white;
    }
    &__title {
      padding: 0 24px;
      color: $black-lighten1;
      // text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
    }
    &__sub-title {
      padding: 0 24px;
      font-weight: 500;
      color: $black-lighten2;
    }
  }
  .section {
    min-height: 400px;
    padding: 16px;
      @include settings.respond-down(sm) {
        padding: 12px;
      }
    &__wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 32px 24px;
      // padding: 24px 12px;
      @include settings.respond-down(sm) {
        display: block;
        padding: 0;
      }
    }
    &__image {
      position: relative;
    }
    &__image::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba($white, 0.2);
    }
    // &__left-side {}
    // &__right-side {}
  }

  .list {
    height: 100%;
    max-height: 410px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: $primary-lighten6;
    padding: 24px;
    @include settings.respond-down(lg) {
      max-width: unset;
      max-height: unset;
      border-radius: 0;
    }
    &__item-wrapper {
      display: flex;
      align-items: center;
      gap: 20px;
      width: 100%;
      // temp
      border-radius: 12px;
      background-color: #fff;
      padding: 8px 16px;
    }
    &__item-image {
      width: 100%;
      flex-shrink: 0;
    }
    // &__item-title {}
    &__item-icon {
      flex-shrink: 0;
      width: 100%;
      max-width: 24px;
      margin-left: auto;
      align-self: baseline;
    }
  }
  .swiper-horizontal {
    max-width: 540px;
    @include settings.respond-down(sm) {
      margin-bottom: 32px;
    }
    &__slide {
      // width: 100% !important;
      // min-width: 240px;
      height: 408px;
      aspect-ratio: 4/3;
      position: relative;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.25);
      @include settings.respond-down(sm) {
        height: 350px;
      }
    }
  }
  swiper-container.swiper-horizontal::part(container) {
    width: 100%;
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
    background: rgba($black, 0.3);
    @include settings.respond-down(sm) {
      border: none;
    }
  }
</style>

<style lang="scss"></style>
