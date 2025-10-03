<script setup lang="ts">
import { computed } from 'vue';
import { CONTACTS } from '@/settings/Dent-Life.ts';
import { useMaineStore } from '@/stores/main.store.ts';
import { formatPhone } from '@/utils/assets.ts';

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

const formattedPhones = computed(() => ({
  viber: formatPhone(mainOptions.value.viber),
}));
</script>

<template>
  <div class="viber-block" v-if="mainOptions.viber">
    <v-img class="viber-block__icon" :src="store.userIconsMap['meta-viber-white.svg']" max-width="28" />
    <v-btn
      class="viber__button"
      :href="`viber://chat?number=${mainOptions.viber}`"
      target="_self"
      rel="noopener"
      component="a"
      variant="text"
      color="white"
      size="large"
      density="compact"
      slim
    >
      {{ formattedPhones.viber }}
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.viber-block {
  display: flex;
  align-items: center;
  &__icon {
    flex-shrink: 0;
    width: 100%;
  }
}
</style>
<style lang="scss"></style>
