<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import DentLifeLogo from '@/components/DentLifeLogo.vue';
import LangSwitcher from '@/components/LangSwitcher.vue';
import PhonesBlock from '@/components/PhonesBlock.vue';
import { useDisplay } from 'vuetify';

interface Props {
  options?: Record<string, unknown>;
}

const { smAndDown, xlAndUp, width } = useDisplay();
const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});
const xxs = computed(() => width.value < 400);
const defaultOptions: Record<string, unknown> = {};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mainOptions = computed(() => ({
  ...props.options,
  ...defaultOptions,
}));
const items = [
  {
    title: 'Foo',
    value: 'foo',
  },
  {
    title: 'Bar',
    value: 'bar',
  },
  {
    title: 'Fizz',
    value: 'fizz',
  },
  {
    title: 'Buzz',
    value: 'buzz',
  },
];
const menuButtons = [
  {
    title: 'меню 1',
    value: 'foo',
  },
  {
    title: 'меню 2',
    value: 'bar',
  },
  {
    title: 'меню 3',
    value: 'fizz',
  },
  {
    title: 'меню 4',
    value: 'buzz',
  },
];

const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});
</script>

<template>
  <v-app-bar class="app-bar" color="primary" dark>
    <v-container class="dl-container mx-auto" max-width="1280">
      <div class="header-block">
        <DentLifeLogo :options="{ mainHeader: true, maxWidth: 40, light: true, customClass: '' }" />
        <div class="d-flex align-center justify-between">
          <v-btn-toggle
            v-if="xlAndUp"
            :key="101"
            v-model="group"
            class="d-none d-md-flex"
            variant="text"
            density="comfortable"
            mandatory
            base-color="white"
          >
            <v-btn v-for="item in menuButtons" :key="item.value">
              {{ item.title }}
            </v-btn>
          </v-btn-toggle>

          <PhonesBlock v-if="!smAndDown" />
          <div class="d-flex align-center">
            <LangSwitcher v-if="!xxs" class="mr-3" />
            <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </div>
          <!-- <v-btn icon="mdi-dots-vertical" variant="text"></v-btn> -->
        </div>
      </div>
    </v-container>
  </v-app-bar>
  <v-navigation-drawer
    v-model="drawer"
    :location="$vuetify.display.mobile ? 'bottom' : 'left'"
    temporary
  >
    <v-list :items="items"></v-list>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.header-block {
  display: flex;
  justify-content: space-between;
  padding: 16px 0;
  align-items: center;
}
</style>

<style lang="scss"></style>
