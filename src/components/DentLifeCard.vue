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
  options: () => ({}),
});

const defaultOptions: Record<string, unknown> = {};
const mainOptions = computed(() => ({
  ...props.options,
  ...defaultOptions,
}));
</script>

<template>
  <!-- subtitle="prepend and append" -->
  <v-card
    class="mx-auto"
    :title="
      typeof mainOptions.title === 'string' ||
      typeof mainOptions.title === 'number' ||
      typeof mainOptions.title === 'boolean'
        ? mainOptions.title
        : undefined
    "
    hover
    min-width="300"
    max-width="360"
    min-height="250"
    width="100%"
    rounded="lg"
    color="white"
  >
    <template v-slot:prepend>
      <v-img
        :src="typeof mainOptions.image === 'string' ? mainOptions.image : undefined"
        :min-width="
          typeof mainOptions.image_size === 'string' || typeof mainOptions.image_size === 'number'
            ? mainOptions.image_size
            : 48
        "
      />
    </template>
    <template v-slot:append>
      <v-icon color="success" icon="mdi-check"></v-icon>
    </template>
    <v-card-text>
      <v-divider />
      <ul>
        <li v-for="(item, idx) in mainOptions.details" :key="idx">{{ item.title }}</li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<style lang="scss" scoped>
.block {
  outline: 1px solid greenyellow;

  min-height: 50px;
}
</style>

<style lang="scss"></style>
