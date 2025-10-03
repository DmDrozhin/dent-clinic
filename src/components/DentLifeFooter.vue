<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import PhonesBlock from '@/components/PhonesBlock.vue';
import ViberBlock from '@/components/ViberBlock.vue';
import ScheduleBlock from '@/components/ScheduleBlock.vue';
import AddressBlock from '@/components/AddressBlock.vue';
import EmailBlock from '@/components/EmailBlock.vue';
import { useDisplay } from 'vuetify';

interface Props {
  options?: Record<string, unknown>;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { smAndDown, xs } = useDisplay();

const icons = ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'];
const defaultOptions: { grid: Record<string, number | string> } = {
  grid: {
    cols: 12,
    lg: 4,
    md: 4,
    sm: 12,
    xs: 12,
  },
};

watchEffect(() => {
  console.log('smallEndDown', smAndDown.value);
});
const mainOptions = computed(() => {
  const options = props.options ?? {};
  return {
    ...defaultOptions,
    ...options,
    grid: {
      ...defaultOptions.grid,
      ...(options.grid ?? {}),
    },
  };
});
</script>

<template>
  <v-footer class="text-center d-flex flex-column ga-2 py-4" color="indigo-lighten-1" absolute>
    <v-container class="dl-container mx-auto" max-width="1280">
      <v-row class="mb-4" align="center" justify="center" dense>
        <v-col class="footer-section" color="primary" v-bind="mainOptions.grid">
          <div class="d-flex ga-3">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              :icon="icon"
              density="comfortable"
              variant="text"
            ></v-btn>
          </div>
          <v-spacer />
          <v-divider v-if="smAndDown" color="white" class="mt-3" />
        </v-col>
        <v-col class="footer-section" color="primary" v-bind="mainOptions.grid">
          <ViberBlock class="mb-3" />
          <EmailBlock />
          <v-divider v-if="smAndDown" color="white" class="mt-3" />
        </v-col>
        <v-col class="footer-section" color="primary" v-bind="mainOptions.grid">
          <PhonesBlock class="mb-4" />
          <div class="footer__wrapper">
            <ScheduleBlock class="footer__schedule" />
            <AddressBlock class="footer__address" />
          </div>
          <v-divider v-if="smAndDown" color="white" class="mt-3" />
        </v-col>
      </v-row>
      <v-divider v-if="!smAndDown" color="white" class="mt-4 mb-10" />
      <div class="text-caption font-weight-regular opacity-60">
        Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo
        interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed
        massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi
        vehicula lacinia malesuada.
      </div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }} — <strong>Vuetify</strong></div>
    </v-container>
  </v-footer>
</template>

<style lang="scss" scoped>
.footer-section {
  width: 100%;
  min-height: 50px;
  // outline: 1px solid rgba(89, 47, 255, 0.427);
  padding: 4px 8px;
  &__wrapper {
    align-items: flex-start;
    width: 100%;
    display: flex;
    gap: 8px;
  }
}
.footer {
  &__wrapper {
    display: flex;
    align-items: flex-start;
  }
  &__schedule {
    flex: 1;
  }
  &__address {
    flex: 1;
  }
}
</style>

<style lang="scss"></style>
