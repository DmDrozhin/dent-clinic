<script setup lang="ts">
  import { computed } from 'vue';
  import DentLifeCard from '@/components/ServiceCard.vue';
  import { useMaineStore } from '@/stores/main.store.ts';
  const store = useMaineStore();

  interface Props {
    options?: Record<string, unknown>;
  }

  const props = withDefaults(defineProps<Props>(), {
    options: () => ({})
  });
  // interface Card {
  //   id: number;
  //   title: string;
  //   image: string;
  //   image_url?: string; // добавляем поле для пути к изображению
  //   image_size: number;
  //   details: { title: string }[];
  // }
  const defaultOptions: Record<string, unknown> = {};
  type MainOptions = Record<string, unknown> & { cards?: unknown[] };
  const mainOptions = computed<MainOptions>(() => ({
    ...props.options,
    ...defaultOptions,
    ...store.currentCards
  }));
</script>

<template>
  <div
    v-if="store.currentSlider?.title"
    class="section-header">
    <div class="section-header__icon">
      <v-img
        :src="store.userIconsMap['smile-tooth.svg']"
        alt="smile-tooth" />
    </div>
    <div class="section-header__wrapper">
      <h2 class="section-header__title">
        {{ store.currentCards?.title || 'Наші послуги' }}
      </h2>
      <!-- <h3 class="section-header__sub-title"></h3> -->
    </div>
  </div>
  <v-row
    v-if="(mainOptions.cards ?? []).length > 0"
    class="cards-wrapper"
    align="center"
    justify="center">
    <v-col
      cols="12"
      lg="4"
      md="6"
      xs="12"
      v-for="(card, idx) of mainOptions.cards || []"
      :key="idx"
      class="service-card-wrapper d-flex"
      color="primary">
      <DentLifeCard :options="{ ...(card as Record<string, unknown>) }" />
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
  @use '@/styles/settings.scss';
  // .cards-wrapper {
  // }
  .section-header {
    display: flex;
    align-items: flex-start;
    padding: 24px;
    background: rgba(0, 0, 0, 0.5);
    margin-bottom: 24px;
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
      color: $white;
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.8);
    }
    &__sub-title {
      padding: 0 24px;
      font-weight: 500;
      color: $black-lighten2;
    }
  }
</style>

<style lang="scss"></style>
