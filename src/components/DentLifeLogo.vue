<script setup lang="ts">
import { computed } from 'vue';
import { useMaineStore } from '@/stores/main.store.ts';
import { getIconPath } from '@/utils/assets.ts';

const store = useMaineStore();

const props = withDefaults(
  defineProps<{
    options?: Record<string, unknown>;
  }>(),
  {
    options: () => ({}),
  },
);

const defaultOptions = {
  name: 'Дент-Лайф',
  maxWidth: 32,
  light: true,
  mainHeader: false,
  customClass: '',
  lightImage: getIconPath('logo-white.svg'),
  darkImage: getIconPath('logo-green.svg'),
};
const mainOptions = computed(() => ({
  ...defaultOptions,
  ...(store.currentMeta || {}),
  ...(props.options || {}),
}));
</script>

<template>
  <div
    class="dent-life-logo"
    :class="[mainOptions.customClass, { 'main-logo': mainOptions.mainHeader }]"
  >
    <v-img
      class="dent-life-logo__image"
      :src="mainOptions.light ? mainOptions.lightImage : mainOptions.darkImage"
      :max-width="mainOptions.maxWidth"
      :min-width="mainOptions.maxWidth"
      alt="logo"
    />
    <h1
      v-if="mainOptions.mainHeader"
      class="dent-life-logo__title main"
      :class="{ 'dl-light': mainOptions.light }"
    >
      {{ mainOptions.name }}
    </h1>
    <div v-else class="dent-life-logo__title" :class="{ 'dl-light': mainOptions.light }">
      {{ mainOptions.name }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/settings.scss';
.dent-life-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  &.compact {
    .dent-life-logo {
      &__title {
        font-size: 1rem;
      }
    }
  }
  &.main-logo {
    gap: 16px;
    @include settings.respond-down(sm) {
      gap: 12px;
      h1 {
        font-size: 1.8rem;
      }
    }
    @media screen and (max-width: 400px) {
      gap: 4px;
      h1 {
        font-size: 1.5rem;
      }
      .dent-life-logo {
        &__image {
          max-width: 32px !important;
          max-height: 32px !important;
        }
      }
      h1 {
        font-size: 1.5rem;
      }
    }
  }

  &.dl-center {
    justify-content: center;
  }
  // &__image {}
  &__title {
    color: $dent-life;
    font-size: 1.5rem;
    letter-spacing: 0.15rem;
    font-weight: 600;
    white-space: nowrap;
  }
  &__title.main {
    font-weight: 700;
    font-size: 2rem;
  }
  &__title.dl-light {
    color: $white;
  }
}
</style>

<style lang="scss"></style>
