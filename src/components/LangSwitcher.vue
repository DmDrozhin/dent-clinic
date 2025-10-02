<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { useMaineStore } from '@/stores/main.store.ts';
const store = useMaineStore();
const iconsPath = computed(() => store.userIconsMap || {});

interface Props {
  options?: Record<string, unknown>;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});

const flagUA = ref(iconsPath.value['flag-ua.svg'] || 'https://flagcdn.com/ua.svg');
const flagEN = ref(iconsPath.value['flag-en.svg'] || 'https://flagcdn.com/gb.svg');
const flagRU = ref(iconsPath.value['flag-ru.svg'] || 'https://flagcdn.com/ru.svg');
const langButtons = [
  {
    title: 'UA',
    value: 'ua',
    image: flagUA.value,
  },
  {
    title: 'EN',
    value: 'en',
    image: flagEN.value,
  },
  {
    title: 'RU',
    value: 'ru',
    image: flagRU.value,
  },
];
const selected = ref<string>('ua');
const defaultOptions: Record<string, unknown> = {};

function select(item: string) {
  selected.value = item; // записываем выбранное значение
  // menu.value = false; // закрываем меню
}
const selectedItem = computed(() => {
  const found = langButtons.find((item) => item.value === selected.value);
  return found ? found : langButtons[0];
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mainOptions = computed(() => ({
  ...props.options,
  ...defaultOptions,
}));
watchEffect(() => {
  store.updateLanguage(selected.value);
});
</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn outlined color="white" v-bind="props" class="d-flex align-center">
        <v-img :src="selectedItem.image" width="20" class="me-2" />
        {{ selectedItem.title }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="(item, index) in langButtons"
        :key="index"
        :value="index"
        density="compact"
        @click="select(item.value)"
      >
        <v-list-item-title class="d-flex align-center">
          <v-img :src="item.image" width="20" class="me-2" />
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style lang="scss" scoped></style>
<style lang="scss"></style>
