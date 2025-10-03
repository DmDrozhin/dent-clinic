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
  <div v-if="mainOptions.address" class="address">
    <v-img class="address__icon" :src="store.userIconsMap['meta-geo-white.svg']" max-width="24" />
    <div class="address__text" v-html="mainOptions.address"></div>
  </div>
</template>

<style lang="scss" scoped>
.address {
  display: flex;
  align-items: center;
  gap: 16px;
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
    left: -10px;
    top: 4px;
    bottom: 4px;
    width: 0.5px;
    background-color: $white;
  }
}
</style>
<style lang="scss"></style>
