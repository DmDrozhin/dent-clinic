<script setup lang="ts">
import { computed } from 'vue';
import DentLifeCard from '@/components/DentLifeCard.vue';
import { useMaineStore } from '@/stores/main.store.ts';
const store = useMaineStore();

interface Props {
  options?: Record<string, unknown>;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});

const defaultOptions: Record<string, unknown> = {};
const mainOptions = computed(() => ({
  ...props.options,
  ...defaultOptions,
  ...(store.currentCards || {}),
}));
</script>

<template>
  <v-row class="cards-wrapper" align="center" justify="center">
    <v-col
      cols="12"
      lg="4"
      md="6"
      xs="12"
      v-for="(card, idx) of Object.values(mainOptions)"
      :key="idx"
      class="d-flex"
      color="primary"
    >
      <DentLifeCard
        :options="
          card && typeof card === 'object' && !Array.isArray(card) && card !== null
            ? { ...(card as Record<string, unknown>) }
            : {}
        "
      />
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.cards-wrapper {
  // outline: 1px solid greenyellow;
}
</style>

<style lang="scss"></style>
