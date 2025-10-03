<script setup lang="ts">
import { computed } from 'vue';
import { CONTACTS } from '@/settings/Dent-Life.ts';
import { useMaineStore } from '@/stores/main.store.ts';

const store = useMaineStore();
interface Props {
  options?: Record<string, unknown>;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});

const currentMeta = computed(() => store.currentMeta || {});

const defaultOptions = {};
const mainOptions = computed(() => ({
  ...defaultOptions,
  ...props.options,
  ...currentMeta.value,
  ...CONTACTS,
}));
</script>

<template>
  <div v-if="mainOptions.email" class="email">
    <v-img class="email__icon" :src="store.userIconsMap['meta-email-white.svg']" max-width="24" />
    <v-btn
      class="email__button"
      :href="`mailto:${mainOptions.email}`"
      target="_self"
      rel="noopener"
      component="a"
      variant="text"
      color="white"
      size="large"
      density="compact"
      slim
    >
      {{ mainOptions.email }}
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.email {
  display: flex;
  align-items: center;
  gap: 4px;
  &__icon {
    flex-shrink: 0;
    width: 100%;
  }
}
</style>
<style lang="scss"></style>
