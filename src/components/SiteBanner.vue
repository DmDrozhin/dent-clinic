<script setup lang="ts">
import { computed } from 'vue';
import { getImagePath } from '@/utils/assets.ts';
import { useMaineStore } from '@/stores/main.store.ts';
const store = useMaineStore();

interface Props {
  options?: Record<string, unknown>;
}
const backgroundImg = getImagePath('top-banner-girl-2.jpg');
const personPhoto = getImagePath('dent-life-oleg.jpg');
const cardBg = getImagePath('instrument.png');
const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});

const defaultOptions: Record<string, unknown> = {};
const mainOptions = computed(() => ({
  ...props.options,
  ...defaultOptions,
  ...(store.currentMeta?.banner || {}),
}));
</script>

<template>
  <div class="banner faded-border-thin" :style="{ backgroundImage: `url(${backgroundImg})` }">
    <h1 class="banner__slogan" v-html="mainOptions.slogan || 'Default slogan text'" />
    <v-card class="banner__card card" min-height="240" max-width="420" rounded="lg" color="white">
      <div class="card__left-side">
        <v-img class="card__image" :src="personPhoto" min-width="160" />
        <div class="card__doctor-name">{{ mainOptions.doctor_name }}</div>
        <div class="card__doctor-title">{{ mainOptions.doctor_title }}</div>
      </div>
      <div class="card__right-side">
        <div class="card__right-side-bg">
          <v-img class="card__image" :src="cardBg" min-width="160" />
        </div>
        <h3 class="card__title">Welcome to Dent-Life</h3>
        <p class="card__subtitle">{{ mainOptions.text }}</p>
      </div>
    </v-card>
  </div>
</template>

<style lang="scss">
.banner {
  width: 100%;
  min-height: 400px;
  background-size: cover;
  background-position: center 47%;
  position: relative;
  // border-radius: 16px;
  // filter: brightness(1.25) blur(2px);
  &__slogan {
    position: absolute;
    top: 7px;
    left: 50%;
    transform: translateX(-50%);
    font-family: Jost, sans-serif;
    font-size: 2rem;
    font-weight: 600;
    // color: rgb(var(--v-theme-secondary));
    color: white;
    text-align: center;
    z-index: 100;
    width: 100%;
    // max-width: 600px;
    padding: 0 20px;
    text-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    backdrop-filter: blur(2px) brightness(1.25);
    background: rgba(255, 255, 255, 0.2); /* нужна прозрачность, чтобы фон был виден */
  }
  &__card {
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s ease;
    z-index: 100;
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
