<script setup lang="ts">
import { computed, watchEffect } from 'vue';
import PhonesBlock from '@/components/PhonesBlock.vue';
import ViberBlock from '@/components/ViberBlock.vue';
import ScheduleBlock from '@/components/ScheduleBlock.vue';
import AddressBlock from '@/components/AddressBlock.vue';
import EmailBlock from '@/components/EmailBlock.vue';
import DentLifeLogo from '@/components/DentLifeLogo.vue';
import LangSwitcher from '@/components/LangSwitcher.vue';

import { useDisplay } from 'vuetify';

interface Props {
  options?: Record<string, unknown>;
}

const props = withDefaults(defineProps<Props>(), {
  options: () => ({}),
});
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { xs, smAndDown, lgAndDown } = useDisplay();

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
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mainOptions = computed(() => {
  const options = props.options ?? {};
  return {
    ...defaultOptions,
    ...options,
    grid: {
      ...(options.grid ?? {}),
    },
  };
});
</script>

<template>
  <v-footer
    class="footer text-center d-flex flex-column ga-2 py-4"
    color="indigo-lighten-1"
    absolute
  >
    <v-container class="footer__container dl-container mx-auto" max-width="1280">
      <div class="footer__grid-row">
        <section class="footer__section left-block">
          <div class="d-flex align-center ga-3">
            <DentLifeLogo
              :options="{ mainHeader: false, maxWidth: 24, light: true, customClass: 'compact' }"
            />
            <LangSwitcher />
          </div>
          <v-divider v-if="smAndDown" color="white" class="mt-3" />
        </section>
        <section class="footer__section central-block">
          <ViberBlock class="mb-3" />
          <EmailBlock />
          <v-divider v-if="smAndDown" color="white" class="mt-3" />
        </section>
        <section class="footer__section right-block">
          <PhonesBlock class="mb-4" />
          <div class="footer__wrapper mb-5">
            <ScheduleBlock class="footer__schedule" />
            <AddressBlock class="footer__address" />
          </div>
          <div class="footer__socials-block d-flex ga-3">
            <v-btn
              v-for="icon in icons"
              :key="icon"
              :icon="icon"
              density="comfortable"
              variant="text"
            ></v-btn>
          </div>
          <v-divider v-if="smAndDown" color="white" class="mt-3" />
        </section>
      </div>

      <v-divider v-if="!smAndDown" color="white" class="mt-4 mb-10" />
      <div class="footer__text">
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
@use '@/styles/settings.scss';
.footer-section {
  width: 100%;
  min-height: 50px;
  outline: 1px solid rgba(89, 47, 255, 0.427);
  padding: 4px 8px;
  &__wrapper {
    align-items: flex-start;
    width: 100%;
    display: flex;
    gap: 8px;
  }
}
.footer {
  &__grid-row {
    display: grid;
    grid-template-columns: 4fr 4fr 5fr;
    grid-template-areas: 'left-block central-block right-block';
    column-gap: 12px;
    @include settings.respond-down(lg) {
      // outline: 1px solid greenyellow;
      grid-template-columns: 2fr 2fr;
      grid-template-areas:
        'left-block right-block'
        'central-block right-block';
      row-gap: 12px;
    }
    @include settings.respond-down(md) {
      // outline: 1px solid rgb(255, 47, 179);
      grid-template-columns: 1fr;
      grid-template-areas:
        'left-block'
        'central-block'
        'right-block';
      row-gap: 12px;
    }
  }
  &__section.right-block {
    grid-area: right-block;
  }
  &__section.central-block {
    grid-area: central-block;
  }
  &__section.left-block {
    grid-area: left-block;
  }
  &__wrapper {
    display: flex;
    align-items: flex-start;
  }
  &__address,
  &__schedule {
    flex: 1;
    min-width: 0;
  }

  &__text {
    padding: 24px 0;
    font-weight: normal;
    font-size: 0.85rem;
    opacity: 60%;
  }
}
</style>

<style lang="scss"></style>
