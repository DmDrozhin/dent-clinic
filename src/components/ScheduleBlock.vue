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
  <div v-if="mainOptions.schedule" class="schedule">
    <v-img class="schedule__icon" :src="store.userIconsMap['meta-time-white.svg']" max-width="32" />
    <div class="schedule__text" v-html="mainOptions.schedule"></div>
  </div>
</template>

<style lang="scss" scoped>
.schedule {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  &__icon {
    width: 100%;
    flex-shrink: 0;
  }

  &__text {
    text-align: left;
    font-size: 0.75rem;
    position: relative;
    letter-spacing: 0.05rem;

  }
  &__text::before {
    content: '';
    position: absolute;
    display: block;
    left: -8px;
    top: 4px;
    bottom: 4px;
    width: 1px;
    background-color: $white;
  }
}
</style>
<style lang="scss"></style>
