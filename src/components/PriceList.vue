<script setup lang="ts">
  import { computed } from 'vue';
  import { useMaineStore } from '@/stores/main.store.ts';

  interface Props {
    options?: Record<string, unknown>;
  }
  const store = useMaineStore();

  const props = withDefaults(defineProps<Props>(), {
    options: () => ({})
  });
  const defaultOptions: Record<string, unknown> = {};

  const mainOptions = computed(() => ({
    ...props.options,
    ...defaultOptions,
    ...(store.currentPrices || {})
  }));
</script>

<template>
  <div class="section prices">
    <div v-if="mainOptions?.title" class="section-header">
      <div class="section-header__icon">
        <v-img :src="store.userIconsMap['save-money.svg']" alt="smile-tooth" />
      </div>
      <div class="section-header__wrapper">
        <h2 class="section-header__title">
          {{ mainOptions?.title || 'Наші послуги' }}
        </h2>
        <h3 class="section-header__sub-title">
          {{ mainOptions?.subtitle }}
        </h3>
      </div>
    </div>
    <v-expansion-panels multiple bg-color="white" class="prices-panels">
      <v-expansion-panel v-for="(category, index) in mainOptions.categories" :key="index">
        <v-expansion-panel-title class="prices-panels__title">
          <div class="prices-panels__icon-wrap">
            <v-img class="prices-panels__icon" :src="category.image_url" :max-width="category.image_size || 32" />
          </div>
          {{ category.title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="prices">
            <div class="prices__item" v-for="(service, i) in category.services" :key="i">
              <v-icon class="prices__item-icon" icon="mdi-circle-medium" />
              <div class="prices__item-text">{{ service.name }}</div>
              <div class="prices__item-price">{{ service.price }}</div>
            </div>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
    <!-- <v-treeview
        :items="
          PRICES_LIST.map((c) => ({
            id: c.title,
            name: c.title,
            children: c.services.map((s) => ({
              id: s.name,
              name: `${s.name} — ${s.price}`
            }))
          }))
        " /> -->
  </div>
</template>

<style lang="scss" scoped>
  @use '@/styles/settings.scss';

  // .prices-section {
  //   background-color: #fafafa;
  // }

  // .v-list-item {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  // }
  .section-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 24px;
    background: $primary-lighten5;
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
      background-color: #fff;
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
  .prices-panels {
    &__icon-wrap {
      min-width: 64px;
    }
    &__icon {
      margin: 0 auto;
    }
  }
  .prices {
    &__item {
      min-height: 36px;
      display: flex;
      gap: 8px;
      align-items: center;
      border-bottom: 1px solid rgba($black, 0.1);
      &:last-child {
        border-bottom: none;
      }
      &-icon {
        color: $dent-icon;
        margin-right: 16px;
        @include settings.respond-down(sm) {
          margin-right: 8px;
        }
      }
      &-text {
        flex: 1;
        font-size: 1rem;
      }
      &-price {
        font-family: jost, sans-serif;
        font-size: 1.2rem;
        font-weight: 500;
        color: $black-lighten1;
        text-align: right;
        @include settings.respond-down(sm) {
          font-size: 1rem;
        }
      }
    }
  }
</style>
<style lang="scss">
  @use '@/styles/settings.scss';

  .prices-panels {
    .v-expansion-panel-text {
      &__wrapper {
        @include settings.respond-down(sm) {
          padding: 8px 12px 16px;
        }
      }
    }
    .v-expansion-panel-title {
      padding: 16px 12px;
    }
  }
</style>
