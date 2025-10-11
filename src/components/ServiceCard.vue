<script setup lang="ts">
  import { computed } from 'vue';

  interface CardDetail {
    title: string;
    [key: string]: unknown;
  }

  interface Props {
    options?: {
      title?: string | number | boolean;
      image?: string;
      details?: CardDetail[];
      [key: string]: unknown;
    };
  }

  const props = withDefaults(defineProps<Props>(), {
    options: () => ({})
  });

  const defaultOptions: Record<string, unknown> = {};
  const mainOptions = computed(() => ({
    ...props.options,
    ...defaultOptions
  }));
</script>

<template>
  <v-card
    class="service-card mx-auto"
    :title="
      typeof mainOptions.title === 'string' ||
      typeof mainOptions.title === 'number' ||
      typeof mainOptions.title === 'boolean'
        ? mainOptions.title
        : undefined
    "
    hover
    min-width="300"
    min-height="230"
    width="100%"
    rounded="lg"
    color="white">
    <template v-slot:prepend>
      <v-img
        class="service-card__icon mr-2"
        v-if="typeof mainOptions.image_url === 'string' && mainOptions.image_url"
        :src="typeof mainOptions.image_url === 'string' ? mainOptions.image_url : undefined"
        :min-width="
          typeof mainOptions.image_size === 'string' || typeof mainOptions.image_size === 'number'
            ? mainOptions.image_size
            : 48
        " />
    </template>
    <template v-slot:append>
      <v-icon color="success" icon="mdi-check"></v-icon>
    </template>
    <v-card-text class="service-card__text">
      <v-divider />
      <ul>
        <li v-for="(item, idx) in mainOptions.details" :key="idx">{{ item.title }}</li>
      </ul>
      <div class="service-card__image-wrapper">
        <v-img
          class="service-card__img"
          :src="typeof mainOptions.image_bg === 'string' ? mainOptions.image_bg : undefined" />
      </div>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
  .service-card {
    &__text {
      height: calc(100% - 68px);
      font-size: 0.9rem;
      position: relative;
      ul {
        position: relative;
        z-index: 1;
        padding-left: 1.2rem;
        li {
          margin-bottom: 0.4rem;
          list-style-type: disc;
        }
      }
    }
    &__image-wrapper {
      position: absolute;
      overflow: hidden;
      bottom: 0;
      right: 0;
      width: 150px;
      height: 150px;
      border-radius: 32px 0 0 0;
      z-index: 0;
    }
    &__img::before {
      content: "";
      position: absolute;
      inset: 0;
      background: rgba(255, 255, 255, 0.25);

    }
  }
</style>
<style lang="scss">
  .v-card-item {
    min-height: 76px;
  }
</style>
