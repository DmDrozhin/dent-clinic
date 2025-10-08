<script setup lang="ts">
  import { computed, watchEffect } from 'vue';
  import { getImagePath } from '@/utils/assets.ts';
  import { useMaineStore } from '@/stores/main.store.ts';
  import { useDisplay } from 'vuetify';

  const store = useMaineStore();

  interface Props {
    options?: Record<string, unknown>;
  }
  // const backgroundImg = getImagePath('top-banner.jpg');
  const personPhoto = getImagePath('dent-life-oleg.jpg');
  const cardBg = getImagePath('instrument.png');
  const props = withDefaults(defineProps<Props>(), {
    options: () => ({})
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { xs, mdAndDown, mdAndUp, lg, xl, xlAndUp } = useDisplay();

  watchEffect(() => console.log('is XL', xl.value));

  const defaultOptions: Record<string, unknown> = {};
  const mainOptions = computed(() => ({
    ...props.options,
    ...defaultOptions,
    ...(store.currentMeta?.banner || {})
  }));
</script>

<template>
  <!-- class="banner faded-border-y" -->
  <div
    class="banner"
    :style="{ backgroundImage: `url(${backgroundImg})` }">
    <h1
      class="banner__slogan"
      v-html="mainOptions.slogan || 'Default slogan text'" />
    <v-card
      v-if="!xs"
      class="banner__card card"
      min-height="240"
      max-width="420"
      rounded="lg">
      <div class="card__left-side">
        <v-img
          class="card__image"
          :src="personPhoto"
          min-width="160" />
        <div
          v-if="mdAndUp"
          class="card__doctor-name">
          {{ mainOptions.doctor_name }}
        </div>
        <div
          v-if="mdAndUp"
          class="card__doctor-title">
          {{ mainOptions.doctor_title }}
        </div>
      </div>
      <div class="card__right-side">
        <div class="card__right-side-bg">
          <v-img
            class="card__image"
            :src="cardBg"
            min-width="160" />
        </div>
        <h3 class="card__title">Welcome to Dent-Life</h3>
        <div class="card__subtitle">{{ mainOptions.text }}</div>
      </div>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/settings.scss';
  .banner {
    min-height: 500px;
    background-size: cover;
    background-position: center 47%;
    position: relative;
    min-width: 320px;
    // filter: brightness(1.25) blur(2px);
    &__slogan-icon {
      width: 100%;
      flex-shrink: 0;
    }

    &__slogan {
      position: absolute;
      top: 28px;
      left: 50%;
      padding: 0 24px;
      transform: translateX(-50%);
      font-family: Jost, sans-serif;
      font-size: 2.5rem;
      font-weight: 700;
      background: rgba(0, 0, 0, 0.5);
      color: white;
      text-align: center;
      z-index: 100;
      width: 100%;
      text-wrap: pretty;
      // text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
      @include settings.respond-down(sm) {
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
    // &::after {
    //   content: '';
    //   position: absolute;
    //   inset: 0;
    //   backdrop-filter: blur(0px) brightness(1.25);
    //   background: rgba(255, 255, 255, 0.2); /* нужна прозрачность, чтобы фон был виден */
    //   // background: rgba(0, 0, 0, 0.3); /* нужна прозрачность, чтобы фон был виден */
    // }
    &__card {
      position: absolute;
      left: 50px;
      top: 52%;
      transform: translateY(-50%);
      transition: transform 0.3s ease;
      z-index: 100;
      @media screen and (max-width: 1040px) {
        top: auto;
        left: 32px;
        bottom: 32px;
        transform: none;
      }
      @include settings.respond-down(md) {
        // Использовать MD порог (768px)
        outline: 1px solid rgba(11, 88, 221, 0.393);
        outline-offset: 4px;
        top: auto;
        left: 32px;
        bottom: 32px;
        transform: none;
      }
      @include settings.respond-down(xs) {
        outline-offset: 4px;
        display: none;
      }
    }
    .card {
      display: flex;
      gap: 20px;
      background: rgba(255, 255, 255, 0.85);
      padding: 20px;
      background-size: 50%;
      background-position: right bottom;
      background-repeat: no-repeat;
      &__image {
        border-radius: 8px;
      }
      &__doctor-name {
        font-family: Jost, sans-serif;
        font-size: 0.875rem;
        margin-top: 8px;
        text-align: center;
        color: rgb(var(--v-theme-secondary));
        font-weight: 500;
      }
      &__doctor-title {
        font-family: Jost, sans-serif;
        font-size: 0.75rem;
        text-align: center;
        font-weight: 400;
      }
      &__right-side {
        position: relative;
      }
      &__title {
        font-family: Jost, sans-serif;
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 8px;
        color: rgb(var(--v-theme-secondary));
        line-height: 1;
      }
      &__subtitle {
        font-family: Jost, sans-serif;
        font-size: 0.875rem;
        font-weight: 400;
        overflow: auto;
        padding-right: 8px;
      }
      &__right-side-bg {
        position: absolute;
        inset: -20px;
        z-index: -1;
        opacity: 0.25;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }
    }
  }
  .faded-border {
    -webkit-mask-image:
      linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%),
      linear-gradient(to bottom, transparent 0, black 10%, black 90%, transparent 100%);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;

    mask-image:
      linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%),
      linear-gradient(to bottom, transparent 0, black 10%, black 90%, transparent 100%);
  }
  .faded-border-y {
    -webkit-mask-image: linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;

    mask-image: linear-gradient(to right, transparent 0, black 10%, black 90%, transparent 100%);
  }
  .faded-border-thin {
    -webkit-mask-image:
      linear-gradient(to right, transparent 0, black 3%, black 95%, transparent 100%),
      linear-gradient(to bottom, transparent 0, black 3%, black 95%, transparent 100%);
    -webkit-mask-composite: destination-in;
    mask-composite: intersect;

    mask-image:
      linear-gradient(to right, transparent 0, black 1%, black 99%, transparent 100%),
      linear-gradient(to bottom, transparent 0, black 3%, black 97%, transparent 100%);
  }
</style>
<style lang="scss">
  .banner {
    &__slogan {
      .slogan {
        position: relative;
      }
      .slogan::before {
        content: '';
        position: absolute;
        transition: transform 0.3s ease;
        top: 8px;
        right: 0;
        transform: translateX(23px);
        width: 24px;
        height: 24px;
        background: url('../assets/images/ui/logo-white-cross.svg') no-repeat center center;
        background-size: contain;
        filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.8));
      }
    }
  }
</style>
