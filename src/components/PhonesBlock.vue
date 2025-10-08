<script setup lang="ts">
  import { computed } from 'vue';
  import { CONTACTS } from '@/data/Dent-Life';
  import { useMaineStore } from '@/stores/main.store.ts';
  import { formatPhone } from '@/utils/assets.ts';

  const store = useMaineStore();
  interface Props {
    options?: Record<string, unknown>;
  }

  const props = withDefaults(defineProps<Props>(), {
    options: () => ({})
  });

  const currentMeta = computed(() => store.currentMeta || {});

  const defaultOptions = {};
  const mainOptions = computed(() => ({
    ...defaultOptions,
    ...props.options,
    ...currentMeta.value,
    ...CONTACTS
  }));

  const formattedPhones = computed(() => ({
    phone1: formatPhone(mainOptions.value.phone_1),
    phone2: formatPhone(mainOptions.value.phone_2)
  }));
</script>

<template>
  <div
    v-if="mainOptions.phone_1 || mainOptions.phone_2"
    class="phones">
    <v-icon
      color="white"
      size="24">
      mdi-phone
    </v-icon>
    <div class="phones__numbers">
      <v-btn
        class="phones__button number-1"
        v-if="mainOptions.phone_1"
        :href="`tel:${mainOptions.phone_1}`"
        target="_self"
        rel="noopener"
        variant="text"
        color="white"
        size="large"
        density="compact"
        slim>
        {{ formattedPhones.phone1 }}
      </v-btn>
      <v-btn
        class="phones__button number-2"
        v-if="mainOptions.phone_2"
        :href="`tel:${mainOptions.phone_2}`"
        target="_self"
        rel="noopener"
        variant="text"
        color="white"
        size="large"
        density="compact"
        slim>
        {{ formattedPhones.phone2 }}
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .phones {
    display: flex;
    align-items: center;
    &__numbers {
      text-align: justify;
    }
  }
</style>
<style lang="scss"></style>
