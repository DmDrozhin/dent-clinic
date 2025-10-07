<script setup lang="ts">
import { computed } from 'vue';
import { useMaineStore } from '@/stores/main.store.ts';
import { createAssetMap } from '@/utils/assets.ts';

const store = useMaineStore();

interface Props {
  options?: Record<string, unknown>;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});

const pictures = import.meta.glob<{ default: string }>('@/assets/images/*', {
  eager: true,
});
const picturesMap = createAssetMap(pictures);

const defaultOptions: Record<string, unknown> = {};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mainOptions = computed(() => ({
  ...props.options,
  ...defaultOptions,
}));
</script>

<template>
  <div v-if="store.currentSlider?.title" class="section-header">
    <div class="section-header__icon">
      <v-img :src="store.userIconsMap['smile-tooth.svg']" alt="smile-tooth" />
    </div>
    <div class="section-header__wrapper">
      <h2 class="section-header__title">
        Дент-Лайф - це простір сучасної стоматології, де турбота про пацієнта поєднується з
        новітніми технологіями.
      </h2>
      <h3 class="section-header__sub-title">
        Ми працюємо, щоб кожен візит до стоматолога був комфортним, безболісним і результативним.
      </h3>
    </div>
  </div>
  <div class="section about">
    <div class="section__left-side">
      <div style="display: block; min-height: 400px; aspect-ratio: 13/9; margin-right: auto">
        <v-img
          class="section__image"
          v-if="picturesMap['patient.jpg']"
          :src="picturesMap['patient.jpg']"
          alt="about-dent-life"
          cover
        />
      </div>
    </div>
    <div class="section__right-side">
      <div class="list">
        <div class="list__item" v-for="(item, index) in store.currentAbout || []" :key="index">
          <div class="list__item-wrapper">
            <v-img
              v-if="item.image_url || store.userIconsMap['reliable-team.svg']"
              class="list__item-image"
              :src="item.image_url || store.userIconsMap['reliable-team.svg'] || ''"
              :width="item.image_size || 64"
              alt="reliable-team"
            />
            <h4 class="list__item-title">{{ item.title }}</h4>
            <v-img
              class="list__item-icon"
              :src="store.userIconsMap['check-green.svg']"
              alt="check-icon"
            />
          </div>
          <v-divider v-if="index < (store.currentAbout?.length || 0) - 1" class="my-3" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/settings.scss';

.section {
  min-height: 400px;
  display: flex;
  flex-wrap: wrap;
  gap: 64px 24px;
  &__image {
    position: relative;
    display: block;
    height: 100%;
  }
  &__image::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba($white, 0.2);
  }
  &__left-side {
  }
  &__right-side {
    // padding: 0 24px;
    flex: 1;
  }
}
.section-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 24px;
  @include settings.respond-down(sm) {
    padding: 24px 12px 32px 12px;
  }
  &__icon {
    padding: 8px;
    border-radius: 8px;
    border: 2px solid rgba($dent-icon, 0.5);
    min-width: 64px;
    height: 64px;
    // box-shadow: 0 8px 30px 3px #09c7c772;
    background-color: #fff;
  }
  &__title {
    padding: 0 24px;
    color: $black-lighten1;
    // border-left: 3px solid rgba($secondary, 0.5);
    // text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
  }
  &__sub-title {
    padding: 0 24px;
    font-weight: 500;
    color: $black-lighten2;
  }
}
.list {
  height: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  // gap: 20px;
  border-radius: 16px 16px 0 0;
  background: $primary-lighten6;
  padding: 24px;
  @include settings.respond-down(lg) {
    margin-right: 24px;
    margin-left: auto;
  }
  @include settings.respond-down(sm) {
    border-radius: 0;
    margin: 0;
  }
  &__item {
  }
  &__item-wrapper {
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
  }
  &__item-image {
    width: 100%;
    flex-shrink: 0;
    max-width: 64px;
  }
  &__item-title {
    text-transform: uppercase;
  }
  &__item-icon {
    flex-shrink: 0;
    width: 100%;
    max-width: 32px;
    margin-left: auto;
    align-self: baseline;
  }
}
</style>

<style lang="scss"></style>
